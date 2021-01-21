<template>
  <div class="home container">
    <img
      src="https://cdn.dribbble.com/users/1061278/screenshots/12543160/media/7cd7ab7630ede8e6cb754180c4e46699.png?compress=1&resize=400x300"
    />
    <h1 style="margin: 10px 10px">WELCOME to LOBBY!</h1>
    <div v-if="room.admin === adminName">
      <button class="btn btn-success">Start Game</button>
    </div>
    <div style="row">
      <div v-for="(user, i) in room.users" :key="i">
        <div class="col-3" >
        <div class="card" style="width: 15rem;">
        <div class="card-body">
        <h5 class="card-title">{{user}}</h5>
      </div>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      room: {},
      adminName: ''
    }
  },
  methods: {

  },
  sockets: {
    roomDetail (payload) {
      console.log(payload, 'YEAHH')
      this.room = payload
      this.adminName = localStorage.getItem('userName')
    }
  }
}
</script>
