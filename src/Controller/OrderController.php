<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\Product;
use App\Form\OrderCustomerType;
use App\Repository\OrderRepository;
use App\Repository\ProductCategoryRepository;
use App\Repository\ProductRepository;
use App\Service\OrderNumber;
use App\Service\Panier;
use DateTimeImmutable;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Routing\Annotation\Route;

class OrderController extends AbstractController
{
    #[Route('/order', name: 'app_order')]
    public function index(Request $request, Panier $panier): Response
    {
        $orderDetails = $panier->showOrderDetails();
       // Gets the array request with all its data, counts the numbers of lines. If there is data, then there will be more lines
        if (sizeof($request->request) >= 1) {
            $dataPost = $request->request;
            // These data are the qty and names put into session 
            foreach ($orderDetails as $key => $value) {
                // loop cart data updated in the order page
                foreach ($dataPost as $key2 => $value2) {
                    $id = "id_" . $value['id'];
                    $qty = "qty_" . $value['id'];

                    // Conditions check old / new data
                    if ($key2 == $qty) {
                        $oldValue = $value['qty'];
                        $newValue = $value2;
                        if ($oldValue != $newValue) {
                            $dataSession = $request->getSession()->get('Panier');
                            $dataSession[$value['id']] = $newValue;
                            $request->getSession()->set('Panier', $dataSession);
                        }
                    }
                }
            }
            return $this->redirectToRoute('app_order_details');
        }

        return $this->render('order/index.html.twig', [
            'listOrderProduct' => $orderDetails,
        ]);
    }

    #[Route('/order/details', name: 'app_order_details')]
    public function showDeliveryDetails(Request $request, OrderRepository $orderRepository, ProductRepository $productRepository, ProductCategoryRepository $productCategoryRepository, MailerInterface $mailer, OrderNumber $orderNumber, Panier $panier) {
        $order = new Order();
        $form = $this->createForm(OrderCustomerType::class, $order);
        $form->handleRequest($request);
        $dateOfForm = new DateTimeImmutable();
        $timeStampForm = $dateOfForm->getTimestamp();
        $oneDay = 24 * 60 * 60;
        $timeStampFinal = $timeStampForm + $oneDay;
        $finalDate = $dateOfForm->setTimestamp($timeStampFinal);
        $currentDate = new DateTimeImmutable();
        
        if ($form->isSubmitted() && $form->isValid()) {
            // We want the order number to be unique for the customer so we can easily use it later on when he gives it to us
            // Careful Order Number is not Order ID

            $orderDetails = $panier->showOrderDetails();
            // We add a few more input to the form on OrderPage 
            $numberReturned = $orderNumber->createOrderNumber();
            $order->setOrderNumber($numberReturned);
            $order->setCreatedAt(new DateTimeImmutable());
            $order->setStatus(0);

            $totalPrice = 0;
            $orderPoints = 0;
            foreach ($orderDetails as $key => $value) {
                unset($value['name']);
                unset($value['image']);
                // Update the variable with the unset 
                $orderDetails[$key] = $value;
                $totalPrice = $totalPrice + ($value['qty'] * $value['price']);
                $currentProduct = $productRepository->find($value['id']);
                $productPoints = $currentProduct->getPoints();
                $orderPoints = $orderPoints + ($productPoints * $value['qty']);
            }
            $newDateString = $request->request->get('delivery_date');
            $newDateDecode = json_decode($newDateString);
            $newDateToReturn = new DateTimeImmutable($newDateDecode->date . ".0");
            
            $order->setDeliveryDate($newDateToReturn);
            $order->setDetailsOrder($orderDetails);
            $order->setPoints($orderPoints);
            $order->setPaymentMode($request->request->get('payment-mode'));
            $order->setTotalPrice($totalPrice);

            // $order->setDeliveryDate();
            $orderRepository->add($order, true);

            // After the order is sent. We need to reset the cart of customer
            // We use the method cleanOrderDetails
            $this->cleanOrderDetails($request);
            // We display a clear message to confirm his order has been sent on the redirected page below
            $this->addFlash("success", 'Votre commande a bien été enregistré. Vous recevrez sous peu un email de confirmation.');

            // Confirmation mail sent to user 
            $context = [
                'text'          => "Une commande a été enregistrée. Merci de vérifier et confirmer celle-ci. CALM",
                'emailCustomer' => $order->getEmail(),
                // 'detailsOrder' => $order->getDetailsOrder(),
            ];

            $email = (new TemplatedEmail())
                ->from($order->getEmail())
                ->to(new Address($request->server->get('EMAIL')))
                ->subject("Commande en attente")
                ->htmlTemplate('email/waiting_for_confirm.html.twig')
                ->context($context);

            $mailer->send($email);

            return $this->redirectToRoute('app_index');            
        }
        return $this->render('order/details.html.twig', [
            'orderForm' => $form->createView(),
            'finalDate' => $finalDate,
            'currentDate' => $currentDate,
        ]);
    }

