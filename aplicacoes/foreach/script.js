//array
var arr = [100, 200, 300, 400, 500, 'true'];

//variavel vazia
var temp = '';

//utilizando forEach
//callback function(elem,indice){} ou seja o elemento e chave deste elemento dentro do array
arr.forEach(function (elem, indice) {

    //adição da variavel temp
    temp = 'Indice: ' + indice + '\nValor : ' + elem;

    //imprimindo no console os valores
    console.log(temp);

});
