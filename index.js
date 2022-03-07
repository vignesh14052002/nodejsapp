
const express=require("express")
const app=express()
const server=app.listen(process.env.PORT||8000,console.log(""))
app.use(express.static("myapp"))


const socket=require("socket.io")
const io=socket(server)

io.sockets.on('connection',(socket)=>{
	console.log(socket.id)
	socket.on('screen',(msg)=>{
		socket.broadcast.emit('screen',msg)
		//console.log(msg)
	})
})