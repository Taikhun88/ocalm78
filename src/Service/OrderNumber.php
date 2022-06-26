<?php

namespace App\Service;

use App\Repository\OrderRepository;
use DateTimeImmutable;

class OrderNumber
{
    private $countOrderNumber;
    private $orderRepository;
    public function __construct(OrderRepository $orderRepository)
    {
        $this->countOrderNumber = count($orderRepository->findAll());
        $this->orderRepository = $orderRepository;
    }

    public function createOrderNumber() 
    {
        $orderNumber = "";
        if ($this->countOrderNumber == 0) {
            $date = new DateTimeImmutable();
            $year = $date->format('Y');
            $orderNumber = "#A000-" . $year;
        } else {
            $order = $this->orderRepository->findOneBy([], ['id' => 'DESC']); 
            $lastOrderNumber = $order->getOrderNumber();
            $lastOrderNumber = explode("-", $lastOrderNumber);
            $lastOrderNumber[0] ++;
            $orderNumber = $lastOrderNumber[0] . "-" . $lastOrderNumber[1];
        }

        return $orderNumber;
    }
}
