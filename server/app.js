const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log('socket connect')
  // socket.emit()
})

server.listen(3000, () => {
  console.log('connected on port' + 3000)
})