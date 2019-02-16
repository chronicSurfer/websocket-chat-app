const express = require('express');

//App setup
const app = express();

//Server setup
const server = app.listen(5000, function(){
    console.log("The server is listening to your thoughts!");
})

//static file
app.use(express.static('public'));