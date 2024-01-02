
<pre id="signature"><code></code></pre>

<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.7.0/polyfill.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/asmCrypto/2.3.2/asmcrypto.all.es5.min.js"></script>
<script src="https://cdn.rawgit.com/indutny/elliptic/master/dist/elliptic.min.js"></script>
<script src="https://unpkg.com/webcrypto-liner@1.1.2/build/webcrypto-liner.shim.min.js"></script>
<script src="https://unpkg.com/xadesjs@2.0.16/build/xades.js"></script>-->

<script>
    <?= file_get_contents(__DIR__ . '/assets/js/polyfill.min.js') ?>
</script>
<script>
    <?= file_get_contents(__DIR__ . '/assets/js/asmcrypto.all.es5.min.js') ?>
</script>
<script>
    <?= file_get_contents(__DIR__ . '/assets/js/elliptic.min.js') ?>
</script>
<script>
    <?= file_get_contents(__DIR__ . '/assets/js/webcrypto-liner.shim.min.js') ?>
</script>
<script>
    <?= file_get_contents(__DIR__ . '/assets/js/xades.js') ?>
</script>

<script type="text/javascript">
    "use strict";

    var xmlString = '<?= str_replace(["'", PHP_EOL], ["\'", '\n'], file_get_contents(__DIR__ . '/assets/xml/original.xml')) ?>';
    var signedDocument = XAdES.Parse(xmlString);
    var xmlSignature = signedDocument.getElementsByTagNameNS("http://www.w3.org/2000/09/xmldsig#", "Signature");
    var signedXml = new XAdES.SignedXml(signedDocument);
    signedXml.LoadXml(xmlSignature[0]);
    signedXml.Verify()
        .then(function (signedDocument) {
            var res = (signedDocument ? "Valid" : "Invalid") + " signature";
            document.getElementById("signature").textContent = res;
            console.log(res);
        })
        .catch(function (e) {
            var res = e.message;
            document.getElementById("signature").textContent = res;
            console.log(res);
        });

</script>
