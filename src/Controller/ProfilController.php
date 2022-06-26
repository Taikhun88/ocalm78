<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
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
    /** Route du profil du l utilisateur */
    #[Route('/profil/{id}', name: 'profil_user', methods: ['GET', 'POST'])]
    public function profilUser(Request $request, TranslatorInterface $translator, User $user, ImageUploader $imageUploader, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(UserType::class, $user);
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
            //TODO flashh
            $message = $translator->trans('Profil updated.');
            $this->addFlash('success', $message);
            return $this->redirectToRoute('app_index');
        }

        return $this->renderForm('main/profiluser.html.twig', [
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
            //TODO systeme de suppression différé
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_logout');
    }
}
