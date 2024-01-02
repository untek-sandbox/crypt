<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Forms;

use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Mapping\ClassMetadata;
//use ZnCore\Domain\Interfaces\Entity\ValidateEntityByMetadataInterface;
use Untek\Component\Web\Form\Interfaces\BuildFormInterface;
use untek\Kaz\Iin\Domain\Constraints\Iin;
//use ZnLib\Web\Symfony4\MicroApp\Interfaces\BuildFormInterface;

class CertificateRequestForm implements /*ValidateEntityByMetadataInterface,*/ BuildFormInterface
{

    private $name;
    private $surname;
    private $givenName;
    private $iin;
    private $countryName;
    private $stateOrProvinceName;
    private $organizationName;

    public static function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraint('name', new Assert\NotBlank());
        $metadata->addPropertyConstraint('surname', new Assert\NotBlank());
        //$metadata->addPropertyConstraint('givenName', new Assert\NotBlank());
        $metadata->addPropertyConstraint('iin', new Assert\NotBlank());
        $metadata->addPropertyConstraint('iin', new Iin());
        $metadata->addPropertyConstraint('countryName', new Assert\NotBlank());
        $metadata->addPropertyConstraint('stateOrProvinceName', new Assert\NotBlank());
        $metadata->addPropertyConstraint('organizationName', new Assert\NotBlank());
    }

    public function buildForm(FormBuilderInterface $formBuilder)
    {
        $formBuilder
            ->add('name', TextType::class, [
                'label' => 'name'
            ])
            /*->add('commonName', TextType::class, [
                'label' => 'commonName'
            ])*/
            ->add('surname', TextType::class, [
                'label' => 'surname'
            ])
            ->add('iin', TextType::class, [
                'label' => 'iin'
            ])
            ->add('countryName', TextType::class, [
                'label' => 'countryName'
            ])
            ->add('givenName', TextType::class, [
                'label' => 'givenName'
            ])
            ->add('stateOrProvinceName', TextType::class, [
                'label' => 'state or province'
            ])
            ->add('organizationName', TextType::class, [
                'label' => 'organization'
            ])

            ->add('save', SubmitType::class, [
                'label' => 'save'
            ]);
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name): void
    {
        $this->name = $name;
    }

    public function getSurname()
    {
        return $this->surname;
    }

    public function setSurname($surname): void
    {
        $this->surname = $surname;
    }

    public function getGivenName()
    {
        return $this->givenName;
    }

    public function setGivenName($givenName): void
    {
        $this->givenName = $givenName;
    }

    public function getIin()
    {
        return $this->iin;
    }

    public function setIin($iin): void
    {
        $this->iin = $iin;
    }

    public function getCountryName()
    {
        return $this->countryName;
    }

    public function setCountryName($countryName): void
    {
        $this->countryName = $countryName;
    }

    public function getStateOrProvinceName()
    {
        return $this->stateOrProvinceName;
    }

    public function setStateOrProvinceName($stateOrProvinceName): void
    {
        $this->stateOrProvinceName = $stateOrProvinceName;
    }

    public function getOrganizationName()
    {
        return $this->organizationName;
    }

    public function setOrganizationName($organizationName): void
    {
        $this->organizationName = $organizationName;
    }
}

