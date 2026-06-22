# Evidência De Execução - `npm run qa:ci`

## Contexto

Comando executado dentro da pasta:

`Web_Mobile/SIBiSC`

Comando:

`npm run qa:ci`

## Resultado

Status: **aprovado**

O quality gate local executou com sucesso:

- `npm run qa:repo`
- `npm run build`

## Saida Relevante

```text
> sibisc@1.0.0 qa:ci
> npm run qa:repo && npm run build

> sibisc@1.0.0 qa:repo
> node ./scripts/qa-guard.mjs

QA repository guard passou: estrutura minima, docs, rotas criticas e IDs canonicos estao consistentes.

> sibisc@1.0.0 build
> vite build

vite v8.0.0 building client environment for production...
transforming...✓ 128 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   1.00 kB │ gzip:   0.59 kB
dist/assets/index-AvKy8C8D.css   46.31 kB │ gzip:   9.07 kB
dist/assets/index-DygO8pw-.js   483.11 kB │ gzip: 140.00 kB

✓ built in 371ms
```

## Conclusao

O projeto SIBiSC esta com a estrutura minima, documentos, rotas criticas e IDs canonicos consistentes, e o build de produção foi gerado com sucesso.
