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

class CreateCertSignUserCsrController extends AbstractSandboxController
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

    public function __invoke(Request $request): Response
    {
        //$p12UserPem = FileStorageHelper::load($this->p12User);
        //$privateKeyUserPassword = FileStorageHelper::load($this->passwordUser);
        //$userKeyEntity = KeyLoaderHelper::loadFromP12($p12UserPem, $privateKeyUserPassword);
        //dd($userKeyEntity);

        /*$userKeyEntity = new KeyEntity;
        $userKeyEntity->setCsr(FileStorageHelper::load($this->certificateRequestUser));
        $userKeyEntity->setPrivateKeyPassword(FileStorageHelper::load($this->passwordUser));
        $userKeyEntity->setPrivateKey(FileStorageHelper::load($this->privateKeyUser));
        $userKeyEntity->setPublicKey(FileStorageHelper::load($this->publicKeyUser));*/

        //dd($caKeyEntity);

//        $privateKeyRootCaPassword = FileStorageHelper::load($this->passwordRootCa);
//        $p12RootCaPem = FileStorageHelper::load($this->p12RootCa);
//        $caKeyEntity = KeyLoaderHelper::loadFromP12($p12RootCaPem, $privateKeyRootCaPassword);

        $userKeyEntity = $this->keyLoader->load(FilePathHelper::up($this->publicKeyUser));
        $caKeyEntity = $this->keyLoader->load(FilePathHelper::up($this->publicKeyRootCa));

        $userKeyEntity = EgovGeneratorHelper::signUserCsr($caKeyEntity, $userKeyEntity);

        $this->toTab('csr');
        $this->printCode($userKeyEntity->getCsr());

        $this->toTab('certificate');
        $this->printCode($userKeyEntity->getCertificate());

        $this->toTab('private');
        $this->printCode($userKeyEntity->getPrivateKey());

        $this->toTab('public');
        $this->printCode($userKeyEntity->getPublicKey());

        $x509 = new X509();
        $x509->loadCA($caKeyEntity->getCertificate());
        $certArray = $x509->loadX509($userKeyEntity->getCertificate());

        $this->toTab('certificate_info');

        $this->printArray($certArray);

        FileStorageHelper::save($this->certificateUser, $userKeyEntity->getCertificate());
        FileStorageHelper::save($this->p12User, $userKeyEntity->getP12());

        return $this->renderDefault();
    }

    public function generateUser(Request $request): Response
    {
        $random = new RandomString();
        $random->addCharactersAll();
        $random->setLength(16);
        $privateKeyRootCaPassword = $random->generateString();

        $privateKeyRootCaPassword = FileStorageHelper::load($this->passwordRootCa);
        $p12RootCaPem = FileStorageHelper::load($this->p12RootCa);
        $caKeyEntity = KeyLoaderHelper::loadFromP12($p12RootCaPem, $privateKeyRootCaPassword);
        $userKeyEntity = EgovGeneratorHelper::generateUser2($caKeyEntity->getCertificate(), openssl_pkey_get_private($caKeyEntity->getPrivateKey()), $privateKeyUserPassword);

        $this->toTab('csr');
        $this->printCode($userKeyEntity->getCsr());

        $this->toTab('certificate');

        $this->printCode($userKeyEntity->getCertificate());

        $this->toTab('private');

        $this->printCode($userKeyEntity->getPrivateKey());

        $this->toTab('public');

        $this->printCode($userKeyEntity->getPublicKey());

        $x509 = new X509();
        $x509->loadCA($caKeyEntity->getCertificate());
        $certArray = $x509->loadX509($userKeyEntity->getCertificate());

        $this->toTab('certificate_info');

        $this->printArray($certArray);

        FileStorageHelper::save($this->certificateUser, $userKeyEntity->getCertificate());
        FileStorageHelper::save($this->certificateRequestUser, $userKeyEntity->getCertificateRequest());
        FileStorageHelper::save($this->privateKeyUser, $userKeyEntity->getPrivateKey());
        FileStorageHelper::save($this->publicKeyUser, $userKeyEntity->getPublicKey());
        FileStorageHelper::save($this->passwordUser, $privateKeyUserPassword);
        FileStorageHelper::save($this->p12User, $userKeyEntity->getP12());

        return $this->renderDefault();
    }

    public function verifyUser(Request $request): Response
    {
        $privateKeyUserPassword = FileStorageHelper::load($this->passwordUser);
        $privateKeyRootCaPassword = FileStorageHelper::load($this->passwordRootCa);
        $p12RootCaPem = FileStorageHelper::load($this->p12RootCa);
        $caKeyEntity = KeyLoaderHelper::loadFromP12($p12RootCaPem, $privateKeyRootCaPassword);
        $p12UserPem = FileStorageHelper::load($this->p12User);
        $userKeyEntity = KeyLoaderHelper::loadFromP12($p12UserPem, $privateKeyUserPassword);
        $x509 = new X509();
        $x509->loadCA($caKeyEntity->getCertificate());
        $certArray = $x509->loadX509($userKeyEntity->getCertificate());

        $verify = new Signature();
//        $verify->setRootCa(file_get_contents($this->rootCaFile));
        $verifyEntity = $verify->verifyCertificate(file_get_contents($this->rootCaFile));

        if ($x509->validateSignature()) {
            $this->alertSuccess('Certificate signature validated!');
        } else {
            $this->alertDanger('Certificate signature fail!');
        }

        if ($x509->validateDate()) {
            $this->alertSuccess('Certificate date validated!');
        } else {
            $this->alertDanger('Certificate date fail!');
        }

        $this->toTab('certificate');

        $this->printArray($certArray);

        $this->toTab('fingerprint');

        $this->printArray(PropertyHelper::toArray($verifyEntity->getFingerprint()));

        return $this->renderDefault();
    }

    private function phpSpecLib(Request $request): Response
    {
        $keyGenerator = new RSA();
        $keys = $keyGenerator->createKey(2048);

        $privateKey = new RSA();
        $privateKey->loadKey($keys['privatekey']);

        $publicKey = new RSA();
        $publicKey->loadKey($keys['publickey']);
        $publicKey->setPublicKey();

        $subjectCert = new X509();
        //$subjectCert->setDomain('example.com', 'example.net');

        $subjectCert->setPublicKey($publicKey);

        $issuerCert = new X509();
        $issuerCert->setPrivateKey($privateKey);
        $issuerCert->setDN($subjectCert->getDN());

        $x509 = new X509();
        $certArray = $x509->sign($issuerCert, $subjectCert);

        //$certArray = $x509->loadX509($x509->saveX509());

//        $this->print('Certificate:');
//        $this->printArray($certArray);

        return $this->renderDefault();
    }

}
