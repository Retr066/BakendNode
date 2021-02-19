const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.static('public'));
io.on('connection',(socket)=>{
    console.log('Nuevo cliente');
    socket.emit('mensaje','Bienvenido!');
});
setInterval(()=>{
    io.emit('mensaje','hol escribo a todos')
},3000)
server.listen(8080, () => {
  console.log("servidor iniciado loquito en http://localhost:8080");
});
