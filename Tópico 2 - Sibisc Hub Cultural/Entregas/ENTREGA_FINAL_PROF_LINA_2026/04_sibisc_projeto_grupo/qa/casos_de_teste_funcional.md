# Casos de Teste Funcional - SIBiSC

## Objetivo

Validar os fluxos principais do MVP do SIBiSC usando roteiros Given-When-Then vinculados às User Stories do backlog. Cada cenário cobre um comportamento esperado do sistema do ponto de vista do usuário final.

## Convenções

- **ID do cenário:** `TC-[módulo]-[número sequencial]`
- **Formato:** Given (contexto) / When (ação) / Then (resultado esperado)
- **Prioridade:** P0 (bloqueante), P1 (crítico), P2 (importante), P3 (desejável)
- **Status:** Pendente, Aprovado, Falhou, Bloqueado

---

## EP01 - Notícias

### US-NOT-001: Visualizar notícias recentes

#### TC-NOT-001 — Listar notícias na página principal

- **Prioridade:** P0
- **Pré-condição:** Existem ao menos 2 notícias publicadas na base de dados

```
Given que o cidadão acessa a página de notícias (/noticias)
When a página termina de carregar
Then uma lista de cards de notícias é exibida
  And cada card mostra título, resumo, data de publicação e categoria
  And as notícias estão ordenadas da mais recente para a mais antiga
```

#### TC-NOT-002 — Estado vazio quando não há notícias

- **Prioridade:** P1
- **Pré-condição:** Não éxistem notícias publicadas na base de dados

```
Given que o cidadão acessa a página de notícias (/noticias)
When a página termina de carregar
Then uma mensagem de estado vazio é exibida
  And a mensagem informa que não há notícias disponíveis no momento
  And nenhum card de notícia é renderizado
```

#### TC-NOT-003 — Estado de carregamento (loading)

- **Prioridade:** P1
- **Pré-condição:** A requisição de notícias leva mais de 200ms

```
Given que o cidadão acessa a página de notícias (/noticias)
When a requisição de dados está em andamento
Then um indicador de carregamento (skeleton ou spinner) é exibido
  And nenhum conteúdo parcial ou quebrado é mostrado
```

#### TC-NOT-004 — Estado de erro na busca de notícias

- **Prioridade:** P1
- **Pré-condição:** O serviço de notícias retorna erro (falha de rede ou servidor)

```
Given que o cidadão acessa a página de notícias (/noticias)
When a requisição de dados falha
Then uma mensagem de erro amigável é exibida
  And a mensagem sugere que o usuário tente novamente
  And nenhum stack trace ou mensagem técnica é exposta
```

### US-NOT-002: Abrir detalhe de uma notícia

#### TC-NOT-005 — Navegar da lista para o detalhe

- **Prioridade:** P0
- **Pré-condição:** A lista de notícias está carregada com ao menos 1 notícia

```
Given que o cidadão está na página de notícias (/noticias)
  And vê uma lista de cards de notícias
When clica em um card de notícia
Then é redirecionado para a página de detalhe (/noticias/:newsId)
  And a URL reflete o ID da notícia selecionada
```

#### TC-NOT-006 — Exibir conteúdo completo da notícia

- **Prioridade:** P0
- **Pré-condição:** O cidadão acessou a rota /noticias/:newsId com um ID válido

```
Given que o cidadão está na página de detalhe de uma notícia
When a página termina de carregar
Then o título completo da notícia é exibido
  And a data de publicação é exibida
  And o conteúdo integral da notícia é renderizado
  And a origem/fonte da notícia é exibida quando disponível
```

#### TC-NOT-007 — Retornar do detalhe para a lista

- **Prioridade:** P2
- **Pré-condição:** O cidadão está na página de detalhe de uma notícia

```
Given que o cidadão está visualizando o detalhe de uma notícia
When clica no botão de voltar ou na navegação para notícias
Then retorna à página de listagem (/noticias)
  And a lista de notícias é exibida normalmente
```

### US-NOT-003: Filtrar notícias por categoria

#### TC-NOT-008 — Filtrar notícias por categoria específica

- **Prioridade:** P2
- **Pré-condição:** Existem notícias de múltiplas categorias

```
Given que o cidadão está na página de notícias
  And os filtros de categoria (FilterPills) estão visíveis
When seleciona a categoria "Eventos"
Then apenas notícias da categoria "Eventos" são exibidas
  And o filtro selecionado fica visualmente destacado
  And a contagem de resultados reflete a filtragem
```

---

## EP02 - Eventos

### US-EVT-001: Ver agenda de eventos

#### TC-EVT-001 — Listar eventos publicados

- **Prioridade:** P0
- **Pré-condição:** Existem ao menos 2 eventos publicados com datas futuras

```
Given que o participante acessa a página de eventos (/eventos)
When a página termina de carregar
Then uma lista de cards de eventos é exibida
  And cada card mostra título, data, horário, local e categoria
  And os eventos estão ordenados cronologicamente (próximo primeiro)
```

