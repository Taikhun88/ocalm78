<?php

namespace App\Controller\Backoffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

#[IsGranted('ROLE_ADMIN')]
class MainController extends AbstractController
{
    /** Route de l index du backoffice*/
    #[Route('/backoffice', name: 'backoffice_index', methods: ['GET'])]
    public function backofficeIndex(): Response
    {
        return $this->render('backoffice/main/index.html.twig');
    }
}
