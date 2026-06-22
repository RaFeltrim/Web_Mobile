# Atividade 2 - Inspeção de Tráfego de Rede com DevTools

**Aluno:** Rafael Feltrim
**Disciplina:** SSC0961 - Desenvolvimento Web e Mobile (USP)

---

## 1. O que é a aba Network (Rede) do DevTools

O DevTools (Ferramentas do Desenvolvedor) do Google Chrome é um conjunto de ferramentas integradas ao navegador que permite inspecionar, depurar e analisar páginas web. Para acessá-lo, basta pressionar **F12** ou **Ctrl+Shift+I** (Windows/Linux) em qualquer página.

A aba **Network** (Rede) registra todas as requisições HTTP que o navegador faz ao carregar uma página. Ela mostra cada recurso baixado, o tempo de carregamento, o tamanho e o código de status HTTP. É uma ferramenta essencial para entender o que acontece nos bastidores quando um site é aberto.

---

## 2. Como usar a aba Network

1. Abra o Google Chrome e navegue até o site que deseja inspecionar.
2. Pressione **F12** para abrir o DevTools.
3. Clique na aba **Network** (ou **Rede**, se o Chrome estiver em português).
4. Recarregue a página com **Ctrl+R** ou **F5** para capturar todo o tráfego desde o início.
5. Observe a lista de requisições que aparece na parte inferior da tela.

**Dica:** Marque a opção **"Disable cache"** (Desabilitar cache) no topo da aba Network para forçar o navegador a baixar todos os recursos novamente, simulando a experiência de um primeiro acesso.

---

## 3. Tipos de recursos carregados

Ao abrir qualquer página web, o navegador faz dezenas (ou centenas) de requisições. Os principais tipos de recursos são:

### 3.1 Document (Documento HTML)

O primeiro recurso carregado é o documento HTML principal da página. Ele contém a estrutura completa do conteúdo e referências a outros recursos (CSS, JS, imagens).

- **Método HTTP:** GET
- **Tipo no DevTools:** `document`
- **Exemplo:** `GET https://www.exemplo.com/` → retorna o `index.html`

### 3.2 Stylesheet (Folhas de Estilo CSS)

Arquivos `.css` que definem a aparência visual da página (cores, fontes, layout).

- **Tipo no DevTools:** `stylesheet`
- **Exemplo:** `styles.css`, `bootstrap.min.css`

### 3.3 Script (JavaScript)

Arquivos `.js` que adicionam interatividade e comportamento dinâmico à página.

- **Tipo no DevTools:** `script`
- **Exemplo:** `app.js`, `analytics.js`, `react.production.min.js`

### 3.4 XHR / Fetch (Requisições Assíncronas)

Requisições feitas pelo JavaScript da página para buscar dados sem recarregar a página inteira. São muito comuns em aplicações modernas (SPAs) que carregam conteúdo dinamicamente.

- **Tipo no DevTools:** `xhr` ou `fetch`
- **Exemplo:** `GET /api/noticias` retornando dados em JSON

### 3.5 Img (Imagens)

Arquivos de imagem como `.png`, `.jpg`, `.svg`, `.webp`.

- **Tipo no DevTools:** `img`
- **Exemplo:** `logo.svg`, `banner-home.webp`

### 3.6 Font (Fontes)

Arquivos de tipografia como `.woff2`, `.ttf` carregados via `@font-face` no CSS.

- **Tipo no DevTools:** `font`
- **Exemplo:** `Manrope-Regular.woff2`

### 3.7 Media (Áudio e Vídeo)

Arquivos de mídia como `.mp4`, `.mp3`, `.webm`.

- **Tipo no DevTools:** `media`

### 3.8 Manifest / Service Worker

Arquivos usados em Progressive Web Apps (PWAs) para habilitar funcionalidades offline.

- **Tipo no DevTools:** `manifest`

---

## 4. Códigos de Status HTTP

Cada requisição na aba Network mostra um código de status na coluna **Status**. Esses códigos indicam o resultado da comunicação entre o navegador e o servidor:

### Respostas de sucesso (2xx)

| Código | Significado | Descrição |
|--------|------------|-----------|
| **200** | OK | A requisição foi bem-sucedida. O recurso foi encontrado e enviado. |
| **201** | Created | Um novo recurso foi criado com sucesso (comum em requisições POST). |
| **204** | No Content | A requisição foi bem-sucedida, mas não há conteúdo para retornar. |

### Redirecionamentos (3xx)

| Código | Significado | Descrição |
|--------|------------|-----------|
| **301** | Moved Permanently | O recurso mudou de URL permanentemente. |
| **302** | Found | Redirecionamento temporário. |
| **304** | Not Modified | O recurso não foi alterado desde a última visita (usa cache local). |

### Erros do cliente (4xx)

