<?php

namespace App\Controller\Backoffice;

use App\Entity\Newsletter;
use App\Form\NewsletterType;
use App\Repository\NewsletterImagesRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use App\Repository\NewsletterRepository;
use DateTimeImmutable;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[Route('/backoffice/newsletter')]
class NewsletterController extends AbstractController
{
    #[Route('/', name: 'app_backoffice_newsletter_index', methods: ['GET'])]
    public function index(NewsletterRepository $newsletterRepository): Response
    {
        return $this->render('backoffice/newsletter/index.html.twig', [
            'newsletters' => $newsletterRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_backoffice_newsletter_new', methods: ['GET', 'POST'])]
    public function new(Request $request, NewsletterRepository $newsletterRepository, NewsletterImagesRepository $newsletterImagesRepository): Response
    {
        $newsletter = new Newsletter();
        $listOfImages = $newsletterImagesRepository->findAll();

        $form = $this->createForm(NewsletterType::class, $newsletter);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $newsletter->setCreatedAt(new DateTimeImmutable());
            $newsletter->setStatus(0);
            
            $newsletterRepository->add($newsletter, true);

            return $this->redirectToRoute('app_backoffice_newsletter_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/newsletter/new.html.twig', [
            'newsletter' => $newsletter,
            'listOfImages' => $listOfImages,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_newsletter_show', methods: ['GET'])]
    public function show(Newsletter $newsletter): Response
    {
        return $this->render('backoffice/newsletter/show.html.twig', [
            'newsletter' => $newsletter,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_backoffice_newsletter_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Newsletter $newsletter, NewsletterRepository $newsletterRepository): Response
    {
        $form = $this->createForm(NewsletterType::class, $newsletter);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $newsletterRepository->add($newsletter, true);

            return $this->redirectToRoute('app_backoffice_newsletter_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/newsletter/edit.html.twig', [
            'newsletter' => $newsletter,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_newsletter_delete', methods: ['POST'])]
    public function delete(Request $request, Newsletter $newsletter, NewsletterRepository $newsletterRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$newsletter->getId(), $request->request->get('_token'))) {
            $newsletterRepository->remove($newsletter, true);
        }

        return $this->redirectToRoute('app_backoffice_newsletter_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/validate', name: 'app_backoffice_newsletter_validate')]
    public function validateEmail(Newsletter $newsletter, NewsletterRepository $newsletterRepository, MailerInterface $mailer, Request $request)
    {
        $oldStatus = $newsletter->getStatus();
        // dd($newsletter);
        
        $context = 
        [
            'title' => $newsletter->getTitle(), 
            'message' => $newsletter->getMessage(),
        ];
        
        $email = (new TemplatedEmail())
        ->from(new Address($request->server->get('EMAIL')))
        ->to('taiyang78190@gmail.com')
        ->subject("Newsletter")
        ->htmlTemplate('email/newsletter.html.twig')
        ->context($context);
        
        if ($oldStatus == 0) {
            $newsletter->setStatus(1);
            $newsletterRepository->add($newsletter, true);
            $mailer->send($email);
        } 

        return $this->redirectToRoute('app_backoffice_newsletter_index');
    }
}
