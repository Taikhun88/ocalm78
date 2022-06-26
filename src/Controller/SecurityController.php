<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Security\LoginFormAuthenticator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class SecurityController extends AbstractController
{
    /** Route pour se connecter */
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils, Request $request, UserRepository $userRepository, TranslatorInterface $translator, UserAuthenticatorInterface $userAuthenticator, LoginFormAuthenticator $authenticator): Response
    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }
        $email = $request->request->get('email', '');
        $user = $userRepository->findOneBy(['email' =>  $email,]);

        if ($email != null) {
            if ($user != null) {
                if ($user->isVerified() == true) {
                    $password = $request->request->get('password', '');

                    if (password_verify($password, $user->getPassword())) {
                        $request->getSession()->set('_email', $email);
                        return $userAuthenticator->authenticateUser(
                            $user,
                            $authenticator,
                            $request
                        );
                    } else {
                        $message = $translator->trans('The password is invalid.');
                        $this->addFlash('danger', $message);
                    }
                } else {
                    $message = $translator->trans('Please Confirm your Email.');
                    $this->addFlash('danger', $message);
                }
            } else {
                $message = $translator->trans('No account with this email.');
                $this->addFlash('danger', $message);
            }
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /** Route pour se déconnecter */
    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
