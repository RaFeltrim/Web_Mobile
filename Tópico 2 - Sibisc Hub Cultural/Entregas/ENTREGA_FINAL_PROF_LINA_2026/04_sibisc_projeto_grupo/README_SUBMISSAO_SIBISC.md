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
- Supabase integrado com migrações de banco de dados e consulta híbrida (real/mock)
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
- Banco de dados integrado via Supabase (opcional via variáveis de ambiente, com fallback seguro para mock).

## Integração com o Supabase

O projeto agora conta com suporte integrado ao Supabase para persistência e consulta a dados reais:
- **Modelo Físico e Migrações:** O esquema físico de banco de dados foi modelado e salvo na pasta `SIBiSC/supabase/migrations/` contendo as tabelas `library_units`, `books`, `book_inventory`, `news_posts` e `events`.
- **Row Level Security (RLS):** Todas as tabelas possuem RLS ativado e políticas públicas de apenas leitura (`SELECT`), permitindo que a aplicação frontend consulte os dados de forma anônima e segura.
- **Funcionamento Híbrido:** O frontend detecta a presença das chaves do Supabase no arquivo `.env` (via `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`). Se configurado, a aplicação consome dados reais da API do Supabase; se ausente, ela utiliza os dados locais mockados de forma transparente, permitindo que a aplicação funcione offline e passe em testes/pipelines locais de integração contínua sem credenciais obrigatórias.
- **Carga de Dados Inicial (Seed):** O arquivo `SIBiSC/supabase/seed.sql` contém a massa de dados inicial (livros, unidades, eventos e notícias) necessária para popular o banco de dados. Para restaurar/popular o projeto do Supabase, copie o conteúdo de `seed.sql` e execute-o diretamente no console SQL do painel do Supabase.
