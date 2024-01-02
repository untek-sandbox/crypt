<?php

namespace Untek\Sandbox\Crypt\Kaz\Presentation\Http\Site\Controllers;

use Untek\Sandbox\Module\Presentation\Http\Site\Controllers\AbstractSandboxController;
use Untek\Model\Query\Entities\Query;
use Untek\Sandbox\Sandbox\EgovData\Domain\Libs\EgovDataClient;
use Untek\Sandbox\Sandbox\EgovData\Domain\Libs\EgovDataProvider;
use ZnSymfony\Sandbox\Symfony4\Web\Base\BaseController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EgovDataController extends AbstractSandboxController
{

    private $client;

    public function __construct()
    {
        parent::__construct();
        $this->client = new EgovDataClient(getenv('EGOV_API_KEY'));
//        $this->client = new EgovDataClient();
    }

    public function __invoke(Request $request): Response
    {
        return $this->dataProviderPage1($request);
    }

    public function page1(Request $request): Response
    {
        $data = $this->client->request('api/v4/doroznayakartabiznesasko/v2', [
            'from' => '1',
            'size' => '3',
        ]);
        $this->printArray($data);
        return $this->renderDefault();
    }

    public function page2(Request $request): Response
    {
        $data = $this->client->request('api/v4/doroznayakartabiznesasko/v2', [
            'from' => '2',
            'size' => '3',
        ]);
        $this->printArray($data);
        return $this->renderDefault();
    }

    public function dataProviderPage1(Request $request): Response
    {
        $dataProvider = new EgovDataProvider($this->client, 'doroznayakartabiznesasko', 'v2');
        $query = new Query();
        $query->page(1);
        $query->perPage(2);
        $collection = $dataProvider->findAll($query);
        $this->printObject($collection);
        return $this->renderDefault();
    }

    public function dataProviderPage2(Request $request): Response
    {
        $dataProvider = new EgovDataProvider($this->client, 'doroznayakartabiznesasko', 'v2');
        $query = new Query();
        $query->page(2);
        $query->perPage(2);
        $collection = $dataProvider->findAll($query);
        $this->printObject($collection);
        return $this->renderDefault();
    }

    public function dataProviderWhereHardCode1(Request $request): Response
    {
        $dataProvider = new EgovDataProvider($this->client, 'astana_kalasynyn_kylmystyk_kuk1', 'v1');
        $query = new Query();
        $query->page(1);
        $query->perPage(2);
        $query->where('hard_code', '1');
        $collection = $dataProvider->findAll($query);
        $this->printObject($collection);
        return $this->renderDefault();
    }

    public function dataProviderWhereHardCode2(Request $request): Response
    {
        $dataProvider = new EgovDataProvider($this->client, 'astana_kalasynyn_kylmystyk_kuk1', 'v1');
        $query = new Query();
        $query->page(1);
        $query->perPage(2);
        $query->where('hard_code', '2');
        $collection = $dataProvider->findAll($query);
        $this->printObject($collection);
        return $this->renderDefault();
    }
}