| Código | Significado | Descrição |
|--------|------------|-----------|
| **400** | Bad Request | A requisição está malformada ou inválida. |
| **401** | Unauthorized | É necessário autenticação para acessar o recurso. |
| **403** | Forbidden | O servidor entendeu a requisição, mas se recusa a autorizá-la. |
| **404** | Not Found | O recurso solicitado não existe no servidor. |

### Erros do servidor (5xx)

| Código | Significado | Descrição |
|--------|------------|-----------|
| **500** | Internal Server Error | Erro genérico no servidor. |
| **502** | Bad Gateway | O servidor atuando como gateway recebeu resposta inválida. |
| **503** | Service Unavailable | O servidor está temporariamente indisponível (manutenção ou sobrecarga). |

---

## 5. Informações da linha do tempo (Timing)

Ao clicar em uma requisição e ir na aba **Timing**, é possível ver as fases do carregamento:

- **Queueing:** tempo que a requisição ficou na fila esperando para ser enviada.
- **DNS Lookup:** tempo para resolver o nome de domínio em endereço IP.
- **Initial connection / SSL:** tempo para estabelecer a conexão TCP e negociar o certificado HTTPS.
- **Request sent:** tempo para enviar a requisição ao servidor.
- **Waiting (TTFB):** *Time to First Byte* — tempo entre o envio da requisição e o recebimento do primeiro byte da resposta. É a métrica mais importante para medir a velocidade do servidor.
- **Content Download:** tempo para baixar o corpo completo da resposta.

---

## 6. Barra de resumo (rodapé da aba Network)

Na parte inferior da aba Network, há um resumo geral que indica:

- **Quantidade de requisições:** quantos recursos foram carregados ao todo.
- **Tamanho transferido:** quantidade total de dados baixados pela rede (comprimidos com gzip/brotli).
- **Tamanho dos recursos:** tamanho real dos arquivos após descompressão.
- **Tempo total (Finish):** tempo total até a última requisição ser concluída.
- **DOMContentLoaded:** momento em que o HTML foi completamente parseado.
- **Load:** momento em que todos os recursos (incluindo imagens e CSS) terminaram de carregar.

---

## 7. Capturas de tela da inspeção

### 7.1 Visão geral da aba Network

[INSERIR PRINT AQUI - Captura mostrando a lista completa de requisições ao carregar o site]

**Descrição:** Esta captura mostra todas as requisições realizadas pelo navegador ao carregar a página principal do site. Note a coluna "Name" com os nomes dos arquivos, "Status" com os códigos HTTP, "Type" com o tipo do recurso, "Size" com o tamanho e "Time" com o tempo de carregamento individual.

---

### 7.2 Detalhes de uma requisição específica (Document)

[INSERIR PRINT AQUI - Captura mostrando os headers de uma requisição ao documento HTML principal]

**Descrição:** Ao clicar na primeira requisição (o documento HTML), podemos ver os cabeçalhos (Headers) da requisição e da resposta. Note o método GET, o status 200 OK, o Content-Type text/html e os cabeçalhos de cache.

---

### 7.3 Requisições XHR/Fetch (se houver)

[INSERIR PRINT AQUI - Captura mostrando requisições XHR ou Fetch, se o site usar chamadas AJAX]

**Descrição:** Estas são requisições assíncronas feitas pelo JavaScript da página para carregar dados dinamicamente (sem recarregar a página). Geralmente retornam dados em formato JSON e são usadas em APIs REST.

---

### 7.4 Barra de resumo e linha do tempo

[INSERIR PRINT AQUI - Captura da barra inferior mostrando total de requisições, tamanho transferido e tempo]

**Descrição:** A barra inferior resume o carregamento total: quantidade de requisições, dados transferidos, tempo até DOMContentLoaded e tempo até Load completo.

---

## 8. Análise do tráfego observado

[Após inserir os prints, descreva aqui o que você observou no site inspecionado. Exemplo de análise:]

**Site inspecionado:** [NOME DO SITE AQUI]

**Observações:**

1. **Total de requisições:** [X] requisições ao carregar a página.
2. **Tamanho total transferido:** [X] KB/MB.
3. **Tempo de carregamento:** [X] segundos até o evento Load.
4. **Recursos mais pesados:** [descreva quais arquivos consumiram mais dados - geralmente imagens e scripts].
5. **Códigos de status encontrados:** [liste os códigos observados, ex: 200 OK em todos, ou algum 304 Not Modified].
6. **Requisições XHR/Fetch:** [descreva se houve chamadas assíncronas a APIs e o que elas carregaram].
7. **Fontes externas:** [descreva se houve carregamento de fontes do Google Fonts ou similar].

---

## Referências

- Google Chrome DevTools - Network Reference. Disponível em: https://developer.chrome.com/docs/devtools/network/reference
- MDN Web Docs - HTTP Status Codes. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
- Google Chrome DevTools - Inspect Network Activity. Disponível em: https://developer.chrome.com/docs/devtools/network
