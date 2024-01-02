<?php

namespace Untek\Sandbox\Crypt\Crypt\Domain\Helpers;

use phpseclib\Crypt\RSA;
use phpseclib\File\X509;
use ZnCore\Base\Encoders\XmlEncoder;

class X509Helper
{

    public static function validateX509Cert(string $xml, string $ca): bool
    {
        $signedXmlCode = $xml;
        $xmlEncoder = new XmlEncoder();
        $arr = $xmlEncoder->decode($signedXmlCode);

//        $certContent = $arr['response']['ds:Signature']['ds:KeyInfo']['ds:X509Data']['ds:X509Certificate'];
//        dd($certContent);
        $certContent = $arr['root']['ds:Signature']['ds:KeyInfo']['ds:X509Data']['ds:X509Certificate'];
        $x509 = new X509();
        $x509->loadCA($ca);
        $certArray = $x509->loadX509(($certContent));

        //dd(json_encode($certArray, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

        /** @var RSA $publicKey */
        //$publicKey = $x509->getPublicKey();

        return $x509->validateSignature();
    }
}
