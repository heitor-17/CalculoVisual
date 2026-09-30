# Cálculo Visual II — Plano Tangente e Curvas de Nível

Projeto web educacional com duas simulações GeoGebra fornecidas pelo autor:

- `simulacoes/planoTangente.ggb`
- `simulacoes/curvaNivelParaboloide.ggb`

## Executar

Não abra o `index.html` diretamente com `file://`, pois o navegador pode bloquear o carregamento do `.ggb` local.

Com Python instalado:

```bash
cd calculo-visual-ii-final
python -m http.server 5500
```

Depois abra:

`http://localhost:5500`

## Integração

O site usa o GeoGebra Apps Embed API. O parâmetro `filename` aponta para os arquivos `.ggb` dentro da pasta `simulacoes/`.

Se a plataforma for publicada em um servidor, mantenha os arquivos `.ggb` no mesmo projeto e preserve os caminhos relativos.
