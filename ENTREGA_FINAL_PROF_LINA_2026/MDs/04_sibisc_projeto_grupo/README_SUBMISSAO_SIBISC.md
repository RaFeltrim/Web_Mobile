# SIBiSC - Submissão do Projeto Em Grupo

## Visao Geral

O SIBiSC - Hub Cultural Digital e um projeto web desenvolvido para organizar, divulgar e facilitar o acesso a atividades culturais, eventos, oficinas, exposicoes e conteudos educativos.

O projeto foi estruturado com foco em:

- frontend moderno com Vite e React;
- organização em componentes;
- rotas para páginas publicas e areas administrativas simuladas;
- preocupacao com acessibilidade;
- documentacao de testes funcionais e de segurança;
- pipeline de qualidade com validação local e CI.

## Repositório

Repositório principal:

https://github.com/RaFeltrim/sibisc-hub-cultural

Deploy para analise:

https://sibisc-hub-cultural.vercel.app/

## Stack Técnica

- React
- Vite
- JavaScript/JSX
- CSS Modules
- React Router
- Supabase planejado para evolução de backend
- GitHub Actions para quality gate

## Escopo Entregue

- Interface web do MVP.
- Estrutura de rotas e páginas principais.
- Documentacao de casos de teste funcional.
- Documentacao de casos de teste de segurança.
- Matriz de rastreabilidade entre historias de usuário e testes.
- Estrutura de relatório de acessibilidade baseada em WCAG 2.1 AA.
- Script local de validação com `npm run qa:ci`.
- Workflow de CI/CD no repositório.

## Observação Sobre Supabase

O projeto foi preparado com uma arquitetura compatível com evolução para Supabase, mas a entrega atual deve ser entendida como MVP frontend mock-first. Isso permitiu priorizar a experiencia de usuário, as rotas, a documentacao de qualidade, a rastreabilidade de testes e a apresentacao do produto dentro do prazo da disciplina.

Em uma evolução posterior, a pasta `supabase/` pode receber migrations, politicas RLS, seeds e edge functions.

