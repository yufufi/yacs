var express = require('express');
var app = express();
var api = require('./api');

app.get('/clip/:data', (req, res) => { res.json(api.clip({input : req.input})); });
app.get('/paste', (req, res) => { res.json(api.paste()); });


app.param('data', function(request, response, next, data) {
    console.log(data);
    request.input = data;
    next();
});


app.listen(3000, function() {
    console.log("We're live!");
});
