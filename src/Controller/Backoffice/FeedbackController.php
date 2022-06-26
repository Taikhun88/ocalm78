<?php

namespace App\Controller\Backoffice;

use App\Entity\Feedback;
use App\Form\FeedbackType;
use App\Repository\FeedbackRepository;
use App\Repository\UserRepository;
use DateTimeImmutable;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[Route('/backoffice/feedback')]
class FeedbackController extends AbstractController
{
    #[Route('/', name: 'app_backoffice_feedback_index', methods: ['GET'])]
    public function index(FeedbackRepository $feedbackRepository): Response
    {
        return $this->render('backoffice/feedback/index.html.twig', [
            'feedback' => $feedbackRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_backoffice_feedback_new', methods: ['GET', 'POST'])]
    public function new(Request $request, FeedbackRepository $feedbackRepository, UserRepository $userRepository): Response
    {
        $feedback = new Feedback();
        $form = $this->createForm(FeedbackType::class, $feedback);
        $form->handleRequest($request);
        $listOfUsers = $userRepository->findAll();

        if ($form->isSubmitted() && $form->isValid()) {
            $feedback->setCreatedAt(new DateTimeImmutable());
            // set the user class in feedback
            $feedback->setUser($userRepository->find($request->request->get('user')));

            $feedbackRepository->add($feedback, true);

            return $this->redirectToRoute('app_backoffice_feedback_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/feedback/new.html.twig', [
            'feedback' => $feedback,
            'form' => $form,
            'listOfUsers' => $listOfUsers,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_feedback_show', methods: ['GET'])]
    public function show(Feedback $feedback): Response
    {
        return $this->render('backoffice/feedback/show.html.twig', [
            'feedback' => $feedback,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_backoffice_feedback_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Feedback $feedback, FeedbackRepository $feedbackRepository, UserRepository $userRepository): Response
    {
        $form = $this->createForm(FeedbackType::class, $feedback);
        $form->handleRequest($request);
        $listOfUsers = $userRepository->findAll();

        if ($form->isSubmitted() && $form->isValid()) {
            $feedbackRepository->add($feedback, true);

            return $this->redirectToRoute('app_backoffice_feedback_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('backoffice/feedback/edit.html.twig', [
            'feedback' => $feedback,
            'form' => $form,
            'listOfUsers'=> $listOfUsers,
        ]);
    }

    #[Route('/{id}', name: 'app_backoffice_feedback_delete', methods: ['POST'])]
    public function delete(Request $request, Feedback $feedback, FeedbackRepository $feedbackRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$feedback->getId(), $request->request->get('_token'))) {
            $feedbackRepository->remove($feedback, true);
        }

        return $this->redirectToRoute('app_backoffice_feedback_index', [], Response::HTTP_SEE_OTHER);
    }
}
