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
		


