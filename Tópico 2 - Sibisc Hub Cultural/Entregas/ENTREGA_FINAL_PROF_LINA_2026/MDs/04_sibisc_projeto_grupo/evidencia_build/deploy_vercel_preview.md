# Evidência de Deploy - Vercel

## Contexto

O deploy do SIBiSC foi realizado na Vercel para permitir a execução da analise de acessibilidade em uma URL pública.

## Configuração Aplicada

Foi criado o arquivo `SIBiSC/vercel.json` com:

- framework: `vite`
- build command: `npm run build`
- output directory: `dist`
- rewrite SPA: `/(.*)` para `/index.html`

Essa configuração evita erro `404: NOT_FOUND` em aplicacoes React/Vite com React Router.

## Resultado do Deploy

Status: **READY**

URL principal:

<https://sibisc-hub-cultural.vercel.app/>

Production deployment URL:

<https://sibisc-hub-cultural-ewpc8a26k-rafeltrims-projects.vercel.app>

Inspector URL:

<https://vercel.com/rafeltrims-projects/sibisc-hub-cultural/3e85KDNoTRKANQHEdfXW94NY9N4m>

## Observação

O primeiro erro `404: NOT_FOUND` era consistente com configuração incorreta de deploy no Vercel, especialmente root/build/output ou ausencia de rewrite para SPA. A configuração foi corrigida e promovida para produção; o alias oficial `https://sibisc-hub-cultural.vercel.app/` passou a responder corretamente.

