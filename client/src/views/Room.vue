<template>
  <div class="container">
    <div class="row mb-5 mx-auto"><h1>Room List</h1></div>
    <div class="row mb-5">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label" style="font-size: 32px;">Create Room</label>
          <br>
          <input type="text" class="form-control" v-model="roomName" required>
          <br>
      <button class="btn btn-primary mx-auto w-25" @click.prevent="createRoom">Create Room</button>
        </div>
      </form>
    </div>
    <div class="row" >
      <div class="col-md-4" v-for="(room, i) in rooms" :key="i">
        <div class="card shadow" style="width: 20rem; margin-bottom: 30px">
          <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{room.name}}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary" @click="joinRoom(room.name)">Join</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomPage',
  data () {
    return {
      rooms: [],
      roomName: ''
    }
  },
  methods: {
    joinRoom (name) {
      const payload = {
        'room-name': name,
        userName: localStorage.getItem('userName')
      }
      this.$socket.emit('join-room', payload)
      this.$router.push(`/lobby/${name}`)
    },
    createRoom () {
      const payload = {
        'room-name': this.roomName,
        admin: localStorage.getItem('userName')
      }
      console.log('createinf room')
      this.$socket.emit('create-room', payload)
    }
  },
  sockets: {
    getRooms (payload) {
      console.log('DIA KE GET ROOM')
      this.rooms = payload
    },
    updatedRoom (payload) {
      console.log('masuk updated')
      this.rooms = payload
    }
  }
}
</script>

<style>

</style>
