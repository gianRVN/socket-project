<template>
  <div class="home">
    <div class="box-head shadow-lg p-3 mb-5 bg-white rounded">
      <p style="font-size: 64px; margin-bottom: 0px;">Match Words!</p>
    </div>
    <div class="d-flex justify-content-center player-box">
      <div class="player-name shadow-lg p-5 mb-5 bg-white rounded">
        <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label" style="font-size: 32px;">Player Name</label>
          <br><br>
          <input type="text" class="form-control" v-model="playerName" required>
          <br>
          <button type="submit" class="btn btn-primary btn-lg" style="font-size: 20px;" @click.prevent='goToRooms'>Play Game</button>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      playerName: ''
    }
  },
  methods: {
    createdRoom () {

    },
    goToRooms () {
      this.$socket.emit('datas', { playerName: this.playerName })
      localStorage.setItem('userName', this.playerName)
      this.playerName = ''
      this.$router.push('/rooms/')
    }
  },
  sockets: {
    init (payload) {
      console.log(payload)
    }
  }
}
</script>

<style scoped>
.box-head{
  margin-top: 50px;
  background-color: red
}
.player-name{
  width: 50%;
}
.player-box{
  margin-top: 100px;
  padding: 20px;
}
</style>
