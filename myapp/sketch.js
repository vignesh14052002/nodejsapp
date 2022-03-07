let socket,capture;
function setup() {
	createCanvas(400,400);
	background(0);
	capture = createCapture(VIDEO);
  capture.size(400, 400);
	let website="https://tranquil-shore-92566.herokuapp.com/"
	let localsite="http://localhost:8000"
	socket=io.connect(localsite)
	socket.on('screen',server)
}
function server(d){
//capture=d;
console.log(d);
}
function h(){
	socket.emit('screen',{capture});
}
function draw(){
h();	
	image(capture, 0, 0, 400, 400);
}