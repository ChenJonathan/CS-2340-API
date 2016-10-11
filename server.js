var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser')
require('./api/db');

// Connection started
io.on('connection', function(socket) {
  console.log('User ' + socket.id + ' connected');

  // Add user
  socket.on('add user', function(data) {
    console.log('Foobar');
  });

  // Get user
  socket.on('get user', function(data) {
    console.log('Foobar');
  });

  // Check user exists
  socket.on('check user', function(data) {
    console.log('Foobar');
  });

  // Authenticate user
  socket.on('authenticate user', function(data) {
    console.log('Foobar');
  });

  // Add report
  socket.on('add report', function(data) {
    console.log('Foobar');
  });

  // Get reports
  socket.on('get reports', function(data) {
    console.log('Foobar');
  });

  // Disconnect
  socket.on('disconnect', function() {
    console.log('User ' + socket.id + ' disconnected');
  });

});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});