function exibir(){
    var li = document.getElementsByTagName('li');	//atribui a tag <li> para a variavel li
    var soma = 0;	//var soma tem o valor de 0 para começar iniciar em zero
    for(var i=0;i<li.length;i++){	//percorre o array
        soma += parseFloat(li[i].innerHTML);
        alert(soma);
        //alerta o resultado passo-a-passo
    }
}

function somarTotal(){
    var li = document.getElementsByTagName('li');	//atribui a tag 'li' para a variavel li
    var soma = 0;	//var soma tem o valor de 0 para começar iniciar em zero
    for(var i=0;i<li.length;i++){	//percorre o array
        soma += parseFloat(li[i].innerHTML); //var soma acumulara o resultado de todas as posicoes do conteudo da tag li
    }
    alert("O resultado total é: " + soma);
    //o for é executado ate o fim e o alert vem após sair do for
}

/*
Solução 2
Calculando através de diferentes variaveis

function somar(){
    var lis = document.getElementsByTagName('li');
    var soma = 0;
    for (var i=0; i < lis.length;i++){
        var li = lis[i];
        var num = parseInt(li.innerHTML);
        soma = soma + num;
    }
    alert(soma);
}
*/
