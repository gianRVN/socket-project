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
          <button type="submit" class="btn btn-primary btn-lg" style="font-size: 20px;" @click.prevent='addUser'>Join Room</button>
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
    addUser () {
      localStorage.playerName = this.playerName
      console.log(this.users)
      this.$socket.emit('addUser', {
        id: this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1,
        name: this.playerName,
        point: 0
      })
      this.playerName = ''
      this.$router.push('/gameplay')
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  }
}
</script>

<style scoped>
.box-head{
  margin-top: 50px;
  font-family: 'lato', sans-serif;
  font-weight: 900;
}
.player-name{
  width: 50%;
}
.player-box{
  margin-top: 100px;
  padding: 20px;
}

.form-label {
  font-family: 'lato', sans-serif;
}

.home {
  background-image: url('https://hdwallpaperim.com/wp-content/uploads/2017/09/16/53338-Super_Mario-Mario_Bros.-Super_Mario_Bros..jpg');
}

</style>
