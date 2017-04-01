import * as express from "express";
import * as api from "./api";

var app = new express();
var mapi = new api.api();

app.get('/clip/:data', (req, res) => {
    res.json(mapi.clip({input : req.input}));
});

app.get('/paste', (req, res) => { 
    mapi.paste((val) => {
        res.json({ result: val }); 
    });
    //res.json(mapi.paste());
});

app.param('data', function(request, response, next, data) {
    console.log(data);
    request.input = data;
    next();
});

app.listen(3000, function() {
    console.log("We're live!");
});

