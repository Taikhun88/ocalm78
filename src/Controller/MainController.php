<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /** Route de l index */
    #[Route('/', name: 'app_index', methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('main/index.html.twig');
    }

    /** Route qui change la langue de la session */
    #[Route('/change_lang/{lang}', name: 'change_lang', methods: ['GET'])]
    public function changeLocale($lang, Request $request)
    {
        // On stocke la langue dans la session
        $request->getSession()->set('_locale', $lang);

        // On revient sur la page précédente
        return $this->redirect($request->headers->get('referer'));
    }
}
