const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/',function (req,res) {
    res.sendFile(__dirname + '/view/index.html');
});

//io.on('connection',(Socket)=>console.log('a user connected'));
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
      console.log(socket.username);
      io.emit('chat message',msg);
  });
});

http.listen(3000,()=>console.log('listen:3000'));