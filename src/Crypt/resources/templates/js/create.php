
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
    // Generate RSA key pair
    var privateKey, publicKey;
    window.crypto.subtle.generateKey(
        {
            name: "ECDSA",
            namedCurve: "P-256"
        },
        false, //whether the key is extractable (i.e. can be used in exportKey)
        ["sign", "verify"] //can be any combination of "sign" and "verify"
    )
        .then(function (keyPair) {
            // Push ganerated keys to global variable
            privateKey = keyPair.privateKey;
            publicKey = keyPair.publicKey;
            // Call sign function
            var xmlString = '<player bats="left" id="10012" throws="right">\n\t<!-- Here\'s a comment -->\n\t<name>Alfonso Soriano</name>\n\t<position>2B</position>\n\t<team>New York Yankees</team>\n</player>';
            return SignXml(xmlString, keyPair, { name: "ECDSA", hash: { name: "SHA-1" } });
        })
        .then(function (signedDocument) {
            document.getElementById("signature").textContent = signedDocument;
            console.log("Signed document:\n\n", signedDocument);
        })
        .catch(function (e) {
            console.error(e);
        });

    function SignXml(xmlString, keys, algorithm) {
        var signedXml;
        return Promise.resolve()
            .then(() => {
            var xmlDoc = XAdES.Parse(xmlString);
        signedXml = new XAdES.SignedXml();

        return signedXml.Sign(               // Signing document
            algorithm,                              // algorithm
            keys.privateKey,                        // key
            xmlDoc,                                 // document
            {                                       // options
                keyValue: keys.publicKey,
                references: [
                    { hash: "SHA-256", transforms: ["enveloped"] }
                ],
                productionPlace: {
                    country: "Country",
                    state: "State",
                    city: "City",
                    code: "Code",
                },
                signerRole: {
                    claimed: ["Some role"]
                }
            })
    })
    .then(() => signedXml.toString());
    }
</script>
