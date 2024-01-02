<?php

namespace Untek\Sandbox\Crypt\Kaz\Presentation\Http\Site\Forms;

use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Mapping\ClassMetadata;
use ZnCore\Domain\Interfaces\Entity\ValidateEntityByMetadataInterface;
use Untek\Component\Web\Form\Interfaces\BuildFormInterface;

class IinForm implements /*ValidateEntityByMetadataInterface,*/ BuildFormInterface
{

    private $value;

    public static function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraint('value', new Assert\NotBlank());
    }

    public function buildForm(FormBuilderInterface $formBuilder)
    {
        $formBuilder
            ->add('value', TextType::class, [
                'label' => 'ИИН'
            ])
            ->add('save', SubmitType::class, [
                'label' => 'save'
            ]);
    }

    public function getValue()
    {
        return $this->value;
    }

    public function setValue($value): void
    {
        $this->value = $value;
    }
}
