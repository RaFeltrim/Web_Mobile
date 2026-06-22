# Pendências Não Bloqueantes E Evidências Manuais

Estas pendências não impedem a existencia do pacote final, mas devem ser resolvidas antes do envio definitivo para deixar a entrega 100% comprovada.

## 1. DevTools Network

Status: resolvida nesta etapa.

Resultado:

- Prints reais da aba Network foram adicionados em `03_atividade_devtools_network/prints/`.
- O arquivo HAR `rafeltrim.github.io.har` foi adicionado como evidência técnica.
- O documento `devtools_inspecao_final.md` foi preenchido com URL, quantidade de requisições, tamanhos, status HTTP, XHR/Fetch e fontes externas.

Observação:

- A captura principal mostra o carregamento inicial do portfólio com 17 requisições.
- O HAR exportado contém 54 entradas porque tambem registrou interacoes/eventos posteriores durante a inspeção.

## 2. Relatório de Acessibilidade

Status: resolvida nesta etapa.

Resultado:

- Deploy de produção corrigido em `https://sibisc-hub-cultural.vercel.app/`.
- Lighthouse executado nas rotas principais do SIBiSC.
- Todas as rotas auditadas ficaram com score de acessibilidade `100/100`.
- Relatório preenchido em `04_sibisc_projeto_grupo/qa/relatorio_acessibilidade_final.md`.
- Evidências JSON salvas em `04_sibisc_projeto_grupo/evidencia_build/lighthouse/`.

## 3. Evidência do Quality Gate

Status: resolvida nesta etapa.

Resultado:

- `npm run qa:ci` executado com sucesso dentro de `SIBiSC`.
- Evidência registrada em `04_sibisc_projeto_grupo/evidencia_build/resultado_qa_ci.md`.

## 4. Compactacao Final

Status: resolvida nesta etapa.

Resultado:

- Arquivo `ENTREGA_FINAL_PROF_LINA_2026.zip` gerado na raiz de `Web_Mobile`.
- Tamanho aproximado: 1,62 MB.

