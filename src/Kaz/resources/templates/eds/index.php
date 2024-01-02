<?php ?>

<ul class="nav nav-tabs" id="edsTab">
    <li class="nav-item">
        <a href="#edsAuth" class="nav-link active" data-toggle="tab">Вход по ЭЦП</a>
    </li>
    <li class="nav-item">
        <a href="#edsSignXmlDoc" class="nav-link" data-toggle="tab">Сгенерировать и подписать XML-документ ЭЦП</a>
    </li>
</ul>
<div class="tab-content border border-top-0 rounded-bottom p-3" id="edsTabContent">
    <div class="tab-pane fade text-center show active" id="edsAuth">
        <div class="card mb-3 d-none" id="resultCardAuth">
            <div class="card-body" id="resultCardBodyAuth"></div>
        </div>
        <button class="btn btn-success btn-lg" id="signAndAuth" type="button">Выбрать сертификат</button>
    </div>
    <div class="tab-pane fade" id="edsSignXmlDoc">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Содержание</th>
                    <th>Действие</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td><input class="form-control" id="tableNameField" type="text" placeholder="Введите название" /></td>
                    <td><textarea class="form-control" id="tableContentField" rows="1" placeholder="Введите содержание"></textarea></td>
                    <td><button class="btn btn-success btn-block" id="tableAddRow" type="button">Добавить</button></td>
                </tr>
            </tfoot>
            <tbody id="tableBody"></tbody>
        </table>
        <div class="card mb-3 d-none" id="resultCard">
            <div class="card-body">
                <div class="row">
                    <div class="col" id="resultCardBodyPerson"></div>
                    <div class="col" id="resultCardBodyAlerts"></div>
                </div>
                <hr />
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseXml">Показать XML</button>
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseQr">Показать QR</button>
                <a href="#" target="_blank" class="btn btn-link" id="openPdf">Открыть PDF</a>
                <div class="collapse" id="collapseXml"><pre class="prettyprint lang-xml"></pre></div>
                <div class="collapse" id="collapseQr"></div>
            </div>
        </div>
        <div class="d-flex">
            <button class="btn btn-success ml-auto" id="signXmlDoc" type="button">Выбрать сертификат и подписать</button>
        </div>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<script>
    <?= file_get_contents(__DIR__ . '/../../templates/eds/assets/js/prettify.js') ?>
</script>

<script>
    <?= file_get_contents(__DIR__ . '/../../templates/eds/assets/js/ncalayer-client.js') ?>
</script>

<!--<script src="/node_modules/code-prettify/loader/prettify.js"></script>-->
<!--<script src="/node_modules/ncalayer-js-client/ncalayer-client.js"></script>-->

