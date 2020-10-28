<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(path="/api")
 */
class SecurityController extends AbstractController
{

    /**
     * @Route(path="/login", name="api_login", methods={"POST"})
     * @return JsonResponse
     */
    public function login(): JsonResponse
    {
        $user = $this->getUser();

        return new JsonResponse([
            'email' => $user->getEmail(),
            'roles' => $user->getRoles(),
        ]);
    }

}