var express = require('express');


var app = express();
var api = require('api');

app.get('clip', function(req, res) { api.clip() };
app.get('paste', function(req, res) { api.paste() };

    res.json({notes: "This is your hello world"});
});

app.listen(3000, function() {
    console.log("We're live!");
});

var fs = require("fs");
var Parser = require("taskpaper-parser").Parser;
 
//var 0taskPaperFile = "~/Documents/wiki/todo/catchall.taskpaper";
var taskPaperFile = "/home/yufufi/Documents/wiki/todo/catchall.taskpaper";
 
fs.readFile(taskPaperFile, { encoding: "utf8" }, function(error, data) {
    if (error) {
        console.error(error);
    }
    else {
        var parsedContent = new Parser(data).parse();
        console.log(parsedContent.serialize());
        console.log("test");
        console.log(JSON.stringify(parsedContent, null, 2));
    }
});

