// ==========================================
// Slider de mapas por deputado (página Estatísticas)
// ==========================================

// Lista de deputados: nome, foto e caminho do respectivo mapa interativo
// AJUSTA os caminhos abaixo conforme sua pasta real de mapas
const deputados = [
    {
        nome: "Voto Branco",
        foto: "https://i.pinimg.com/736x/8a/1d/1b/8a1d1b2e5edf46a0070ecd319f14ca8e.jpg",
        mapa: "../graficos-interativos/mapas/mapa-branco.html"
    },
    {
        nome: "Voto Nulo",
        foto: "https://i.pinimg.com/736x/8a/1d/1b/8a1d1b2e5edf46a0070ecd319f14ca8e.jpg",
        mapa: "../graficos-interativos/mapas/mapa-nulo.html"
    },
    {
        nome: "Voto Abstenção",
        foto: "https://i.pinimg.com/736x/8a/1d/1b/8a1d1b2e5edf46a0070ecd319f14ca8e.jpg",
        mapa: "../graficos-interativos/mapas/mapa-abstencao.html"
    },
    {
        nome: "Fábio Felix Silveira",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/F%C3%A1bio+Felix+-+2023-2026.jpg/f2661d4d-16ad-c0c5-80f5-6175a3c2f9cd?version=1.1&t=1740158487152&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-fabio-felix.html"
    },
    {
        nome: "Eduardo Weyne Pedrosa",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Eduardo+Pedrosa+-+2023-2026.jpg/ddcae86f-fc1c-a6a3-1457-7445f12ae55a?version=1.0&t=1740158438342&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-eduardo-weyne.html"
    },
    {
        nome: "Francisco Domingos dos Santos",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Chico+Vigilante+-+2023-2026.jpg/b2187cf2-5479-e17f-861d-8212b201ac73?version=1.0&t=1740158439023&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-francisco-domingos.html"
    },
    {
        nome: "Daniel Xavier Donizet",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Daniel+Donizet+-+2023-2026.jpg/88c38692-47c4-f811-eac5-4112e9e026b8?version=1.0&t=1740158438669&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-daniel-xavier.html"
    },
    {
        nome: "Dayse Amarilio Donetts Diniz",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Dayse+Amarilio.jpg/d884e6ff-0a4b-17c0-d1d4-8d18b845edfb?version=1.0&t=1740158439341&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-dayse-amarilio.html"
    },
    {
        nome: "Jane Klebia do Nascimento Silva Reis",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Doutora+Jane.jpg/1e8b063e-d237-70e7-2c8f-ac54f3e5ba44?version=1.0&t=1740158571217&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-jane-klebia.html"
    },
    {
        nome: "Gabriel Magno Pereira Cruz",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Gabriel+Magno.jpg/13eec123-6fcc-a743-1dfc-847c88c9adbd?version=3.0&t=1783368862559&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-gabriel-magno.html"
    },
    {
        nome: "João Hermeto de Oliveira Neto",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Hermeto+2023-2026+%2802%29.jpg/8a33f9ce-bafb-e919-f01e-a6979f364ba1?version=1.0&t=1740158485104&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-joao-hermeto.html"
    },
    {
        nome: "Iolando Almeida de Souza",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Iolando.jpg/8ccb3534-262c-af84-0084-d4861ee7a171?version=1.0&t=1783630615354&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-iolando-almeida.html"
    },
    {
        nome: "Jaqueline Angela da Silva",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/jaqueline.jpg/40e7f23e-71ff-fcda-f870-f31f328c02aa?version=1.1&t=1783630806118&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-jaqueline-angela.html"
    },
    {
        nome: "Joao Alves Cardoso",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Jo%C3%A3o+Cardoso+-+2023-2026.jpg/ce19afda-e115-c8bd-a1b4-e6b51bc206c5?version=1.0&t=1740158488484&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-joao-alves.html"
    },
    {
        nome: "Joaquim Domingos Roriz Neto",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Joaquim+Roriz+Neto.jpg/795c7a54-b3bb-b44e-003f-555b6d2da312?version=1.0&t=1740158604290&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-joaquim-domingos.html"
    },
    {
        nome: "Jorge Viana de Sousa",
        foto: "https://www.cl.df.gov.br/documents/10162/26356646/Jorge-Viana-2-sf.jpg/9aa49269-1d1e-9e94-c0d7-16db78564dff?version=1.0&t=1675287922241&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-jorge-viana.html"
    },
    {
        nome: "Marcos Martins Machado",
        foto: "https://www.cl.df.gov.br/documents/10162/26356646/Martins-Machado.jpg/a1f928b5-91cc-9cfb-4990-f6a43ba26ec5?version=1.0&t=1699894173992&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-marcos-martins.html"
    },
    {
        nome: "Max Maciel Cavalcanti",
        foto: "https://www.cl.df.gov.br/documents/10162/26356646/Max-Maciel.jpg/36b34ddd-3726-e83a-4d2d-8ef5bd588965?version=1.0&t=1672683624189&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-max-maciel.html"
    },
    {
        nome: "Daniel de Castro Sousa",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Pastor+Daniel.jpg/f14ee9c6-aa51-290e-9a34-d8377b6ca83f?version=1.0&t=1740158600472&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-daniel-de.html"
    },
    {
        nome: "Paula Moreno Paro Belmonte",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Paulo+Belmonte.jpg/d297da1c-48bc-7e6d-fa35-e3367553a24a?version=1.1&t=1740158485467&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-paula-moreno.html"
    },
    {
        nome: "Pedro Paulo de Oliveira",
        foto: "https://www.cl.df.gov.br/documents/10162/22349802/Pepa.jpg/8614b90b-7e38-1cfe-3a06-a4c85e008735?version=1.0&t=1670962513441&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-pedro-paulo.html"
    },
    {
        nome: "Ricardo Vale da Silva",
        foto: "https://www.cl.df.gov.br/documents/26233334/0/Ricardo-vale_tratadaC.jpg/679d9c1a-9770-118b-5511-0edb8802676a?version=1.1&t=1699882216846&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-ricardo-vale.html"
    },
    {
        nome: "Robério Bandeira de Negreiros Filho",
        foto: "https://www.cl.df.gov.br/documents/10162/33267976/rob%C3%A9rio.jpg/fa782200-a517-f37a-5a31-eed7f608c1e5?version=1.0&t=1740158412737&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-roberio-bandeira.html"
    },
    {
        nome: "Bernardo Rogério Mata de Araújo Junior",
        foto: "https://www.cl.df.gov.br/documents/10162/22349802/Rog%C3%A9rio+Morro+da+Cruz.jpg/211ece5e-f22e-f67c-2c55-2acc7b2ff5a5?version=1.0&t=1744844221427&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-bernardo-rogerio.html"
    },
    {
        nome: "Roosevelt Vilela Pires",
        foto: "https://www.cl.df.gov.br/documents/10162/25630419/foto_deputado_roosevelt_vilela.jpg/6d13aa62-3d0e-0ad8-6e36-c7bcfe71de7e?version=1.0&t=1649790382520&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-roosevelt-vilela.html"
    },
    {
        nome: "Thiago de Araújo Macieira Manzoni",
        foto: "https://www.cl.df.gov.br/documents/10162/33185635/Thiago+Manzoni.jpg/14fc2a61-eae1-fb75-6869-31ecec609cac?version=1.1&t=1740158488041&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-thiago-de.html"
    },
    {
        nome: "Wellington Luiz de Souza Silva",
        foto: "https://www.cl.df.gov.br/documents/10162/26356646/Wellington-Luis-2.jpg/b793d722-2647-1f3d-5037-5c906f481afe?version=1.0&t=1699894348953&download=true&imageThumbnail=3",
        mapa: "../graficos-interativos/mapas/mapa-wellington-luiz.html"
    }
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

// ==========================================
// Revelação do voto mais votado (página Estatísticas)
// ==========================================
const btnRevelar = document.getElementById("btn-revelar");
const resultadoRevelacao = document.getElementById("resultado-revelacao");

if (btnRevelar) {
    btnRevelar.addEventListener("click", () => {
        resultadoRevelacao.classList.add("visivel");
        btnRevelar.classList.add("escondido");
    });
}

// ==========================================
// Proteção de scroll no mapa (evita "prender" o zoom da página)
// ==========================================
const mapaWrapper = document.querySelector(".mapa-protegido");
const mapaOverlay = document.querySelector(".mapa-overlay");

if (mapaWrapper && mapaOverlay) {
    // Clique na camada: libera a interação com o mapa
    mapaOverlay.addEventListener("click", () => {
        mapaWrapper.classList.add("ativo");
    });

    // Mouse saiu da área do mapa: volta a bloquear
    mapaWrapper.addEventListener("mouseleave", () => {
        mapaWrapper.classList.remove("ativo");
    });
}

