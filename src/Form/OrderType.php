<?php

namespace App\Form;

use App\Entity\Order;
use DateTime;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OrderType extends AbstractType
{
    private $deliveryDate;
    public function __construct()
    {   
        $dateTime = new DateTime();
        // $dateTime2 = new DateTime();
        // TODO refaire le delivery date avec calcul
        // $timeStampForm = $dateTime->getTimestamp();
        // $oneDay = 24 * 60 * 60;
        // $timeStampFinal = $timeStampForm + $oneDay;
        // $finalDate = $dateTime->setTimestamp($timeStampFinal);  
        $this->deliveryDate = $dateTime;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('delivery_date', DateTimeType::class, [
                'required' => true,
                'label' => 'Date de livraison',
                'widget' => 'single_text',
                'data' => $this->deliveryDate,
            ])    
            ->add('address', null, 
            [      
                'label' => 'Adresse',                
            ])
            ->add('phone', null, 
            [      
                'label' => 'Numéro de mobile',                
            ])
            // ->add('payment_mode')
            ->add('customer_request', null, 
            [      
                'label' => 'Demande particulière',                
            ])
            // ->add('status')
            ->add('email', null, 
            [      
                'label' => 'Email',                
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Order::class,
        ]);
    }
}
