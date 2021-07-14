<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setEmail('admin@exemple.com');

        $password = $this->encoder->encodePassword($user, '1234');
        $user->setPassword($password);

        $user->setFirstName('Admin');
        $user->setLastName('ADMIN');

        $roles[] = 'ROLE_ADMIN';
        $user->setRoles(array_unique($roles));

        $manager->persist($user);
        $manager->flush();
    }
}
