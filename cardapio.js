var itens = JSON.parse(localStorage.getItem("itens"))??[]

function additem(id) {

    var nome = document.getElementById(`prato_${id}`).innerHTML
    var qtd = Number(document.getElementById(`qtd_${id}`).value)
    var valor = parseFloat(document.getElementById(`price_${id}`).value).toFixed(2)

    if(qtd.value == true){
        console.log(itens)
        itens.push({"nome": nome, "qtd": qtd, "valor": valor})

        localStorage.setItem("itens", JSON.stringify(itens))
    } else{
        //qtd.style.borderColor = "red"
        alert("Informe a quantidade, por favor")
    }
}










