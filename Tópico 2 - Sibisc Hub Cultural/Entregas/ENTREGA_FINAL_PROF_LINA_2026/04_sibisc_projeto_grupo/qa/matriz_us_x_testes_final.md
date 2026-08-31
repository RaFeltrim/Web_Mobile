# Matriz US x Testes - SIBiSC

Esta matriz consolida a rastreabilidade entre historias de usuário do MVP SIBiSC e os casos de teste documentados nos arquivos:

- `casos_de_teste_funcional.md`
- `casos_de_teste_seguranca.md`

## Matriz de Rastreabilidade

| Historia de usuário | Objetivo | Testes funcionais relacionados | Testes de segurança relacionados | Prioridade |
|---|---|---|---|---|
| US-NOT-001 - Visualizar noticias recentes | Listar noticias publicadas e tratar loading, erro e estado vazio | TC-NOT-001 a TC-NOT-004 | SEC-RLS-001, SEC-EXP-001, SEC-EXP-003 | P0/P1 |
| US-NOT-002 - Abrir detalhe de uma noticia | Navegar da lista para o detalhe e exibir conteúdo completo | TC-NOT-005 a TC-NOT-007 | SEC-INJ-002, SEC-XSS-002, SEC-RLS-001 | P0/P2 |
| US-NOT-003 - Filtrar noticias por categoria | Permitir filtragem visual por categoria | TC-NOT-008 | SEC-XSS-001, SEC-VAL-001 | P2 |
| US-EVT-001 - Ver agenda de eventos | Listar eventos, lidar com estado vazio e visao calendario | TC-EVT-001 a TC-EVT-003 | SEC-RLS-002, SEC-EXP-003 | P0/P1 |
| US-EVT-002 - Abrir detalhe de um evento | Navegar da agenda para o detalhe do evento | TC-EVT-004 a TC-EVT-005 | SEC-INJ-002, SEC-XSS-002, SEC-RLS-002 | P0 |
| US-EVT-003 - Adicionar evento a agenda | Exportar evento para calendario externo, inclusive no mobile | TC-EVT-006 a TC-EVT-007 | SEC-EXP-003 | P1/P2 |
| US-ACV-001 - Buscar livros | Buscar livros por titulo/autor, tratar sem resultados e debounce | TC-ACV-001 a TC-ACV-004 | SEC-INJ-001, SEC-XSS-001, SEC-VAL-001, SEC-RLS-003 | P0/P2 |
| US-ACV-002 - Ver disponibilidade por unidade | Exibir disponibilidade do livro em bibliotecas/unidades | TC-ACV-005 a TC-ACV-006 | SEC-RLS-003, SEC-EXP-001 | P0/P1 |
| US-ACV-003 - Unidade mais proxima | Usar geolocalizacao ou fallback manual para recomendar unidade | TC-ACV-007 a TC-ACV-009 | SEC-EXP-001, SEC-EXP-003 | P0 |
| US-OPS-001 - Informações publicas das unidades | Exibir dados publicos das unidades em eventos e acervo | TC-OPS-001 | SEC-RLS-003, SEC-EXP-001 | P1 |
| Navegação e layout | Validar navegação principal, 404 e responsividade mobile | TC-NAV-001 a TC-NAV-003 | SEC-EXP-003 | P0/P2 |
| Rotas administrativas e operacao futura | Cobrir riscos de autenticacao, RLS e permissoes do backend planejado | Não aplicavel ao MVP frontend mock-first | SEC-AUTH-001 a SEC-AUTH-004, SEC-RLS-004 a SEC-RLS-006, SEC-EXP-002 | Critica/Alta |

## Critérios de Aceite Gerais

- O usuário consegue acessar as páginas principais sem erros de roteamento.
- O layout se adapta a desktop e mobile.
- As interacoes principais possuem feedback claro.
- Formulários não aceitam dados invalidos sem indicacao ao usuário.
- Conteudos mockados não éxpõem informações sensiveis.
- O projeto executa `npm run qa:ci` sem falhas.
- A documentacao de QA permite rastrear requisitos, riscos e verificacoes.

## Observação

Os itens de segurança ligados a Supabase documentam o comportamento esperado para a evolução backend. Na entrega atual, o MVP esta estruturado como frontend mock-first, com narrativa técnica preparada para evoluir para Supabase.

