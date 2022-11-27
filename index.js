function entrar() {
    var nome = document.getElementById("Nome").value

        if((nome == "") || (nome == " ")){
            Nome.style.borderColor = "red"
            alert("Nome não informado!")
        }else{
            Nome.style.borderColor = "white"
            window.location.href = "cardapio.html?name=" + nome
        }
}

function navegar(){
    window.location.href = "cardapio.html?name=" + nome
}