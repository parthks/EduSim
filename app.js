var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('external'));
app.use(express.static('styles'));
app.use(express.static('js'));
app.use(express.static(path.join(__dirname)));
app.use(express.static('directed-graph'));

app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname));
    //res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
