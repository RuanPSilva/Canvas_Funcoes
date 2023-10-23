# Canvas_Funções 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Olá, neste trabalho estaremos fazendo uma cena do Canvas onde estaremos explicando e demonstrando como funciona:Translação;Rotação;Escala;Transform e Clipping Path. Tudo isso dentro do Javascript. Também havera movimento e colisão dentro do projeto.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neste projeto estarei fazendo algo diferente também! Estarei mostrando todos os comandos do Git Bash que estarei utilizando para mandar os arquivos do meu navegador para o meu pc, além de outros comandos (que normalmente não utilizo muito) e uma breve explicação entre parenteses.

<br>
Autores:Kauan Jesus e Ruan Pablo

## Começo do desenvolvimento
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Começamos criando as pastas (Css,Html,img e etc) basicas e linkando o GitHub com o computador. Comecei a cena utilizando um jogo bem simples, onde há 3 inimigos e 1 personagem, e voçe tem que desviar dos inimigos.  Utilizando a ideia deste jogo, estaremos implantando os topícos que foi monstrado acima junto com sua explicação.<br>
## Cenário inicial
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/4ab8c92c-f89d-4429-8d7d-ac3a18b37303)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aqui temos um cenário bem simples, vale lembrar que este projeto serve mais para mostrar as funçoes do Canvas, então não há necessidade de fazer algo muito complexo. Utilizamos os desenhos simples do Canvas:Retângulos;Arcos e Linhas e pintamos o fundo de azul escuro com comandos no css. Utilizando os seus respectivos comandos:

     //Circulo
    ctx.beginPath();//Inicia o caminho do desenho
		ctx.arc(100,70,60,0,Math.PI*2)//Define onde vai surgir o arco, seu tamanho, e a circuferencia do arco
		ctx.fillStyle = "#7B68EE";//Cor do Arco
		ctx.fill();//Corpo

    //Retângulo
    ctx.fillStyle = '#8B4513';//Cor do retângulo
	 ctx.fillRect(1250, 310, 80, 20);//Parte de cima do Barco e o comando para criar o retangulo
	 ctx.fillRect(1265, 320, 50, 20);//Parte de Baixo do Barco e o comando para criar o retângulo

    //Linhas
    ctx.beginPath();// Comeca o caminho das linhas
		ctx.moveTo(70,100);//Inicia a posicão da primeira linha
		ctx.lineTo(90,80);//Inicia a posição da segunda e assim por diante.
		ctx.lineTo(90,100);
		ctx.lineTo(110,80);
		ctx.lineTo(110,100);
		ctx.lineTo(130,80);
		ctx.lineTo(130,100);
		ctx.stroke();Assim como nos comandos acima, voçê deve botar no inicio "FillStroke= ´cor´" para definir a cor da linha, Como eu não defini nenhuma, a linha 		esta preta

  	//Css
   	body {
	overflow: hidden; /*Comando para esconder a barra de Scroll*/

	}

	#canvas {
	background-color: blue; /*Comando para pintar a tela do Canvas de Azul escuro*/

	}



 > ⚠️ **Aviso:** O codígo acima foi retirado do codígo principal, então cuidado ao copiar.

