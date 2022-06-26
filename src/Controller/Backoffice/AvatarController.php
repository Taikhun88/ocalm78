<?php

namespace App\Controller\Backoffice;

use App\Entity\Avatar;
use App\Entity\AvatarCategory;
use App\Form\AvatarType;
use App\Repository\AvatarCategoryRepository;
use App\Repository\AvatarRepository;
use App\Service\ImageUploader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[Route('/backoffice/avatar')]
class AvatarController extends AbstractController
{
    #[Route('/', name: 'app_backoffice_avatar_index', methods: ['GET'])]
    public function index(AvatarRepository $avatarRepository): Response
    {
        return $this->render('backoffice/avatar/index.html.twig', [
            'avatars' => $avatarRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_backoffice_avatar_new', methods: ['GET', 'POST'])]
    public function new(Request $request, AvatarRepository $avatarRepository, AvatarCategoryRepository $avatarCategoryRepository, ImageUploader $imageUploader): Response
    {
        $avatar = new Avatar();
        $listOfAvatarCategories = $avatarCategoryRepository->findAll();

        $form = $this->createForm(AvatarType::class, $avatar);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $avatarCtgSubmitted = $avatarCategoryRepository->find($request->request->get('avatar-ctg'));
            $avatar->setCategory($avatarCtgSubmitted);
            $newFilename = $imageUploader->upload($form, 'image_path', 'images/avatars'); 

            if ($newFilename) {
                $avatar->setImagePath($newFilename);
            }

            $avatarRepository->add($avatar, true);
            $this->addFlash('success', 'L\'avatar a bien été créé');

            return $this->redirectToRoute('app_backoffice_avatar_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/avatar/new.html.twig', [
            'avatar' => $avatar,
            'form' => $form,
            'listOfAvatarCategories' => $listOfAvatarCategories,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_avatar_show', methods: ['GET'])]
    public function show(Avatar $avatar): Response
    {
        return $this->render('backoffice/avatar/show.html.twig', [
            'avatar' => $avatar,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_backoffice_avatar_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Avatar $avatar, AvatarRepository $avatarRepository, AvatarCategoryRepository $avatarCategoryRepository, ImageUploader $imageUploader): Response
    {
        $form = $this->createForm(AvatarType::class, $avatar);
        $listOfAvatarCategories = $avatarCategoryRepository->findAll();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $avatarCtgSubmitted = $avatarCategoryRepository->find($request->request->get('avatar-ctg'));
            $avatar->setCategory($avatarCtgSubmitted);

            $newFilename = $imageUploader->upload($form, 'image_path', 'images/avatars'); 

            if ($newFilename) {
                $avatar->setImagePath($newFilename);
            }

            $avatarRepository->add($avatar, true);
            $this->addFlash('success', 'L\'avatar a bien été modifié');


            return $this->redirectToRoute('app_backoffice_avatar_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/avatar/edit.html.twig', [
            'avatar' => $avatar,
            'form' => $form,
            'listOfAvatarCategories' => $listOfAvatarCategories,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_avatar_delete', methods: ['POST'])]
    public function delete(Request $request, Avatar $avatar, AvatarRepository $avatarRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$avatar->getId(), $request->request->get('_token'))) {
            $avatarRepository->remove($avatar, true);
        }

        return $this->redirectToRoute('app_backoffice_avatar_index', [], Response::HTTP_SEE_OTHER);
    }
}
