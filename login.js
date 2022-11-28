
function entrar() {
    var nome = document.getElementById("Nome").value
    var mesa = document.getElementById("Mesa").value

        if(((nome == "") || (nome == " ")) && ((mesa == "") || (mesa == " "))){
            Nome.style.borderColor = "red"
            Mesa.style.borderColor = "red"
            alert("Nome e mesa não informados!")
            } else if((nome == "") || (nome == " ")){
                Nome.style.borderColor = "red"
                alert("Nome não foi informado!")
                }else if((mesa == "") || (mesa == " ")){
                    Mesa.style.borderColor = "red"
                    alert("Mesa não foi informada!")
                    } else{
                        Nome.style.borderColor = "white"
                        Mesa.style.borderColor = "white"
                        window.location.href = "cardapio.html" //"cardapio.html?name=" + nome
                        localStorage.setItem("nome", nome)
                        localStorage.setItem("mesa", mesa)
                    }
}