function conteudo(){
	var str;
	var v = document.getElementById('p1');

	for(var i in v){
		//i = indice	v = valores
		str = str + i + " : " + v[i]+"<br>";	//escreve no documento
	}
	document.write(str);
}
