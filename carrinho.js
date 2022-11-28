function exec_card(){

    var itens = JSON.parse(localStorage.getItem("itens"))
    console.log(itens)
    var tabela = document.getElementById("carrinho")
    var total_price = 0

    itens.forEach(element => {
        pula_tbl_carrinho(tabela, element.nome, element.qtd, element.valor)
        total_price = parseFloat(total_price) + (parseFloat(element.valor) * (element.qtd))
    });

    document.getElementById("total_price").innerHTML = `R$${total_price.toFixed(2)}`
}

function pula_tbl_carrinho(tabela, nome, qtd, valor) {

    var coluna1 = document.createElement('td')
    var coluna2 = document.createElement('td')
    var coluna3 = document.createElement('td')
    var coluna4 = document.createElement('td')
    var linha = document.createElement('tr')

    valor = valor * qtd

    coluna1.innerHTML = `${nome}`
    coluna2.innerHTML = `${qtd}`
    coluna3.innerHTML = `R$ ${valor.toFixed(2)}`
    coluna4.innerHTML = `<button class='remove-btn' onclick='remover("${nome}")'>Remover</button>`

    linha.appendChild(coluna1)
    linha.appendChild(coluna2)
    linha.appendChild(coluna3)
    linha.appendChild(coluna4)
    tabela.appendChild(linha)
}

function remover(nome){

	var itens = JSON.parse(localStorage.getItem('itens'));
    var itens_filtrados = itens.filter(function (item){
        return item.nome != nome
    })
    console.log(itens_filtrados)
    
    localStorage.removeItem("itens")
    localStorage.setItem("itens", JSON.stringify(itens_filtrados))
    var tabela = document.getElementById("carrinho").innerHTML = ''

    exec_card()
}

exec_card() //sempre ultima linha
