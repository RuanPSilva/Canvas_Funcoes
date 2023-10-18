# Canvas_Funções 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Olá, neste trabalho estaremos fazendo uma cena do Canvas onde estaremos explicando e demonstrando como funciona:Translação;Rotação;Escala;Transform e Clipping Path. Tudo isso dentro do Javascript. Também havera movimento e colisão dentro do projeto.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neste projeto estarei fazendo algo diferente também! Estarei mostrando todos os comandos do Git Bash que estarei utilizando para mandar os arquivos do meu navegador para o meu pc, além de outros comandos (que normalmente não utilizo muito) e uma breve explicação entre parenteses.

<br>
Autores:Kauan Jesus e Ruan Pablo

## Começo do desenvolvimento
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Começamos criando as pastas (Css,Html,img e etc) basicas e linkando o GitHub com o computador. Comecei a cena utilizando um jogo bem simples, onde há 3 inimigos e 1 personagem, e voçe tem que desviar dos inimigos.  Utilizando a ideia deste jogo, estaremos implantando os topícos que foi monstrado acima junto com sua explicação.<br>
### Comandos do Git utilizados<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/4194e9cc-da18-431d-836a-290d6f578bdc)<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/a8ca5e4e-355d-407f-9bfe-bc1050efe41e)<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/d4ba7f39-4f38-408a-994f-739cf4ae2fde)<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/100269c2-6805-465a-b985-b475fd455a6b)<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/4a6a81c0-b763-4f49-9ee2-df2ef1126678)<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/e44105ae-b91e-4641-b756-f47cd78200d0)<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/84045ed3-c850-43be-8495-ffaf3c3c1f2a)<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/e636881f-0eb3-4ba2-9796-3fd76ddb353d)<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/548d3f42-eee8-4c1e-87e4-5f6746c44706)<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/99f64183-6875-44e8-9651-c9bf2bc9f626)<br>
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/39314702-ef4b-46a9-93ad-10f437ea4a9f)<br
## Cenário inicial
![image](https://github.com/RuanPSilva/Canvas_Funcoes/assets/127852225/278bb76a-9236-485d-84fd-da2e71f0190d)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aqui temos um cenário bem simples, vale lembrar que este projeto serve mais para mostrar as funçoes do Canvas, então não há necessidade de fazer algo muito complexo. Utilizamos os desenhos simples do Canvas:Retângulos;Arcos e Linhas. Utilizando os seus respectivos comandos:

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
		ctx.stroke();Assim como nos comandos acima, voçê deve botar no inicio "FillStroke= ´cor´" para definir a cor da linha, Como eu não defini nenhuma, a linha esta preta

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

	animar(); // Chamando a função animar para que ela aconteça

 
