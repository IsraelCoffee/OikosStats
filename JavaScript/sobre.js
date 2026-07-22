// ==========================================
// Acordeão dos cards (usado na página Sobre)
// ==========================================

// Pega todos os botões que têm a classe "card-titulo"
// (cada um representa o título clicável de um card)
document.querySelectorAll('.card-titulo').forEach(botao => {

    // Adiciona um "ouvinte de clique" em cada botão
    botao.addEventListener('click', () => {

        // Pega o elemento que vem logo depois do botão no HTML
        // (no nosso caso, é a <div class="card-conteudo"> correspondente)
        const conteudo = botao.nextElementSibling;

        // Alterna (liga/desliga) a classe "ativo" no botão
        // -> isso é o que faz a seta girar (ver CSS: .card-titulo.ativo .icone-seta)
        botao.classList.toggle('ativo');

        // Alterna (liga/desliga) a classe "aberto" no conteúdo
        // -> isso é o que faz o card expandir ou recolher (ver CSS: .card-conteudo.aberto)
        conteudo.classList.toggle('aberto');
    });
});