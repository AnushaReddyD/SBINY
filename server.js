'use strict'
var express=require('express'),
app = express(),
http = require('http'),
port=85;
app.use(express.static(__dirname));
app.set('views', __dirname );
app.set('view engine', 'html');
app.set('view cache', true);
app.get('/*', function(req, res){
     res.sendFile(__dirname + '/sbi/SBIentry.html');
  //  res.end();
});

app.listen(port, function(){
    console.log("Node server listening on port " + port);
});
 