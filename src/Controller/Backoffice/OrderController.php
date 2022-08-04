<?php

namespace App\Controller\Backoffice;

use App\Entity\Order;
use App\Form\OrderType;
use App\Repository\CityRepository;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use App\Service\OrderNumber;
use DateTimeImmutable;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

#[IsGranted('ROLE_ADMIN')]
#[Route('/backoffice/order')]
class OrderController extends AbstractController
{
    #[Route('/', name: 'app_backoffice_order_index', methods: ['GET'])]
    public function index(OrderRepository $orderRepository): Response
    {
        return $this->render('backoffice/order/index.html.twig', [
            'orders' => $orderRepository->findAll(),
        ]);
    }

    #[Route('/show/waiting', name: 'app_backoffice_order_show_waiting')]
    public function showWaitingOrders(OrderRepository $orderRepository): Response
    {
        $waitingOrders = $orderRepository->findBy(['status' => 0], ["id" => "DESC"]);
        // dd($waitingOrders);

        return $this->render('backoffice/order/waiting_orders.html.twig', [
            'orders' => $waitingOrders,
        ]);
    }

    #[Route('/new', name: 'app_backoffice_order_new', methods: ['GET', 'POST'])]
    public function new(Request $request, OrderRepository $orderRepository, OrderNumber $orderNumber, CityRepository $cityRepository, ProductRepository $productRepository): Response
    {
        $order = new Order();
        $listOfCities = $cityRepository->findAll();

        $listOfProducts = $productRepository->findAll();

        $listOfProductsInOrder = $order->getDetailsOrder();
        $listOfProductsId = [];
        foreach ($listOfProductsInOrder as $key => $value) {
            $listOfProductsId[] = $value['id'];
        }

        $listProductsNotInOrder = [];
        foreach ($listOfProducts as $key2 => $value2) {
            if (!in_array($value2->getId(), $listOfProductsId)) {
                $listProductsNotInOrder[$key2] = $value2;
            }
        }
        $currentDate = new DateTimeImmutable();

        $form = $this->createForm(OrderType::class, $order);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $date = new DateTimeImmutable();
            $order->setCreatedAt($date);
            $order->setStatus(0);
            $numberReturned = $orderNumber->createOrderNumber();
            $order->setOrderNumber($numberReturned);
            $order->setPaymentMode($request->request->get('payment-mode'));
            $city = $cityRepository->find($request->request->get('city'));
            $order->setCity($city);

            $listAdded = [];
            $newListOfProductsInOrder = [];
            // For each element of listOfProductsInOrder
            $totalPrice = 0;
            $totalPoints = 0;
            $totalProducts = 0;
            foreach ($request->request as $key => $value) {
                if (preg_match("/^product_[0-9]*$/", $key) && !in_array($key, $listAdded)) {
                    $newListOfProductsInOrder[] =
                        [
                            'id' => $value,
                            'qty' => $request->request->get('qty_' . $value),
                            'price' => $productRepository->find($value)->getPrice(),
                        ];

                    $product = $productRepository->find($value);
                    $totalPrice = $totalPrice + ($request->request->get('qty_' . $value) * $product->getPrice());
                    $totalPoints = $totalPoints + ($product->getPoints() * $request->request->get('qty_' . $value));
                    $totalProducts = $totalProducts + $request->request->get('qty_' . $value);
                    $listAdded[] = "product_" . $value;
                    // dd($newListOfProductsInOrder);
                }
            }
            if (empty($newListOfProductsInOrder)) {
                $this->addFlash('danger', 'Votre commande n\'a pas été créé. Merci de remplir la commande.');
                return $this->redirectToRoute('app_backoffice_order_index', [], Response::HTTP_SEE_OTHER);
            }
            $order->setDetailsOrder($newListOfProductsInOrder);
            $order->setTotalPrice($totalPrice);
            $order->setPoints($totalPoints);
            $newDateString = $request->request->get('delivery_date');
            // dd($newDateString);
            $newDateDecode = json_decode($newDateString);
            $newDateToReturn = new DateTimeImmutable($newDateDecode->date . ".0");
            $order->setDeliveryDate($newDateToReturn);

            $orderRepository->add($order, true);
            $this->addFlash('success', 'Votre commande a bien été enregistrée.');

            return $this->redirectToRoute('app_backoffice_order_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/order/new.html.twig', [
            'order' => $order,
            'form' => $form,
            'listOfCities' => $listOfCities,
            'listOfProducts' => $listOfProducts,
            'listProductsNotInOrder' => $listProductsNotInOrder,
            'currentDate' => $currentDate,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_order_show', methods: ['GET'])]
    public function show(Order $order, ProductRepository $productRepository): Response
    {
        $allProducts = $productRepository->findAll();
        $listOfProducts = [];
        foreach ($allProducts as $key => $value) {
            $listOfProducts[$value->getId()] = $value;
        }

        return $this->render('backoffice/order/show.html.twig', [
            'order' => $order,
            'listOfProducts' => $listOfProducts,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_backoffice_order_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Order $order, OrderRepository $orderRepository, ProductRepository $productRepository, CityRepository $cityRepository): Response
    {
        $listOfCities = $cityRepository->findAll();
        $form = $this->createForm(OrderType::class, $order);
        $form->handleRequest($request);

        $listOfProducts = $productRepository->findAll();
        $listAdded = [];

        $listOfProductsInOrder = $order->getDetailsOrder();
        $listOfProductsId = [];
        foreach ($listOfProductsInOrder as $key => $value) {
            $listOfProductsId[] = $value['id'];
        }
        $listProductsNotInOrder = [];
        foreach ($listOfProducts as $key2 => $value2) {
            if (!in_array($value2->getId(), $listOfProductsId)) {
                $listProductsNotInOrder[$key2] = $value2;
            }
        }
        $currentDate = $order->getDeliveryDate();
        
        if ($form->isSubmitted() && $form->isValid()) {
            $date = new DateTimeImmutable();
            $data = $form->getViewData();
            $newListOfProductsInOrder = [];
            // For each element of listOfProductsInOrder
            $totalPrice = 0;
            $totalPoints = 0;
            $totalProducts = 0;

            foreach ($listOfProductsInOrder as $key2 => $value2) {
                // We loop the request array 
                // dd($request->request);
                foreach ($request->request as $key => $value) {
                    // We check that the key within $request->request equals name of input
                    // $keyExplode = explode("_", $key);
                    if ($key == "product_" . $value2['id']) {
                        if ($request->request->get('qty_' . $value2['id']) < 0) {
                            $this->addFlash('danger', 'La quantité spécifiée n\'est pas valide');
                            $newListOfProductsInOrder[$key2] =
                                [
                                    'id' => $value,
                                    'qty' => $value2['qty'],
                                    'price' => $value2['price'],
                                ];
                            $totalPrice = $totalPrice + ($value2['qty'] * $value2['price']);
                            $product = $productRepository->find($value);
                            $totalPoints = $totalPoints + ($product->getPoints() * $value2['qty']);
                            $totalProducts = $totalProducts + $value2['qty'];
                            $listAdded[] = "product_" . $value2['id'];
                        } elseif ($request->request->get('qty_' . $value2['id']) >= 1) {
                            $newListOfProductsInOrder[$key2] =
                                [
                                    'id' => $value,
                                    'qty' => $request->request->get('qty_' . $value2['id']),
                                    'price' => $value2['price'],
                                ];
                            $totalPrice = $totalPrice + ($request->request->get('qty_' . $value2['id']) * $value2['price']);
                            $product = $productRepository->find($value);
                            $totalPoints = $totalPoints + ($product->getPoints() * $request->request->get('qty_' . $value2['id']));
                            $totalProducts = $totalProducts + $request->request->get('qty_' . $value2['id']);
                            $listAdded[] = "product_" . $value2['id'];
                        } else {
                            break;
                        }
                    }
                }
            }

            foreach ($request->request as $key => $value) {
                if (preg_match("/^product_[0-9]*$/", $key) && !in_array($key, $listAdded)) {
                    $newListOfProductsInOrder[] =
                        [
                            'id' => $value,
                            'qty' => $request->request->get('qty_' . $value),
                            'price' => $productRepository->find($value)->getPrice(),
                        ];

                    $product = $productRepository->find($value);
                    $totalPrice = $totalPrice + ($request->request->get('qty_' . $value) * $product->getPrice());
                    $totalPoints = $totalPoints + ($product->getPoints() * $request->request->get('qty_' . $value));
                    $totalProducts = $totalProducts + $request->request->get('qty_' . $value);
                    $listAdded[] = "product_" . $value;
                    // dd($newListOfProductsInOrder);
                }
            }

            if ($totalProducts == 0) {
                $order->setDetailsOrder($listOfProductsInOrder);
                $order->setStatus(4);
            } else {
                $order->setDetailsOrder($newListOfProductsInOrder);
            }
            $order->setTotalPrice($totalPrice);
            $order->setPoints($totalPoints);
            $order->setUpdatedAt($date);
            $order->setPaymentMode($request->request->get('payment-mode'));
            $city = $cityRepository->find($request->request->get('city'));
            $order->setCity($city);
            $newDateString = $request->request->get('delivery_date');
            $newDateDecode = json_decode($newDateString);
            $newDateToReturn = new DateTimeImmutable($newDateDecode->date . ".0");
            $order->setDeliveryDate($newDateToReturn);

            $orderRepository->add($order, true);
            $this->addFlash('success', 'Votre modification a bien été enregistré.');

            return $this->redirectToRoute('app_backoffice_order_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/order/edit.html.twig', [
            'order' => $order,
            'form' => $form,
            'listOfProducts' => $listOfProducts,
            'listOfProductsInOrder' => $listOfProductsInOrder,
            'listOfCities' => $listOfCities,
            'listOfProductsId' => $listOfProductsId,
            'listProductsNotInOrder' => $listProductsNotInOrder,
            'currentDate' => $currentDate,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_order_delete', methods: ['POST'])]
    public function delete(Request $request, Order $order, OrderRepository $orderRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $order->getId(), $request->request->get('_token'))) {
            $orderRepository->remove($order, true);
        }

        return $this->redirectToRoute('app_backoffice_order_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/cancel', name: 'app_backoffice_order_cancel', methods: ['POST'])]
    public function cancel(Request $request, Order $order, OrderRepository $orderRepository): Response
    {
        if ($this->isCsrfTokenValid('cancel' . $order->getId(), $request->request->get('_token'))) {
            $order->setStatus(4);
            $orderRepository->add($order, true);
        }
        $lastPage = $request->server->get('HTTP_REFERER');

        return $this->redirect($lastPage, Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/validate', name: 'app_backoffice_order_validate')]
    public function validateOrder(Order $order, OrderRepository $orderRepository, ProductRepository $productRepository, Request $request, MailerInterface $mailer): Response
    {
        $listNameProducts = [];

        foreach ($order->getDetailsOrder() as $key => $value) {
            $currentProduct = $productRepository->find($value['id']);
            $listNameProducts[] =  $currentProduct->getName();
        }
        if ($this->isCsrfTokenValid('validate' . $order->getId(), $request->request->get('_token'))) {
            $order->setStatus(1);
            $orderRepository->add($order, true);

            $email = (new TemplatedEmail())
                ->from(new Address($request->server->get('EMAIL')))
                ->to($order->getEmail())
                ->subject("Commande validée")
                ->htmlTemplate('email/validated_order.html.twig');

            $context = [
                'text' => "votre commande a été validée par notre équipe. Il ne vous reste plus qu'à procéder au paiement pour vous faire livrer à la date choisie.",
                'order' => $order,
                'listNameProducts' => $listNameProducts,
                'img' => "<img src='" . $_SERVER['DOMAIN_NAME'] . "\images\logo.png' alt=''>",
                'signature' => "Chaleureusement, l'équipe CALM",
            ];

            $email->context($context);

            $mailer->send($email);

            $this->addFlash('success', 'Votre validation de commande a bien été réalisé. Un email est envoyé au client.');
        } else {
            $this->addFlash('danger', 'Un problème est survenu, la validation ne peut aboutir.');
        }

        $lastPage = $request->server->get('HTTP_REFERER');

        return $this->redirect($lastPage, Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/pay', name: 'app_backoffice_order_pay')]
    public function payOrder(Request $request, Order $order, OrderRepository $orderRepository): Response
    {
        if ($this->isCsrfTokenValid('pay' . $order->getId(), $request->request->get('_token'))) {
            $order->setStatus(2);
            $this->addFlash('success', 'Le paiement du client a bien été reçu.');

            $orderRepository->add($order, true);
        }

        $lastPage = $request->server->get('HTTP_REFERER');

        return $this->redirect($lastPage, Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/delivered', name: 'app_backoffice_order_delivered')]
    public function deliveredOrder(Request $request, Order $order, OrderRepository $orderRepository): Response
    {
        if ($this->isCsrfTokenValid('delivered' . $order->getId(), $request->request->get('_token'))) {
            $order->setStatus(3);
            $orderRepository->add($order, true);

            $this->addFlash('success', 'La commande du client a bien été livré.');
        }

        $lastPage = $request->server->get('HTTP_REFERER');

        return $this->redirect($lastPage,  Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/cash', name: 'app_backoffice_order_cash')]
    public function cashOrder(Request $request, Order $order, OrderRepository $orderRepository): Response
    {
        if ($this->isCsrfTokenValid('cash' . $order->getId(), $request->request->get('_token'))) {
            $order->setStatus(3);
            $orderRepository->add($order, true);

            $this->addFlash('success', 'La commande du client a bien été livré et payé.');
        }

        $lastPage = $request->server->get('HTTP_REFERER');

        return $this->redirect($lastPage,  Response::HTTP_SEE_OTHER);
    }
}
