"use strict"
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const DOTS = (function(){
  let dots = '', count = PORT.toString().length;
  for (var i = 0; i < count; i++) dots += '·';
  return dots;
}());

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, function(){
   console.log(
      '··································' + DOTS +'···\n' +
      '                                         \n' +
      '   Server listening on: localhost:' + PORT + '   \n' +
      '       Press Ctrl-C to terminate         \n' +
      '                                         \n' +
      '··································' + DOTS +'···'
   );
});
