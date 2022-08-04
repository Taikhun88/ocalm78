<?php

namespace App\Service;

use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\RequestStack;

class Panier
{
    private $productRepository;
    private $request;

    public function __construct(ProductRepository  $productRepository, RequestStack $requestStack)
    {
        $this->productRepository = $productRepository;
        $this->request = $requestStack->getCurrentRequest();
    }

    public function showOrderDetails()
    {
        $request = $this->request;

        $listOrderProduct = [];
        if ($request->getSession()->get('Panier')) {
            foreach ($request->getSession()->get('Panier') as $key => $value) {
                // Checks that we call the right index in the array of the session
                // The session retrieves many data but the ones we need has index typed as integer
                if (is_int($key) == true) {
                    // we check that user id stored in the session is the same as the one in the database
                    // We call the id of vatiable key to gets data and compare both data
                    $productDetails = $this->productRepository->find($key);
                    //We create an array inside the array list
                    $listOrderProduct[] =  [
                        'id' => $key,
                        'qty' => $value,
                        'name' => $productDetails->getName(),
                        'image' => $productDetails->getImageUpfront(),
                        'price' => $productDetails->getPrice()
                    ];
                }
            }
        }
        return $listOrderProduct;
    }

    public function countProducts()
    {
        $request = $this->request;
        $panier = $request->getSession()->get('Panier');
        $totalItems = 0;
        if (count($panier) >= 1) {
            foreach ($panier as $key => $value) {
                $totalItems = $totalItems + $value;
            }
        }
        return $totalItems;
    }

    public function getPoints($id, $qty)
    {
        $points = $this->productRepository->find($id)->getPoints();
        $totalPoints = $points * $qty;
        return $totalPoints;
    }
}
