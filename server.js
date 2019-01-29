var express = require("express");
var app = express();

app.use(express.static(__dirname + '/'));


app.listen(3005,function(){
  console.log(app.settings.env + ';__dirname:' + __dirname + ';');
  console.log('Server started @Port : ' + this.address().port);
});