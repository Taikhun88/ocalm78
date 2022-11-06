<?php

namespace App\Controller;

use App\Entity\Feedback;
use App\Repository\FeedbackRepository;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

class MainController extends AbstractController
{
    private $feedbackRepository;

    public function __construct(FeedbackRepository $feedbackRepository)
    {
        $this->feedbackRepository = $feedbackRepository;
    }

    /** Route de l index */
    #[Route('/', name: 'app_index', methods: ['GET'])]
    public function index(Request $request, ProductRepository $productRepository, ChartBuilderInterface $chartBuilder): Response
    {
        $request->getSession()->set('Panier', []);
        
        $recentProducts = $productRepository->findBy([], ["id" => "DESC"],  3);
        
        $randomFeedbacks = $this->getRandomFeedbacks();

        $chart = $chartBuilder->createChart(Chart::TYPE_LINE);

        $chart->setData([
            'labels' => ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            'datasets' => [
                [
                    'label' => 'My First dataset',
                    'backgroundColor' => 'rgb(255, 99, 132)',
                    'borderColor' => 'rgb(255, 99, 132)',
                    'data' => [0, 10, 5, 2, 20, 30, 45],
                ],
            ],
        ]);

        $chart->setOptions([
            'scales' => [
                'y' => [
                    'suggestedMin' => 0,
                    'suggestedMax' => 100,
                    'grid' => [
                        'color' => 'gray',
                    ],
                ],
            ],
        ]);

        // dd($request->getSession());

        return $this->render('main/index.html.twig', [
            'recentProducts' => $recentProducts,
            'randomFeedbacks' => $randomFeedbacks,
            'chart' => $chart,
        ]);
    }

    #[Route('/about', name: 'about')]
    public function aboutUs(): Response
    {
        return $this->render('footer/aboutus.html.twig');
    }

    #[Route('/contact', name: 'contact')]
    public function contactUs(): Response
    {
        return $this->render('footer/contactus.html.twig');
    }

    #[Route('/reseaux', name: 'social_network')]
    public function socialNetwork(): Response
    {
        return $this->render('footer/socialnetwork.html.twig');
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

    public function getRandomFeedbacks() {
        $listOfValidatedFeedbacks = $this->feedbackRepository->findBy(["status" => 1]);
        $randomFeedbacks = [];

        $minRandom = 0;
        $maxRandom = count($listOfValidatedFeedbacks) - 1;
        while (sizeof($randomFeedbacks) < 3) {
            $selectedFeedback = $listOfValidatedFeedbacks[rand($minRandom, $maxRandom)];
            if (!in_array($selectedFeedback, $randomFeedbacks)) {
                $randomFeedbacks[] = $selectedFeedback;
            }
        }
        return $randomFeedbacks;
    }

}
