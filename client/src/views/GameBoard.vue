<template>
  <div>
    <h1>{{ data.kata }}</h1>
    <h2>{{ data.point }}</h2>
    <h2>{{ displaySeconds }}</h2>
    <form>
      <input type="text"
        v-model="kata">
        <button @click.prevent="submitKata">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'GameBoard',
  data () {
    return {
      kata: '',
      displaySeconds: 0,
      isRunning: true
    }
  },
  methods: {
    submitKata () {
      this.$socket.emit('answerWord', {
        kata: this.kata,
        point: +this.data.point
      })
      this.kata = ''
    },
    showRemaining () {
      if (this.isRunning) {
        const timer = setInterval(() => {
          const counter = 60 - new Date().getSeconds()
          if (!counter) {
            clearInterval(timer)
            this.isRunning = false
            return
          }
          this.displaySeconds = counter
        }, 1000)
      }
    }
  },
  computed: {
    data () {
      return this.$store.state.data
    }
  },
  created () {
    this.showRemaining()
  }
}
</script>

<style>

</style>
