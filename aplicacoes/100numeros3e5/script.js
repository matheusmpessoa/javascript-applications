function loveJsSwitch() {
    // for em que é definido o limite dos números que serão exibidos
    for (var i = 0; i <= 100; i++) {
        switch (true) {

        case i % 3 == 0 && i % 5 == 0:
            // Se for multiplo de 3 e 5
            console.log("ILoveJavaScript");
            break;
        case i % 3 == 0:
            // Se for multiplo de 3
            console.log("ILove");
            break;

        case i % 5 == 0:
            // Se for multiplo de 5
            console.log("JavaScript");
            break;

        default:
            console.log(i);
            break;
        }

        // exibicao de console na tela
        window.console = {
            log: function (str) {
                var node = document.createElement("div");
                node.appendChild(document.createTextNode(str));
                document.getElementById("showConsoleLog").appendChild(node);
            }
        }
    }
}
