const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');//Linkando o canvas com o HTML
	 ctx.canvas.width=1400;
     ctx.canvas.height=600;
	//Inicio do Barco
	 ctx.beginPath();
	 ctx.fillStyle = '#8B4513';
	 ctx.fillRect(1250, 310, 80, 20);//Parte de cima do Barco
	 ctx.fillRect(1265, 320, 50, 20);//Parte de Baixo do Barco
	
	 ctx.fillStyle = "#DEB887";
	 ctx.fillRect(1290, 281, 5,30);//Pilar do Mastro
	 
	 ctx.fillStyle='red';
     ctx.lineTo(1290,235);
	 ctx.lineTo(1315,285);
	 ctx.lineTo(1265,285);
     ctx.fill();//mastro e o final do barco
//Inimigo 1
	 ctx.beginPath();
	 ctx.arc(100,70,60,0,Math.PI*2)
	 ctx.fillStyle = "#7B68EE";
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
//Inimigo 2
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
//Inimigo 3
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

	 
	 
	 
	 

	
	
	
	 


