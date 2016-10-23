"use strict"
const fs = require('fs')
const express = require('express');
const app = express();

//  Public folder  /////////////////////////////////////////////////////////////
app.use(express.static(__dirname + '/public'));

//  Root  //////////////////////////////////////////////////////////////////////

app.get('/', function(req, res){
   res.send('./public/index.html');
});

//  404  ///////////////////////////////////////////////////////////////////////
app.get('*', function(req, res){
   res.render('404');
});

app.listen(3003, function(){
   console.log(
      '·········································\n' +
      '                                         \n' +
      '   Server listening on: localhost:3003   \n' +
      '       Press Ctrl-C to terminate         \n' +
      '                                         \n' +
      '·········································'
   );
});
