<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Untek\Core\FileSystem\Helpers\FilePathHelper;
use Untek\Core\FileSystem\Helpers\FileStorageHelper;
use Untek\Core\Instance\Helpers\PropertyHelper;
use Untek\Sandbox\Crypt\Crypt\Domain\Helpers\EgovGeneratorHelper;
use phpseclib\Crypt\RSA;
use phpseclib\File\X509;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Untek\Core\Text\Libs\RandomString;
//use ZnCore\Base\Legacy\Yii\Helpers\FileHelper;
use Untek\Crypt\Pki\Domain\Helpers\RsaKeyLoaderHelper;
use Untek\Crypt\Pki\Domain\Libs\Rsa\RsaStoreRam;
use Untek\Crypt\Pki\XmlDSig\Domain\Entities\KeyEntity;
use Untek\Crypt\Pki\XmlDSig\Domain\Helpers\KeyLoaderHelper;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\KeyLoaders\DirectoryKeyLoader;
use Untek\Crypt\Pki\XmlDSig\Domain\Libs\Signature;

class CreateCertGenerateRootCaController extends AbstractSandboxController
{

    private $rootCaFile = __DIR__ . '/../../../../resources/data/RobRichards/key/nca_rsa.crt';

    private $certificateRootCa = __DIR__ . '/../../../../resources/var/pki/rootCa/certificate.pem';
    private $privateKeyRootCa =  __DIR__ . '/../../../../resources/var/pki/rootCa/private.pem';
    private $publicKeyRootCa =  __DIR__ . '/../../../../resources/var/pki/rootCa/public.pem';
    private $p12RootCa =         __DIR__ . '/../../../../resources/var/pki/rootCa/rsa.p12';
    private $passwordRootCa =    __DIR__ . '/../../../../resources/var/pki/rootCa/password.txt';

    private $certificateUser = __DIR__ . '/../../../../resources/var/pki/user/certificate.pem';
    private $certificateRequestUser = __DIR__ . '/../../../../resources/var/pki/user/certificateRequest.pem';
    private $privateKeyUser =  __DIR__ . '/../../../../resources/var/pki/user/private.pem';
    private $publicKeyUser =  __DIR__ . '/../../../../resources/var/pki/user/public.pem';
    private $p12User =         __DIR__ . '/../../../../resources/var/pki/user/rsa.p12';
    private $passwordUser =    __DIR__ . '/../../../../resources/var/pki/user/password.txt';

    private $directoryCa = __DIR__ . '/../../../../resources/var/pki/rootCa';
    private $directoryUser = __DIR__ . '/../../../../resources/var/pki/user';

    private $keyLoader;

    public function __construct(
        DirectoryKeyLoader $keyLoader
    )
    {
        $this->keyLoader = $keyLoader;
    }

//    public function generateRootCa(Request $request): Response
    public function __invoke(Request $request): Response
    {
        $random = new RandomString();
        $random->addCharactersAll();
        $random->setLength(16);
        $privateKeyRootCaPassword = $random->generateString();
        $caKeyEntity = EgovGeneratorHelper::generateCa2($privateKeyRootCaPassword);

        $this->toTab('csr');

        $this->printCode($caKeyEntity->getCertificateRequest());

        $this->toTab('certificate');

        $this->printCode($caKeyEntity->getCertificate());

        $this->toTab('private');

        $this->printCode($caKeyEntity->getPrivateKey());

        $this->toTab('public');

        $this->printCode($caKeyEntity->getPublicKey());

        $x509 = new X509();
        $certArray = $x509->loadX509($caKeyEntity->getCertificate());

        $this->toTab('certificate_info');

        $this->printArray($certArray);

        FileStorageHelper::save($this->certificateRootCa, $caKeyEntity->getCertificate());
        FileStorageHelper::save($this->privateKeyRootCa, $caKeyEntity->getPrivateKey());
        FileStorageHelper::save($this->publicKeyRootCa, $caKeyEntity->getPublicKey());
        FileStorageHelper::save($this->passwordRootCa, $privateKeyRootCaPassword);
        FileStorageHelper::save($this->p12RootCa, $caKeyEntity->getP12());

        return $this->renderDefault();
    }
}
