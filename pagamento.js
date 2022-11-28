function pagamento (forma_pagmt){
    var dinheiro = window.document.getElementById("dinheiro").value
    var pix = window.document.getElementById("pix").value
    var debito = window.document.getElementById("debito").value
    var credito = window.document.getElementById("credito").value

    window.location.href = "pagamento2.html?forma_pagmt=" + forma_pagmt
}

function exec_card(){

    var itens = JSON.parse(localStorage.getItem("itens"))
    var total_price = 0

    itens.forEach(element => {
        total_price = parseFloat(total_price) + (parseFloat(element.valor) * (element.qtd))
    });
    document.getElementById("copy").innerHTML = `R$ ${total_price.toFixed(2)}`
}

exec_card()