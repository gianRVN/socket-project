const app = require('express')();
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 3000

const server = require('http').createServer(app);
const io = require('socket.io')(server);
const randomWords = require('./randomWords')

let word = '';
let users = [];
let startGame = false


io.on('connection', function (socket) {
  socket.emit('init', {
    users,
    startGame,
    word
  })

  socket.on('addUser', payload => {
    users.push(payload)
    io.emit('serverUser', payload)
  })

  socket.on('startGame', payload => {
    startGame = true
    word = randomWords()
    io.emit('setPlayGame', {
      startGame: payload,
      word
    })
  })

  socket.on('checkAnswer', payload => {
    let point = 0;
    let winner = {};
    if (word.toLowerCase() === payload.answer.toLowerCase()) {
      users = users.map(user => {
        if (user.name == payload.name) {
          user.point += 1
          point = user.point
          winner = user
          return user
        }

        return user
      })

      if (point <= 2) {
        word = randomWords();
        io.emit('updatePoint', {
          users,
          word
        })
      } else {
        word = ''
        users = []
        startGame = false
        io.emit('GameOver', winner)
      }
    }
  })










  // socket.emit('init', {
  //   kata: randomWords(),
  //   point: 0
  // })

  // kata = randomWords()
  // socket.on('answerWord', payload => {
  //   if (kata.toLowerCase() == payload.kata) {
  //     kata = randomWords()
  //     socket.emit('nextQuestion', {
  //       kata,
  //       point: payload.point + 1
  //     })
  //   } else {
  //     kata = randomWords()
  //     socket.emit('nextQuestion', {
  //       kata: kata,
  //       point: payload.point
  //     })
  //   }
  // })



  // socket.on('newUser', payload => {
  //   user.name = payload,
  //   user.point = 0
  //   users.push(user)
  //   console.log(users);
  //   io.emit('setUsers', user)
  // })
})

server.listen(port, () => {
  console.log('connected on port' + port)
})