# Canvas_Funções
Neste trabalho, desenvolvemos uma cena no Canvas para explicar e demonstrar o funcionamento de: Translação, Rotação, Escala, Transform e Clipping Path, tudo utilizando JavaScript. Além disso, também implementamos movimentação e colisão no projeto.

Neste projeto, também incluímos algo diferente: mostramos todos os comandos do Git Bash utilizados para enviar os arquivos do navegador para o computador, junto com a explicação de alguns comandos adicionais.

<br>


Início do Desenvolvimento
Começamos criando as pastas básicas (CSS, HTML, img, etc.) e vinculando o repositório ao GitHub. A estrutura inicial da cena foi baseada em um jogo simples, onde há três inimigos e um personagem, e o objetivo é desviar dos inimigos. A partir dessa base, integramos os tópicos listados acima, com suas respectivas explicações.

Códigos Git Utilizados









## Cenário Inicial


O cenário é simples, pois o objetivo principal é demonstrar as funções do Canvas, e não a complexidade gráfica. Foram utilizados os seguintes elementos:

- Retângulos

- Arcos

- Linhas

- Fundo com cor via CSS

## Trechos de Código:

```javascript
// Círculo
ctx.beginPath();
ctx.arc(100, 70, 60, 0, Math.PI * 2);
ctx.fillStyle = "#7B68EE";
ctx.fill();

// Retângulo
ctx.fillStyle = '#8B4513';
ctx.fillRect(1250, 310, 80, 20);
ctx.fillRect(1265, 320, 50, 20);

// Linhas
ctx.beginPath();
ctx.moveTo(70, 100);
ctx.lineTo(90, 80);
ctx.lineTo(90, 100);
ctx.lineTo(110, 80);
ctx.lineTo(110, 100);
ctx.lineTo(130, 80);
ctx.lineTo(130, 100);
ctx.stroke();

body {
  overflow: hidden; /* Esconde a barra de rolagem */
}

#canvas {
  background-color: blue; /* Fundo azul escuro */
}

```

## Movimentação e Colisão
Para movimentar os elementos, criamos funções específicas para cada personagem, utilizando variáveis para controlar suas posições e velocidades.

### Exemplo de movimentação (Barco):
```javascipt
var yBarco = 1;
var velocidadeBarco = 10;

function barco() {
  ctx.translate(0, yBarco);
  ctx.beginPath();
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(1250, 310, 80, 20);
  ctx.fillRect(1265, 320, 50, 20);
  ctx.fillStyle = "#DEB887";
  ctx.fillRect(1290, 281, 5, 30);
  ctx.fillStyle = 'red';
  ctx.lineTo(1290, 235);
  ctx.lineTo(1315, 285);
  ctx.lineTo(1265, 285);
  ctx.fill();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}
```

### Inimigos:
Cada inimigo possui sua própria função (inimigo1, inimigo2, inimigo3), controlando seus movimentos no eixo X.

```javascript
var x = 1; 
var velocidade = 6;

function inimigo1() {
  ctx.translate(x, 0);
  ctx.beginPath();
  ctx.arc(100, 70, 60, 0, Math.PI * 2);
  ctx.fillStyle = "#7B68EE";
  ctx.fill();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}
```
(O mesmo padrão é aplicado para inimigo2 e inimigo3, com suas devidas posições e velocidades.)

### Animação:
A função animar() é responsável por animar todos os objetos na tela:

```javascript
function animar() {
  ctx.clearRect(0, 0, 1400, 600);
  inimigo3();
  inimigo2();
  inimigo1();
  barco();

  x3 += velocidade3;
  x2 += velocidade2;
  x += velocidade;
}
```
### Colisão:
As colisões são tratadas de forma simples utilizando condições:

```javascipt
if (x3 > 1420) {
  x3 = -100; // Volta ao início da tela
}
```

O barco é impedido de sair da área do Canvas, e os inimigos "resetam" quando saem da tela.

Resumo
Este projeto mostra, na prática, como manipular elementos no Canvas com:

- Translação

- Movimentação

- Colisão

- Criação de formas básicas

- Manipulação de transformações

Além de apresentar, também, o fluxo de trabalho utilizando o Git Bash para versionamento dos arquivos.
