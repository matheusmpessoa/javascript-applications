function colorir() {
    //Seleciona a primeira tag encontrada no documento
    var h1 = document.querySelector("h1");
    h1.style.color = "Green";

    //# indica a id p3
    var p = document.querySelector("#p3");
    p.style.color = "Red";

    //indica a tag h2
    var h2 = document.querySelector("h2");
    h2.style.color = "Blue";

    //todos os p e span ficarem vermelho
    var ps = document.querySelectorAll("p,span");
    for (var i = 0; i < ps.length; i++) {
        ps[i].style.color = "#0F0";
    }
}

function vermelhar() {
    var v = document.querySelectorAll("span,h1,h2,p,h5");
    for (var i = 0; i < v.length; i++) {
        v[i].style.color = "Red";
    }

    var v1 = document.querySelector("#p3");
    v1.style.color = "Blue";
}

function esverdear() {
    var s = document.querySelectorAll("p,h2");
    for (var i = 0; i < s.length; i++) {
        s[i].style.color = "Green";
    }
}

function inputValor() {
    var inp = document.querySelector("#t1");
    inp.value = "Valor Inicial";
}
