function autenticar() {
    var nome = document.forms.form1.nome.value;
    var idade = document.forms.form1.idade.value;

    if (nome == "" || idade < 18 || idade == "") {
        //isNaN(idade) tambem bloquearia a entrada
        alert("Sai fora");
        window.open("erro.html", "");
        return false;
    } else {
        window.open("sucesso.html", "");
        return true;
    }
}
