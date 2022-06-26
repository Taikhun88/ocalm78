<?php

namespace App\Service;

use Symfony\Component\Finder\Finder;

class ListPublicImages
{
    /**
     * Fonction qui retourne la liste des chemins relatifs des images du dossier public/images
     *
     * @param string $folder chemin depuis le dossier public/images ( ex : '/flags' )
     * @return array $listImages
     */
    public function getList($folder = "")
    {
        // on instancie notre liste
        $listImages = [];
        // on appel le service Finder
        $finder = new Finder();
        // on cherche tous les ficheier dans public/images avec les extentions png et jpeg
        $finder->files()->in('./images'.$folder)->name(['*.jpg','*.png','*.jpeg']);
        // si y as des résultats
        if ($finder->hasResults()) {
            // pour chaque résultat
            foreach ($finder as $file) {
                // on stock le chemin relatif du fichier dans notre liste
                $listImages[]= $file->getPathname();
            }
        }
        // on retourne la liste
        return $listImages;
    }
}