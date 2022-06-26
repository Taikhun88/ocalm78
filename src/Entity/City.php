<?php

namespace App\Entity;

use App\Repository\CityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


#[ORM\Entity(repositoryClass: CityRepository::class)]
class City
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    #[Assert\NotBlank(message: "Merci d'indiquer le code postal")]
    #[Assert\LessThan(79000, message:"Merci d'indiquer un code de postal du département des Yvelines 78")]
    #[Assert\GreaterThanOrEqual(78000, message:"Merci d'indiquer un code de postal du département des Yvelines 78")]
    private $zip_code;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: "Merci d'indiquer le nom de la ville")]
    private $city_name;

    #[ORM\OneToMany(mappedBy: 'city', targetEntity: Order::class)]
    private $orders;

    #[ORM\OneToMany(mappedBy: 'city', targetEntity: User::class)]
    private $users;

    public function __construct()
    {
        $this->orders = new ArrayCollection();
        $this->users = new ArrayCollection();
    }

    public function __toString()
    {
        $name = $this->city_name . ' - ' . $this->zip_code;
        return $name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getZipCode(): ?int
    {
        return $this->zip_code;
    }

    public function setZipCode(int $zip_code): self
    {
        $this->zip_code = $zip_code;

        return $this;
    }

    public function getCityName(): ?string
    {
        return $this->city_name;
    }

    public function setCityName(string $city_name): self
    {
        $this->city_name = $city_name;

        return $this;
    }

    /**
     * @return Collection<int, Order>
     */
    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(Order $order): self
    {
        if (!$this->orders->contains($order)) {
            $this->orders[] = $order;
            $order->setCity($this);
        }

        return $this;
    }

    public function removeOrder(Order $order): self
    {
        if ($this->orders->removeElement($order)) {
            // set the owning side to null (unless already changed)
            if ($order->getCity() === $this) {
                $order->setCity(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->setCity($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getCity() === $this) {
                $user->setCity(null);
            }
        }

        return $this;
    }
}
