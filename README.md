# Oikos Stats

Site de estatísticas eleitorais sobre as eleições distritais de 2022 no Distrito Federal, com dados públicos tratados em R e visualizações estáticas e interativas.

🔗 **Site:** https://israelcoffee.github.io/OikosStats/index.html

> ⚠️ **Projeto em desenvolvimento.** Algumas seções (gráficos interativos, ranking de Instagram, carrossel de deputados) ainda estão sendo implementadas.

## Sobre o projeto

O Oikos Stats nasceu da vontade de entender melhor como funcionam as eleições no Distrito Federal — quem vota em quem, onde os votos se concentram e o que acontece depois que o mandato começa. A ideia é reunir, num só lugar, estatísticas eleitorais, gastos parlamentares e um comparativo entre promessas de campanha e leis efetivamente aprovadas.

É um projeto pessoal, fora do contexto acadêmico, criado para praticar todo o fluxo de um produto de dados: da limpeza da base bruta até a publicação de um site navegável.

## O que o site traz

- **Estatísticas eleitorais**: ranking de deputados distritais mais votados em 2022, distribuição de votos e distribuição de votos por Região Administrativa.
- **Deputados Distritais**: página individual por deputado(a), com mapa coroplético dos votos por região.
- **Índice de Produtividade** *(planejado)*: comparação entre promessas de campanha e leis efetivamente aprovadas.
- **Gastos** *(planejado)*: painel de gastos parlamentares.
- **Notícias** *(planejado)*: curadoria de notícias relacionadas.

## Stack e arquitetura

- **Tratamento de dados**: R (dplyr, ggplot2) — limpeza da base do TSE, mapeamento de zonas eleitorais para Regiões Administrativas, cálculo de indicadores por candidato.
- **Visualizações**: gráficos estáticos com `ggsave()` (ggplot2) e interativos com `htmlwidgets`/Plotly, exportados como HTML e embutidos via `<iframe>`.
- **Mapas**: mapas coropléticos por deputado, construídos com shapefiles do IPEDF/Codeplan (`sf`, `st_simplify()` para otimização).
- **Front-end**: HTML, CSS e JavaScript puro (sem framework), publicado via GitHub Pages.

### Estrutura de pastas

```
OikosStats/
├── index.html                   # página inicial
├── pages/                       # páginas internas (estatísticas, distritais, gastos, etc.)
├── graficos-interativos/        # HTML dos gráficos Plotly/htmlwidgets, embutidos via iframe
├── graficos-estaticos/          # imagens geradas em R (ggplot2)
├── estilo/                      # CSS
├── javascript/                  # scripts de interação das páginas
└── imagens/                     # logos e ilustrações
```

## Fonte dos dados

Dados eleitorais de 2022 (Deputados Distritais do DF), tratados a partir da Base dos Dados (dados já tratados do TSE), e shapefiles das Regiões Administrativas do DF via IPEDF/Codeplan.

## Autor

Israel Lisbôa — estudante de Ciências Econômicas (UDF), com foco em análise de dados aplicada a temas públicos e eleitorais.

[LinkedIn](https://www.linkedin.com/in/israel-lisb%C3%B4a-b02497351/) · [GitHub](https://github.com/IsraelCoffee)