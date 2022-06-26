<?php

namespace App\Service;

use App\Repository\AvatarCategoryRepository;
use App\Repository\AvatarRepository;

class CallAvatars
{
    private $avatarCategoryRepository;

    public function __construct(AvatarRepository $avatarRepository, AvatarCategoryRepository $avatarCategoryRepository)
    {
        $this->avatarRepository = $avatarRepository;
        $this->avatarCategoryRepository = $avatarCategoryRepository;
    }

    public function getAvatars()
    {
        $listOfAvatarsCategories = $this->avatarCategoryRepository->findAll();

        $listOfAvatars = [];
        foreach ($listOfAvatarsCategories as $keyCategory => $valueCategory) {
            $listOfImg = $this->avatarRepository->findBy(['category' => $valueCategory->getId()]);
            foreach ($listOfImg as $keyImage => $valueImage) {
                $newListImg[] = $valueImage->getImagePath();
            }
            $listOfAvatars[] = [
                'name' => $valueCategory->getName(),
                'listImg' => $newListImg,
            ];

            $newListImg = [];
        }
        return $listOfAvatars;
    }

}