#### TC-EVT-002 — Estado vazio de eventos

- **Prioridade:** P1
- **Pré-condição:** Não éxistem eventos publicados

```
Given que o participante acessa a página de eventos (/eventos)
When a página termina de carregar
Then uma mensagem de estado vazio é exibida
  And a mensagem informa que não há eventos programados
```

#### TC-EVT-003 — Visualizar eventos em formato de calendário

- **Prioridade:** P1
- **Pré-condição:** Existem eventos em datas distintas

```
Given que o participante acessa a página de eventos
When alterna para a visão de calendário (se disponível)
Then os eventos são agrupados por data
  And a data atual é destacada visualmente
  And os eventos de cada dia são listados sob a data correspondente
```

### US-EVT-002: Abrir detalhe de um evento

#### TC-EVT-004 — Navegar da lista para o detalhe do evento

- **Prioridade:** P0
- **Pré-condição:** A lista de eventos está carregada

```
Given que o participante está na página de eventos (/eventos)
When clica em um card de evento
Then é redirecionado para a página de detalhe (/eventos/:eventId)
```

#### TC-EVT-005 — Exibir informações completas do evento

- **Prioridade:** P0
- **Pré-condição:** O participante acessou /eventos/:eventId com ID válido

```
Given que o participante está na página de detalhe de um evento
When a página termina de carregar
Then o título do evento é exibido
  And a data e horário são exibidos
  And o local (nome da unidade e endereço) é exibido
  And a descrição completa do evento é renderizada
  And o público-alvo é indicado quando disponível
```

### US-EVT-003: Adicionar evento à agenda

#### TC-EVT-006 — Exportar evento para agenda externa

- **Prioridade:** P1
- **Pré-condição:** O participante está na página de detalhe de um evento

```
Given que o participante visualiza o detalhe de um evento
When clica no botão "Adicionar à agenda"
Then um link de exportação para Google Calendar (ou .ics) é gerado
  And o link contém título, data, horário e local do evento
  And o link abre em nova aba ou inicia download do arquivo .ics
```

#### TC-EVT-007 — Botão de agenda em dispositivo mobile

- **Prioridade:** P2
- **Pré-condição:** Acesso pelo navegador mobile

```
Given que o participante acessa o detalhe de um evento pelo celular
When clica no botão "Adicionar à agenda"
Then o comportamento de exportação funciona corretamente no mobile
  And o fallback web é acionado se o calendário nativo não estiver disponível
```

---

## EP03 - Acervo e Geolocalização

### US-ACV-001: Buscar livros

#### TC-ACV-001 — Buscar livro por título

- **Prioridade:** P0
- **Pré-condição:** Existem livros cadastrados no acervo

```
Given que o estudante acessa a página do catálogo (/catalogo)
  And o campo de busca está visível
When digita "Dom Casmurro" no campo de busca
Then os resultados são filtrados em tempo real (debounce)
  And o livro "Dom Casmurro" aparece nos resultados
  And cada resultado mostra título, autor e disponibilidade resumida
```

#### TC-ACV-002 — Buscar livro por autor

- **Prioridade:** P0
- **Pré-condição:** Existem livros de Machado de Assis no acervo

```
Given que o estudante está na página do catálogo
When digita "Machado de Assis" no campo de busca
Then todos os livros do autor aparecem nos resultados
  And a busca é insensível a acentos (normalização)
```

#### TC-ACV-003 — Busca sem resultados

- **Prioridade:** P1
- **Pré-condição:** Nenhum livro corresponde ao termo buscado

```
Given que o estudante está na página do catálogo
When digita "xyzlivronaoexiste" no campo de busca
Then uma mensagem de estado vazio é exibida
  And a mensagem sugere termos alternativos ou verificar a grafia
```

#### TC-ACV-004 — Campo de busca com debounce

- **Prioridade:** P2
- **Pré-condição:** O estudante está na página do catálogo

```
Given que o estudante começa a digitar no campo de busca
When digita caracteres rapidamente
Then a busca não é executada a cada caractere
  And a busca é executada apenas após o usuário parar de digitar (debounce ~300ms)
  And o indicador de loading aparece durante a busca
```

### US-ACV-002: Ver disponibilidade por unidade

#### TC-ACV-005 — Exibir disponibilidade de um livro por biblioteca

- **Prioridade:** P0
- **Pré-condição:** O estudante acessou o detalhe de um livro com inventário em múltiplas unidades

```
Given que o estudante está na página de detalhe do livro (/catalogo/:bookId)
When a página termina de carregar
Then uma tabela de disponibilidade é exibida
  And cada linha mostra: nome da unidade, status (disponível/indisponível), quantidade de exemplares
  And unidades com exemplares disponíveis são claramente diferenciadas das indisponíveis
```

#### TC-ACV-006 — Livro indisponível em todas as unidades

- **Prioridade:** P1
- **Pré-condição:** O livro não éstá disponível em nenhuma unidade