<script>

    // Sign xml
    async function signXml(xml, keyType = 'SIGNATURE') {
        const ncalayerClient = new NCALayerClient();
        try {
            await ncalayerClient.connect();
        } catch (error) {
            console.log(`Не удалось подключиться к NCALayer: ${error.toString()}`);
            return null;
        }
        let activeTokens;
        try {
            activeTokens = await ncalayerClient.getActiveTokens();
        } catch (error) {
            console.log(error.toString());
            return null;
        }
        const storageType = activeTokens[0] || NCALayerClient.fileStorageType;
        let signedXml;
        try {
            signedXml = await ncalayerClient.signXml(storageType, xml, keyType);
        } catch (error) {
            console.log(error.toString());
            return null;
        }
        return signedXml;
    }

    $(function() {

        // EDS AUTH ----------------------------------------------------------------------------------------------------

        // Sign and auth
        $('#signAndAuth').on('click', () => {
            $.get(
                'http://0.0.0.0:8000/sandbox/kaz/eds-get-auth-xml',
                {},
                data => {
                    // console.log(data);
                    const signedAuthXml = signXml(data.authXml, 'AUTHENTICATION');
                    signedAuthXml.then(result => {
                        // console.log(result);
                        $.post(
                            'http://0.0.0.0:8000/sandbox/kaz/eds-check-auth-xml',
                            { signedAuthXml: result },
                            data => {
                                // console.log(data);
                                if (!(Object.keys(data.personData).length === 0)) {
                                    $('#resultCardBodyAuth').html(`
                                        <h6>${data.personData.surname}</h6>
                                        <h6>${data.personData.name}</h6>
                                        <h6>${data.personData.patronymic}</h6>
                                        <h6>${data.personData.code}</h6>
                                        <h6>${data.personData.email}</h6>
                                    `);
                                    $('#resultCardAuth').removeClass('d-none');
                                    $('#signAndAuth').addClass('d-none');
                                } else alert('Ошибка авторизации');
                            }
                        );
                    });
                }
            );
        });

        // EDS SIGN XML DOC --------------------------------------------------------------------------------------------

        // Add table row
        $('#tableAddRow').on('click', () => {
            const tableNameVal = $('#tableNameField').val();
            const tableContentVal = $('#tableContentField').val();
            if (tableNameVal && tableContentVal) {
                $('#tableBody').append(`
                    <tr>
                        <td class="table-name">${tableNameVal}</td>
                        <td class="table-content">${tableContentVal}</td>
                        <td><button class="btn btn-danger btn-block" id="tableDeleteRow" type="button">Удалить</button></td>
                    </tr>
                `);
            }
        });

        // Delete table row
        $('#tableBody').on('click', '#tableDeleteRow', function() {
            $(this).parent().parent().remove();
        });

        // Sign XML doc
        $('#signXmlDoc').on('click', () => {
            const names = [];
            const contents = [];
            $('#tableBody td').each((index, element) => {
                if ($(element).hasClass('table-name')) names.push($(element).text());
                if ($(element).hasClass('table-content')) contents.push($(element).text());
            });
            let dataForXml = null;
            if ((names.length > 0) && (contents.length > 0)) {
                dataForXml = { root: Object.assign(...names.map((k, i) => ({ [k]: contents[i] }))) };
            }
            // console.log(dataForXml);
            if (dataForXml) {
                $.post(
                    'http://0.0.0.0:8000/sandbox/kaz/eds-main-generate-xml-doc',
                    dataForXml,
                    data => {
                        // console.log(data);
                        const signedXmlDoc = signXml(data.xmlDoc);
                        signedXmlDoc.then(result => {
                            // console.log(result);
                            $.post(
                                'http://0.0.0.0:8000/sandbox/kaz/eds-verify-signed-xml-doc',
                                { signedXmlDoc: result },
                                data => {
                                    // console.log(data);
                                    const getAlertClass = validationMessage => (~validationMessage.indexOf('validated')) ? 'alert-success' : 'alert-danger';
                                    $('#resultCardBodyPerson').html(`
                                        <h6>${data.personData.surname}</h6>
                                        <h6>${data.personData.name}</h6>
                                        <h6>${data.personData.patronymic}</h6>
                                        <h6>${data.personData.code}</h6>
                                        <h6>${data.personData.email}</h6>
                                    `);
                                    $('#resultCardBodyAlerts').html(`
                                        <div class="alert ${getAlertClass(data.digest)}">${data.digest}</div>
                                        <div class="alert ${getAlertClass(data.signature)}">${data.signature}</div>
                                        <div class="alert ${getAlertClass(data.certificateSignature)}">${data.certificateSignature}</div>
                                        <div class="alert ${getAlertClass(data.certificateDate)}">${data.certificateDate}</div>
                                    `);
                                    $('#collapseXml').find('.prettyprint').text(result).html();
                                    $('#collapseQr').html(data.qr);
                                    $('#openPdf').attr('href', data.pdfFileUrl);
                                    $('#resultCard').removeClass('d-none');
                                    PR.prettyPrint();
                                }
                            );
                        });
                    }
                );
            } else alert('Введите данные');
        });

    });

</script>