var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('external'));
app.use(express.static('styles'));
app.use(express.static('js'));
app.use(express.static(path.join(__dirname)));
app.use(express.static('directed-graph'));

app.get('/images/represent', function(req, res) {
    app.use(express.static('linear-life/images'));
    res.sendFile(__dirname + '/linear-life/images/topic.html');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.get('/images/represent/asciiart', function(req, res) {
    app.use(express.static('linear-life/images'));
    res.sendFile(__dirname + '/linear-life/images/topic.html');
});

app.listen(8080);
