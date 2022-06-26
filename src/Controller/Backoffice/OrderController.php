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
    public function new(Request $request, OrderRepository $orderRepository, OrderNumber $orderNumber, CityRepository $cityRepository): Response
    {
        $order = new Order();
        $listOfCities = $cityRepository->findAll();
        $form = $this->createForm(OrderType::class, $order);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $date = new DateTimeImmutable();
            $order->setCreatedAt($date);
            $order->setStatus(0);
            $numberReturned = $orderNumber->createOrderNumber();
            $order->setOrderNumber($numberReturned);
            $detailsOrder = $request->request->get('new_details_order');
            $detailsOrder = json_decode($detailsOrder);
            $order->setDetailsOrder($detailsOrder);    
            $order->setPaymentMode($request->request->get('payment-mode'));
            $city = $cityRepository->find($request->request->get('city'));
            $order->setCity($city);

            $orderRepository->add($order, true);

            return $this->redirectToRoute('app_backoffice_order_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/order/new.html.twig', [
            'order' => $order,
            'form' => $form,
            'listOfCities' => $listOfCities,
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
        $listOfProductsInOrder = $order->getDetailsOrder();

        if ($form->isSubmitted() && $form->isValid()) {
            $date = new DateTimeImmutable();
            $data = $form->getViewData();

            $newListOfProductsInOrder = [];
            // For each element of listOfProductsInOrder
            foreach ($listOfProductsInOrder as $key2 => $value2) {
                // We loop the request array 
                foreach ($request->request as $key => $value) {
                    // We check that the key within $request->request equals name of input
                    // $keyExplode = explode("_", $key);
                    if ($key == "product_" . $value2['id']) {
                        $newListOfProductsInOrder[$key2] =
                            [
                                'id' => $value,
                                'qty' => $request->request->get('qty_' . $value2['id'])
                            ];
                    }
                }
            }
            $order->setDetailsOrder($newListOfProductsInOrder);            
            $order->setUpdatedAt($date);

            $order->setPaymentMode($request->request->get('payment-mode'));
            $city = $cityRepository->find($request->request->get('city'));
            $order->setCity($city);

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
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_order_delete', methods: ['POST'])]
    public function delete(Request $request, Order $order, OrderRepository $orderRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$order->getId(), $request->request->get('_token'))) {
            $orderRepository->remove($order, true);
        }

        return $this->redirectToRoute('app_backoffice_order_index', [], Response::HTTP_SEE_OTHER);
    }
}
