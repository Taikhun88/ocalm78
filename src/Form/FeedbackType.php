<?php

namespace App\Form;

use App\Entity\Feedback;
use DateTime;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FeedbackType extends AbstractType
{
    private $creationDate;
    public function __construct()
    {   
        $dateTime = new DateTime();
        // $dateTime2 = new DateTime();
        // $timeStampForm = $dateTime->getTimestamp();
        // $oneDay = 24 * 60 * 60;
        // $timeStampFinal = $timeStampForm + $oneDay;
        // $finalDate = $dateTime->setTimestamp($timeStampFinal);  
        $this->creationDate = $dateTime;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('message')
            ->add('rating', null, 
            [      
                'label' => 'Note', 
                'attr' => [
                    'min' => 0,
                    'max' => 5,
                ],          
            ])
            ->add('status', null, 
            [      
                'label' => 'Validé',                
            ])
            // ->add('created_at', DateTimeType::class, [
            //     'required' => true,
            //     'label' => 'Date de création',
            //     'widget' => 'single_text',
            //     'data' => $this->creationDate,
            // ]) 
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Feedback::class,
        ]);
    }
}
