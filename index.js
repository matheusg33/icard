function entrar() {
    var nome = document.getElementById("Nome").value

        if((nome == "") || (nome == " ")){
            Nome.style.borderColor = "red"
            alert("Nome não informado!")
        }else{
            Nome.style.borderColor = "white"
            window.location.href = "cardapio.html" //"cardapio.html?name=" + nome
            localStorage.setItem("nome", nome)
        }
}

function additem() {
    //var tabela = document.getElementById("carrinho").querySelector("tbody")

    var nome = document.getElementsByClassName("card-title").value
    var qtd = Number(document.getElementById("qtd").value)
    var valor = Number(document.getElementById("price").value)
    var tabela = document.getElementById("carrinho")

    if(qtd.value =! 0){

        //localStorage.setItem("produto", nome)
        //localStorage.setItem("qtd", qtd)


        var coluna1 = document.createElement('td')
        var coluna2 = document.createElement('td')
        var coluna3 = document.createElement('td')
        var coluna4 = document.createElement('td')
        var linha = document.createElement('tr')

        coluna1.innerHTML = `${nome}`
        coluna2.innerHTML = `${qtd}`
        coluna3.innerHTML = `R$ ${valor.toFixed(2).replace('.', ',')}`
        coluna4.innerHTML = 'remover'

        linha.appendChild(coluna1)
        linha.appendChild(coluna2)
        linha.appendChild(coluna3)
        linha.appendChild(coluna4)
        tabela.appendChild(linha)

        document.getElementById("price").value = valor * qtd
    }
    else {
        qtd.style.borderColor = "red"
        alert("Nome não informado!")
    }
}