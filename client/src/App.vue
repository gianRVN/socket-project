<template>
  <div id="app">
    <router-view/>
<audio controls autoplay style="display: none;">
  <source src="./assets/8-bit-song.mp3" type="audio/ogg">
  <source src="./assets/8-bit-song.mp3" type="audio/mpeg">
</audio>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
