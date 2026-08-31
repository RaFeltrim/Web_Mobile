# Links do Projeto SIBiSC

## Repositório

https://github.com/RaFeltrim/sibisc-hub-cultural

## Deploy Vercel

https://sibisc-hub-cultural.vercel.app/

Este link deve ser usado para a medicao de acessibilidade com Lighthouse/axe.

## Quality Gate

O projeto possui scripts locais de validação em `package.json`:

- `npm run check`
- `npm run qa:repo`
- `npm run qa:ci`

## CI/CD

O workflow de qualidade esta configurado no repositório `Web_Mobile`, na pasta:

`.github/workflows/qa-gate.yml`

Esse workflow executa validacoes de repositório e build do frontend com `working-directory: SIBiSC`.

