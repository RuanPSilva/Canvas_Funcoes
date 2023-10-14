const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');//Linkando o canvas com o HTML
	ctx.canvas.width=window.innerWidth;
    ctx.canvas.height=window.innerHeight;
	
	ctx.beginPath();
	ctx.fillStyle = '#8B4513';
	ctx.fillRect(1250, 290, 80, 20);//Parte de cima do Barco
	ctx.fillRect(1265, 300, 50, 20);//Parte de Baixo do Barco
	
	ctx.fillStyle = "#DEB887";
	ctx.fillRect(1290, 261, 5,30);
	
	
	
	 


