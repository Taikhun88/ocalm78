<?php

namespace App\Form;

use App\Entity\Newsletter;
use App\Service\ListPublicImages;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class NewsletterType extends AbstractType
{
    private $listPublicImages;

    public function __construct(ListPublicImages $listPublicImages)
    {
        $this->listPublicImages = $listPublicImages;
        // dd($this->listPublicImages->getList('/newsletter'));
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', null, 
            [
                'label' => 'Titre'
            ])
            ->add('message', null, 
            [
                'attr' => 
                [
                    'class' => 'textarea-auto addButtonHTML',
                    'data-images' => json_encode($this->listPublicImages->getList('/newsletter')),
                    'rows' => 6,                    
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Newsletter::class,
        ]);
    }
}
