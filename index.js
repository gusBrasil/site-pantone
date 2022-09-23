const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/front/index.html');
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/front/sobre.html');
})


app.listen(8081, function(){
    console.log('server going strong on http://localhost:8081');
});
//localhost:8082
