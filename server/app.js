const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let rooms = []
let playerName = ''

io.on('connection', function (socket) {
  socket.on('datas', (data) => {
    playerName = data.playerName
    console.log(rooms, 'yup')
    io.emit('getRooms', rooms)
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
      rooms[roomIndex].users.push(data.userName)
      console.log(rooms[roomIndex])
      io.sockets.in(data['room-name']).emit('roomDetail',  rooms[roomIndex])
    })
  })
})

server.listen(4000, () => {
  console.log('connected on port ' + 4000)
})