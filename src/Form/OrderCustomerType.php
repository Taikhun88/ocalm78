<?php

namespace App\Form;

use App\Entity\City;
use App\Entity\Order;
use App\Repository\CityRepository;
use App\Repository\UserRepository;
use DateTime;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OrderCustomerType extends AbstractType
{
    private $userRepository;
    private $user;
    private $address;
    private $city;
    private $phone;
    private $email;
    private $cityRepo;

    public function __construct(UserRepository $userRepository, CityRepository $cityRepo)
    {
        $this->userRepository = $userRepository;
        $this->cityRepo = $cityRepo;
        $this->user = "";
        $this->address = "";
        $this->city = "";
        $this->phone = "";
        $this->email = "";
        if (isset($_SESSION['_sf2_attributes']['_security.last_username'])) {
            $this->user = $this->userRepository->findOneByEmail($_SESSION['_sf2_attributes']['_security.last_username']);
            $this->address = $this->user->getAddress();
            $this->city = $this->user->getCity();
            $this->phone = $this->user->getPhone();
            $this->email = $this->user->getEmail();
        };
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // ->add('delivery_date', DateTimeType::class, [
            //     'required' => true,
            //     'label' => 'Date de livraison',
            //     'widget' => 'single_text',
            // ])
            ->add('address', null, [
                'attr' => ['value' => $this->address]
            ])
            ->add(
                'city',
                null,
                [
                    'label' => 'Ville',
                    'attr' =>
                    [
                        'class' => 'select-payment-mode m-auto text-center',
                        'value' => ""
                    ],
                    'data' => $this->city ? $this->city : $this->cityRepo->find(1),
                ]
            )
            ->add('phone', null, [
                'attr' => ['value' => $this->phone]
            ])
            ->add('customer_request')
            ->add('email', null, [
                'attr' => ['value' => $this->email]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Order::class,
        ]);
    }
}
