const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const randomWords = require('./randomWords')

let kata = '';

io.on('connection', function (socket) {
  kata = randomWords()
  socket.emit('init', {
    kata,
    point: 0
  })

  socket.on('answerWord', payload => {
    if (kata.toLowerCase() == payload.kata) {
      kata = randomWords()
      socket.emit('nextQuestion', {
        kata,
        point: payload.point + 1
      })
    } else {
      kata = randomWords()
      socket.emit('nextQuestion', {
        kata,
        point: payload.point
      })
    }
  })
})

server.listen(3000, () => {
  console.log('connected on port' + 3000)
})