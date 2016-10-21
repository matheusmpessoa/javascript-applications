function calcularIMC() {
    var peso = parseFloat(document.forms.form1.peso.value);
    var altura = parseFloat(document.forms.form1.altura.value);

    var imc = peso / (altura * altura);
    if (imc < 18) {
        alert(imc + " Abaixo do peso");
    } else {
        if (imc >= 18 && imc < 25) {
            alert(imc + " Peso normal");
        } else {
            alert(imc + " Acima do peso");
        }
    }

    document.getElementById('p1').innerHTML = imc.toFixed(2);
}
