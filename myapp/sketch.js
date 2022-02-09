let socket;
function setup() {
	createCanvas(400,400);
	background(0)
	let website="https://tranquil-shore-92566.herokuapp.com/"
	let localsite="http://localhost:8000"
	socket=io.connect(website)
	socket.on('mouse',server)
}
function server(d){
	fill(100)
	ellipse(d.x,d.y,10,10)
}
function mouseDragged(){
	
	fill(200)
	ellipse(mouseX,mouseY,10,10)
	socket.emit('mouse',{x:mouseX,y:mouseY})
}
function draw(){

}