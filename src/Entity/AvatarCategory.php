<?php

namespace App\Entity;

use App\Repository\AvatarCategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: AvatarCategoryRepository::class)]
class AvatarCategory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank(message: "Merci de saisir une catégorie")]
    private $name;

    #[ORM\OneToMany(mappedBy: 'category', targetEntity: Avatar::class)]
    private $avatars;

    public function __construct()
    {
        $this->avatars = new ArrayCollection();
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

    /**
     * @return Collection<int, Avatar>
     */
    public function getAvatars(): Collection
    {
        return $this->avatars;
    }

    public function addAvatar(Avatar $avatar): self
    {
        if (!$this->avatars->contains($avatar)) {
            $this->avatars[] = $avatar;
            $avatar->setCategory($this);
        }

        return $this;
    }

    public function removeAvatar(Avatar $avatar): self
    {
        if ($this->avatars->removeElement($avatar)) {
            // set the owning side to null (unless already changed)
            if ($avatar->getCategory() === $this) {
                $avatar->setCategory(null);
            }
        }

        return $this;
    }
}
