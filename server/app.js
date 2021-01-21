const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let rooms = []

io.on('connection', function (socket) {
  socket.on('datas', (data) => {
    console.log(data)
    socket.emit('get-rooms', rooms)
  })
  socket.on('create-room', (data) => {
    console.log('halo serverku')
    let room = {
      name: data['room-name'],
      users: [],
      admin: data.admin 
    }
    rooms.push(room)
    io.emit('updatedRoom', rooms)
  })
  socket.on('join-room', (data) => {
    socket.join(data['room-name'], function () {
      let roomIndex = rooms.findIndex((i) => i.name == data['room-name'])
      console.log(socket.rooms, "INI DIA");
    })
  })
})

server.listen(4000, () => {
  console.log('connected on port ' + 4000)
})