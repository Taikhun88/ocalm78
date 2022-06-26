<?php

namespace App\Form;

use App\Entity\City;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('zip_code', null, 
            [      
                'label' => 'Code postal', 
                'attr' => [
                    'min' => 78000,
                    'max' => 78999,
                ],          
            ])   
            ->add('city_name', null, 
            [      
                'label' => 'Nom',                
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => City::class,
        ]);
    }
}
