function pagamento (forma_pagmt) {
    console.log(forma_pagmt)
    var dinheiro = window.document.getElementById("dinheiro").value
    var pix = window.document.getElementById("pix").value
    var debito = window.document.getElementById("debito").value
    var credito = window.document.getElementById("credito").value
    console.log(text)

    window.location.href = "pagamento2.html?forma_pagmt" + forma_pagmt
}

