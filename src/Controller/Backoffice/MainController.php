<?php

namespace App\Controller\Backoffice;

use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use App\Repository\UserRepository;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class MainController extends AbstractController
{
    /** Route de l index du backoffice*/
    #[Route('/backoffice', name: 'backoffice_index', methods: ['GET'])]
    public function backofficeIndex(OrderRepository $orderRepository, UserRepository $userRepository, ProductRepository $productRepository): Response
    {
        $datas = [];
        $datas['qtyOfWaitingOrders'] = count($orderRepository->findBy(['status' => 0], ["id" => "DESC"]));
        $datas['qtyOfValidatedOrders'] = count($orderRepository->findBy(['status' => 1], ["id" => "DESC"]));
        $datas['qtyOfPaidOrders'] = count($orderRepository->findBy(['status' => 2], ["id" => "DESC"]));              

        $listOfUsers = $userRepository->findAll();
        $datas['qtyOfCustomers'] = 0;
        foreach ($listOfUsers as $key => $value) {
            $roles = $value->getRoles();
            if ($roles[0] == 'ROLE_USER') {
                $datas['qtyOfCustomers'] += 1;
            }
        }

        $datas['qtyOfMeals'] = count($productRepository->findBy(['category' => 'Plats']));
        $datas['qtyOfBoxes'] = count($productRepository->findBy(['category' => 'Box']));
        $datas['qtyOfDesserts'] = count($productRepository->findBy(['category' => 'Desserts']));

        $dateTime = new DateTime();
        
        $toBeDeliveredSoonOrders = $orderRepository->findBy(['status' => [0, 1, 2]]);
        $todayOrders = [];

        foreach ($toBeDeliveredSoonOrders as $keySoonOrders => $valueSoonOrders) {
            $orderDeliveryDate = $valueSoonOrders->getDeliveryDate();
            
            if ($orderDeliveryDate->format('d') == $dateTime->format('d')) {
                $todayOrders[] = $valueSoonOrders;
            }
        }
        $datas['todayOrders'] = $todayOrders;
        // dd($datas['todayOrders']);

        return $this->render('backoffice/main/index.html.twig', 
        [
            'datas' => $datas,
        ]);
    }
}
