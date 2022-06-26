<?php

namespace App\Form;

use App\Entity\Product;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', null, [
                'label' => 'Nom'
            ])
            ->add('description')
            ->add('ingredients', null, [
                'label' => 'Ingrédients'
            ])
            ->add('allergens', null, [
                'label' => 'Allergènes'
            ])
            ->add('weight', null, [
                'label' => 'Poids'
            ])
            ->add('points')
            ->add('price', null, [
                'label' => 'Prix'
            ])
            ->add('promo', null, 
            [      
                'label' => 'Promo', 
                'attr' => [
                    'min' => 0,
                    'max' => 100,
                ],          
            ])
            ->add('image_upfront', FileType::class, [
                'label' => 'Sélectionnez une image',
                // unmapped means that this field is not associated to any entity property
                'mapped' => false,
                // make it optional so you don't have to re-upload the PDF file
                // every time you edit the Product details
                'required' => false,
                // unmapped fields can't define their validation using annotations
                // in the associated entity, so you can use the PHP constraint classes
                'constraints' => [
                    new File([
                        'maxSize' => '100000k',
                        'mimeTypes' => [
                            'image/png',
                            'image/jpeg'
                        ],
                        'mimeTypesMessage' => 'Merci de ne choisir que des fichiers .png et .jpeg',
                    ])
                ],
            ])
            ->add('image_top', FileType::class, [
                'label' => 'Sélectionnez votre deuxième image',
                // unmapped means that this field is not associated to any entity property
                'mapped' => false,
                // make it optional so you don't have to re-upload the PDF file
                // every time you edit the Product details
                'required' => false,
                // unmapped fields can't define their validation using annotations
                // in the associated entity, so you can use the PHP constraint classes
                'constraints' => [
                    new File([
                        'maxSize' => '100000k',
                        'mimeTypes' => [
                            'image/png',
                            'image/jpeg'
                        ],
                        'mimeTypesMessage' => 'Merci de ne choisir que des fichiers .png et .jpeg',
                    ])
                ],
            ])
            ->add('image_closeup', FileType::class, [
                'label' => 'Sélectionnez votre troisième image',
                // unmapped means that this field is not associated to any entity property
                'mapped' => false,
                // make it optional so you don't have to re-upload the PDF file
                // every time you edit the Product details
                'required' => false,
                // unmapped fields can't define their validation using annotations
                // in the associated entity, so you can use the PHP constraint classes
                'constraints' => [
                    new File([
                        'maxSize' => '100000k',
                        'mimeTypes' => [
                            'image/png',
                            'image/jpeg'
                        ],
                        'mimeTypesMessage' => 'Merci de ne choisir que des fichiers .png et .jpeg',
                    ])
                ],
            ])
            ->add('image_carousel', FileType::class, [
                'label' => 'Sélectionnez votre image pour le carousel',
                // unmapped means that this field is not associated to any entity property
                'mapped' => false,
                // make it optional so you don't have to re-upload the PDF file
                // every time you edit the Product details
                'required' => false,
                // unmapped fields can't define their validation using annotations
                // in the associated entity, so you can use the PHP constraint classes
                'constraints' => [
                    new File([
                        'maxSize' => '100000k',
                        'mimeTypes' => [
                            'image/png',
                            'image/jpeg'
                        ],
                        'mimeTypesMessage' => 'Merci de ne choisir que des fichiers .png et .jpeg',
                    ])
                ],
            ])
            ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
