<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: OrderRepository::class)]
#[ORM\Table(name: '`order`')]
class Order
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, unique: true)]
    #[Assert\Regex('/^\#[A-Z][0-9]{3}\-[0-9]{4}/')]
    private $order_number;

    #[ORM\Column(type: 'datetime')]
    private $delivery_date;

    #[ORM\Column(type: 'string', length: 255)]
    private $address;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\Regex('/^0[0-9]{9}/', message: 'Merci d\'indiquer un numéro valide')]
    private $phone;

    #[ORM\Column(type: 'smallint')]
    #[Assert\LessThanOrEqual(1, message:"Merci d'indiquer un mode de paiement")]
    #[Assert\GreaterThanOrEqual(0, message:"Merci d'indiquer un mode de paiement")]
    private $payment_mode;

    #[ORM\Column(type: 'string', length: 500, nullable: true)]
    private $customer_request;

    #[ORM\Column(type: 'smallint')]
    #[Assert\LessThanOrEqual(4, message:"Merci d'indiquer une valeur entre 0 et 4")]
    #[Assert\GreaterThanOrEqual(0, message:"Merci d'indiquer une valeur entre 0 et 4")]
    private $status;

    #[ORM\Column(type: 'json')]
    private $details_order = [];

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\Email(message: "user.email.notemail")]
    private $email;

    #[ORM\Column(type: 'datetime_immutable')]
    private $created_at;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private $updated_at;

    #[ORM\ManyToOne(targetEntity: City::class, inversedBy: 'orders')]
    #[ORM\JoinColumn(nullable: false)]
    private $city;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderNumber(): ?string
    {
        return $this->order_number;
    }

    public function setOrderNumber(string $order_number): self
    {
        $this->order_number = $order_number;

        return $this;
    }

    public function getDeliveryDate(): ?\DateTimeInterface
    {
        return $this->delivery_date;
    }

    public function setDeliveryDate(\DateTimeInterface $delivery_date): self
    {
        $this->delivery_date = $delivery_date;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getPaymentMode(): ?int
    {
        return $this->payment_mode;
    }

    public function setPaymentMode(int $payment_mode): self
    {
        $this->payment_mode = $payment_mode;

        return $this;
    }

    public function getCustomerRequest(): ?string
    {
        return $this->customer_request;
    }

    public function setCustomerRequest(?string $customer_request): self
    {
        $this->customer_request = $customer_request;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getDetailsOrder(): ?array
    {
        return $this->details_order;
    }

    public function setDetailsOrder(array $details_order): self
    {
        $this->details_order = $details_order;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getCity(): ?City
    {
        return $this->city;
    }

    public function setCity(?City $city): self
    {
        $this->city = $city;

        return $this;
    }
}
