<?php

namespace App\Controller\Backoffice;

use App\Entity\AvatarCategory;
use App\Form\AvatarCategoryType;
use App\Repository\AvatarCategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[Route('/backoffice/avatar_category')]
class AvatarCategoryController extends AbstractController
{
    #[Route('/', name: 'app_backoffice_avatar_category_index', methods: ['GET'])]
    public function index(AvatarCategoryRepository $avatarCategoryRepository): Response
    {
        return $this->render('backoffice/avatar_category/index.html.twig', [
            'avatar_categories' => $avatarCategoryRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_backoffice_avatar_category_new', methods: ['GET', 'POST'])]
    public function new(Request $request, AvatarCategoryRepository $avatarCategoryRepository): Response
    {
        $avatarCategory = new AvatarCategory();
        $form = $this->createForm(AvatarCategoryType::class, $avatarCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $avatarCategoryRepository->add($avatarCategory, true);

            return $this->redirectToRoute('app_backoffice_avatar_category_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/avatar_category/new.html.twig', [
            'avatar_category' => $avatarCategory,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_avatar_category_show', methods: ['GET'])]
    public function show(AvatarCategory $avatarCategory): Response
    {
        return $this->render('backoffice/avatar_category/show.html.twig', [
            'avatar_category' => $avatarCategory,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_backoffice_avatar_category_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, AvatarCategory $avatarCategory, AvatarCategoryRepository $avatarCategoryRepository): Response
    {
        $form = $this->createForm(AvatarCategoryType::class, $avatarCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $avatarCategoryRepository->add($avatarCategory, true);

            return $this->redirectToRoute('app_backoffice_avatar_category_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/avatar_category/edit.html.twig', [
            'avatar_category' => $avatarCategory,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_avatar_category_delete', methods: ['POST'])]
    public function delete(Request $request, AvatarCategory $avatarCategory, AvatarCategoryRepository $avatarCategoryRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$avatarCategory->getId(), $request->request->get('_token'))) {
            $avatarCategoryRepository->remove($avatarCategory, true);
        }

        return $this->redirectToRoute('app_backoffice_avatar_category_index', [], Response::HTTP_SEE_OTHER);
    }
}
