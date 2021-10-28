<?php

namespace App\Controller\API;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use JMS\Serializer\SerializerBuilder;

use App\Entity\User;
use App\Controller\API\ApiController;

/**
 * @Route(path="/api/v1/users")
 */
class UserController extends ApiController
{

    /**
     * Lists all Users.
     * 
     * @Route(path="/", name="api_get_users", methods={"GET"})
     * @return JsonResponse
     */
    public function getUsersAction()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $users = $entityManager->getRepository(User::class)->findAll();

        $serializer = SerializerBuilder::create()->build();
        $usersJson = $serializer->serialize($users, 'json');

        return $this->response(json_decode($usersJson));
    }

    /**
     * Get current user.
     * 
     * @Route(path="/me", name="api_get_current_user", methods={"GET"})
     * @return JsonResponse
     */
    public function getCurrentUserAction()
    {
        $user = $this->getUser();

        $serializer = SerializerBuilder::create()->build();
        $userJson = $serializer->serialize($user, 'json');

        return $this->response(json_decode($userJson));
    }
    
}