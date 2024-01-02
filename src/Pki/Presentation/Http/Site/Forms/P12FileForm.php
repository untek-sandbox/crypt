<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Forms;

use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Mapping\ClassMetadata;
use Untek\Component\Web\Form\Interfaces\BuildFormInterface;

//use ZnCore\Domain\Interfaces\Entity\ValidateEntityByMetadataInterface;
//use ZnLib\Web\Symfony4\MicroApp\Interfaces\BuildFormInterface;

class P12FileForm implements /*ValidateEntityByMetadataInterface,*/ BuildFormInterface
{

    private $file;
    private $password;

    public static function loadValidatorMetadata(ClassMetadata $metadata)
    {

    }

    public function buildForm(FormBuilderInterface $formBuilder)
    {
        $formBuilder
            ->add('file', FileType::class, [
                'label' => 'file'
            ])
            ->add('password', PasswordType::class, [
                'label' => 'password'
            ])
            ->add('save', SubmitType::class, [
                'label' => 'save'
            ]);
    }

    public function getFile(): ?UploadedFile
    {
        return $this->file;
    }

    public function setFile(UploadedFile $file): void
    {
        $this->file = $file;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password): void
    {
        $this->password = $password;
    }
}
