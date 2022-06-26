<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\Product;
use App\Form\OrderType;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use DateTime;
use DateTimeImmutable;
use SebastianBergmann\CodeCoverage\Report\Html\Renderer;
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
    public function index(Request $request, ProductRepository $productRepository, OrderRepository $orderRepository): Response
    {
        $orderDetails = $this->showOrderDetails($request, $productRepository);
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
                            $dataSession = $request->getSession();
                            $dataSession->set($value['id'], $newValue);
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
    public function showDeliveryDetails(Request $request, OrderRepository $orderRepository, ProductRepository $productRepository, MailerInterface $mailer) {
        $order = new Order();
        $form = $this->createForm(OrderType::class, $order);
        $form->handleRequest($request);
        $dateOfForm = new DateTimeImmutable();
        $timeStampForm = $dateOfForm->getTimestamp();
        $oneDay = 24 * 60 * 60;
        $timeStampFinal = $timeStampForm + $oneDay;
        $finalDate = $dateOfForm->setTimestamp($timeStampFinal);
        // dd($timeStampForm, $timeStampFinal, $finalDate);
        
        if ($form->isSubmitted() && $form->isValid()) {
            // We want the order number to be unique for the customer so we can easily use it later on when he gives it to us
            // Careful Order Number is not Order ID
            $orderNumber = uniqid("#");
            $orderDetails = $this->showOrderDetails($request, $productRepository);
            // We add a few more input to the form on OrderPage 
            $order->setOrderNumber($orderNumber);
            $order->setCreatedAt(new DateTimeImmutable());
            $order->setStatus(0);
            foreach ($orderDetails as $key => $value) {
                unset($value['name']);
                unset($value['price']);
                unset($value['image']);
                // Update the variable with the unset 
                $orderDetails[$key] = $value;
                // dd($key, $value);
            }
            $order->setDetailsOrder($orderDetails);
            
            // $order->setDeliveryDate();
            // dd($request->request);
            $orderRepository->add($order, true);

            // After the order is sent. We need to reset the cart of customer
            // We use the method cleanOrderDetails
            $this->cleanOrderDetails($request);
            // We display a clear message to confirm his order has been sent on the redirected page below
            $this->addFlash("success", 'Votre commande a bien été envoyé. Vous recevrez sous peu un email de confirmation.');

            // Confirmation mail sent to user 
            $context = [
                'text'          => "Une commande a été enregistrée. Merci de vérifier et confirmer celle-ci. CALM",
                'emailCustomer' => $order->getEmail(),
            ];

            $email = (new TemplatedEmail())
                ->from($order->getEmail())
                ->to(new Address($request->server->get('EMAIL')))
                ->subject("Commande en attente")
                ->htmlTemplate('email/waiting_for_confirm.html.twig')
                ->context($context);

            $mailer->send($email);

            return $this->redirectToRoute('home');            
        }
        return $this->render('order/details.html.twig', [
            'orderForm' => $form->createView(),
            'finalDate' => $finalDate,
        ]);
    }

    #[Route('/order/delete/{id}', name: 'app_order_delete_item')]
    public function deleteItemOrder(int $id, Product $product, Request $request, ProductRepository $productRepository): Response
    {        
        $sessionOrderCart = $this->showOrderDetails($request, $productRepository);
        foreach ($sessionOrderCart as $key => $value) {
            if ($id == $value['id']) {
               $this->cleanOneItemInSession($id, $request);
               return $this->redirectToRoute('app_order');
            }
        }

        return $this->render('order/delete_item.html.twig');
    }

    #[Route('/order/show/', name: 'app_order_show')]
    public function showOrders(Request $request, OrderRepository $orderRepository, ProductRepository $productRepository)
    {
        $listOfWaitingOrders = [];
        $products = $productRepository->findAll();

        if (sizeof($request->request) >= 1 && $request->request->get('email')) {
            // $listOfWaitingOrders = $orderRepository->findAll($request->request->get('email'));
            $listOfOrdersByEmail = $orderRepository->findByEmail($request->request->get('email'));
            foreach ($listOfOrdersByEmail as $key => $value) {
                if ($value->getStatus() == 0) {
                    $listOfWaitingOrders[] = $value;
                }
            }
            if ( $listOfWaitingOrders == null) {
                $this->addFlash('danger', "Vous n'avez pas de commandes en attente de confirmation.");
            }
            // dd($listOfWaitingOrders);
        }
        return $this->render('order/show.html.twig', [
            'listOfWaitingOrders' => $listOfWaitingOrders,
            'products'            => $products,
        ]);
    }

    public function showOrderDetails($request, $productRepository)
    {
        $listOrderProduct = [];
        foreach ($request->getSession() as $key => $value) {
            // Checks that we call the right index in the array of the session
            // The session retrieves many data but the ones we need has index typed as integer
            if (is_int($key) == true) {
                // we check that user id stored in the session is the same as the one in the database
                // We call the id of vatiable key to gets data and compare both data
                $productDetails = $productRepository->find($key);
                //We create an array inside the array list
                $listOrderProduct[] =  [
                    'id' => $key,
                    'qty' => $value,
                    'name' => $productDetails->getName(),
                    'image' => $productDetails->getImage(),
                    'price' => $productDetails->getPrice()
                ];
            }
        }
        return $listOrderProduct;
    }

    public function cleanOrderDetails($request)
    {
        foreach ($request->getSession() as $key => $value) {
            if (is_int($key) == true) {
                $request->getSession()->remove($key);
            }
        }
        return;
    }

    public function cleanOneItemInSession(int $id, $request) 
    {
        $request->getSession()->remove($id);
    }
}
