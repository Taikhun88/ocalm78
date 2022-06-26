<?php

namespace App\DataFixtures;

use App\Entity\Avatar;
use App\Entity\AvatarCategory;
use App\Entity\City;
use App\Entity\Feedback;
use App\Entity\Newsletter;
use App\Entity\Product;
use App\Entity\ProductCategory;
use App\Entity\User;
use App\Repository\AvatarCategoryRepository;
use App\Repository\AvatarRepository;
use App\Repository\CityRepository;
use App\Repository\FeedbackRepository;
use App\Repository\UserRepository;
use App\Repository\NewsletterRepository;
use App\Repository\ProductCategoryRepository;
use App\Repository\ProductRepository;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    private $avatarCategoryRepository;
    private $newsletterRepository;
    private $userRepository;
    private $feedbackRepository;
    private $productCategoryRepository;
    private $productRepository;
    private $cityRepository;
    private $avatarRepository;

    public function __construct(AvatarCategoryRepository $avatarCategoryRepository, NewsletterRepository $newsletterRepository, UserRepository $userRepository, FeedbackRepository $feedbackRepository, ProductCategoryRepository $productCategoryRepository, ProductRepository $productRepository, CityRepository $cityRepository, AvatarRepository $avatarRepository)
    {
        $this->avatarCategoryRepository = $avatarCategoryRepository;
        $this->newsletterRepository = $newsletterRepository;
        $this->userRepository = $userRepository;
        $this->feedbackRepository = $feedbackRepository;
        $this->productCategoryRepository = $productCategoryRepository;
        $this->productRepository = $productRepository;
        $this->cityRepository = $cityRepository;
        $this->avatarRepository = $avatarRepository;
    }

    public function load(ObjectManager $manager): void
    {
        $categoriesName = ['Anime', 'Gravatar'];

        for ($i = 0; $i <= 1; $i++) {
            $avatarCategory = new AvatarCategory();
            $avatarCategory->setName($categoriesName[$i]);
            $this->avatarCategoryRepository->add($avatarCategory, true);
        }

        $newsletterFixtures = [
            [
                'title' => 'Stand fête de l\'aid el kebir',
                'message' => "Venez goûter à nos plats à un prix bradé lors de l'événement",
                'status' => 0,
            ],
            [
                'title' => 'Une box achetée = la seconde avec une remise de 40%',
                'message' => "Pour le lancement de nos box, offrez vous une seconde box d'assortiments à prix fou!",
                'status' => 0,
            ],
            [
                'title' => 'Faites valoir votre fidélité',
                'message' => "Cumulez des points à chaque commande et gagnez des desserts, des plats voire des box!",
                'status' => 1,
            ],
            [
                'title' => '1 menu acheté, 1 boisson offerte',
                'message' => "Pour tout menu acheté, gagnez une boisson au choix au format canette!",
                'status' => 1,
            ],
        ];

        for ($iNewsletter = 0; $iNewsletter <= 3; $iNewsletter++) {
            $currentNewsletter = new Newsletter();

            $currentNewsletter->setTitle($newsletterFixtures[$iNewsletter]['title']);
            $currentNewsletter->setMessage($newsletterFixtures[$iNewsletter]['message']);
            $currentNewsletter->setStatus($newsletterFixtures[$iNewsletter]['status']);
            $currentNewsletter->setCreatedAt(new DateTimeImmutable());

            $this->newsletterRepository->add($currentNewsletter, true);
        }


        for ($iUser = 0; $iUser <= 3; $iUser++) {
            $currentUser = new User();
            $currentUser->setEmail('user' . $iUser . '@gmail.com');
            $currentUser->setPseudo('user' . $iUser);
            $currentUser->setPassword('$13$YxYBpbq6ta3PGBE58gVb4u9m95hEdf6ZC6cLaTb7lTMRfO3UjcDsi');
            $currentUser->setCreatedAt(new DateTimeImmutable());
            $currentUser->setIsVerified(1);

            $this->userRepository->add($currentUser, true);

            $feedbackFixtures = [
                [
                    'message' => "Je comprends rien à votre concept, j'ai jamais vu une boite qui ouvre que 3 jours",
                    'rating' => 1,
                    'status' => false,
                ],
                [
                    'message' => "Trop bon vos nems poulet crevette, continuez comme ça je vais tout bouffer",
                    'rating' => 5,
                    'status' => true,
                ],
                [
                    'message' => "J'ai kiffé votre box, les assortiments sont bien variés et les mini burgers sont mes favoris, épicé et salé comme il faut quoi",
                    'rating' => 5,
                    'status' => true,
                ],
                [
                    'message' => "La nourriture était chaude et top, le livreur pareil",
                    'rating' => 4,
                    'status' => true,
                ],

            ];

            $currentFeedback = new Feedback();
            $currentFeedback->setUser($currentUser);
            $currentFeedback->setMessage($feedbackFixtures[$iUser]['message']);
            $currentFeedback->setRating($feedbackFixtures[$iUser]['rating']);
            $currentFeedback->setStatus($feedbackFixtures[$iUser]['status']);
            $currentFeedback->setCreatedAt(new DateTimeImmutable());

            $this->feedbackRepository->add($currentFeedback, true);
        }

        $categoriesProductFixtures = [
            [
                'name' => "Non-définie",
                'points' => 0,
            ],
            [
                'name' => "Plats",
                'points' => 250,
            ],
            [
                'name' => "Box",
                'points' => 300,
            ],
            [
                'name' => "Dessert",
                'points' => 125,
            ],
        ];

        for ($iProductCategory = 0; $iProductCategory <= 3; $iProductCategory++) {
            $currentProductCategory = new ProductCategory;

            $currentProductCategory->setName($categoriesProductFixtures[$iProductCategory]['name']);
            $currentProductCategory->setPoints($categoriesProductFixtures[$iProductCategory]['points']);

            $this->productCategoryRepository->add($currentProductCategory, true);
        }

        $productFixtures = [
            [
                'name' => 'Enchilada poulet',
                'description' => 'Une tortilla de blé garnie au poulet mariné à base de sauce tomate aux gouts riches et intenses des épices mexicaines.',
                'ingredients' => "Ail, poulet
                poivrons coupés surgelés,
                purée de poivrons, tomates concentrées,
                tortillas, cheddar tranches,
                épices mexicaines,poudre de gingembre, crème fraîche
                ",
                'allergens' => "N/A",
                'weight' => 250,
                'points' => 50,
                'price' => 7.50,
                'image_upfront' => "enchilada_front.jpg",
                'image_top' => "enchilada_top.jpg",
                'image_closeup' => "enchilada_close.jpg",
                'image_carousel' => "enchilada_carousel.jpg",
                'category' => 2,
            ],
            [
                'name' => 'Riz poulet curry
                ',
                'description' => 'Un plat d’Inde avec pour base le riz basmati servi avec une généreuse couche de sauce aux épices intenses parfumant le poulet.
                ',
                'ingredients' => "Oignons, poudre de gingembre, gousses d’ail, cuisses de poulet, crème légère semi épaisse, concentré de tomates, curcuma, coriandre, cumin, chilli, curry madras, poivre, poivrons.",
                'allergens' => "N/A",
                'weight' => 350,
                'points' => 50,
                'price' => 7.00,
                'image_upfront' => "riz_poulet_front.jpg",
                'image_top' => "riz_poulet_top.jpg",
                'image_closeup' => "riz_poulet_close.jpg",
                'image_carousel' => "riz_poulet_carousel.jpg",
                'category' => 2,
            ],
            [
                'name' => 'Tiramisu speculoos',
                'description' => 'Le fameux dessert italien à base de mascarpone bien ferme et goût tendre et parfumé du speculoos le tout sans alcool.',
                'ingredients' => "Mascarpone, oeufs, spéculoos, poudre chocolat.",
                'allergens' => "N/A",
                'weight' => 200,
                'points' => 25,
                'price' => 3.50,
                'image_upfront' => "tiramisu_front.jpg",
                'image_top' => "tiramisu_top.jpg",
                'image_closeup' => "tiramisu_close.jpg",
                'image_carousel' => "tiramisu_carousel.jpg",
                'category' => 4,
            ],
        ];

        for ($iProducts = 0; $iProducts <= 2; $iProducts++) {
            $currentProduct = new Product();

            $currentProduct->setName($productFixtures[$iProducts]['name']);
            $currentProduct->setDescription($productFixtures[$iProducts]['description']);
            $currentProduct->setIngredients($productFixtures[$iProducts]['ingredients']);
            $currentProduct->setAllergens($productFixtures[$iProducts]['allergens']);
            $currentProduct->setWeight($productFixtures[$iProducts]['weight']);
            $currentProduct->setPoints($productFixtures[$iProducts]['points']);
            $currentProduct->setPrice($productFixtures[$iProducts]['price']);
            $currentProduct->setImageUpfront($productFixtures[$iProducts]['image_upfront']);
            $currentProduct->setImageTop($productFixtures[$iProducts]['image_top']);
            $currentProduct->setImageCloseup($productFixtures[$iProducts]['image_closeup']);
            $currentProduct->setImageCarousel($productFixtures[$iProducts]['image_carousel']);
            $currentProduct->setPromo(0);

            $productCategoryRepository = $this->productCategoryRepository;
            $category = $productCategoryRepository->find($iProducts + 1);
            $currentProduct->setCategory($category);
            $currentProduct->setCreatedAt(new DateTimeImmutable());

            $this->productRepository->add($currentProduct, true);
        }

        $cityFixtures = [
            [
                'zip_code' => '78190',
                'city_name' => 'TRAPPES',
            ],
            [
                'zip_code' => '78320',
                'city_name' => 'LA VERRIERE',
            ],
            [
                'zip_code' => '78990',
                'city_name' => 'ELANCOURT',
            ],
            [
                'zip_code' => '78310',
                'city_name' => 'MAUREPAS',
            ],
            [
                'zip_code' => '78180',
                'city_name' => 'MONTIGNY-LE-BRETONNEUX',
            ],
        ];

        for ($iCities = 0; $iCities <= 3; $iCities++) {
            $currentCity = new City();

            $currentCity->setZipCode($cityFixtures[$iCities]['zip_code']);
            $currentCity->setCityName($cityFixtures[$iCities]['city_name']);

            $this->cityRepository->add($currentCity, true);
        }

        $avatarFixtures = [
            [
                'name' => "Marine",
                'image_path' => "marine-62d9d5bce534e.jpg",
            ],
            [
                'name' => "Violette",
                'image_path' => "violette-62d9d5836deff.jpg",
            ],
            [
                'name' => "Blond",
                'image_path' => "blond-62d9d5a9a2f2b.jpg",
            ],
            [
                'name' => "Brun",
                'image_path' => "brun-62d9d5987c073.jpg",
            ],
        ];

        for ($iAvatars = 0; $iAvatars <= 3; $iAvatars++) {
            $currentAvatar = new Avatar();
            $categoryAnime = $this->avatarCategoryRepository->find(1);

            $currentAvatar->setName($avatarFixtures[$iAvatars]['name']);
            $currentAvatar->setImagePath($avatarFixtures[$iAvatars]['image_path']);
            $currentAvatar->setCategory($categoryAnime);

            $this->avatarRepository->add($currentAvatar, true);
        }
    }
}
