var express = require('express');

var app = express();

app.use('/node_modules',express.static(__dirname+"/node_modules"));
app.use('/js',express.static(__dirname+"/js"));
app.use('/css',express.static(__dirname+"/css"));

app.get('/',function(req,res) {
  console.log("loading json app");

  res.sendfile('index.html');

});





app.listen(3000);
console.log("server running on port 3000");
