const express = require('express');
const socket = require('socket.io');

//App setup
const app = express();

//Server setup
const server = app.listen(5000, function(){
    console.log("The server is listening to your thoughts!");
})

//static file
app.use(express.static('public'));

//Socket setup
const io = socket(server);

io.on('connection', function(socket){
    console.log("Socket Connection Made", socket.id);
    // socket.on('disconnect', function(){
    //     console.log("User Disconnected");
    // });
});