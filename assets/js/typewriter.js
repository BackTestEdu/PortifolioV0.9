/**
 * Typewriter - Um script para exibir texto de forma lenta, como uma máquina de escrever.
 *
 * Autor: Eduardo Gabriel
 * Data de Atualização: 13/11/23 8:40
 *
 * Descrição:
 * Este script fornece uma função para simular o efeito de uma máquina de escrever,
 * exibindo um texto de forma lenta, caractere por caractere.
 *
 * Uso: 
*/
document.addEventListener('DOMContentLoaded', function () {
    var intervalo = 10000; // Intervalo em milissegundos (por exemplo, 10 segundos)

    var paragrafoOriginal = document.getElementById('formation');
    

    function reescreverTexto() {
        // Obtém o conteúdo original
        var textoOriginal = paragrafoOriginal.textContent;
        
        // Limpa a seção  secao.innerHTML = secao;
        paragrafoOriginal.innerHTML = "";

        // Cria um novo parágrafo
        var novoParagrafo = document.createElement('p');
        paragrafoOriginal.appendChild(novoParagrafo);
        blinkCursor();
        // Inicia a reescrita
        for (var i = 0; i < textoOriginal.length; i++) {
            (function (i) {
                setTimeout(function () {
                    novoParagrafo.textContent += textoOriginal.charAt(i);
                }, i * 100); // Intervalo de 100 milissegundos entre caracteres
            })(i);
        }
        
    }

    // Chama a função inicialmente
    reescreverTexto();

    // Chama a função a cada intervalo
    setInterval(reescreverTexto, intervalo);
});

function blinkCursor() {
    var cursor = document.getElementById('cursor');
    setInterval(function() {
      cursor.style.opacity = (cursor.style.opacity === '0') ? '1' : '0';
    }, 700);
  }


