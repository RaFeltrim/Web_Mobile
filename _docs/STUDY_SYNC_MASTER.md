# Study-Sync — Master Documentation (SSoT)

## 1. Visão Geral
O **STUDY-SYNC** é um ecossistema de produtividade acadêmica com a filosofia *Single-Player to Multiplayer*. Seu foco inicial é vencer a inércia e procrastinação do indivíduo para, logo em seguida, sincronizar de forma inteligente o esforço coletivo.

**Disciplina:** SSC0961 - Desenvolvimento Web e Mobile (USP)
**Equipe:**
- Estefano Nascimento (NºUSP: 7970044)
- Pedro Augusto Pereira Magalhães (NºUSP: 11802544)
- Pyerre Klyzlow Xavier (NºUSP: 15484839)

---

## 2. Paradigmas Técnicos e Feltrim's Framework
- **Cultura Shift-Left OBRIGATÓRIA**: O código de produção só deve ser commitado após a geração e validação dos testes.
  - Vitest: Para lógica de negócio e testes unitários.
  - Playwright: Para fluxos sensíveis e testes da interface/Realtime.
  - Auto-Debug: O agente tem autonomia integral para corrigir o próprio build.
- **Fidelidade Visual e Ergonomia**: O projeto deve implementar rigorosamente a estética **Liquid Glass**. Além disso, o foco em usabilidade mobile é inegociável, devendo todos os elementos interativos respeitarem rigorosamente a **Thumb Zone (mínimo de 44px)** para facilitar o uso ao caminhar pelo campus.
- **Orquestração Inteligente (Supabase)**: A transitação de status e alteração de um `criticality_score` (identificador de gargalos) ocorrerá via Edge Functions. O Dashboard que congrega a "Saúde do Projeto" refletirá as alterações passivamente via `supabase_realtime` evitando qualquer re-render desnecessário.

---

## 3. Escopo Funcional (Epic Features)

### 3.1 Gestão e Defesa contra Procrastinação (Individual)
1. **Timer de Foco Integrado (Pomodoro)**: Execução real da tarefa contra ansiedade (entra no estado de flow).
2. **Cálculo de Criticidade e Alerta de Impacto**: Se adiar a tarefa, o sistema exibe matematicamente o dano ao grupo. Ex: *“Adiar esta entrega hoje atrasará o cronograma em 48 horas”.*
3. **Smart Rescheduling**: Reagendamento automático em janelas livres caso a meta for perdida, amenizando a ansiedade.

### 3.2 Sincronização e Governança (Grupo)
1. **Sync Passivo**: Iniciar o Timer reflete que a pessoa "está trabalhando nisso agora" sem que ela precise avisar no WhatsApp.
2. **Merge de Agendas Secretas**: Cruzamento orgânico de "free-time" entre os alunos preservando a privacidade.
3. **Dashboard Health**: Representação visual do andamento ("fôlego") do projeto até a entrega.

---

## 4. Topologia de Branches
* **`delivery/2-arquitetura-db`**: Migrações base de dados, Políticas RLS, Funções RPC Básicas, Seed inicial.
* **`delivery/3-desenvolvimento-teste`**: UI Components (React 19), Edge Functions de Supabase, Testes Shift-Left, Realtime Integrations.

*Objetivo Atual:* Execução da arquitetura-db e finalização E2E em direção a Main, focado na entrega do relatório de Stress Test e KPIs de Latência (Profa. Lina).
