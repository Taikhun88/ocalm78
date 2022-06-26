<?php

namespace App\Entity;

use App\Repository\ProductCategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ProductCategoryRepository::class)]
class ProductCategory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: "Merci de saisir un nom")]
    private $name;

    #[ORM\Column(type: 'integer')]
    #[Assert\NotBlank(message: "Merci de saisir le nombre de points pour gagner ce produit")]
    #[Assert\LessThanOrEqual(300, message:"Merci d'indiquer une valeur entre 0 et 300")]
    #[Assert\GreaterThanOrEqual(0, message:"Merci d'indiquer une valeur entre 0 et 300")]
    private $points;

    #[ORM\OneToMany(mappedBy: 'category', targetEntity: Product::class, orphanRemoval: true)]
    private $products;

    public function __construct()
    {
        $this->products = new ArrayCollection();
    }

    public function __toString()
    {
        $name = $this->name; 
        
        return $name;
    }

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

    public function getPoints(): ?int
    {
        return $this->points;
    }

    public function setPoints(int $points): self
    {
        $this->points = $points;

        return $this;
    }

    /**
     * @return Collection<int, Product>
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->setCategory($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getCategory() === $this) {
                $product->setCategory(null);
            }
        }

        return $this;
    }
}
