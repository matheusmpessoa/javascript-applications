function tabelar(){
    var tabela = "<table border=1><thead><tr><th>ID</th><th>Produto</th></tr></thead><tbody>";
    var list = document.getElementsByTagName("ul")[0];
    var li = list.getElementsByTagName("li");
    for(var i=0;i<li.length;i++){
        tabela = tabela + "<tr><td>" + i + "</td><td>" + li[i].innerHTML + "</td></tr>";
    }
    tabela = tabela + "</tbody></table>";
    document.write(tabela);
}
