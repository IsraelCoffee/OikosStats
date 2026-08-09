// ==========================================
// Slider de mapas por deputado (página Estatísticas)
// ==========================================

// Lista de deputados: nome, foto e caminho do respectivo mapa interativo
// AJUSTA os caminhos abaixo conforme sua pasta real de mapas
const deputados = [
    {
        nome: "Fábio Felix Silveira",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/F%C3%A1bio+Felix+-+2023-2026.jpg/f2661d4d-16ad-c0c5-80f5-6175a3c2f9cd?version=1.1&t=1740158487152&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-fabio-felix.html"
    },
    {
        nome: "Eduardo Weyne Pedrosa",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Eduardo+Pedrosa+-+2023-2026.jpg/ddcae86f-fc1c-a6a3-1457-7445f12ae55a?version=1.0&t=1740158438342&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-eduardo-weyne.html"
    }
    
    // ... continua pros outros 22, seguindo o mesmo padrão { nome, foto, mapa }
];

let indiceAtual = 0;

// Referências aos elementos do slider
const sliderFoto = document.getElementById("slider-foto");
const sliderNome = document.getElementById("slider-nome");
const sliderIframe = document.getElementById("slider-iframe");
const btnAntes = document.getElementById("btn-antes");
const btnProximo = document.getElementById("btn-proximo");

// Atualiza a foto, nome e iframe de acordo com o índice atual
function atualizarSlider() {
    const dep = deputados[indiceAtual];

    sliderFoto.src = dep.foto;
    sliderFoto.alt = "Foto de " + dep.nome;
    sliderNome.textContent = dep.nome;
    sliderIframe.src = dep.mapa;

    // Desabilita "Antes" no primeiro item e "Próximo" no último
    // (remove essas duas linhas se preferir que o slider dê a volta, tipo carrossel infinito)
    btnAntes.disabled = indiceAtual === 0;
    btnProximo.disabled = indiceAtual === deputados.length - 1;
}

// Botão "Próximo": avança um deputado, sem passar do último
btnProximo.addEventListener("click", () => {
    if (indiceAtual < deputados.length - 1) {
        indiceAtual++;
        atualizarSlider();
    }
});

// Botão "Antes": volta um deputado, sem passar do primeiro
btnAntes.addEventListener("click", () => {
    if (indiceAtual > 0) {
        indiceAtual--;
        atualizarSlider();
    }
});

// Mostra o primeiro deputado assim que a página carrega
if (sliderFoto) {
    atualizarSlider();
}