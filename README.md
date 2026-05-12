# Web e Mobile (antigo Study-Sync)

Repositório do projeto **Web e Mobile**, desenvolvido para a disciplina
**SSC0961 — Desenvolvimento Web e Mobile (USP)**. A arquitetura adota a
metodologia **Shift-Left**, estética **Liquid Glass** e orquestra
**Edge Functions** como microsserviços.

## O problema

A procrastinação individual não apenas atrasa o aluno: cria gargalos na
infraestrutura do grupo (efeito *Multiplayer*). Tarefas essenciais viram
pontos de bloqueio e atrasam o projeto como um todo por falta de
visibilidade do esforço em andamento.

## A solução (epic features)

Ecossistema de produtividade que aplica o conceito *Single-Player → Multiplayer*.
Foca primeiro em vencer a inércia do indivíduo e em seguida sincronizar o
esforço coletivo.

1. **Focus Engine local (Pomodoro):** timer otimista com animação pulsante,
   sinalizando que o usuário está em foco.
2. **Supabase Realtime Sync:** visibilidade passiva — o estado da tarefa
   muda em todos os front-ends conectados via WebSockets.
3. **Smart Risk (criticidade dinâmica):** Edge Function que pune adiamento e
   recalcula impacto a terceiros.
4. **Smart Rescheduling:** microsserviço Deno que faz cruzamento lógico de
   horários propostos para salvar prazos.

## Stack e framework

- **Front-end:** React 19 + TypeScript + Vite (`/src`).
- **UI:** Liquid Glass, CSS Modules, Thumb-Zone Mobile Strict UI (`/index.css`).
- **QA e automação:** Vitest (unidade) + Playwright (E2E e stress de UI).
- **Backend-as-a-Service:** Supabase Local Stack (`/supabase`) com PostgreSQL,
  RLS e migrations automáticas.
- **Microsserviços:** Edge Functions em Deno, isoladas por lógica
  (`/update_criticality`, `/smart_reschedule`).

## Como rodar o MVP local

### Requisitos

- Node.js 20+
- Docker Desktop em execução (para o Supabase local).
- Supabase CLI: `npm i -g supabase`.

### Subindo o ambiente

1. Instale dependências:
   ```bash
   npm install
   ```
2. Suba banco de dados e serviços locais:
   ```bash
   npx supabase start
   ```
   Aplica migrations, seed e funções Deno.
3. Inicie o servidor Vite:
   ```bash
   npm run dev
   ```
   Acesse em `http://localhost:5173`.

## Suíte de testes (QA / E2E)

Cultura Shift-Left aplicada. Nenhum merge na `main` sem garantir os dois
ecossistemas:

- Lógica de cálculos: `npx vitest run`.
- E2E Playwright + stress realtime: `npx playwright test`
  (relatório via `npx playwright show-report`).

## Organização das sprints (concluídas)

Cada *feature/branch* fechou um ciclo até ser mergeada na `main`.

- `delivery/2-arquitetura-db` — regras RLS do Postgres e seed.
- `delivery/3-desenvolvimento-teste` — setup Vitest/Playwright e UX responsiva Thumb-Zone.
- `feature/sprint-1-realtime` — canais Supabase Sync.
- `feature/sprint-2-inteligencia` — modal `criticality_score`.
- `feature/sprint-3-smart-rescheduling` — endpoint Deno de fuso e agendas.
- `feature/sprint-4-qa` — validação E2E da plataforma.

## Contexto acadêmico

Trabalho desenvolvido na disciplina SSC0961 (USP) por Rafael Feltrim,
sob orientação da equipe docente do curso. Versões posteriores e
materiais públicos relacionados estão em
`https://rafeltrim.github.io/portfolio`.
