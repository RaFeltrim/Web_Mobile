# Study-Sync (Single-Player to Multiplayer)

Este é o repositório oficial do projeto **Study-Sync**, desenvolvido para a disciplina de Desenvolvimento Web e Mobile (SSC0961). A arquitetura adota a metodologia *Shift-Left*, estética *Liquid Glass* e orquestra Edge Functions como microsserviços.

## 🚀 O Problema
A procrastinação individual não apenas atrasa o aluno, mas cria buracos na infraestrutura do grupo (Multiplayer). Tarefas essenciais viram gargalos e atrasam o projeto como um todo por falta de visibilidade do esforço em andamento.

## 💡 A Solução (Epic Features)
1. **Focus Engine Local (Pomodoro):** Uma mecânica de Timer Otimista onde pulsar a animação avisa que você está focando;
2. **Supabase Realtime Sync:** Visibilidade total passiva, mudando o estado da Tarefa em todas os front-ends conectados via WebSockets.
3. **Smart Risk (Criticidade Dinâmica):** Algoritmia backend Edge Functions para punir adiamento e recalcular impacto a terceiros.
4. **Smart Rescheduling:** Microsserviço de Deno operando cruzamento lógico de horários propostos para salvar os prazos.

---

## 🛠️ Stack Tecnológico & Framework
O projeto adota os pilares do **Feltrim's Framework - Modo Turbo**:
- **Front-end:** React 19 + TypeScript + Vite (`/src`)
- **Estilo Sênior:** Liquid Glass UI, CSS Modules, Thumb-Zone Mobile Strict UI (`/index.css`).
- **QA e Automação:** Vitest (Testes de lógica/Unitários) + Playwright (E2E e Stress de Interface).
- **Backend-as-a-Service:** Supabase Local Stack (`/supabase`), atuando com PostgreSQL (RLS, Migrations Automáticas).
- **Microsserviços:** Edge Functions em Deno isolados por lógica (ex: `/update_criticality`, `/smart_reschedule`).

---

## 📦 Como Rodar o MVP Local
### 1. Requisitos Iniciais
- `Node.js` v20+
- `Docker Desktop` em execução (Para emular o Supabase local).
- O Supabase CLI (`npm i -g supabase`).

### 2. Subindo as Máquinas
1. Abra um terminal na pasta root (`Study-Sync`) e instale as libs:
   ```bash
   npm install
   ```
2. Inicie o Banco de Dados e Serviços Cloud Local:
   ```bash
   npx supabase start
   ```
   *Isso ativará as Migrations + Seed + Funções Deno.*
3. Inicie o Servidor Vite do React:
   ```bash
   npm run dev
   ```
   *Acesse em http://localhost:5173*.

---

## 🧪 Suíte de Testes (QA/E2E)
A Cultura Shift-Left está impregnada. Não realize **nenhum Merge** nesta Master (Main) sem antes garantir os dois ecossistemas:

- Lógica de Cálculos Math: `npx vitest run`
- E2E Playwright e Realtime Stress: `npx playwright test` (Resultados estarão visíveis via `npx playwright show-report`).

---

## 🗂️ Organização das Sprints (Concluídas)
As seguintes Sprints ditaram nosso escopo de entregas por Branches. Cada *feature/branch* encerrou um ciclo até sua total fusão (Merge) na `main` aqui atual:

- **delivery/2-arquitetura-db**: Criação das regras RLS do Postgres e Seed massivo.
- **delivery/3-desenvolvimento-teste**: Setup Vitest/Playwright, UX visual responsiva Thumb-Zone.
- **feature/sprint-1-realtime**: Setup do Channel Supabase Sync.
- **feature/sprint-2-inteligencia**: Modal do `criticality_score`.
- **feature/sprint-3-smart-rescheduling**: Integração do Endpoint Deno de Fuso e Agendas.
- **feature/sprint-4-qa**: Validação Extrema E2E da Plataforma (100% Pass).

---
*Gerado com Autonomia e Qualidade Sênior por Antigravity AI @ 2026*
