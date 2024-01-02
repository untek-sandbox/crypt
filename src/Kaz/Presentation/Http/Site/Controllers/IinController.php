<?php

namespace Untek\Sandbox\Crypt\Kaz\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Crypt\Kaz\Presentation\Http\Site\Forms\IinForm;
use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Core\Enum\Helpers\EnumHelper;
use Untek\Kaz\Iin\Domain\Enums\JuridicalPartEnum;
use Untek\Kaz\Iin\Domain\Enums\JuridicalTypeEnum;
use Untek\Kaz\Iin\Domain\Enums\SexEnum;
use Untek\Kaz\Iin\Domain\Enums\TypeEnum;
use Untek\Kaz\Iin\Domain\Helpers\IinParser;
use Untek\Model\Validator\Exceptions\UnprocessableEntityException;

class IinController extends AbstractSandboxController
{

    public function __invoke(Request $request): Response
    {
        $form = new IinForm();
        $buildForm = $this->formManager->buildForm($form, $request);
        if ($buildForm->isSubmitted() && $buildForm->isValid()) {
            try {
                $info = IinParser::parse($form->getValue());
                $this->printObject($info);
            } catch (UnprocessableEntityException $e) {
                $this->formManager->setUnprocessableErrorsToForm($buildForm, $e);
            }
        }

        $this->toTab('Enums');

        $this->printHeader('TypeEnum');
        $this->printArray(EnumHelper::getItems(TypeEnum::class));

        $this->printHeader('JuridicalTypeEnum');
        $this->printArray(EnumHelper::getItems(JuridicalTypeEnum::class));

        $this->printHeader('JuridicalPartEnum');
        $this->printArray(EnumHelper::getItems(JuridicalPartEnum::class));

        $this->printHeader('SexEnum');
        $this->printArray(EnumHelper::getItems(SexEnum::class));

        return $this->renderFile(__DIR__ . '/../../../../resources/templates/iin/index.php', [
            'formRender' => $this->formManager->createFormRender($buildForm),
        ]);
    }
}
