<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: "Merci de saisir un nom de produit")]
    private $name;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank(message: "Merci de décrire le produit")]
    private $description;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank(message: "Merci d'indiquer les ingrédients principaux du produit")]
    private $ingredients;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank(message: "Merci d'indiquer les ingrédients susceptibles de provoquer une allergie")]
    private $allergens;

    #[ORM\Column(type: 'integer')]
    #[Assert\NotBlank(message: "Merci d'indiquer le poids du plat")]
    private $weight;

    #[ORM\Column(type: 'integer')]
    #[Assert\NotBlank(message: "Merci d'indiquer le nombre de points fidélité que rapporte ce produit")]
    private $points;

    #[ORM\Column(type: 'float')]
    #[Assert\NotBlank(message: "Merci d'indiquer le prix de ce produit")]
    private $price;

    #[ORM\Column(type: 'integer', nullable:true)]
    #[Assert\LessThanOrEqual(100, message:"Merci d'indiquer une valeur entre 0 et 99")]
    #[Assert\GreaterThanOrEqual(0, message:"Merci d'indiquer une valeur entre 0 et 99")]
    private $promo;

    #[ORM\Column(type: 'string', length: 255)]
    private $image_upfront;

    #[ORM\Column(type: 'string', length: 255)]
    private $image_top;

    #[ORM\Column(type: 'string', length: 255)]
    private $image_closeup;

    #[ORM\Column(type: 'string', length: 255)]
    private $image_carousel;

    #[ORM\Column(type: 'datetime_immutable')]
    private $created_at;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private $updated_at;

    #[ORM\ManyToOne(targetEntity: ProductCategory::class, inversedBy: 'products')]
    #[ORM\JoinColumn(nullable: false)]
    private $category;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getIngredients(): ?string
    {
        return $this->ingredients;
    }

    public function setIngredients(string $ingredients): self
    {
        $this->ingredients = $ingredients;

        return $this;
    }

    public function getAllergens(): ?string
    {
        return $this->allergens;
    }

    public function setAllergens(string $allergens): self
    {
        $this->allergens = $allergens;

        return $this;
    }

    public function getWeight(): ?int
    {
        return $this->weight;
    }

    public function setWeight(int $weight): self
    {
        $this->weight = $weight;

        return $this;
    }

    public function getPoints(): ?int
    {
        return $this->points;
    }

    public function setPoints(int $points): self
    {
        $this->points = $points;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getPromo(): ?int
    {
        return $this->promo;
    }

    public function setPromo(int $promo): self
    {
        $this->promo = $promo;

        return $this;
    }

    public function getImageUpfront(): ?string
    {
        return $this->image_upfront;
    }

    public function setImageUpfront(string $image_upfront): self
    {
        $this->image_upfront = $image_upfront;

        return $this;
    }

    public function getImageTop(): ?string
    {
        return $this->image_top;
    }

    public function setImageTop(string $image_top): self
    {
        $this->image_top = $image_top;

        return $this;
    }

    public function getImageCloseup(): ?string
    {
        return $this->image_closeup;
    }

    public function setImageCloseup(string $image_closeup): self
    {
        $this->image_closeup = $image_closeup;

        return $this;
    }

    public function getImageCarousel(): ?string
    {
        return $this->image_carousel;
    }

    public function setImageCarousel(string $image_carousel): self
    {
        $this->image_carousel = $image_carousel;

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

    public function getCategory(): ?ProductCategory
    {
        return $this->category;
    }

    public function setCategory(?ProductCategory $category): self
    {
        $this->category = $category;

        return $this;
    }
}