## Movimentação e colisão
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para fazer a movimentação criamos uma function para cada "personagem" da cena e definimos variáveis para a velocidade e posição de cada um. O codígo esta quase todo comentando, então fica mais facil entender o que cada coisa faz

	var yBarco = 1;
	var velocidadeBarco = 10;

	function barco(){ //Criando uma function para o barco
	//Inicio do Barco
	ctx.translate(0,yBarco) // Código de tranlação responsável por mover todos os atributos que formam o barco (apenas no eixo y pois o barco só vai para cima e para 	baixo)
	ctx.beginPath();
	ctx.fillStyle = '#8B4513';//Cor do retângulo
	ctx.fillRect(1250, 310, 80, 20);//Parte de cima do Barco e o comando para criar o retangulo
	ctx.fillRect(1265, 320, 50, 20);//Parte de Baixo do Barco e o comando para criar o retângulo

	ctx.fillStyle = "#DEB887";
	ctx.fillRect(1290, 281, 5,30);//Pilar do Mastro

	ctx.fillStyle='red';
	ctx.lineTo(1290,235);
	ctx.lineTo(1315,285);
	ctx.lineTo(1265,285);
	ctx.fill();//mastro e o final do barco
	ctx.setTransform(1,0,0,1,0,0); // Esse código serve para que o código de translação colocado no começo, não afete outros objetos, apenas o barco
	}

	//Inimigo 1
	var x = 1; //variavel referente a posição x do inimigo 1
	var velocidade = 6; //variavel referente a velocidade do inimigo 1

	function inimigo1(){ //Criando uma function para o inimigo 1
		ctx.translate(x,0); // Código de tranlação responsável por mover todos os atributos que formam o inimigo 1 (apenas no eixo x pois os monstros só vão para o 		lado)
		ctx.beginPath();//Inicia o caminho do desenho
		ctx.arc(100,70,60,0,Math.PI*2)//Define onde vai surgir o arco, seu tamanho, e a circuferencia do arco
		ctx.fillStyle = "#7B68EE";//Cor do Arco
		ctx.fill();//Corpo
		
		ctx.beginPath();
		ctx.arc(80,60,11,0,Math.PI*2)
		ctx.fillStyle ="black";
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(130,60,11,0,Math.PI*2)
		ctx.fillStyle ="black";
		ctx.fill();//Olhos
		
		ctx.beginPath();
		ctx.moveTo(70,100);
		ctx.lineTo(90,80);
		ctx.lineTo(90,100);
		ctx.lineTo(110,80);
		ctx.lineTo(110,100);
		ctx.lineTo(130,80);
		ctx.lineTo(130,100);
		ctx.stroke();//Boca
		ctx.setTransform(1,0,0,1,0,0); // Esse código serve para que o código de translação colocado no começo, não afete outros objetos, apenas o inimigo 1
	}

	//Inimigo 2
	var x2 = 1; //variavel referente a posição x do inimigo 2
	var velocidade2 = 5; //variavel referente a velocidade do inimigo 2

	function inimigo2(){ //Criando uma function para o inimigo 2
		ctx.translate(x2,0); // Código de tranlação responsável por mover todos os atributos que formam o inimigo 2
		ctx.beginPath();
		ctx.arc(100,280,60,0,Math.PI*2)
		ctx.fillStyle = "#7B68EE";
		ctx.fill();//Corpo
		
		ctx.beginPath();
		ctx.arc(80,270,11,0,Math.PI*2)
		ctx.fillStyle ="black";
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(130,270,11,0,Math.PI*2)
		ctx.fillStyle ="black";
		ctx.fill();//Olhos
		
		ctx.beginPath();
		ctx.moveTo(70,310);
		ctx.lineTo(90,290);
		ctx.lineTo(90,310);
		ctx.lineTo(110,290);
		ctx.lineTo(110,310);
		ctx.lineTo(130,290);
		ctx.lineTo(130,310);
		ctx.stroke();//Boca
		ctx.setTransform(1,0,0,1,0,0); // Esse código serve para que o código de translação colocado no começo, não afete outros objetos, apenas o inimigo 2
	}


	//Inimigo 3
	var x3 = 1; //variavel referente a posição x do inimigo 3
	var velocidade3 = 4; //variavel referente a velocidade do inimigo 3

	function inimigo3(){ //Criando uma function para o inimigo 3
		ctx.translate(x3,0); // Código de tranlação responsável por mover todos os atributos que formam o inimigo 3
		ctx.beginPath();
		ctx.arc(100,490,60,0,Math.PI*2)
		ctx.fillStyle = "#7B68EE";
		ctx.fill();//Corpo
		
		ctx.beginPath();
		ctx.arc(80,480,11,0,Math.PI*2)
		ctx.fillStyle ="black";
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(130,480,11,0,Math.PI*2)
		ctx.fillStyle ="black";
		ctx.fill();//Olhos
		
		ctx.beginPath();
		ctx.moveTo(70,520);
		ctx.lineTo(90,500);
		ctx.lineTo(90,520);
		ctx.lineTo(110,500);
		ctx.lineTo(110,520);
		ctx.lineTo(130,500);
		ctx.lineTo(130,520);
		ctx.stroke();//Boca
		ctx.setTransform(1,0,0,1,0,0); // Esse código serve para que o código de translação colocado no começo, não afete outros objetos, apenas o inimigo 3

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vale notar que, podemos ver ja uma das funções principais que iremos falar, que e a função de **translação**. E junto com esses codígos, precisamos também de uma function responsável por animar as coisas se movendo, para que os objetos não fiquem replicando. Também há codígos responsáveis por fazer os personagens se moverem.

	function animar(){ //Criando uma função animar, responsável por animar os personagens sozinho, servirá para os monstros
		ctx.clearRect(0,0,1400,600); // o ctx.clearRect serve para limpar o canvas a cada animação, impedindo que os personagens não fiquem multiplicando na hora da 		animação.
		inimigo3(); //Chamando a função do inimigo 3 para que ele apareça na tela do canvas e não seja apagado pelo clearRect
		inimigo2(); //Chamando a função do inimigo 2 para que ele apareça na tela do canvas e não seja apagado pelo clearRect
		inimigo1(); //Chamando a função do inimigo 1 para que ele apareça na tela do canvas e não seja apagado pelo clearRect
		barco(); //Chamando a função do barco para que ele apareça na tela do canvas e não seja apagado pelo clearRect

		x3 += velocidade3; //Código reponsavél por fazer o inimigo 3 andar, pegando a sua posição x e somando com o valor da velocidade
		x2 += velocidade2; //Código reponsavél por fazer o inimigo 2 andar, pegando a sua posição x e somando com o valor da velocidade
		x += velocidade; //Código reponsavél por fazer o inimigo 1 andar, pegando a sua posição x e somando com o valor da velocidade

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Todos os personagens possuem colisão aqui, o barco que não consegue ultrapassar o teto nem o chão do canvas, ficando parado antes disso e os inimigos quando enconstam no final da tela, voltam para o inicio da tela. E fazer isso é bem mais simples do que se imagina, apenas utilizamos as varíaveis ja criadas e colocamos "if", e dentro deles o limite de tamanho da tela do Canvas e o que ele faria se fosse verdadeiro (No caso ele pararia o barco, e resetaria a posição dos inimigos). Na ultima linha também, há um comando importantissimo, que faz toda a animação e colisão acontecer.

	if(x3 > 1420){ // Se a posição x do inimigo 3 ultrapassar o tamanho máximo da largura do canvas (1400), ele retornará para o começo da tela do canvas
			x3 = -100;
		}
		if(x2 > 1420){ // Se a posição x do inimigo 2 ultrapassar o tamanho máximo da largura do canvas (1400), ele retornará para o começo da tela do canvas
			x2 = -100;
		}
		if(x > 1420){ // Se a posição x do inimigo 1 ultrapassar o tamanho máximo da largura do canvas (1400), ele retornará para o começo da tela do canvas
			x = -100;
		}

		requestAnimationFrame(animar); // É o comando que faz a animação acontecer, sem ele os códigos acima não servirão de nada.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fizemos o controle do Barco, para que pudessemos mover ele para cima e para baixo. Tanto com as teclas wasd tanto com as "setinhas". No final também chamamos a função de animação para que ela faça efeito na cena.

	document.addEventListener('keydown', function(event){ //Comando responsável por adicionar animação com o controle das teclas

		if(event.key === 'w' || event.key === 'W' || event.key === 'ArrowUp'){ // Se você clicar na tecla 'w' ou na setinha para cima, o barco irá para cima
			yBarco -= velocidadeBarco;
		}
		if(event.key === 's' || event.key === 'S' || event.key === 'ArrowDown'){ // Se você clicar na tecla 'a' ou na setinha para baixo, o barco irá para baixo
			yBarco += velocidadeBarco;
		}

		if(yBarco >= 250){ // Faz com que o barco não ultrapasse o limite da tela no eixo y para baixo
			yBarco = 250;
		}
		if(yBarco <= -230){ // Faz com que o barco não ultrapasse o limite da tela no eixo y para cima
			yBarco = -230;
		}
	});

	animar(); // Chamando a função animar para que ela aconteça <br>

 ## Translação 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O metódo "translate()" e usado para mover o canvas e sua Grid para um ponto diferente do grid.
  - Sintaxe:translate(x,y). X indica a distancia horizontal a ser movida e Y a distancia vertical.<br>

![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/4c6ef636-777c-4038-8624-062747454173)<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A imagem acima representa de forma grafica como esse comando funciona, e como ele mexe o canvas pelo Grid. É o codígo abaixo mostra o metódo "translate()" sendo usado no nosso codígo. Ele basicamente e responsavel por mover todos os personagens da cena em seus respectivos eixos.

		function inimigo1(){ //Criando uma function para o inimigo 1
		ctx.translate(x,0); // Código de tranlação responsável por mover todos os atributos que formam o inimigo 1 (apenas no eixo x pois os monstros só vão para o 		lado)

		function inimigo2(){ //Criando uma function para o inimigo 2
		ctx.translate(x2,0); // Código de tranlação responsável por mover todos os atributos que formam o inimigo 2

   		function inimigo3(){ //Criando uma function para o inimigo 3
		ctx.translate(x3,0); // Código de tranlação responsável por mover todos os atributos que formam o inimigo 3

		function barco()
  		ctx.translate(0,yBarco) // Código de tranlação responsável por mover todos os atributos que formam o barco (apenas no eixo y pois o barco só vai para cima e 		para baixo)
### Resultado 
https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/c02ab98f-5427-4873-8770-fcae7a05cd68
## Rotação
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; O método "Rotate()" e utilizado para rotacionar o canvas em torno da propria origem.<br>
- Sintaxe: rotate(angulo). Este metodo rotaciona no sentido horario, com base em radianos. O ponto central da rotação e sempre o ponto de origem do canvas.<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/206cacfe-669f-4d8a-bee0-2316cbad5ab7)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A imagem acima mostra como funciona de forma grafíca, e o codígo abaixo mostra como funciona dentro do nosso codígo. Basicamente, ele esta fazendo o inimigo 1 do jogo (A primeira bolinha roxa de cima pra baixo) ir em linha reta para baixo, se nao fosse pelo metodo "Rotate()" o inimigo 1 estaria indo reto para a direita.

		function inimigo1(){ //Criando uma function para o inimigo 1
		ctx.rotate(Math.PI/6); //Fazendo o inimigo ir em linha reta para baixo, mudando a rotação dele em rad.
		ctx.translate(x,0); // Código de tranlação responsável por mover todos os atributos que formam o inimigo 1 (apenas no eixo x pois os monstros só vão para o 		lado)
		ctx.beginPath();//Inicia o caminho do desenho
		ctx.arc(100,70,60,0,Math.PI*2)//Define onde vai surgir o arco, seu tamanho, e a circuferencia do arco
		ctx.fillStyle = "#7B68EE";//Cor do Arco
		ctx.fill();//Corpo
  		/.../
### Resultado
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/7bf595c8-75d7-48b2-a4fa-748795717ce9)<br>
> 🗒️ *Nota:* Reduzimos o tamanho da função inteira para economizarmos linha neste readme, ja que ja mostramos essa função varias vezes. Os codígos repetidos a partir daqui sera limitados pelo "/.../" caso eles ja tenham aparecido, mostrando somente a parte onde o metódo principal esta sendo utilizado.<br>
## Escala ou Escalonamento
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O metódo de Escalonamento as unidades do grid, ou seja, ele serve para diminuir ou aumentar os objetos do Canvas.<br>
- Sintaxe: scale(x,y). "x" Escala as unidades do objeto horizontalmente e "y" verticalmente e ambos parametros são números reais. Numeros positivos aumentam o tamanho enquanto os negativos reduzem o tamanho e o valor 1.0 mantém o mesmo tamanho. Ao usar numéros negativos você também pode fazer espelhamento. Cada unidade do canvas e 1 pixel, então se usarmos um valor como "0.5" ele ira reduzir o tamanho pela metade, se usarmos (2.0) ele ira dobrar o tamanho, e assim por diante.<br>

		function inimigo2(){ //Criando uma function para o inimigo 2
		ctx.translate(x2,0); // Código de tranlação responsável por mover todos os atributos que formam o inimigo 2
		ctx.scale(1.0,0.3); //Utilizando o Scale para fazer o inimigo 2 ficar esticado.
		ctx.beginPath();
		ctx.arc(100,280,60,0,Math.PI*2)
		ctx.fillStyle = "#7B68EE";
		ctx.fill();//Corpo
  		/.../
### Resultado
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/4b094454-7c55-4433-9949-36b2bed69888)
## Transformação
nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Esse metódo e um pouco mais complicado, ele permite modificacoes direta nas matriz de transformações<br>
- Sintaxe:transform (m11,m12,m21,m22,dx,dy). Esse metódo multiplica  a matriz de transformação pela matriz descrita por:<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/35deb496-6ed5-4eef-baae-3ca3f6cb5222)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se você tiver estudado matrizes na escola, fica bem mais facil de entender essa imagem. Vale lembrar que o "x" e o "y" na segunda matriz e o "dx" e o "dy" na sintaxe acima. Com esse método você consegue fazer todas as outras coisas que os outros métodos fazem, além de conseguir mover e distorcer os objetos também. Porém, esse metódo também tem outra sintaxe acompanhada com ele, que é o:
- Sintaxe: setTransform(m11, m12, m21, m22, dx, dy). Este método reseta a matriz atual para a matriz indentidade, e então chama o método "Transform()" com os mesmos argumentos, desfazendo a transformação atual e configurando a nova transformação especifíca, tudo em 1 so comando. Neste codígo estamos utilizando este método para deixar os métodos "translate()" afetando somente seu respectivo personagem, como no codígo abaixo:

 		 ctx.setTransform(1,0,0,1,0,0); // Esse código serve para que o código de translação colocado no começo, não afete outros objetos, apenas o inimigo 3
  ### Resultado
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O resultado aqui seria o mesmo que no da translação, ja que ambos estão trabalhando para fazerem a mesma coisa.
## Clipping Path ( Caminhos de Recorte)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este método recorta partes que você acha indesejavel no Canvas, na forma que você quiser, como se fosse a ferramenta de tesoura nos editores de imagens. A imagem abaixo mostra isso, o formato da estrela e o lugar onde esta cortado e tudo que estiver do lado de fora não ira aparecer no Canvas.<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/dd78680a-4f90-47a5-9a05-bf7c2ec0c878)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No codígo abaixo, eu utilizei a função de Recorte para "Esconder" os inimigos no meio do caminho, utilizando um circulo como forma de recorte.

	function desenharCorte() {
	ctx.beginPath();
	ctx.fillStyle="black";
	ctx.arc(230,280,310,0,Math.PI*2)
	ctx.clip();
 ### Resultado
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/7db5f8be-bbf5-428b-8700-719da8f4e45e)
 ## Diagrama de Classe e Documentação
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/1e853842-0e28-4f16-a6d2-1a1fcd42078c)<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/a4f91710-23de-4955-ad35-add13c4111f7)<br>
 > ❗ **Adendo:** A classe "inimigo" agora possui um novo atributo: A direção. Ela e do tipo inteiro para indicar as oito direções que ela consegue ir (1.Sul, 2.Norte, 3.Sudoeste e assim por diante). A Classe "Jogo" tem um novo metódo: Recorte de fundo. Ela e a responsavel por fazer um corte em formato de circulo e esconder os inimigos.
## Classes dentro do Javascript (Em arquivos separados)

		class Jogo {
		 constructor() {
   		 this.obstaculo = 0;
			 }

	 	mostrarPontos() {
	    	console.log(`Pontos: ${this.obstaculo}`);
	 	}
	
		 tempo() {
	   	 console.log('Tempo: 100 segundos');
		 }
	
		 gerarObst() {
	   	 const min = 1;
	  	  const max = 5;
	   	 this.obstaculo = Math.floor(Math.random() * (max - min + 1)) + min;
	 	}
	
		 recortarDeFundo() {}
		}
		let jogo = new Jogo();
		jogo.tempo();
		jogo.gerarObst();
		jogo.mostrarPontos();
		jogo.recortarDeFundo();
  
		class Jogador {
	 constructor() {
	    this.pontuacao = 0;
	    this.vida = 3;
	 }
	
	 movimentar(direcao) {
	    console.log(`Movendo para ${direcao}`);
	 }
	
	 gerenciarVida(dano) {
	    this.vida -= dano;
	    if (this.vida <= 0) {
	      console.log("Jogador morreu!");
	    } else {
	      console.log(`Vida restante: ${this.vida}`);
	    }
	 }
	}
	
	const jogador1 = new Jogador();
	jogador1.movimentar("Direita");
	jogador1.gerenciarVida(20);
	jogador1.gerenciarVida(20);
	jogador1.gerenciarVida(60);

	class Inimigo {
	    constructor(tamanho, velocidade, direcao) {
	        this.tamanho = tamanho;
	        this.velocidade = velocidade;
	        this.direcao = direcao;
	    }
	
	    aumentarVelo() {
	        this.velocidade++;
	    }
	
	    movimento() {
	        console.log(`Inimigo movendo-se na direção ${this.direcao} com velocidade ${this.velocidade}`);
	    }
	
	    atacar() {
	        console.log("Inimigo atacando!");
	    }
	}
	
	const inimigo1 = new Inimigo(5, 2, "Direita");
	inimigo1.aumentarVelo();
	inimigo1.movimento();
	inimigo1.atacar();

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;É notavel que não estamos utilizando certas coisas da Classe na cena, e isso tem motivos. Estamos utilizando essa classe somente como base para a cena do Canvas, ou seja, utilizamos somente o conceito do jogo para demonstrar as funções do Canvas. Isso equivale tanto para os diagramas de classes, quanto para as classes dentro do Javascript.
	  		

 ## Referências
 https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing<br>
 https://klebermota.eti.br/2013/10/27/tutorial-de-canvas-parte-5-transformacoes/







    
  

 
