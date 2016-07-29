imagem1 = new Image();
imagem2 = new Image();
imagem3 = new Image();

imagem1.src = "img/verde.gif";
imagem2.src = "img/amarelo.gif";
imagem3.src = "img/verde.gif";

function mudaImagem(nome_imagem, caminho_arquivo) {
    document[nome_imagem].src = caminho_arquivo;
}
