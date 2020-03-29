let ball 
let arrayBall=new Array() 


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('#085585')
	for(let i=0;i<arrayBall.length;i++){
		arrayBall[i].draw();
		arrayBall[i].movimiento();
		arrayBall[i].colisionPelota();
	}
	
}


function mouseClicked(){
	
	let colores = color(random(0, 255),random(0, 255),random(0, 255))//generación de pelota con color aleatorio rgb
	ball=new Ball(mouseX,mouseY,30,colores);//Instanciamos el objeto pelota
	arrayBall.push(ball);//La agregamos al arreglo

	for(let i=0;i<arrayBall.length;i++){//actualización del arreglo para que el movimiento continúe
		arrayBall[i].indice=i;
		arrayBall[i].arr=arrayBall;
		
	}
}