function entrar() {
    var nome = document.getElementById("Nome").value

        if((nome == "") || (nome == " ")){
            alert("Nome não informado!")
        }else{
            window.location.href = "cardapio.html?name=" + nome
        }
}