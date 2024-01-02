<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Forms;

use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Mapping\ClassMetadata;
use Untek\Component\Web\Form\Interfaces\BuildFormInterface;
use Untek\Crypt\Pki\XmlDSig\Domain\Entities\KeyEntity;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\KeyLoaders\DirectoryKeyLoader;

//use ZnCore\Base\Libs\DotEnv\DotEnv;
//use ZnCore\Domain\Interfaces\Entity\ValidateEntityByMetadataInterface;
//use ZnCrypt\Pki\XmlDSig\Domain\Entities\KeyEntity;
//use ZnCrypt\Pki\XmlDSig\Domain\Libs\KeyLoaders\DirectoryKeyLoader;
//use ZnLib\Web\Symfony4\MicroApp\Interfaces\BuildFormInterface;

class VerifyCertificateForm implements /*ValidateEntityByMetadataInterface,*/ BuildFormInterface
{

    private $issuerKey = null;

    private $keyLoader;

    public function __construct(
        DirectoryKeyLoader $keyLoader
    )
    {
        $this->keyLoader = $keyLoader;
    }

    public static function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraint('issuerKey', new Assert\NotBlank());
    }

    public function buildForm(FormBuilderInterface $formBuilder)
    {
        $formBuilder
            ->add('issuerKey', ChoiceType::class, [
                'label' => 'issuerKey',
                'choices' => array_flip($this->getKeyOptions()),
            ])
            ->add('save', SubmitType::class, [
                'label' => 'save'
            ]);
    }

    public function getKeyOptions(): array
    {
        /** @var KeyEntity[] $collection */
        $collection = $this->keyLoader->findAll();
        $options = [];
        foreach ($collection as $entity) {
            $options[$entity->getName()] = $entity->getName();
        }
        return $options;
    }

    /**
     * @return null
     */
    public function getIssuerKey()
    {
        return $this->issuerKey;
    }

    /**
     * @param null $issuerKey
     */
    public function setIssuerKey($issuerKey): void
    {
        $this->issuerKey = $issuerKey;
    }
}
