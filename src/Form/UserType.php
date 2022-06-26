<?php

namespace App\Form;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class UserType extends AbstractType
{
    private $userRepo;

    public function __construct(UserRepository $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('email')
            ->add('pseudo')
            ;

        $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
            // ON récupère les données de l'utilisateur que l'on s'apprete
            // à créer ou à éditer
            $user = $event->getData();
            $form = $event->getForm();

            // Si on est dans le cas d'une création de compte utilisateur
            // Alors on ajoute le champs password
            if ($user->getId() === null) {
                $form->add('plainPassword', PasswordType::class, [
                    'label' => 'Mot de passe',
                    // On indique à Symfony que la propriété 'plainPassword'
                    // n'est pas liée (mapped) à l'entité User
                    'mapped' => false
                ]);
            }

            // on récupere le mail stocké en session pour retrouver quel admin demande l acces
            $admin = $this->userRepo->findOneByEmail($_SESSION['_sf2_attributes']['_security.last_username']);

            // si c est un ADMIN, il peut mettre et enlever le role MODO
            if ($user->getId() != null && $admin->getRoles()[0] === 'ROLE_ADMIN') {
                $form->add('roles', ChoiceType::class, [
                    'label' => 'Role',
                    'choices' => [
                        'Modo' => 'ROLE_MODO',
                        'Admin' => 'ROLE_ADMIN'
                    ],
                    'multiple'  => true,
                    'expanded' => true
                ]);
            }
            // si c est un SUPER ADMIN, il peut mettre et enlever le role MODO et ADMIN
            else if ($user->getId() != null && $admin->getRoles()[0] === 'ROLE_SUPER_ADMIN') {
                $form->add('roles', ChoiceType::class, [
                    'label' => 'Role',
                    'choices' => [
                        'Modo' => 'ROLE_MODO',
                        'Admin' => 'ROLE_ADMIN',
                        'Super Admin' => 'ROLE_SUPER_ADMIN'
                    ],
                    'multiple'  => true,
                    'expanded' => true
                ]);
            }
        });
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
