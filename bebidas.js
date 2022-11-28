var itens = JSON.parse(localStorage.getItem("itens"))??[]

function additem(id) {
    var nome = document.getElementById(`bebida_${id}`).innerHTML
    var qtd = Number(document.getElementById(`qtd_${id}`).value)
    var valor = parseFloat(document.getElementById(`price_${id}`).value).toFixed(2)

    if(qtd <= 0)
        alert("Informe a quantidade, por favor")
    else{
        console.log(itens)
        itens.push({"nome": nome, "qtd": qtd, "valor": valor})

        localStorage.setItem("itens", JSON.stringify(itens))
    }
}

function finalizar_ped(){
    if(itens == null)
        alert("Seu carrinho está vazio. Selecione produtos")

    window.location.href = "carrinho.html"
}