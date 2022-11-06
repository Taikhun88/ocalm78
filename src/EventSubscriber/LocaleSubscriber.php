<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class LocaleSubscriber implements EventSubscriberInterface
{
    // Langue par défaut
    private $defaultLocale;

    public function __construct($defaultLocale = 'en')
    {
        $this->defaultLocale = $defaultLocale;
    }

    public function onKernelRequest(RequestEvent $event)
    {
        $request = $event->getRequest();
        $language = $request->server->get('HTTP_ACCEPT_LANGUAGE');
        $languepreferee = $language[0] . "" . $language[1];

        if (!$request->hasPreviousSession()) {
            $request->getSession()->set('_locale', $languepreferee);
        }

        // On vérifie si la langue est passée en paramètre de l'URL
        if ($this->defaultLocale = $request->query->get('_locale')) {
            $request->setLocale($this->defaultLocale);
        } else {
            // Sinon on utilise celle de la session
            $request->setLocale($request->getSession()->get('_locale', $this->defaultLocale));
        }
    }

    public static function getSubscribedEvents()
    {
        return [
            // On doit définir une priorité élevée
            KernelEvents::REQUEST => [['onKernelRequest', 20]],
        ];
    }
}
