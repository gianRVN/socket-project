<template>
  <div>
    <div>
      <h1> {{ word }} </h1>
    </div>
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
    <form class="mt-5" v-if="startGame === true">
          <label>Ketik kata di atas</label><br>
          <input type="text" class="mb-5"
            v-model="answer"><br>
          <button  class="btn btn-primary" type="submit"
          @click.prevent="submitWord(name)">submit</button>
    </form>
    <button class="btn btn-primary"
    v-else
    @click="setGame">Start Game</button>
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
      point: 0
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
    }
  },
  sockets: {
    GameOver (payload) {
      console.log(payload)
      this.$router.push('/')
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
</style>
