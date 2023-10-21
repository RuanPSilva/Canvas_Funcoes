const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');//Linkando o canvas com o HTML
	 
ctx.canvas.width=1400;
ctx.canvas.height=600;



function desenharCorte() {
	ctx.beginPath();
	ctx.fillStyle="black";
	ctx.arc(230,280,310,0,Math.PI*2)
	ctx.clip();
	
	
}

//Barco
var yBarco = 1;
var velocidadeBarco = 10;


function barco(){ //Criando uma function para o barco
	//Inicio do Barco
	ctx.rotate(Math.PI*2)
	ctx.translate(0,yBarco) // Código de tranlação responsável por mover todos os atributos que formam o barco (apenas no eixo y pois o barco só vai para cima e para baixo)
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
var velocidade = 8; //variavel referente a velocidade do inimigo 1

	function inimigo1(){ //Criando uma function para o inimigo 1
		ctx.rotate(Math.PI/6);
		ctx.translate(x,0); // Código de tranlação responsável por mover todos os atributos que formam o inimigo 1 (apenas no eixo x pois os monstros só vão para o lado)
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
		ctx.scale(1.0,0.3);
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
	}

	function animar(){ //Criando uma função animar, responsável por animar os personagens sozinho, servirá para os monstros
		ctx.clearRect(0,0,1400,600); // o ctx.clearRect serve para limpar o canvas a cada animação, impedindo que os personagens não fiquem multiplicando na hora da animação.
		inimigo3(); //Chamando a função do inimigo 3 para que ele apareça na tela do canvas e não seja apagado pelo clearRect
		inimigo2(); //Chamando a função do inimigo 2 para que ele apareça na tela do canvas e não seja apagado pelo clearRect
		inimigo1(); //Chamando a função do inimigo 1 para que ele apareça na tela do canvas e não seja apagado pelo clearRect
		barco(); //Chamando a função do barco para que ele apareça na tela do canvas e não seja apagado pelo clearRect
		desenharCorte(); // Mesmo motivo dos codígo acima

		x3 += velocidade3; //Código reponsavél por fazer o inimigo 3 andar, pegando a sua posição x e somando com o valor da velocidade
		x2 += velocidade2; //Código reponsavél por fazer o inimigo 2 andar, pegando a sua posição x e somando com o valor da velocidade
		x += velocidade; //Código reponsavél por fazer o inimigo 1 andar, pegando a sua posição x e somando com o valor da velocidade

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
	}

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