    #[Route('/order/delete/{id}', name: 'app_order_delete_item')]
    public function deleteItemOrder(Product $product, Request $request, Panier $panier): Response
    {        
        $sessionOrderCart = $panier->showOrderDetails();
        
        foreach ($sessionOrderCart as $key => $value) {
            if ($product->getId() == $value['id']) {
               $this->cleanOneItemInSession($value['id'], $request);
               return $this->redirectToRoute('app_order');
            }
        }
        
        return $this->render('order/delete_item.html.twig');
    }
    
    #[Route('/order/show/', name: 'app_order_show')]
    public function showOrders(Request $request, OrderRepository $orderRepository, ProductRepository $productRepository)
    {
        $_SESSION['_sf2_attributes']['_security.last_username'] = [];
        $listOfOrders = [
            'waiting0' => [],
            'waiting1' => [],
            'waiting2' => [],
            'finalized' => [],
            'cancelled' => [],
        ];

        $listOfOrdersHeaders = [
            'Commandes en attente de validation',
            'Commandes en attente de paiement',
            'Commandes en attente de livraison',
            'Commandes finalisées',
            'Commandes annulées',
        ];

        $products = $productRepository->findAll();
        $userEmail = $_SESSION['_sf2_attributes']['_security.last_username'];

        $listOfOrdersByEmail = $orderRepository->findByEmail($userEmail);
        foreach ($listOfOrdersByEmail as $key => $value) {
            if ($value->getStatus() == 0) {
                $listOfOrders['waiting0'][] = $value;
            }
            elseif ($value->getStatus() == 1) {
                $listOfOrders['waiting1'][] = $value;
            }
            elseif ($value->getStatus() == 2) {
                $listOfOrders['waiting2'][] = $value;
            }
            elseif ($value->getStatus() == 3) {
                $listOfOrders['finalized'][] = $value;
            } 
            else {
                $listOfOrders['cancelled'][] = $value;
            }
        }
        // dd($listOfOrders);

        return $this->render('order/show.html.twig', [
            'listOfOrders' => $listOfOrders,
            'listOfOrdersHeaders' => $listOfOrdersHeaders,
            'products'            => $products,
        ]);
    }

    #[Route('/{id}/cancel', name: 'app_order_cancel', methods: ['POST'])]
    public function cancel(Request $request, Order $order, OrderRepository $orderRepository): Response
    {
        if ($this->isCsrfTokenValid('cancel' . $order->getId(), $request->request->get('_token'))) {
            $order->setStatus(4);
            $orderRepository->add($order, true);
        }

        return $this->redirectToRoute('app_order_show', [], Response::HTTP_SEE_OTHER);
    }

    public function cleanOrderDetails($request)
    {
        $request->getSession()->set('Panier', []);
    }

    public function cleanOneItemInSession(int $id, $request) 
    {
        $panier = $request->getSession()->get('Panier');

        unset($panier[$id]);
        $request->getSession()->set('Panier', $panier);
    }
}

$commandeBurger = new OrderController();