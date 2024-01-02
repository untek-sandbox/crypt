<?php

namespace Untek\Sandbox\Crypt\Ecc\Presentation\Http\Site\Controllers;

use kornrunner\Ethereum\Address;
use Mdanter\Ecc\Crypto\Key\PrivateKeyInterface;
use Mdanter\Ecc\Crypto\Key\PublicKeyInterface;
use Mdanter\Ecc\EccFactory;
use Mdanter\Ecc\Serializer\PrivateKey\DerPrivateKeySerializer;
use Mdanter\Ecc\Serializer\PrivateKey\PemPrivateKeySerializer;
use Mdanter\Ecc\Serializer\PublicKey\DerPublicKeySerializer;
use Mdanter\Ecc\Serializer\PublicKey\PemPublicKeySerializer;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Untek\Core\Code\Helpers\ComposerHelper;
use ZnSymfony\Sandbox\Symfony4\Web\Base\BaseController;

ComposerHelper::requireAssert(EccFactory::class, 'mdanter/ecc');

class EtheriumController extends AbstractSandboxController
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

    public function __invoke(Request $request): Response
    {
        $privateKey = 'da331e634e6400c2f8516cdd03d4b8f369fd28ad3f3cd2140f2815e0fb42f3bc';
        $address = new Address($privateKey);

        $this->printHeader('address');
        $this->printCode($address->get());

        $this->printHeader('PrivateKey');
        $this->printCode($address->getPrivateKey());

        $this->printHeader('PublicKey');
        $this->printCode($address->getPublicKey());

        return $this->renderDefault();
    }
}
