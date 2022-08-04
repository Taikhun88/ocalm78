<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    private $orderRepository;

    public function __construct(OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    #[Route('/product', name: 'product_list')]
    public function productsList(ProductRepository $productRepository, Request $request): Response
    {
        $products = [];
        $products['Box'] = $productRepository->findByCategory(3);
        $products['Plats'] = $productRepository->findByCategory(2);
        $products['Desserts'] = $productRepository->findByCategory(4);

        if ($request->getSession()->get('Panier') === null) {
            $request->getSession()->set('Panier', []);
        }

        if (sizeof($request->request) >= 1) {
            $panier = $request->getSession()->get('Panier');
            if (isset($panier[$request->request->get('id')])) {
                $panier[strval($request->request->get('id'))] = $panier[$request->request->get('id')] +  intval($request->request->get('qty'));
            }
            else
            {
                $panier[strval($request->request->get('id'))] = intval($request->request->get('qty'));
            }
            $request->getSession()->set('Panier', $panier);

            // dd($request->getSession()->get('Panier'));
            // $request->getSession()->get('Panier')->set(strval($request->request->get('id')), intval($request->request->get('qty')));
        }

        return $this->render('product/index.html.twig', [
            'products' => $products,
        ]);
    }

    #[Route('/product/{id}', name: 'product_details')]
    public function productShow(Product $product): Response
    {
        return $this->render('product/show.html.twig', [
            'product' => $product
        ]);
    }

    public function bestSellers()
    {
        $orderRepository = $this->orderRepository;

        // dd('TEST PLUS VENDUS');

    }
}
