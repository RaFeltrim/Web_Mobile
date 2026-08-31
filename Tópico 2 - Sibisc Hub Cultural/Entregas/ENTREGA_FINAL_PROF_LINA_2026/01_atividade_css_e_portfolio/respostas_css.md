# Atividade - Introdução ao CSS no Desenvolvimento Front-end

**Aluno:** Rafael Feltrim - Nº USP: 15942812
**Disciplina:** SSC0961 - Desenvolvimento Web e Mobile (USP)

---

## Questão 1 - Diferença entre HTML e CSS

**HTML (HyperText Markup Language)** é uma linguagem de marcação responsável por definir a **estrutura** e o **conteúdo** de uma página web. Através de tags como `<h1>`, `<p>`, `<img>` e `<a>`, o HTML organiza os elementos que compõem o documento: títulos, parágrafos, imagens, links, formulários e seções semânticas.

**CSS (Cascading Style Sheets)** é uma linguagem de estilo responsável pela **apresentação visual** do conteúdo HTML. O CSS controla cores, fontes, espaçamentos, posicionamento, animações e responsividade. Enquanto o HTML diz *o que* aparece na página, o CSS define *como* aquilo aparece.

**Como trabalham juntos:** o navegador primeiro interpreta o HTML para construir a árvore DOM (Document Object Model), que representa a estrutura do documento. Em seguida, aplica as regras CSS para estilizar cada elemento dessa árvore, gerando a renderização visual final. Essa separação entre estrutura (HTML) e apresentação (CSS) é um princípio fundamental do desenvolvimento web moderno, pois permite:

- Manutenção mais fácil (alterar o visual sem mexer no conteúdo)
- Reutilização de estilos em múltiplas páginas
- Melhor acessibilidade e SEO

**Exemplo prático:**

```html
<!-- HTML: define a estrutura -->
<h1>Bem-vindo ao SIBiSC</h1>
<p>Hub cultural de São Carlos.</p>
```

```css
/* CSS: define a apresentação */
h1 {
  color: #1a73e8;
  font-family: 'Segoe UI', sans-serif;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
}
```

---

## Questão 2 - Três propriedades CSS

### 2.1 `color`

Define a cor do texto de um elemento. Aceita valores em nomes (`red`), hexadecimal (`#ff0000`), RGB (`rgb(255, 0, 0)`), HSL e outras notações.

**Efeito na página:** altera a cor de todo o texto dentro do elemento selecionado e seus filhos (por herança).

```css
h1 {
  color: #2c3e50;
}
```

### 2.2 `margin`

Define o espaçamento **externo** de um elemento, ou seja, a distância entre a borda do elemento e os elementos vizinhos. Pode ser definida individualmente (`margin-top`, `margin-right`, `margin-bottom`, `margin-left`) ou como shorthand.

**Efeito na página:** cria espaço ao redor do elemento, afastando-o dos elementos adjacentes no layout.

```css
.card {
  margin: 16px;           /* 16px em todos os lados */
  margin-bottom: 24px;    /* sobrescreve apenas a margem inferior */
}
```

### 2.3 `background-color`

Define a cor de fundo de um elemento. Aplica-se à área de conteúdo + padding do elemento (por padrão, conforme o box model).

**Efeito na página:** preenche o fundo do elemento com a cor especificada, criando contraste visual e destacando seções.

```css
.hero {
  background-color: #e8f0fe;
  padding: 40px 20px;
}
```

---

## Questão 3 - Três formas de aplicar CSS

### 3.1 CSS Inline

O estilo é aplicado diretamente no atributo `style` de um elemento HTML.

```html
<p style="color: blue; font-size: 18px;">Texto em azul.</p>
```

| Vantagens | Desvantagens |
| --- | --- |
| Rápido para testes pontuais | Mistura estrutura com apresentação |
| Tem a maior especificidade (prioridade) | Impossível reutilizar em outros elementos |
| Não requer arquivo externo | Código HTML fica poluído e difícil de manter |

### 3.2 CSS Interno (Embedded)

O estilo é escrito dentro de uma tag `<style>` no `<head>` do documento HTML.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }
    h1 {
      color: #333;
    }
  </style>
</head>
<body>
  <h1>Título da Página</h1>
