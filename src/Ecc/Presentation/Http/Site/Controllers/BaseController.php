<?php

namespace Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Controllers;

use Mdanter\Ecc\Crypto\Key\PrivateKeyInterface;
use Mdanter\Ecc\Crypto\Key\PublicKeyInterface;
use Mdanter\Ecc\EccFactory;
use Mdanter\Ecc\Serializer\PrivateKey\DerPrivateKeySerializer;
use Mdanter\Ecc\Serializer\PrivateKey\PemPrivateKeySerializer;
use Mdanter\Ecc\Serializer\PublicKey\DerPublicKeySerializer;
use Mdanter\Ecc\Serializer\PublicKey\PemPublicKeySerializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Component\Web\Form\Interfaces\BuildFormInterface;
use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Untek\Sandbox\Module\Presentation\Http\Site\SingeInput\Forms\SingleButtonForm;
use Untek\Sandbox\Module\Presentation\Http\Site\SingeInput\Forms\SingleInputForm;
use ZnCore\Domain\Exceptions\UnprocessibleEntityException;
use ZnCrypt\Base\Domain\Helpers\CryptKeyHelper;

//ComposerHelper::requireAssert(EccFactory::class, 'mdanter/ecc');

abstract class BaseController extends AbstractSandboxController
{

    protected $viewsDir = __DIR__ . '/../views/bip39';

    /*public function __construct(
        FormFactoryInterface $formFactory,
        CsrfTokenManagerInterface $tokenManager
    )
    {
        $this->setFormFactory($formFactory);
        $this->setTokenManager($tokenManager);
    }*/

    private $privatePemFile = __DIR__ . '/../../../var/ecc/keys/private.pem';
    private $publicPemFile = __DIR__ . '/../../../var/ecc/keys/public.pem';
    private $signatureFile = __DIR__ . '/../../../var/ecc/keys/sig';

    protected function _form(Request $request, callable $callback, BuildFormInterface $form): Response
    {
        $buildForm = $this->formManager->buildForm($form, $request);
        if ($buildForm->isSubmitted() && $buildForm->isValid()) {
            try {
                $callback($form->getValue());
            } catch (UnprocessibleEntityException $e) {
                $this->setUnprocessableErrorsToForm($buildForm, $e);
            }
        }

        if ($form instanceof SingleInputForm) {
            $renderFile = __DIR__ . '/../../../../../../../module/src/Presentation/Http/Site/SingeInput/views/form.php';
        } elseif ($form instanceof SingleButtonForm) {
            $renderFile = __DIR__ . '/../../../../../../../module/src/Presentation/Http/Site/SingeInput/views/button.php';
        }

        return $this->renderFile($renderFile, [
            'formRender' => $this->formManager->createFormRender($buildForm),
        ]);
    }

    protected function loadPrivateFromPemFile(string $file): PrivateKeyInterface
    {
        $adapter = EccFactory::getAdapter();
        $pemPrivateKeySerializer = new PemPrivateKeySerializer(new DerPrivateKeySerializer($adapter));
        $pemPrivate = file_get_contents($file);
        $private = $pemPrivateKeySerializer->parse($pemPrivate);
        return $private;
    }

    protected function loadPublicFromPemFile(string $file): PublicKeyInterface
    {
        $adapter = EccFactory::getAdapter();
        $pemPublicKeySerializer = new PemPublicKeySerializer(new DerPublicKeySerializer($adapter));
        $pemPublic = file_get_contents($this->publicPemFile);
        $public = $pemPublicKeySerializer->parse($pemPublic);
        return $public;
    }

}
