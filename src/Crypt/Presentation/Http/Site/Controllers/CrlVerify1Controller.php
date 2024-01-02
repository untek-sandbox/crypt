<?php

namespace Untek\Sandbox\Crypt\Crypt\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use phpseclib\File\ASN1;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CrlVerify1Controller extends AbstractSandboxController
{

    private $crlFile = __DIR__ . '/../../../../resources/data/nca_d_rsa.crl';

    public static function isHidden(): bool
    {
        return true;
    }
    
    public function __invoke(Request $request): Response
    {
        $KDC_REP = array(
            'type' => ASN1::TYPE_SEQUENCE,
            'children' => array(
                'type' => ASN1::TYPE_SEQUENCE,
                'children' => array(
                    'ttttt' => array(
                        //'constant' => 1,
                        'optional' => true,
                        'explicit' => true,
                        'type' => ASN1::TYPE_INTEGER
                    ),
                    'rrrrr' => [
                        'type' => ASN1::TYPE_SEQUENCE,
                        'children' => array(
                            'qqqq' => array(
                                //'constant' => 1,
                                'optional' => true,
                                'explicit' => true,
                                'type' => ASN1::TYPE_OBJECT_IDENTIFIER
                            ),
                            'wwwww' => array(
                                'constant' => 1,
                                'optional' => true,
                                'explicit' => true,
                                'type' => ASN1::TYPE_NULL
                            ),
                        )
                    ]

                )
            )
        );

        $asn1 = new ASN1();
        $decoded = $asn1->decodeBER(file_get_contents($this->crlFile));
        dd($decoded);
//        $result = $asn1->asn1map($decoded[0], $KDC_REP);
//        dd($result);
    }
}
