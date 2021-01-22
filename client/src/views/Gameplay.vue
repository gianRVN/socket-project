<template>
  <div>
    <div v-if="startGame === true" class="card mt-5 ">
      <h1> {{ word }} </h1>
    </div>
    <div class="col-4 d-flex justify-content-center mx-auto" >
    <player-card
      v-for="user in users"
      :user="user"
      :key="user.id"/>
    <!-- <div class="float-left justify-content-center mt-5"
      v-for="(user, id) in users"
      :key=id>
      <b-card-group deck>
      <b-card
      :header="user.name"
      header-tag="header"
      title="Score"
      >
      <b-card-text id="card-text" >{{ user.point }}</b-card-text>

    </b-card>
    </b-card-group>
    </div> -->
    </div>
    <form class="form mt-5" v-if="startGame === true">
          <label>Ketik kata di atas</label><br>
          <input type="text" class="mb-5"
            v-model="answer"
            required><br>
          <button  class="btn btn-primary" type="submit"
          @click.prevent="submitWord(name)">submit</button>
    </form>
    <button class="btn btn-primary"
    v-else
    @click="setGame">Start Game</button>
      <div>

        <b-modal ref="my-modal" hide-footer title="Using Component Methods">
          <div class="d-block text-center">
            <h3>{{winner}}</h3>
          </div>
          <b-button class="mt-3" variant="outline-danger" block @click="backHome">Close Me</b-button>
        </b-modal>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import PlayerCard from '../components/PlayerCard'

export default {
  name: 'Gameplay',
  components: {
    PlayerCard
  },
  data () {
    return {
      answer: '',
      name: localStorage.playerName,
      point: 0,
      winner: ''
    }
  },
  methods: {
    setGame () {
      this.$socket.emit('startGame', true)
    },
    submitWord (e) {
      this.$socket.emit('checkAnswer', {
        name: e,
        answer: this.answer
      })
      this.answer = ''
    },
    backHome () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  sockets: {
    GameOver (payload) {
      if (payload.name === this.name) {
        this.winner = this.name + ' win!!'
      } else {
        this.winner = this.name + ' lose :('
      }
      this.$refs['my-modal'].show()
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    },
    startGame () {
      return this.$store.state.startGame
    },
    word () {
      return this.$store.state.word
    }
  }
}
</script>

<style>

#card-text {
      font-size: 20px;
}

.card {
  align-content: center;
  margin: auto;
  max-width: 40rem;
}

.form {
  align-content: center;
  margin: auto;
}
</style>
