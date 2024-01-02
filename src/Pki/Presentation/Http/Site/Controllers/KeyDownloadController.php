<?php

namespace Untek\Sandbox\Crypt\Pki\Presentation\Http\Site\Controllers;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Untek\Sandbox\Sandbox\Zip\Domain\Libs\ZipDirectory;

class KeyDownloadController extends BaseController
{

    public static function isHidden(): bool
    {
        return true;
    }

    public function __invoke(Request $request): Response
    {
        $zipDirectory = new ZipDirectory();
        $zipFile = $zipDirectory->createZipFromDirectory($this->pkiDirectory . '/user');
        return $this->openFile($zipFile, 'key.zip');
    }
}
