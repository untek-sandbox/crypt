<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use phpseclib\Crypt\RSA;
use phpseclib\File\X509;
use Untek\Core\FileSystem\Helpers\FindFileHelper;
use Untek\Core\Text\Helpers\TextHelper;
use Untek\Crypt\Pki\X509\Domain\Helpers\X509Helper;
use Untek\Crypt\Pki\XmlDSig\Domain\Entities\KeyEntity;
use Untek\Kaz\Iin\Domain\Helpers\IinHelper;
use Untek\Kaz\Iin\Domain\Helpers\IinParser;

abstract class BaseController extends AbstractSandboxController
{

    protected string $pkiDirectory = __DIR__ . '/../../../../../Crypt/resources/var/pki';

    protected function printKeyIin(array $rdnSequence)
    {
        $subjectProps = X509Helper::getAssoc($rdnSequence);
        if (isset($subjectProps['serialNumber'])) {
            $iin = IinHelper::extractNumber($subjectProps['serialNumber']);
            $iinEntity = IinParser::parse($iin);
            $this->printHeader('IIN');
            $this->alertInfo($iinEntity->getValue());

            $this->printHeader('Birthday');
            $birthday =
                $iinEntity->getBirthday()->getYear() . '.' .
                TextHelper::fill($iinEntity->getBirthday()->getMonth(), 2, '0', 'before') . '.' .
                TextHelper::fill($iinEntity->getBirthday()->getDay(), 2, '0', 'before');
            $this->alertInfo($birthday);

            $this->printHeader('Gender');
            $this->alertInfo($iinEntity->getSex());
//            $this->printObject($iinEntity);
        }
    }

    protected function printKey(KeyEntity $subjectKeyEntity)
    {
        if ($subjectKeyEntity->getCsr()) {
            $this->toTab('csr');
            $this->printHeader('Key');
            $this->printCode($subjectKeyEntity->getCsr());
            $x509 = new X509();
            $csr = $x509->loadCSR($subjectKeyEntity->getCertificateRequest());

            $this->printHeader('Name');
            $this->alertInfo($x509->getDNProp('id-at-commonName')[0]);
            $this->printKeyIin($csr['certificationRequestInfo']['subject']['rdnSequence']);

            $this->printHeader('Info');
            $this->printArray($csr);
        }

        if ($subjectKeyEntity->getCertificate()) {

            $this->toTab('certificate');
            $this->printHeader('Key');
            $this->printCode($subjectKeyEntity->getCertificate());
            $x509 = new X509();
            //$x509->loadCA($issuerKeyEntity->getCertificate());
            $certArray = $x509->loadX509($subjectKeyEntity->getCertificate());

            $issuerProps = X509Helper::getAssoc($certArray['tbsCertificate']['issuer']['rdnSequence']);
            $subjectProps = X509Helper::getAssoc($certArray['tbsCertificate']['subject']['rdnSequence']);

            $this->printHeader('Name');
            $this->alertInfo($x509->getDNProp('id-at-commonName')[0]);
            $this->printKeyIin($certArray['tbsCertificate']['subject']['rdnSequence']);

            $this->printHeader('Issuer');
            $this->printArray($issuerProps);
            $this->printHeader('Subject');
            $this->printArray($subjectProps);

            $this->printHeader('Info');
            $this->printArray($certArray);
        }

        if ($subjectKeyEntity->getPrivateKey()) {
            $this->toTab('private');
            if ($subjectKeyEntity->getPrivateKeyPassword()) {
                $this->printHeader('Password');
                $this->printCode($subjectKeyEntity->getPrivateKeyPassword());
            }
            $this->printHeader('Key');
            $this->printCode($subjectKeyEntity->getPrivateKey());
        }

        if ($subjectKeyEntity->getPublicKey()) {
            $this->toTab('public');
            $this->printHeader('Key');

            $this->printCode($subjectKeyEntity->getPublicKey());

            $this->printHeader('Fingerprint');

            $rsa = new RSA();
            $rsa->loadKey($subjectKeyEntity->getPublicKey());
            $this->printArray([
                'md5' => $rsa->getPublicKeyFingerprint('md5'),
                'sha256' => $rsa->getPublicKeyFingerprint('sha256'),
            ]);
        }

        $files = FindFileHelper::scanDir('user');
        if ($files) {
            $this->toTab('files');
            $this->printCode(implode(PHP_EOL, $files));
            $this->print('<a class="btn btn-primary" href="/sandbox/pki/key-download">Download</a>');
        }
    }
}
