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

QA repository guard passou: estrutura minima, docs e rotas criticas estao consistentes.

> sibisc@1.0.0 build
> vite build

vite v8.0.0 building client environment for production...
transforming...OK 81 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.65 kB │ gzip:  0.40 kB
dist/assets/index-DJSQs74D.css   31.10 kB │ gzip:  6.63 kB
dist/assets/index-B8ii5_kB.js   281.99 kB │ gzip: 87.30 kB

OK built in 348ms
```

## Conclusao

O projeto SIBiSC esta com a estrutura minima, documentos e rotas criticas consistentes, e o build de produção foi gerado com sucesso.