</body>
</html>
```

| Vantagens | Desvantagens |
| --- | --- |
| Estilos ficam junto ao HTML, fácil em páginas únicas | Não é reutilizável entre páginas diferentes |
| Não precisa de arquivo separado | Aumenta o tamanho do arquivo HTML |
| Útil para protótipos e e-mails HTML | Dificulta a manutenção em projetos grandes |

### 3.3 CSS Externo

O estilo é escrito em um arquivo `.css` separado e referenciado no HTML via tag `<link>`.

```html
<!-- No HTML (index.html) -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* No arquivo styles.css */
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
```

| Vantagens | Desvantagens |
| --- | --- |
| Separação completa de estrutura e estilo | Requer uma requisição HTTP adicional |
| Reutilizável em múltiplas páginas | Em projetos muito simples, pode ser desnecessário |
| Cache do navegador melhora performance | Dependência de arquivo externo (se o CSS não carregar, a página perde estilo) |
| Padrão profissional da indústria | — |

---

## Questão 4 - Seletores CSS

### 4.1 Seletores Simples

#### Seletor por Nome de Tag (Type Selector)

Seleciona todos os elementos com aquela tag.

```css
p {
  line-height: 1.6;
  color: #444;
}

h2 {
  border-bottom: 2px solid #1a73e8;
}
```

#### Seletor por ID

Seleciona um único elemento pelo atributo `id`. Usa-se o prefixo `#`.

```css
#header-principal {
  background-color: #1a1a2e;
  color: white;
  padding: 20px;
}
```

```html
<header id="header-principal">Cabeçalho</header>
```

#### Seletor por Classe

Seleciona todos os elementos que possuem determinada classe. Usa-se o prefixo `.`.

```css
.btn-primary {
  background-color: #1a73e8;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

```html
<button class="btn-primary">Enviar</button>
<a href="#" class="btn-primary">Saiba mais</a>
```

#### Seletor Universal

Seleciona todos os elementos da página. Usa-se `*`.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### 4.2 Pseudo-classes

Selecionam elementos em um estado específico (interação, posição, etc.).

```css
/* Muda cor ao passar o mouse */
a:hover {
  color: #e74c3c;
  text-decoration: underline;
}

/* Estiliza o primeiro filho */
li:first-child {
  font-weight: bold;
}

/* Estiliza linhas alternadas de tabela */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Input em foco */
input:focus {
  outline: 2px solid #1a73e8;
  border-color: #1a73e8;
}
```

### 4.3 Combinadores

Definem relações hierárquicas entre seletores.

```css
/* Descendente (espaço): qualquer <p> dentro de .article */
.article p {
  text-align: justify;
}

/* Filho direto (>): apenas <li> filhos diretos de .menu */
.menu > li {
  display: inline-block;
  margin-right: 16px;
}

/* Irmão adjacente (+): <p> imediatamente após <h2> */
h2 + p {
  font-size: 1.1rem;
  color: #555;
}

/* Irmão geral (~): todos os <p> irmãos depois de <h2> */
h2 ~ p {
  margin-left: 10px;
}
```

### 4.4 Pseudo-elementos

Permitem estilizar partes específicas de um elemento, como a primeira letra ou conteúdo gerado.

```css
/* Primeira letra do parágrafo */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  color: #1a73e8;
  float: left;
  margin-right: 4px;
}

/* Primeira linha do parágrafo */
p::first-line {
  font-variant: small-caps;
}

/* Conteúdo antes de um elemento */
.nota::before {
  content: "Nota: ";
}

/* Conteúdo após um link externo */
a[target="_blank"]::after {
  content: " ->";
  font-size: 0.8em;
}
```

### 4.5 Seletores de Atributo

Selecionam elementos com base nos atributos HTML e seus valores.

```css
/* Qualquer elemento com o atributo 'title' */
[title] {
  cursor: help;
  border-bottom: 1px dotted #999;
}

/* Input do tipo email */
input[type="email"] {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
}

/* Links que começam com https */
a[href^="https"] {
  color: green;
}

/* Links que terminam com .pdf */
a[href$=".pdf"] {
  color: #c0392b;
  font-weight: bold;
}

/* Elementos cujo atributo contém a palavra "dark" */
[class*="dark"] {
  background-color: #1a1a2e;
  color: #eee;
}
```

---

## Referências

- MDN Web Docs - CSS. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/CSS>
- W3Schools - CSS Tutorial. Disponível em: <https://www.w3schools.com/css/>
- MDN Web Docs - Seletores CSS. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_selectors>
