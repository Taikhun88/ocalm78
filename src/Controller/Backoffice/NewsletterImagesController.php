<?php

namespace App\Controller\Backoffice;

use App\Entity\NewsletterImages;
use App\Form\NewsletterImagesType;
use App\Repository\NewsletterImagesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Service\ImageUploader;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[Route('/backoffice/newsletter_images')]
class NewsletterImagesController extends AbstractController
{
    #[Route('/', name: 'app_backoffice_newsletter_images_index', methods: ['GET'])]
    public function index(NewsletterImagesRepository $newsletterImagesRepository): Response
    {
        return $this->render('backoffice/newsletter_images/index.html.twig', [
            'newsletter_images' => $newsletterImagesRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_backoffice_newsletter_images_new', methods: ['GET', 'POST'])]
    public function new(Request $request, NewsletterImagesRepository $newsletterImagesRepository, ImageUploader $imageUploader): Response
    {
        $newsletterImage = new NewsletterImages();

        $form = $this->createForm(NewsletterImagesType::class, $newsletterImage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $newFilename = $imageUploader->upload($form, 'url', 'images/newsletter');

            $actual_link = "http://$_SERVER[HTTP_HOST]/images/newsletter/";

            $newFilename = $actual_link . $newFilename;

            if ($newFilename) {
                $newsletterImage->setUrl($newFilename);
            }

            $newsletterImagesRepository->add($newsletterImage, true);
            $this->addFlash('success', 'L\'image a bien été uploadé');

            return $this->redirectToRoute('app_backoffice_newsletter_images_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/newsletter_images/new.html.twig', [
            'newsletter_image' => $newsletterImage,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_newsletter_images_show', methods: ['GET'])]
    public function show(NewsletterImages $newsletterImage): Response
    {
        return $this->render('backoffice/newsletter_images/show.html.twig', [
            'newsletter_image' => $newsletterImage,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_backoffice_newsletter_images_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, NewsletterImages $newsletterImage, NewsletterImagesRepository $newsletterImagesRepository, ImageUploader $imageUploader): Response
    {
        $form = $this->createForm(NewsletterImagesType::class, $newsletterImage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $newFilename = $imageUploader->upload($form, 'url', 'images/newsletter');

            $actual_link = "http://$_SERVER[HTTP_HOST]/images/newsletter/";

            $newFilename = $actual_link . $newFilename;

            if ($newFilename) {
                $newsletterImage->setUrl($newFilename);
            }

            $this->addFlash('success', 'L\'image a bien été modifié');

            $newsletterImagesRepository->add($newsletterImage, true);

            return $this->redirectToRoute('app_backoffice_newsletter_images_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/newsletter_images/edit.html.twig', [
            'newsletter_image' => $newsletterImage,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_newsletter_images_delete', methods: ['POST'])]
    public function delete(Request $request, NewsletterImages $newsletterImage, NewsletterImagesRepository $newsletterImagesRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $newsletterImage->getId(), $request->request->get('_token'))) {
            $newsletterImagesRepository->remove($newsletterImage, true);
        }

        return $this->redirectToRoute('app_backoffice_newsletter_images_index', [], Response::HTTP_SEE_OTHER);
    }
}
