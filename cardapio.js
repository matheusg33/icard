var itens = JSON.parse(localStorage.getItem("itens"))??[]

function additem(id) {

    var nome = document.getElementById(`prato_${id}`).innerHTML
    var qtd = Number(document.getElementById(`qtd_${id}`).value)
    var valor = parseFloat(document.getElementById(`price_${id}`).value).toFixed(2)
    var block = false

    if(qtd <= 0)
        alert("Informe a quantidade, por favor")
    else{
        itens.forEach(element => {
            if(element.nome == nome){
                alert("produto já adicionado no carrinho")
                block = true
            }
        })
        if(block != true){
            itens.push({"nome": nome, "qtd": qtd, "valor": valor})
            localStorage.setItem("itens", JSON.stringify(itens))
        }
    }
}

function finalizar_ped(){
    window.location.href = "carrinho.html"
}







