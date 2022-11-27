
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