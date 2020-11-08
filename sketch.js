let w=410,h=728; //not scale 200 
let z=0;
let img=[];
let m;
let angle=0;
let q=51;
let mn=51;
let mx=149;
let canvas;

function setup() {  
	canvas=createCanvas(w,h);
	canvas.parent('canvas');
	for(let i=0;i<50;i++){
		console.log(q);
		img[i] = loadImage("data/Movie"+q+".jpg");
		q+=2;
	}
}

function draw() {
  background(200);
  if(mouseX>=0 && mouseX<=w){
  	m=map(mouseX,z,w,mn,mx);
	m=Math.round(m);
	if((m%2) == 0){
		m++;
	}
  }
	console.log(m);
  createTarget();
}

function createTarget(){
	for(let i=1; i<=50; i++){
		if( m == ((i*2)+49) ){
		push();
			image(img[50-i], 0, 0, w, h); 
		pop();
		}
	}
}
