<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Forms;

use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
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

class SignXmlForm implements /*ValidateEntityByMetadataInterface,*/ BuildFormInterface
{

    private $issuerKey = null;
    private $subjectKey = null;
    private $sourceXml = null;

    private $verifyCertificateSignature = true;
    private $verifyCertificateDate = true;

    private $keyLoader;

    public function __construct(
        DirectoryKeyLoader $keyLoader
    )
    {
        $this->keyLoader = $keyLoader;
    }

    public static function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraint('subjectKey', new Assert\NotBlank());
        $metadata->addPropertyConstraint('sourceXml', new Assert\NotBlank());
    }

    public function buildForm(FormBuilderInterface $formBuilder)
    {
        $formBuilder
            ->add('issuerKey', ChoiceType::class, [
                'label' => 'issuerKey',
                'choices' => array_flip($this->getKeyOptions()),
            ])
            ->add('subjectKey', ChoiceType::class, [
                'label' => 'subjectKey',
                'choices' => array_flip($this->getKeyOptions()),
            ])
            ->add('sourceXml', TextareaType::class, [
                'label' => 'sourceXml',
            ])
            ->add('verifyCertificateSignature', CheckboxType::class, [
                'label' => 'verifyCertificateSignature',
            ])
            ->add('verifyCertificateDate', CheckboxType::class, [
                'label' => 'verifyCertificateDate',
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

    /**
     * @return null
     */
    public function getSubjectKey()
    {
        return $this->subjectKey;
    }

    /**
     * @param null $subjectKey
     */
    public function setSubjectKey($subjectKey): void
    {
        $this->subjectKey = $subjectKey;
    }

    /**
     * @return null
     */
    public function getSourceXml()
    {
        return $this->sourceXml;
    }

    /**
     * @param null $sourceXml
     */
    public function setSourceXml($sourceXml): void
    {
        $this->sourceXml = $sourceXml;
    }
    public function isVerifyCertificateSignature(): bool
    {
        return $this->verifyCertificateSignature;
    }

    public function setVerifyCertificateSignature(bool $verifyCertificateSignature): void
    {
        $this->verifyCertificateSignature = $verifyCertificateSignature;
    }

    public function isVerifyCertificateDate(): bool
    {
        return $this->verifyCertificateDate;
    }

    public function setVerifyCertificateDate(bool $verifyCertificateDate): void
    {
        $this->verifyCertificateDate = $verifyCertificateDate;
    }
}
