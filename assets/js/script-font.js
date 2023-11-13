document.addEventListener('DOMContentLoaded', function () {
    var intervalo = 3000; // Intervalo em milissegundos (por exemplo, 3 segundos)

    var paragrafoOriginal = document.getElementById('name');
    var secao = document.getElementById('info');

    function reescreverTexto() {
        // Obtém o conteúdo original
        var textoOriginal = paragrafoOriginal.textContent;

        // Limpa a seção
        secao.innerHTML = '';

        // Cria um novo parágrafo
        var novoParagrafo = document.createElement('p');
        secao.appendChild(novoParagrafo);

        // Inicia a reescrita
        for (var i = 0; i < textoOriginal.length; i++) {
            (function (i) {
                setTimeout(function () {
                    novoParagrafo.textContent += textoOriginal.charAt(i);
                }, i * 50); // Intervalo de 50 milissegundos entre caracteres
            })(i);
        }
    }

    // Chama a função inicialmente
    reescreverTexto();

    // Chama a função a cada intervalo
    setInterval(reescreverTexto, intervalo);
});

//Este exemplo usa o método setInterval para chamar a função reescreverTexto a cada intervalo definido, criando assim o efeito de reescrita periódica. Você pode ajustar o conteúdo inicial, o intervalo de reescrita e outros parâmetros conforme necessário para atender às suas necessidades.
