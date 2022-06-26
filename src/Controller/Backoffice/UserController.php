<?php

namespace App\Controller\Backoffice;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use App\Service\ImageUploader;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Contracts\Translation\TranslatorInterface;

#[IsGranted('ROLE_ADMIN')]
#[Route('/backoffice/user', name: 'backoffice_user_', requirements: ['id' => '\d+'])]
class UserController extends AbstractController
{
    /** Route qui liste les utilisateurs*/
    #[Route('/', name: 'index')]
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('backoffice/user/index.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    /** Route qui crée un utilisateur*/
    #[Route('/new', name: 'new')]
    public function new(Request $request, TranslatorInterface $translator, EntityManagerInterface $entityManager, ImageUploader $imageUploader, UserPasswordHasherInterface $passwordHasher): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // On effectue l'upload du fichier grâce au service ImageUploader
            if ($form->has('plainPassword')) {
                $user->setPassword(
                    $passwordHasher->hashPassword(
                        $user,
                        $form->get('plainPassword')->getData()
                    )
                );
            }
            $user->setCreatedAt(new DateTimeImmutable());

            $entityManager->persist($user);
            $entityManager->flush();
            $message = $translator->trans('User created.');
            $this->addFlash('success', $message);

            return $this->redirectToRoute('backoffice_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/user/new.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    /** Route qui affiche les details d un utilisateur*/
    #[Route('/show/{id}', name: 'show')]
    public function show(User $user): Response
    {
        return $this->render('backoffice/user/show.html.twig', [
            'user' => $user,
        ]);
    }

    /** Route pour modifier un utilisateur*/
    #[Route('/edit/{id}', name: 'edit')]
    public function edit(Request $request, TranslatorInterface $translator, User $user, ImageUploader $imageUploader, EntityManagerInterface $entityManager): Response
    {

        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        $message = $translator->trans('You cant modify other administrator, contact the Super Administrator !');
        $this->denyAccessUnlessGranted('USER_EDIT', $user, $message);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setUpdatedAt(new DateTimeImmutable());
            $entityManager->flush();
            $message = $translator->trans('User updated.');
            $this->addFlash('success', $message);

            return $this->redirectToRoute('backoffice_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/user/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    /** Route qui supprime un utilisateur*/
    #[Route('/delete/{id}', name: 'delete')]
    public function delete(Request $request, TranslatorInterface $translator, User $user, EntityManagerInterface $entityManager): Response
    {
        $message = $translator->trans('You cantdelete other administrator, contact the Super Administrator !');
        $this->denyAccessUnlessGranted('USER_DELETE', $user, $message);
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
            $entityManager->remove($user);
            $entityManager->flush();
            $message = $translator->trans('User updated.');
            $this->addFlash('danger', $message);
        }

        return $this->redirectToRoute('backoffice_user_index', [], Response::HTTP_SEE_OTHER);
    }
}
