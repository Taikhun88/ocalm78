<?php

namespace App\Controller\Backoffice;

use App\Entity\ProductCategory;
use App\Form\ProductCategoryType;
use App\Repository\ProductCategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[Route('/backoffice/product/category')]
class ProductCategoryController extends AbstractController
{
    #[Route('/', name: 'app_backoffice_product_category_index', methods: ['GET'])]
    public function index(ProductCategoryRepository $productCategoryRepository): Response
    {
        return $this->render('backoffice/product_category/index.html.twig', [
            'product_categories' => $productCategoryRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_backoffice_product_category_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ProductCategoryRepository $productCategoryRepository): Response
    {
        $productCategory = new ProductCategory();
        $form = $this->createForm(ProductCategoryType::class, $productCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $productCategoryRepository->add($productCategory, true);
            $this->addFlash('success', 'La catégorie de produit a bien été créée');

            return $this->redirectToRoute('app_backoffice_product_category_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/product_category/new.html.twig', [
            'product_category' => $productCategory,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_product_category_show', methods: ['GET'])]
    public function show(ProductCategory $productCategory): Response
    {
        return $this->render('backoffice/product_category/show.html.twig', [
            'product_category' => $productCategory,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_backoffice_product_category_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ProductCategory $productCategory, ProductCategoryRepository $productCategoryRepository): Response
    {
        $form = $this->createForm(ProductCategoryType::class, $productCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $productCategoryRepository->add($productCategory, true);
            $this->addFlash('success', 'La catégorie de produit a bien été modifiée');

            return $this->redirectToRoute('app_backoffice_product_category_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/product_category/edit.html.twig', [
            'product_category' => $productCategory,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_product_category_delete', methods: ['POST'])]
    public function delete(Request $request, ProductCategory $productCategory, ProductCategoryRepository $productCategoryRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$productCategory->getId(), $request->request->get('_token'))) {
            $productCategoryRepository->remove($productCategory, true);
            $this->addFlash('danger', 'La catégorie de produit a bien été supprimé');
        }

        return $this->redirectToRoute('app_backoffice_product_category_index', [], Response::HTTP_SEE_OTHER);
    }
}
