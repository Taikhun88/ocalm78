<?php

namespace App\Controller\Backoffice;

use App\Entity\Product;
use App\Entity\ProductCategory;
use App\Form\ProductType;
use App\Repository\ProductCategoryRepository;
use App\Repository\ProductRepository;
use App\Service\ImageUploader;
use DateTimeImmutable;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[Route('/backoffice/product')]
class ProductController extends AbstractController
{
    #[Route('/', name: 'app_backoffice_product_index', methods: ['GET'])]
    public function index(ProductRepository $productRepository): Response
    {
        return $this->render('backoffice/product/index.html.twig', [
            'products' => $productRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_backoffice_product_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ProductRepository $productRepository, ProductCategoryRepository $productCategoryRepository, ImageUploader $imageUploader): Response
    {
        $product = new Product();
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        $listOfProductCategory = $productCategoryRepository->findAll();

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $request->request;
            $category = $productCategoryRepository->find($data->get('category'));

            $product->setCategory($category);
            $date = new DateTimeImmutable();
            $product->setCreatedAt($date);

            $newFilename = $imageUploader->upload($form, 'image_upfront', 'images/products'); 
            $newFilename2 = $imageUploader->upload($form, 'image_top', 'images/products'); 
            $newFilename3 = $imageUploader->upload($form, 'image_closeup', 'images/products');
            $newFilenameCarousel = $imageUploader->upload($form, 'image_carousel', 'images/products');

            if ($newFilename) {
                $product->setImageUpfront($newFilename);
            }
            if ($newFilename2) {
                $product->setImageTop($newFilename2);
            }
            if ($newFilename3) {
                $product->setImageCloseup($newFilename3);
            }
            if ($newFilenameCarousel) {
                $product->setImageCarousel($newFilenameCarousel);
            }

            $productRepository->add($product, true);
            $this->addFlash('success', 'Le produit a bien été créé');

            return $this->redirectToRoute('app_backoffice_product_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/product/new.html.twig', [
            'product' => $product,
            'form' => $form,
            'listOfProductCategory' => $listOfProductCategory,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_product_show', methods: ['GET'])]
    public function show(Product $product): Response
    {
        return $this->render('backoffice/product/show.html.twig', [
            'product' => $product,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_backoffice_product_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Product $product, ProductRepository $productRepository, ProductCategoryRepository $productCategoryRepository): Response
    {
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        $listOfProductCategory = $productCategoryRepository->findAll();

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $request->request;
            $category = $productCategoryRepository->find($data->get('category'));
            $product->setCategory($category);
            $date = new DateTimeImmutable();
            $product->setUpdatedAt($date);

            $productRepository->add($product, true);
            $this->addFlash('success', 'Le produit a bien été modifié');

            return $this->redirectToRoute('app_backoffice_product_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/product/edit.html.twig', [
            'product' => $product,
            'form' => $form,
            'listOfProductCategory' => $listOfProductCategory,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_product_delete', methods: ['POST'])]
    public function delete(Request $request, Product $product, ProductRepository $productRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$product->getId(), $request->request->get('_token'))) {
            $productRepository->remove($product, true);
            $this->addFlash('danger', 'Le produit a bien été supprimé');
        }

        return $this->redirectToRoute('app_backoffice_product_index', [], Response::HTTP_SEE_OTHER);
    }
}
