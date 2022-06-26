<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\ChangeEmailType;
use App\Form\UserProfileType;
use App\Repository\UserRepository;
use App\Service\ImageUploader;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class ProfilController extends AbstractController
{
    // TODO créer une route /profil/id avec une card qui regroupe les infos essentielles + action dirigeant vers edit profil/id/edit
    #[Route('/profil/{id}', name: 'profil_user', methods: 'GET')]
    public function profilUser(User $user): Response
    {
        $this->denyAccessUnlessGranted('USER_VIEW', $user, "Désolé mais ... non, tu ne verra pas le profil des autres comptes' !");

        return $this->renderForm('main/profiluser.html.twig', [
            'user' => $user,           
        ]);
    }

    /** Route du profil du l utilisateur */
    #[Route('/profil/{id}/edit', name: 'profil_user_edit', methods: ['GET', 'POST'])]
    public function profilUserEdit(Request $request, TranslatorInterface $translator, User $user, ImageUploader $imageUploader, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(UserProfileType::class, $user);
        $form->handleRequest($request);

        $this->denyAccessUnlessGranted('USER_VIEW', $user, "Désolé mais ... non, tu ne verra pas le profil des autres comptes' !");

        if ($form->isSubmitted() && $form->isValid()) {
            // On effectue l'upload du fichier grâce au service ImageUploader
            $user->setUpdatedAt(new DateTimeImmutable());

            // On recupere les roles 
            $actualRoles = $user->getRoles();
            // on supprime l entrée 2 qui est le "ROLE_USER" par defaut
            unset($actualRoles[2]);
            $user->setRoles($actualRoles);
            $entityManager->flush();
            $message = $translator->trans('Profil updated.');
            $this->addFlash('success', $message);
            return $this->redirectToRoute('app_index');
        }

        return $this->renderForm('main/profiledit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/profil/{id}/edit/email', name: 'profil_user_edit_email', methods: ['GET', 'POST'])]
    public function changeUserEmail(User $user, Request $request, UserRepository $userRepository)
    {
        $form = $this->createForm(ChangeEmailType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $plainPassword = $form->get('plainPassword')->getData();
            if (password_verify($plainPassword, $user->getPassword())) 
            {
                $userRepository->add($user, true);                
                $this->addFlash('success', 'Votre email a bien été modifié.');
                return $this->redirectToRoute('profil_user', ['id' =>  $user->getId()]);
            } else
            {
                $this->addFlash('danger', 'Mot de passe invalide.');
                return $this->redirectToRoute('profil_user_edit_email', ['id' =>  $user->getId()]);
            }
        }

        return $this->renderForm('main/changeemail.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    /** Route qui supprime son compte */
    #[Route('/profil/{id}/delete', name: 'profil_delete', methods: ['POST'])]
    public function delete(Request $request, User $user, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_logout');
    }
}
