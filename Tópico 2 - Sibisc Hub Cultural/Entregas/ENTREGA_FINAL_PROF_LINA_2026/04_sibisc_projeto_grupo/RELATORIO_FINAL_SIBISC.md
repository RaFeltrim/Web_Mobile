# SIBiSC — Hub Cultural Digital
## Relatório Final de Desenvolvimento Web e Mobile (SSC0961)

**Universidade:** Instituto de Ciências Matemáticas e de Computação (ICMC - USP)  
**Disciplina:** SSC0961 - Desenvolvimento Web e Mobile  
**Professora:** Profa. Dra. Lina Garcés  
**Grupo:** SIBiSC  
**Alunos:**  
- Rafael Feltrim - Nº USP: 15942812 (Dev + QA Lead + Arquitetura)  
- Eduardo Paz e Silva - Nº USP: [Nº USP] (Dev)  
- Matheus Marchi Baron - Nº USP: [Nº USP] (Dev)  
- Pedro Augusto Pereira Magalhães - Nº USP: [Nº USP] (Dev)  
- Pedro Dorigatti Aureo Ferreira - Nº USP: [Nº USP] (Dev)  

---

## Sumário

1. [Introdução](#1-introdução)
2. [Funcionalidades e Interfaces de Usuário](#2-funcionalidades-e-interfaces-de-usuário)
3. [Estudo Comparativo de Frameworks](#3-estudo-comparativo-de-frameworks)
4. [Desenvolvimento do Aplicativo](#4-desenvolvimento-do-aplicativo)
5. [Teste do Aplicativo](#5-teste-do-aplicativo)
6. [Uso de IA Generativa](#6-uso-de-ia-generativa)
7. [Discussões e Aprendizados](#7-discussões-e-aprendizados)
8. [Anexos](#8-anexos)

---

## 1. Introdução

O Sistema Integrado de Bibliotecas de São Carlos (SIBiSC) concentra acervo, eventos e horários em canais fragmentados, com experiência mobile inadequada e baixo engajamento cultural da comunidade local. 

Para resolver este problema, desenvolvemos o web-app **SIBiSC — Hub Cultural Digital** com abordagem mobile-first, centralizando três pilares principais de acesso à informação:
- 📰 **Notícias**: Feed de notícias e publicações das bibliotecas da rede municipal.
- 📅 **Eventos**: Calendário de eventos culturais com filtros por unidade física.
- 📚 **Catálogo**: Busca de livros com disponibilidade por unidade e geolocalização.

### 1.1 Usuários do Sistema
- **Estudante/Pesquisador**: Necessita buscar obras rapidamente e identificar qual unidade física mais próxima possui exemplares disponíveis para consulta ou empréstimo.
- **Cidadão Comum / Consumidor de Cultura**: Busca oficinas, eventos literários e atividades de lazer gratuitas organizadas pelas bibliotecas da cidade.
- **Bibliotecário / Administrador Local**: Responsável por cadastrar e manter atualizadas as informações da unidade (endereço, telefone, horário de funcionamento).
- **Curador de Conteúdo**: Responsável pela redação editorial de notícias e validação da agenda cultural.

---

## 2. Funcionalidades e Interfaces de Usuário

O projeto SIBiSC foi especificado por meio de histórias de usuário (User Stories - US) integradas ao backlog do Jira, e prototipado detalhadamente no Figma. As funcionalidades e fluxos principais incluem:

### 2.1 Principais Histórias de Usuário (Backlog)
- **US-MVP-BASE-001**: Estrutura de base única do projeto com rotas definidas e consistentes.
- **US-ACV-001/002/003**: Busca de livros no catálogo, exibição de tabela de disponibilidade e recomendação da unidade de biblioteca física mais próxima do usuário.
- **US-OPS-001/002**: Manter informações públicas das unidades de São Carlos (Centro, Vila Prado, Cidade Aracy e UFSCar Monjolinho) atualizadas e garantir a coerência das postagens de notícias e eventos.
- **US-MVP-QA-001**: Suite de validações dos fluxos centrais para fechamento de releases controladas.

### 2.2 Prototipagem e Interfaces
O design visual baseia-se em uma experiência centrada no mobile (mobile-first), utilizando uma paleta cromática harmônica (tons quentes de terracotta e azul marinho profundo), tipografia de alta legibilidade (Fraunces e Manrope da Google Fonts) e controles visuais táteis adequados a touchscreens. Os fluxos e telas prototipados estão detalhados em:
- [Especificação de Telas no Figma](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/SIBiSC/docs/FIGMA_SCREENS_SPEC.md)
- [Guia de Mockups de Telas Mobile](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/SIBiSC/docs/MOBILE_SCREENS_MOCKUP_GUIDE.md)

---

## 3. Estudo Comparativo de Frameworks

Para determinar o melhor framework de desenvolvimento multiplataforma para o SIBiSC, realizamos uma análise comparativa abrangente de três tecnologias principais da indústria:

### 3.1 Frameworks Analisados
1. **React + Vite (Web App / PWA)**: Combina o framework declarativo React com a ferramenta de empacotamento Vite. Permite criar aplicações web responsivas de alta velocidade, portáveis para qualquer navegador móvel.
2. **React Native (Expo) (Nativo Híbrido)**: Permite compilar código JavaScript/React para componentes nativos do iOS (Objective-C/Swift) e Android (Java/Kotlin).
3. **Flutter (Nativo Híbrido)**: Framework da Google que utiliza a linguagem Dart para desenhar componentes gráficos customizados via engine Skia diretamente na tela do dispositivo iOS/Android.

### 3.2 Matriz de Comparação

| Critério | React + Vite | React Native (Expo) | Flutter |
| :--- | :--- | :--- | :--- |
| **Curva de Aprendizado** | Baixa (Equipe já dominava JS/React) | Média | Alta (Exige Dart) |
| **Portabilidade Web** | Excelente (Nativa) | Média (Expo Web requer ajustes) | Média (Performance pesada em Web) |
| **Performance Nativa** | Média (Via WebView/Capacitor) | Alta (Pontes nativas) | Excelente (Renderização direta) |
| **Acessibilidade (WCAG)** | Excelente (Suporte robusto a leitores de tela web) | Média (Exige APIs nativas específicas) | Média (Customização mais complexa) |
| **Prazo de Entrega (MVP)** | Excelente | Média (Complexidade de build nativo) | Baixa (Necessidade de reaprender stack) |

### 3.3 Decisão do Grupo
Optamos pelo desenvolvimento do **Web-App responsivo com React + Vite**, complementado pela integração estrutural do **CapacitorJS** para portabilidade híbrida em dispositivos móveis. Essa abordagem permitiu:
- Foco absoluto na fidelidade visual e responsividade móvel.
- Validação rápida e automatizada por meio de pipelines de CI/CD baseados em ambiente Linux.
- Facilidade de auditoria e conformidade de acessibilidade (Lighthouse).
- Facilidade de deploy instantâneo na nuvem via Vercel e Netlify.

---

## 4. Desenvolvimento do Aplicativo

Esta seção detalha o processo de desenvolvimento de software da plataforma **SIBiSC**, abordando a stack tecnológica adotada, a arquitetura e organização do codebase, o design e implementação do banco de dados relacional com políticas de segurança e a estratégia de compilação híbrida para plataformas móveis.

---

## 4.1 Stack Tecnológica do SIBiSC

A arquitetura tecnológica do SIBiSC foi selecionada visando alto desempenho, componentização eficiente, segurança no tráfego de informações e facilidade de portabilidade multi-plataforma. Os pilares fundamentais da stack incluem:

1. **React 19 (Core)**: Adoção da versão estável mais recente do ecossistema React. Os principais benefícios técnicos incluem o suporte aprimorado a recursos assíncronos e hooks nativos modernos (como a gestão otimizada de formulários e estados concorrentes, além do novo hook `use`), permitindo que a interface permaneça altamente responsiva sob qualquer carga de processamento de busca e filtragem de acervo.
2. **Vite 6 (Build Tooling & Dev Server)**: Ferramenta de build que substitui arquiteturas legadas (como Webpack). O Vite fornece um tempo de inicialização de servidor de desenvolvimento quase instantâneo por meio do uso de pré-empacotamento de dependências via *esbuild*, bem como atualizações em tempo real ultrarrápidas via *Hot Module Replacement (HMR)*.
3. **CSS Modules (Styling)**: Utilização de CSS Modules nativos do ecossistema Vite/React para estilização fina e isolada de componentes. Cada folha de estilo `.module.css` é compilada e escopada localmente, o que elimina a possibilidade de colisões ou efeitos colaterais de cascata de seletores globais. Isso garante a fidelidade e estabilidade visual dos componentes criados para o MVP.
4. **Supabase Mocked Layer (Camada de Dados Abstraída)**: Para viabilizar o desenvolvimento paralelo do frontend sem bloquear as frentes de banco de dados e integração, implementou-se uma camada de simulação de dados (*mocked layer*). As chamadas de leitura e escrita do frontend consultam arquivos de dados locais em `src/mocks/` simulando tempos de resposta de rede assíncronos (`async/await`). Essa arquitetura permite que os serviços de consumo de dados (`src/services/`) sejam futuramente chaveados para requisições de banco de dados reais no Supabase de maneira transparente e centralizada.

---

## 4.2 Estrutura do Codebase

A base de código do frontend do SIBiSC está organizada de maneira estritamente modular sob o diretório `src/`. Essa estrutura facilita a manutenção, a legibilidade e a escrita de testes unitários e de integração de maneira isolada:

- **`src/components/`**: Contém elementos visuais reutilizáveis em toda a aplicação (tais como botões estilizados, cartões de livros do acervo, blocos de notícias, cards de eventos e componentes estruturais de cabeçalho e rodapé).
- **`src/hooks/`**: Concentra hooks customizados do React que gerenciam estados complexos ou comportamentos reutilizáveis de interface (como geolocalização do usuário, estados de carregamento e debounce de consultas).
- **`src/lib/`**: Armazena as inicializações e configurações das bibliotecas externas principais. É onde reside o [supabaseClient.js](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/SIBiSC/src/lib/supabaseClient.js), responsável por instanciar a conexão oficial com o banco através da SDK `@supabase/supabase-js`.
- **`src/mocks/`**: Diretório contendo as bases de dados simuladas em JavaScript (`books.js`, `events.js`, `units.js`, etc.) usadas pela camada de simulação para alimentar a interface durante o desenvolvimento local.
- **`src/pages/`**: Telas de visualização completas que compõem o MVP do aplicativo (Ex: Página Inicial do Portal, Painel do Acervo Bibliográfico, Agenda Cultural de Eventos e Perfil do Usuário).
- **`src/routes/`**: Centraliza o mapa e as configurações de roteamento da aplicação por meio do `react-router-dom`, definindo quais URLs e telas devem ser renderizadas tanto em ambiente web quanto móvel.
- **`src/services/`**: Funções assíncronas dedicadas a buscar e formatar informações. Esta pasta serve como adaptador técnico: consome a camada de mocks atualmente e está preparada estruturalmente para migrar para consultas diretas do Supabase Client.
- **`src/styles/`**: Centraliza os tokens de design do sistema (variáveis de cor, tipografia e espaçamento) no arquivo de estilo global e configurações comuns aos módulos CSS da aplicação.
- **`src/utils/`**: Utilitários simples, formatadores de texto/datas e funções de apoio computacional sem estado que auxiliam a lógica geral de fluxo.

---

## 4.3 Conexão com o Supabase e Políticas de RLS

O SIBiSC utiliza o Supabase como seu provedor de Backend-as-a-Service (BaaS), oferecendo um banco de dados PostgreSQL integrado, autenticação de usuários e políticas robustas de controle de acesso ao nível de linha de dados (Row Level Security - RLS).

### 4.3.1 Arquitetura do Banco de Dados (Schema SQL)

Baseado no Modelo Lógico e no Dicionário de Dados definidos no repositório (`SIBiSC/docs/data`), o script SQL abaixo cria as tabelas essenciais para o funcionamento do MVP, definindo chaves primárias (PK), chaves estrangeiras (FK), índices de busca de acervo e restrições de integridade (*constraints*):

```sql
-- Ativação da extensão para geração de UUIDs nativos
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Unidades Físicas (Bibliotecas e Espaços Culturais)
CREATE TABLE library_units (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    neighborhood TEXT NOT NULL,
    latitude NUMERIC(10, 8),
    longitude NUMERIC(11, 8),
    opening_hours TEXT,
    contact_channels JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Catálogo de Livros (Acervo Consolidado)
CREATE TABLE books (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    isbn TEXT UNIQUE,
    normalized_title TEXT NOT NULL,
    publisher TEXT,
    metadata JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Criar índice para aceleração de buscas no catálogo de livros
CREATE INDEX idx_books_search ON books (normalized_title, author);

-- 3. Inventário Física de Livros e Disponibilidade por Unidade
CREATE TABLE book_inventory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    book_id UUID REFERENCES books(id) ON DELETE CASCADE,
    unit_id UUID REFERENCES library_units(id) ON DELETE CASCADE,
    availability_status TEXT NOT NULL CHECK (availability_status IN ('available', 'unavailable', 'local_consultation')),
    quantity INTEGER NOT NULL DEFAULT 0 CHECK (quantity >= 0),
    available INTEGER NOT NULL DEFAULT 0 CHECK (available >= 0),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_book_unit UNIQUE (book_id, unit_id)
);

-- 4. Notícias do Portal
CREATE TABLE news_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    summary TEXT,
    content TEXT,
    category TEXT,
    origin TEXT,
    editorial_status TEXT DEFAULT 'draft' CHECK (editorial_status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Agenda Cultural (Eventos)
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    unit_id UUID REFERENCES library_units(id) ON DELETE SET NULL,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'cancelled', 'completed')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Registro de Fontes Externas de Coleta (Ingestão)
CREATE TABLE source_feeds (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    url TEXT,
    integration_type TEXT,
    collection_policy TEXT,
    criticality TEXT DEFAULT 'medium' CHECK (criticality IN ('low', 'medium', 'high', 'critical')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Histórico de Execução de Sincronizações (Jobs)
CREATE TABLE sync_runs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_feed_id UUID REFERENCES source_feeds(id) ON DELETE CASCADE,
    start_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    end_time TIMESTAMPTZ,
    status TEXT NOT NULL CHECK (status IN ('success', 'failed', 'running')),
    error_message TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 4.3.2 Row Level Security (RLS) e Políticas de Acesso

De acordo com as diretrizes de governança e segurança de dados do projeto (`SIBiSC/docs/data/migrations_e_rls.md`), nenhuma tabela deve aceitar escritas de clientes anônimos e tabelas operacionais de integração (ingestão e logs) não devem ser expostas.

Abaixo, apresenta-se o script SQL para ativação do RLS e definição detalhada das políticas de acesso:

```sql
-- Ativar RLS em todas as tabelas criadas
ALTER TABLE library_units ENABLE ROW LEVEL SECURITY;
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE book_inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE source_feeds ENABLE ROW LEVEL SECURITY;
ALTER TABLE sync_runs ENABLE ROW LEVEL SECURITY;

-- POLÍTICAS DE ACESSO PÚBLICO (Leitura apenas para o MVP público)

-- library_units: Qualquer usuário (anônimo ou autenticado) pode listar as unidades
CREATE POLICY "Permitir leitura pública de unidades" 
ON library_units FOR SELECT 
USING (true);

-- books: Qualquer usuário pode buscar no catálogo bibliográfico
CREATE POLICY "Permitir leitura pública do acervo de livros" 
ON books FOR SELECT 
USING (true);

-- book_inventory: Leitura aberta sobre o estado físico e disponibilidade de acervos
CREATE POLICY "Permitir leitura pública de inventário" 
ON book_inventory FOR SELECT 
USING (true);

-- news_posts: Permite visualizar notícias publicadas
CREATE POLICY "Permitir leitura pública de notícias publicadas" 
ON news_posts FOR SELECT 
USING (editorial_status = 'published');

-- events: Permite visualizar eventos agendados ou concluídos, mas não cancelados
CREATE POLICY "Permitir leitura pública de eventos ativos" 
ON events FOR SELECT 
USING (status != 'cancelled');

-- POLÍTICAS DE ESCRITA E DADOS RESTRITOS (Apenas administradores ou scripts autenticados)

-- Todas as tabelas públicas só podem ser modificadas (INSERT/UPDATE/DELETE) por usuários autenticados (Ex: Administradores do Portal ou Sistemas de Sincronização)
CREATE POLICY "Permitir escrita apenas para administradores/serviços" 
ON library_units FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Permitir escrita apenas para administradores/serviços" 
ON books FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Permitir escrita apenas para administradores/serviços" 
ON book_inventory FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Permitir escrita apenas para editores/administradores" 
ON news_posts FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Permitir escrita apenas para organizadores/administradores" 
ON events FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- Tabelas operacionais de integração (source_feeds e sync_runs):
-- Não expostas ao público geral (leitura/escrita bloqueada para usuários anônimos), restritas apenas à execução e consulta de serviços de automação autenticados.
CREATE POLICY "Acesso operacional restrito para serviços de sincronização"
ON source_feeds FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Acesso operacional restrito para logs de sincronização"
ON sync_runs FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
```

### 4.3.3 Conexão Client-Side (React)

A conexão segura e condicional com o Supabase é implementada no arquivo [supabaseClient.js](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/SIBiSC/src/lib/supabaseClient.js). Ela verifica se as credenciais ambientais fornecidas pelo Vite estão ativas para iniciar a conexão real ou, em sua ausência, retornar `null` para acionar a camada mocked:

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY;

// Determina dinamicamente se o backend real está configurado
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false, // Desativa persistência se rodar em cenários sem localStorage ou em SSR simples
      },
    })
  : null;
```

---

## 4.4 Plano de Integração e Empacotamento com Capacitor

Para portar a aplicação SIBiSC (que funciona primariamente no ecossistema Web) para execução nativa em dispositivos móveis **iOS** e **Android**, propõe-se a integração com o **CapacitorJS**. O Capacitor envolve o código estático empacotado (`dist/`) dentro de um contêiner nativo leve (*WebView*), proporcionando acesso direto às APIs físicas do sistema através de uma camada de ponte de comunicação (*bridge*).

### 4.4.1 Etapas de Instalação e Inicialização

O processo técnico de configuração do Capacitor no projeto SIBiSC segue os passos descritos abaixo:

1. **Instalar Dependências Principais**:
   Instalação das bibliotecas globais e locais do CLI e core do Capacitor como dependências de desenvolvimento no projeto raiz:
   ```bash
   npm install @capacitor/core @capacitor/cli
   ```

2. **Inicializar o Projeto**:
   Configura as informações básicas da aplicação híbrida (nome do app, ID único de pacote e o diretório de destino do build estático):
   ```bash
   npx cap init SIBiSC com.sibisc.app --web-dir=dist
   ```

3. **Instalar Plataformas e Dependências do OS**:
   Instala os pacotes específicos de compilação para Android e iOS e adiciona as pastas nativas correspondentes ao projeto raiz:
   ```bash
   # Instalação dos pacotes
   npm install @capacitor/android @capacitor/ios

   # Criação das pastas de projeto nativo
   npx cap add android
   npx cap add ios
   ```

### 4.4.2 Configuração Estrutural (`capacitor.config.json`)

O arquivo de configuração `capacitor.config.json` deve ser criado/ajustado na raiz do projeto `SIBiSC/` com a seguinte estrutura conceitual para suportar o carregamento do build estático e, opcionalmente, testes em tempo real (Live Reload):

```json
{
  "appId": "com.sibisc.app",
  "appName": "SIBiSC",
  "webDir": "dist",
  "bundledWebRuntime": false,
  "server": {
    "androidScheme": "https",
    "allowNavigation": [
      "*.supabase.co"
    ]
  },
  "android": {
    "allowMixedContent": false
  },
  "ios": {
    "contentInset": "always"
  }
}
```

### 4.4.3 Scripts de Automação de Build e Sincronização

Para otimizar o fluxo de trabalho do desenvolvedor móvel, propõe-se adicionar scripts específicos no arquivo [package.json](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/SIBiSC/package.json). Esses comandos automatizam o build de assets estáticos do Vite, atualizam as dependências e o código-fonte nas pastas nativas, e abrem o projeto em suas IDEs oficiais de compilação:

No arquivo `package.json`, modifique a seção `"scripts"` adicionando:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "cap:sync": "npx cap sync",
  "cap:open:android": "npx cap open android",
  "cap:open:ios": "npx cap open ios",
  "mobile:build:android": "npm run build && npx cap sync android && npx cap open android",
  "mobile:build:ios": "npm run build && npx cap sync ios && npx cap open ios"
}
```

- **`npm run mobile:build:android`**: Compila a interface React 19 via Vite no diretório `dist/`, transfere os assets e plugins empacotados para a pasta `/android` do Capacitor, e carrega automaticamente o projeto no Android Studio pronto para execução em emulador ou dispositivo físico conectado via USB.
- **`npm run mobile:build:ios`**: Realiza o mesmo processo, compilando a aplicação e abrindo o projeto Xcode nativo na plataforma macOS.

### 4.4.4 Fluxo de Live Reload durante o Desenvolvimento Móvel

Para evitar a necessidade de recompilação estática a cada alteração de estilo ou layout no dispositivo móvel, é altamente recomendado habilitar o Live Reload durante a fase de programação:

1. Obtenha o IP da rede local da máquina de desenvolvimento (Ex: `192.168.1.105`).
2. Atualize temporariamente o bloco `"server"` no `capacitor.config.json`:
   ```json
   "server": {
     "url": "http://192.168.1.105:5173",
     "cleartext": true
   }
   ```
3. Inicie o servidor local web normalmente:
   ```bash
   npm run dev -- --host
   ```
4. Execute `npx cap sync` para carregar a configuração e inicialize o emulador/dispositivo. Toda alteração salva no VS Code ou IDE do desenvolvedor será imediatamente refletida na tela física do celular graças à ponte local.

### 4.4.5 Ajustes de Permissões Nativas Requeridas

A plataforma SIBiSC realiza buscas de proximidade com base em geolocalização do usuário (para encontrar a biblioteca mais próxima). Logo, torna-se necessário declarar explicitamente o pedido de acesso nativo a essas informações:

- **Para Android (`android/app/src/main/AndroidManifest.xml`)**:
  Adicionar as seguintes permissões dentro da tag `<manifest>`:
  ```xml
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  ```

- **Para iOS (`ios/App/App/Info.plist`)**:
  Adicionar a seguinte entrada chave/valor para requisição formal de consentimento do usuário final:
  ```xml
  <key>NSLocationWhenInUseUsageDescription</key>
  <string>O SIBiSC precisa do acesso à sua localização para ordenar as bibliotecas públicas de acordo com a proximidade física à sua residência.</string>
  ```


---

## 5. Teste do Aplicativo

Esta seção apresenta a estratégia, a execução e os resultados dos testes funcionais, de segurança e de acessibilidade (WCAG 2.1 nível AA) realizados no MVP do Sistema Integrado de Bibliotecas do Setor Cultural (SIBiSC). O processo de garantia de qualidade (QA) foi estruturado de forma rigorosa para assegurar a robustez técnica, conformidade assistiva e integridade dos dados expostos pelo sistema.

---

## 5.1. Testes Funcionais

Os testes funcionais validaram as jornadas fundamentais descritas no backlog do projeto, associando diretamente cada caso de teste a uma User Story (US) através de especificações orientadas a comportamento (*Given-When-Then*).

### 5.1.1. Metodologia de Validação e Ferramentas
A validação funcional utilizou uma abordagem híbrida:
1. **Testes Manuais de Aceitação:** Conduzidos por meio de roteiros estruturados simulando ações de estudantes, cidadãos e bibliotecários.
2. **Testes Visuais e de Fumaça (Smoke Tests):** Executados de forma automatizada através do **Playwright CLI** no navegador **Microsoft Edge** sob múltiplos viewports (Desktop: `1366x900`, Tablet: `820x1180`, Mobile: `390x844`).
3. **Integração Contínua (CI):** Validação executada via pipeline GitHub Actions (`qa-gate.yml`), rodando análises estáticas (`ReadLints`), testes de integridade de código (`npm run qa:repo`) e builds produtivos (`npm run qa:ci` via Vite).

### 5.1.2. Mapeamento de Casos de Teste e Resultados

Os testes cobriram quatro grandes módulos operacionais da aplicação:

| ID do Caso | Descrição / Objetivo | User Story Vinculada | Status | Resultado / Evidência |
| :--- | :--- | :--- | :--- | :--- |
| **TC-NOT-001** | Listar notícias publicadas ordenadas por data de publicação na página `/noticias` | US-NOT-001 | **Aprovado** | Lista renderizada corretamente, exibindo título, data, resumo e categoria. |
| **TC-NOT-002** | Exibir estado vazio (EmptyState) quando não houver notícias cadastradas | US-NOT-001 | **Aprovado** | Mensagem de apoio renderizada sem quebras de layout. |
| **TC-NOT-005** | Redirecionamento da listagem para a página de detalhe da notícia `/noticias/:newsId` | US-NOT-002 | **Aprovado** | URL é devidamente atualizada e exibe o conteúdo integral. |
| **TC-NOT-008** | Filtragem dinâmica de notícias por categorias via *FilterPills* | US-NOT-003 | **Aprovado** | Seleção destaca o item e filtra a lista instantaneamente. |
| **TC-EVT-001** | Exibir lista de eventos futuros ordenados cronologicamente na agenda `/eventos` | US-EVT-001 | **Aprovado** | Cards de eventos com detalhes de data, local, público-alvo e horário. |
| **TC-EVT-006** | Exportação de evento para agenda externa (Google Calendar / arquivo `.ics`) | US-EVT-003 | **Aprovado** | Links gerados corretamente; abertura em aba externa segura com `noopener noreferrer`. |
| **TC-ACV-001** | Busca de livros no acervo por título com normalização de acentos e debounce | US-ACV-001 | **Aprovado** | Debounce de ~300ms reduz requisições redundantes e normaliza strings de pesquisa. |
| **TC-ACV-005** | Apresentação da tabela de disponibilidade de exemplares por unidade da biblioteca | US-ACV-002 | **Aprovado** | Exibição de tabela indicando status de disponibilidade física e quantidade. |
| **TC-ACV-007** | Geolocalização para recomendar a unidade mais próxima com exemplar disponível | US-ACV-003 | **Aprovado** | Cálculo de distância funcional com destaque para a unidade mais próxima. |
| **TC-ACV-008** | Fallback manual de geolocalização quando o usuário nega a permissão de GPS | US-ACV-003 | **Aprovado** | Seletor manual de bairros permite reordenar recomendações. |
| **TC-NAV-001** | Navegação global fluida e reativa via Header (desktop) e BottomNav (mobile) | N/A | **Aprovado** | Transição entre as rotas principais livre de vazamentos de estilos ou erros no console. |
| **TC-NAV-002** | Exibição de página de erro customizada para rotas inexistentes (Interface 404) | N/A | **Aprovado** | Renderização correta da página NotFound com link de retorno à Home. |

---

## 5.2. Testes de Acessibilidade (WCAG 2.1 AA)

A acessibilidade foi tratada como critério de aceitação de prioridade máxima no SIBiSC. O objetivo foi assegurar a total usabilidade da aplicação em leitores de tela e navegação por teclado.

### 5.2.1. Ferramentas de Auditoria
- **Google Lighthouse:** Auditoria de contraste, landmarks, ordenação de foco e ARIA.
- **axe-core (via axe DevTools):** Auditoria automatizada de conformidade estrita com as diretrizes do W3C.
- **WAVE (Web Accessibility Evaluation Tool):** Análise visual de inconsistências de contraste e alertas de estrutura DOM.
- **Leitor de Tela (Roteiro NVDA/VoiceOver):** Inspeção manual da leitura de estados dinâmicos (como buscas, abas de perfil e disponibilidade).

### 5.2.2. Pontuação do Lighthouse de Acessibilidade
Após as rodadas de ajuste da Sprint 3, a aplicação atingiu nota máxima de acessibilidade nas rotas principais auditadas:

| Rota Auditada | Score de Acessibilidade | Data do Teste | Observações |
| :--- | :---: | :---: | :--- |
| Home (`/`) | **100/100** | 19/05/2026 | Testado localmente no build de produção |
| Home Mobile (`/home-mobile`) | **100/100** | 19/05/2026 | Interface otimizada e responsiva |
| Catálogo (`/catalogo`) | **100/100** | 19/05/2026 | Campos de busca com suporte assistivo completo |
| Detalhe do Livro (`/catalogo/b1`) | **100/100** | 19/05/2026 | Tabelas sem dependência exclusiva de cores |
| Perfil (`/perfil`) | **100/100** | 19/05/2026 | Abas com estrutura ARIA correta (`tablist`/`tab`) |
| Eventos (`/eventos`) | **100/100** | 19/05/2026 | Navegação simplificada e acessível por teclado |

### 5.2.3. Problemas Identificados e Estratégias de Resolução

Durante o ciclo de QA, diversos problemas de acessibilidade foram detectados e prontamente corrigidos:

1. **Quebra na Hierarquia de Cabeçalhos (Heading Order) no Perfil:**
   - *Problema:* O Lighthouse detectou que a página de Perfil (`UserProfilePage`) renderizava títulos de cards usando `h3` diretamente abaixo do cabeçalho principal `h1`, pulando o nível hierárquico `h2` (infração do critério WCAG 2.4.6).
   - *Solução:* Alterou-se a marcação dos títulos para `h2`, reajustando os estilos de dimensão textual via CSS local.
2. **Elementos Lista Sem Filhos Válidos na Home:**
   - *Problema:* O container de perguntas guiadas declarava `role="list"`, mas seus elementos internos eram botões não envelopados em tags `<li>` ou `role="listitem"` (violação da regra `aria-required-children`).
   - *Solução:* Removeu-se o atributo `role="list"` global do container, tratando os botões como controles flexíveis diretos.
3. **Incompatibilidade de Nome Acessível em Links (Label-Content Name Mismatch):**
   - *Problema:* Os links de feedback externo para o GitHub utilizavam um atributo `aria-label` que omitia o texto visível na tela, quebrando a indexação em leitores de tela e softwares de controle por voz.
   - *Solução:* Ajustou-se o `aria-label` para incluir explicitamente todo o texto legível em tela ("Enviar feedback via GitHub Issues").
4. **Navegação de Página e Skip Links:**
   - *Problema:* Usuários navegando estritamente por teclado precisavam passar por todo o cabeçalho antes de chegar ao conteúdo.
   - *Solução:* Implementou-se um skip link visível apenas ao foco do teclado ("Pular para conteúdo principal"), apontando diretamente para a tag principal `<main id="conteudo-principal" tabIndex={-1}>`.
5. **Ajuste na Ordem de Leitura Mobile (Bottom Navigation no DOM):**
   - *Problema:* Visualmente posicionado na parte inferior da tela, o componente `BottomNav` mobile ficava localizado no fim do DOM, forçando o leitor de tela a processar todo o conteúdo da página antes de permitir a mudança de rota.
   - *Solução:* Reordenou-se o DOM para posicionar a declaração do componente `BottomNav` antes do bloco de conteúdo principal. A navegação mantém a propriedade CSS `position: fixed` inferior para os usuários visuais, mas fornece uma navegação imediata ao carregar a página para usuários de tecnologia assistiva.
6. **Movimento Reduzido (Reduced Motion):**
   - *Problema:* Transições de layout rápidas e animações podiam causar desconforto cognitivo.
   - *Solução:* Introduziu-se a media query `@media (prefers-reduced-motion: reduce)` nas configurações globais de CSS, desabilitando transições, scroll suave e animações do sistema sob preferência ativada no sistema operacional.

---

## 5.3. Testes de Segurança

A validação de segurança seguiu as diretrizes e vulnerabilidades clássicas catalogadas pelo OWASP Top 10, focando na integridade da camada cliente-servidor integrada com o Supabase.

### 5.3.1. Row Level Security (RLS) e Isolamento no Supabase
Toda a comunicação com o banco de dados Supabase foi blindada através de Row Level Security (RLS). 
- **Leitura Pública:** Regras do tipo `SELECT` foram aplicadas para usuários anônimos (`role: anon`) apenas para conteúdos homologados (status "publicado"). Informações operacionais e logs administrativos não são expostos.
- **Escrita Restrita:** Tentativas de requisições de escrita (`INSERT`, `UPDATE`, `DELETE`) por parte de credenciais não autorizadas são bloqueadas nativamente pelo Supabase, retornando o código HTTP `403 (Forbidden)`.
- **Validação de Assinatura de Tokens:** A manipulação manual do payload de tokens JWT do lado do cliente invalida a assinatura criptográfica, resultando no descarte imediato da requisição com erro `401 (Unauthorized)`.

### 5.3.2. Prevenção de Injeção de Código (SQL/XSS)
- **Prevenção de SQL Injection:** Parâmetros de rotas dinâmicas (como `/catalogo/:bookId`) e o campo de busca de livros foram protegidos através da execução de buscas parametrizadas automáticas e da tipagem rígida fornecida pelas queries do Supabase/PostgreSQL. Entradas maliciosas (como `' OR '1'='1`) são interpretadas de forma literal, prevenindo vazamentos ou execução arbitrária.
- **Prevenção de Cross-Site Scripting (XSS):** O React foi configurado para escapar nativamente todo o conteúdo renderizado na tela. Inputs contendo tags HTML ou scripts injetados (como `<script>alert('xss')</script>`) são convertidos para texto puro nas visualizações e descrições do catálogo.

### 5.3.3. Configuração de Headers Defensivos e HTTP 404 Real
Como parte do endurecimento (hardening) da infraestrutura de deploy do MVP na Vercel e Netlify, as seguintes melhorias de segurança de rede foram implementadas:
1. **Configuração de Headers no `vercel.json` e `netlify.toml`:**
   - `Content-Security-Policy` (CSP): Restringe a origem dos scripts e conexões, liberando fontes do Google Fonts (`fonts.googleapis.com` e `fonts.gstatic.com`).
   - `X-Content-Type-Options: nosniff`: Evita sniffing de MIME-types.
   - `X-Frame-Options: DENY`: Protege a aplicação contra ataques de Clickjacking.
   - `Referrer-Policy: strict-origin-when-cross-origin`: Minimiza o vazamento de referenciadores HTTP.
2. **HTTP 404 Real:**
   - *Problema:* A configuração inicial de Single Page Application (SPA) utilizava um redirecionamento universal do tipo *catch-all* (`/(.*) -> /index.html`), o que fazia com que rotas inválidas retornassem código HTTP `200 (Success)` antes de renderizar a interface de erro do roteador cliente.
   - *Solução:* Removeu-se o redirecionamento catch-all dos hosts. Em seu lugar, foram declarados rewrites explícitos apenas para rotas canônicas e endpoints de detalhe conhecidos do sistema. Como consequência, qualquer requisição para um caminho desconhecido passa a receber um HTTP `404 (Not Found)` real diretamente da infraestrutura de hospedagem CDN, protegendo o SEO e o monitoramento de segurança da aplicação.

---

## 5.4. Estudo de Caso: Correção do Bug de Layout Cutoff no Rodapé (Footer)

Durante a fase de validação em dispositivos móveis, foi identificado um bug crítico de sobreposição de elementos na página inicial dedicada aos dispositivos móveis (`/home-mobile`).

### 5.4.1. Descrição do Bug
O rodapé visual (`<footer>`) da aplicação colidia com o painel de navegação inferior fixo (`BottomNav`). Devido à falta de uma zona de respiro inferior no fluxo de blocos, o conteúdo do rodapé (contatos, horários de atendimento e endereços de unidades do SIBiSC) ficava oculto sob a barra de navegação flutuante ou cortado na borda inferior do viewport mobile, impedindo a visualização de informações cruciais por parte dos cidadãos.

```
+-----------------------------------+
| Conteúdo da Home Mobile           |
|                                   |
| [ Seção de Perguntas Guiadas ]    |
+-----------------------------------+
| [ Rodapé Cutoff / Sobreposto ]    | <-- Texto de rodapé truncado
+===================================+
| [ BottomNav Fixo Flutuante ]      | <-- Bloqueava a leitura do footer
+===================================+
```

### 5.4.2. Estratégia de Resolução Adotada
A resolução do problema envolveu alterações de CSS estrutural e controle de escopo:

1. **Introdução de Margem de Respiro Documental:**
   - Foi adicionado um espaçamento de segurança (padding/margin inferior) na Home mobile de aproximadamente `77px`. Esse valor foi calculado com base na altura da `BottomNav` (`54px`) acrescida de uma margem de folga visual. Isso garantiu que o final do documento sempre role para além da barra de navegação, mantendo o rodapé perfeitamente legível acima dela.
2. **CSS Grid Responsivo para Unidades:**
   - Os cartões de informações das bibliotecas foram refatorados de um layout que sofria compressão de colunas em resoluções intermediárias para um modelo responsivo de **CSS Grid** com largura mínima controlada (`283px`). Com isso, em telas estreitas, as unidades são reorganizadas automaticamente em uma única coluna vertical e, em telas maiores, expandem-se de maneira fluida.
3. **Compactação de Componentes Superiores:**
   - O cabeçalho móvel foi reajustado para ocultar faixas secundárias e reduzir o tamanho dos badges de identificação visual, liberando espaço útil na tela de viewports menores (como o do iPhone SE, `375x667`).
4. **Isolamento de Classes Locais (Estilos Escopados):**
   - Os estilos específicos da Home móvel foram encapsulados sob seletores de escopo local. Isso evitou efeitos colaterais e o vazamento indesejado de regras de espaçamento para as seções genéricas (`section` globais) das demais rotas da aplicação desktop.

### 5.4.3. Resultados de Validação no Microsoft Edge
A validação final das correções foi conduzida com o motor do Playwright nos seguintes cenários de viewport:
- **Resolução 390x844 (Mobile):** A altura do cabeçalho móvel registrou `53px` e o `BottomNav` ocupou `54px`. No limite inferior da rolagem da página `/home-mobile`, o rodapé terminou de forma visível e limpa, preservando a distância de respiro projetada sem qualquer truncamento visual.
- **Resolução 820x1180 (Tablet):** Os cartões do rodapé se comportaram como uma coluna única e larga, distribuídos confortavelmente no espaço sem espremer o conteúdo de texto.
- **Resolução 1366x900 (Desktop):** O Hero Desktop manteve dimensões estáveis de `944px` e os cartões de unidades exibiram largura fixa de `283px`, comprovando a integridade da correção visual multi-dispositivo.


---

## 6. Uso de IA Generativa

Esta seção detalha a experiência da equipe na utilização de ferramentas de Inteligência Artificial Generativa — especificamente agentes de codificação autônomos baseados em Large Language Models (LLMs), como o **Antigravity** e assistentes similares — no suporte ao desenvolvimento, controle de qualidade (QA) e diagnóstico de problemas (troubleshooting) do sistema SIBiSC.

---

## 1. Abordagem Geral e Divisão de Assistência

O uso de agentes de IA Generativa foi integrado ao ciclo de vida do projeto de forma interativa, atuando como um par de programação (*pair programmer*) ativo e consultor técnico em três frentes principais:

1. **Desenvolvimento (Development):** Criação e refatoração de componentes React, estruturação de estilos responsivos com CSS Modules, e geração de dados mockados realistas baseados em especificações de negócios.
2. **Garantia de Qualidade (Quality Assurance):** Escrita automatizada de testes de regressão com Vitest/React Testing Library, desenvolvimento de rotinas de verificação de acessibilidade em conformidade com as diretrizes WCAG 2.1 AA, e análise estática do repositório para identificação de débitos técnicos.
3. **Diagnóstico e Resolução de Problemas (Troubleshooting):** Varredura de logs de compilação em esteiras de integração contínua (CI/CD), identificação de brechas de segurança no histórico do Git e ajuste de layouts em múltiplos dispositivos.

---

## 2. Casos de Uso e Exemplos Detalhados

Abaixo são apresentados três cenários complexos onde a intervenção de agentes de IA Generativa foi crucial para o sucesso da entrega técnica.

### Exemplo 1: Limpeza de Histórico do Git com BFG Repo-Cleaner

> [!CAUTION]
> A exposição acidental de credenciais ativas em repositórios públicos representa um risco severo de segurança. A IA atuou de maneira imediata na detecção e remediação deste incidente.

*   **Contexto e Motivo de Uso:** Durante uma auditoria estática automatizada conduzida pela IA (documentada em [SECURITY_AUDIT.md](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/SECURITY_AUDIT.md)), foi detectada a presença de credenciais reais do Supabase (URL do projeto e chave publishable) expostas no histórico público do Git sob o arquivo `SIBiSC/.env.example`. Adicionalmente, verificou-se que pastas pesadas como `node_modules` e `dist` haviam sido versionadas erroneamente em commits passados.
*   **Ação da IA Generativa:** 
    1. A IA elaborou um plano de remediação de segurança detalhado e recomendou a utilização do utilitário especializado **BFG Repo-Cleaner** (uma alternativa moderna, rápida e menos propensa a erros do que o comando nativo `git filter-branch`).
    2. Formulou os comandos exatos de limpeza para substituir as chaves secretas por valores fictícios com segurança:
       ```bash
       bfg --replace-text credentials.txt --no-blob-protection .
       ```
    3. Coordenou a limpeza agressiva de lixo do Git e a reconfiguração de referências locais para purgar as credenciais expostas sem corromper a integridade do histórico de commits do time:
       ```bash
       git reflog expire --expire=now --all && git gc --prune=now --aggressive
       ```
*   **Resultado:** O histórico de commits foi reescrito e sanitizado com sucesso, prevenindo o vazamento de segredos na nuvem e reduzindo o peso do repositório.

---

### Exemplo 2: Identificação de Incompatibilidades de Lockfile entre Plataformas (Lockfile Platform Mismatches)

*   **Contexto e Motivo de Uso:** A esteira de Integração Contínua (GitHub Actions) e os deploys de produção da Vercel e Netlify começaram a falhar sistematicamente na etapa de instalação das dependências. A mensagem de erro indicava que pacotes opcionais nativos (especificamente `@emnapi/core` e `@emnapi/runtime`) estavam ausentes ou inconsistentes.
*   **Ação da IA Generativa:**
    1. Ao analisar os logs de falha das pipelines baseadas em Linux, o agente da IA identificou que o arquivo [package-lock.json](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/SIBiSC/package-lock.json) havia sido consolidado em um ambiente local de desenvolvimento Windows. 
    2. A IA explicou a causa raiz do problema: o comando `npm ci` exige uma correspondência estrita e estática entre a árvore do lockfile e o sistema operacional alvo. Como os pacotes opcionais nativos de Linux não foram mapeados adequadamente no Windows, o `npm ci` abortava a operação.
    3. Para contornar essa rigidez sem forçar o desenvolvedor a mudar de sistema operacional, a IA propôs a transição para o comando `npm install` acrescido de flags de silenciamento e otimização nos seguintes arquivos de configuração:
        *   No workflow do CI ([qa-gate.yml](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/.github/workflows/qa-gate.yml)): `npm install --no-audit --no-fund --prefer-offline`
        *   Na Vercel ([vercel.json](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/vercel.json)): `npm install --prefix SIBiSC --no-audit --no-fund`
        *   No Netlify ([netlify.toml](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/netlify.toml)): `npm install --no-audit --no-fund && npm run build`
    4. A IA também sugeriu relaxar a restrição de Node.js no [package.json](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/SIBiSC/package.json) (mudando `engines.node` de `>=22` para `>=18`), resolvendo conflitos de compatibilidade com os servidores da Vercel.
*   **Resultado:** Conforme documentado em [deploy_vercel_netlify_fechamento_2026-05-19.md](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/SIBiSC/docs/devops/deploy_vercel_netlify_fechamento_2026-05-19.md), as pipelines de CI/CD voltaram a ficar verdes, garantindo deploys contínuos e reprodutíveis no ambiente em nuvem.

---

### Exemplo 3: Resolução de Bugs de Scroll e Exibição do Rodapé (Footer CSS Scroll Bugs)

> [!NOTE]
> Bugs visuais em dispositivos móveis causados por barras de navegação flutuantes são comuns e difíceis de testar em simuladores simples. O agente de IA ajudou a modelar a solução baseando-se no comportamento real das safe-areas do iOS/Android.

*   **Contexto e Motivo de Uso:** Na Issue #66, foi relatado que, na visualização de smartphones, a barra inferior de navegação flutuante (`BottomNav`, com `position: fixed`) cobria e cortava os cartões de contatos e horários localizados ao final do rodapé. Tentativas manuais anteriores haviam inserido margens externas exageradas e vãos em branco desalinhados no desktop.
*   **Ação da IA Generativa:**
    1. A IA analisou as regras do arquivo [AppLayout.module.css](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/SIBiSC/src/components/layout/AppLayout.module.css) e diagnosticou que o uso de `margin-bottom` no `.footer` não forçava a expansão da área rolável do contêiner `.shell` sob regras de `overflow: clip` em navegadores WebKit/Blink móveis.
    2. Ela propôs a remoção de todas as margens externas do rodapé e a introdução de um espaçamento interno dinâmico (`padding-bottom`) que incorpora a altura da barra mobile somada à variável de ambiente de margem segura nativa do dispositivo (`safe-area-inset-bottom`):
       ```css
       /* Mobile / Tablet (< 900px) */
       .main {
         padding-bottom: 0;
       }
       .footer {
         margin-bottom: 0;
         padding-bottom: calc(6.5rem + env(safe-area-inset-bottom));
       }
       ```
    3. Simultaneamente, limpou os estilos no desktop para remover os vãos indesejados onde a barra móvel não se aplica.
*   **Resultado:** O rodapé passou a responder corretamente à rolagem móvel, mantendo 100% dos cartões legíveis e restaurando a integridade do layout sem afetar a fidelidade do protótipo no desktop.

---

## 3. Avaliação de Experiências (Prós e Contras)

A utilização de agentes autônomos de IA Generativa trouxe benefícios expressivos, mas também revelou desafios de integração descritos no balanço a seguir.

### Experiências Positivas (Prós)

*   **Agilidade e Velocidade de Diagnóstico:** Identificação quase instantânea de falhas em arquivos de configuração complexos de CI/CD. O cruzamento rápido de múltiplos logs de build poupou horas de depuração manual.
*   **Sugestão de Ferramentas de Alto Nível:** Ao invés de aplicar soluções genéricas de linha de comando que poderiam corromper repositórios, a IA sugeriu utilitários dedicados mais seguros (como o BFG Repo-Cleaner) com instruções prontas para uso.
*   **Facilidade na Geração de Testes Unitários:** A IA acelerou a expansão da cobertura de testes para os fluxos recentes de UI e mocks do Supabase, escrevendo blocos de testes unitários limpos e facilmente integráveis com Vitest.
*   **Conformidade com Boas Práticas:** Os ajustes de CSS propostos pela IA demonstraram sólida adesão ao design responsivo moderno (*Mobile-First*), utilizando recursos nativos de navegadores como `env(safe-area-inset-bottom)`.

### Experiências Negativas / Limitações (Contras)

*   **Atrito com Ambientes Locais Específicos (Windows vs Linux):** Scripts em shell de linha de comando gerados pela IA frequentemente falhavam no Windows devido a diferenças de aspas simples/duplas e comportamento de comandos como `grep` ou redirecionamentos de variáveis de ambiente. Isso exigiu intervenção humana para tradução manual de scripts para comandos PowerShell ou criação de rotinas dedicadas em Python.
*   **Alucinações Iniciais e Soluções Genéricas:** Em certas etapas de depuração de dependências, a IA sugeriu alterações genéricas de pacotes que não eram adequadas ao ecossistema já restrito do projeto, necessitando que o desenvolvedor refinasse o prompt repetidas vezes para limitar o escopo de atuação.
*   **Necessidade de Validação de Segurança:** Embora a IA identifique segredos expostos, comandos destrutivos recomendados por ela (como reescrever o histórico do Git com BFG) trazem riscos severos de perda de trabalho ou incompatibilidade em branches ativos de outros membros do grupo caso aplicados sem revisão humana detalhada.


---

## 7. Discussões e Aprendizados

O desenvolvimento do MVP do SIBiSC trouxe aprendizados práticos cruciais sobre engenharia de software e processos de qualidade em equipe:

### 7.1 Dificuldades e Desafios
1. **Ambientes Multiplataforma (Lockfile)**: A disparidade entre desenvolver localmente em sistemas Windows e rodar pipelines de CI/CD e Deploys em contêineres Linux causou problemas severos na validação estrita de pacotes com `npm ci`. A superação desse gargalo exigiu uma reavaliação técnica detalhada e o chaveamento estratégico do gerenciador de pacotes.
2. **Exposição de Credenciais**: A facilidade de subir o projeto com arquivos ambientais pré-configurados resultou na exposição acidental de credenciais do Supabase no histórico remoto do Git. Corrigir esse vazamento exigiu o uso de utilitários avançados de purga de banco de dados do Git (como o BFG Repo-Cleaner) e reescrita de commits.
3. **Colisões de Layout Mobile**: A presença de elementos fixos na base do viewport (como a barra de navegação móvel e FABs de assistente/feedback) causava colisão com os textos de rodapé. Isso exigiu um estudo cuidadoso de espaçamento interno em contêineres com estouro controlado (`overflow`).

### 7.2 Aprendizados Importantes
- **Metodologia Shift-Left**: Testar a aplicação desde as primeiras linhas de código (utilizando testes unitários Vitest e o script customizado de consistência estrutural `qa-guard.mjs`) garantiu que o projeto chegasse à data final de entrega com 100% de compilação livre de erros e com testes passando de forma consistente.
- **Acessibilidade como Requisito Não-Funcional**: Desenvolver pensando na ordem de tabulação, contraste de cores e suporte a leitores de tela desde o início eliminou o retrabalho de refatoração para adequação à WCAG 2.1 AA.
- **Abstração Mock-First**: Desenvolver a aplicação baseada em mocks bem estruturados permitiu fechar as interfaces e o fluxo lógico de geolocalização e catálogo rapidamente, de forma que o acoplamento futuro com o Supabase real seja simples e transparente.

---

## 8. Anexos

### 8.1 Slides da Apresentação
- [Apresentação da Primeira Entrega - 27 de Abril](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/ENTREGA_FINAL_PROF_LINA_2026/01_atividade_css_e_portfolio/slides_entrega1.pdf)
- [Apresentação da Segunda Entrega - 22/29 de Junho](file:///c:/Users/Rafael%20Feltrim/Documents/Web_Mobile/sibisc-hub-cultural/ENTREGA_FINAL_PROF_LINA_2026/04_sibisc_projeto_grupo/slides_entrega2.pdf)