```
Given que o estudante acessa o detalhe de um livro sem exemplares disponíveis
When a página termina de carregar
Then a tabela de disponibilidade mostra todas as unidades como "Indisponível"
  And uma mensagem indica que não há exemplares disponíveis no momento
```

### US-ACV-003: Unidade mais próxima

#### TC-ACV-007 — Identificar unidade mais próxima com permissão de geolocalização

- **Prioridade:** P0
- **Pré-condição:** O estudante concedeu permissão de geolocalização e o livro está disponível em ao menos 2 unidades

```
Given que o estudante está na página de detalhe do livro
  And a geolocalização está ativa
When a página calcula a distância para cada unidade
Then a unidade mais próxima com exemplar disponível é destacada
  And a distância aproximada é exibida
```

#### TC-ACV-008 — Fallback quando geolocalização é negada

- **Prioridade:** P0
- **Pré-condição:** O estudante negou a permissão de geolocalização

```
Given que o estudante está na página de detalhe do livro
  And a permissão de geolocalização foi negada
When a página tenta identificar a unidade mais próxima
Then um fallback de seleção manual de bairro ou unidade é exibido
  And o estudante pode escolher manualmente sua localização
  And a unidade recomendada é atualizada com base na seleção manual
```

#### TC-ACV-009 — Fluxo completo: busca → detalhe → disponibilidade → proximidade

- **Prioridade:** P0
- **Pré-condição:** O acervo contém livros com inventário distribuído entre unidades

```
Given que o estudante acessa a página do catálogo
When busca por "Vidas Secas"
  And clica no resultado do livro
Then é levado ao detalhe do livro
  And a tabela de disponibilidade por unidade é exibida
  And a unidade mais próxima (ou fallback manual) é destacada
  And o estudante consegue identificar onde buscar o livro fisicamente
```

---

## EP04 - Operação Mínima

### US-OPS-001: Informações públicas das unidades

#### TC-OPS-001 — Exibir dados da unidade em eventos e acervo

- **Prioridade:** P1
- **Pré-condição:** As unidades possuem nome, endereço, horário e contato cadastrados

```
Given que o cidadão está no detalhe de um evento vinculado a uma unidade
When a página termina de carregar
Then o nome da unidade é exibido
  And o endereço completo é visível
  And o horário de funcionamento é exibido
```

---

## Navegação e Layout

### TC-NAV-001 — Navegação principal entre módulos

- **Prioridade:** P0
- **Pré-condição:** A aplicação está carregada

```
Given que o cidadão está em qualquer página da aplicação
When utiliza o menu de navegação (header ou BottomNav no mobile)
Then consegue navegar entre Home, Notícias, Eventos, Catálogo e Perfil
  And a página selecionada é carregada corretamente
  And o item ativo no menu é destacado visualmente
```

### TC-NAV-002 — Página 404 para rotas inexistentes

- **Prioridade:** P2
- **Pré-condição:** Nenhuma

```
Given que o cidadão acessa uma URL inexistente (ex: /pagina-invalida)
When a aplicação processa a rota
Then a página NotFound (404) é exibida
  And a página contém orientação para voltar à Home
```

### TC-NAV-003 — Layout responsivo mobile

- **Prioridade:** P1
- **Pré-condição:** Acesso por dispositivo com tela menor que 768px

```
Given que o cidadão acessa a aplicação pelo celular
When navega entre as páginas
Then o BottomNav (navegação inferior) é exibido com 5 ícones
  And o conteúdo se adapta à largura da tela sem scroll horizontal
  And os cards de notícias, eventos e livros são legíveis no mobile
```

---

## Rastreabilidade

| Cenário | US Vinculada | Task Vinculada | Módulo |
|---------|-------------|----------------|--------|
| TC-NOT-001 a TC-NOT-004 | US-NOT-001 | T-NOT-001 | Notícias |
| TC-NOT-005 a TC-NOT-007 | US-NOT-002 | T-NOT-002, T-NOT-003 | Notícias |
| TC-NOT-008 | US-NOT-003 | — | Notícias |
| TC-EVT-001 a TC-EVT-003 | US-EVT-001 | T-EVT-001, T-EVT-002 | Eventos |
| TC-EVT-004 a TC-EVT-005 | US-EVT-002 | T-EVT-003 | Eventos |
| TC-EVT-006 a TC-EVT-007 | US-EVT-003 | T-EVT-004 | Eventos |
| TC-ACV-001 a TC-ACV-004 | US-ACV-001 | T-ACV-001 | Acervo |
| TC-ACV-005 a TC-ACV-006 | US-ACV-002 | T-ACV-002 | Acervo |
| TC-ACV-007 a TC-ACV-009 | US-ACV-003 | T-ACV-003, T-ACV-004 | Acervo |
| TC-OPS-001 | US-OPS-001 | T-OPS-002 | Operação |
| TC-NAV-001 a TC-NAV-003 | — | T-BASE-003 | Navegação |
