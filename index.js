function entrar() {
    var $nome = document.getElementById("Nome")

        if($nome.value == ""){
            alert("Nome não informado!")
        }else{
            window.location.assign('cardapio.html')
        }
}