# Cálculo Visual II

Protótipo de uma plataforma web de Cálculo Diferencial e Integral II com:

- trilha de conteúdos;
- simulação local de Soma de Riemann;
- visualização da derivada;
- aproximação por Taylor;
- exercícios com feedback imediato;
- progresso salvo no `localStorage`;
- GeoGebra incorporado via `deployggb.js`.

## Como executar

A forma mais simples é servir a pasta com um servidor local. Em Python:

```bash
cd calculo-visual-ii
python -m http.server 5500
```

Depois abra:

```text
http://localhost:5500
```

Também é possível abrir `index.html` diretamente, mas alguns navegadores podem aplicar restrições diferentes a recursos externos. O GeoGebra é carregado pela internet.

## Arquivos

- `index.html` — estrutura da aplicação.
- `styles.css` — identidade visual e responsividade.
- `app.js` — interações, simulações, exercícios, progresso e integração com GeoGebra.

## GeoGebra

O site usa a biblioteca oficial de incorporação do GeoGebra. A documentação oficial descreve o carregamento de `deployggb.js`, a criação de `GGBApplet` e a injeção do applet em um elemento da página.

Para publicar uma versão acadêmica definitiva, recomenda-se criar materiais próprios no GeoGebra e substituir as construções genéricas por atividades/applet IDs específicos.
