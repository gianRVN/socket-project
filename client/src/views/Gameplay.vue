<template>
  <div>
    <div>
      <h1> KATA </h1>
    </div>
    <div class="row d-flex justify-content-center mt-5" >
      <b-card-group deck>
      <b-card
      header="username"
      header-tag="header"
      title="Score"
      >
      <b-card-text id="card-text" >50</b-card-text>

    </b-card>
    </b-card-group>

      <b-card-group deck >
      <b-card
      header="username"
      header-tag="header"
      title="Score"
      >
      <b-card-text id="card-text" >50</b-card-text>
    </b-card>
    </b-card-group>

      <b-card-group deck>
      <b-card
      header="username"
      header-tag="header"
      title="Score"
      >
      <b-card-text id="card-text" >50</b-card-text>

    </b-card>
    </b-card-group>

      <b-card-group deck>
      <b-card
      header="username"
      header-tag="header"
      title="Score"
      >
      <b-card-text id="card-text" >50</b-card-text>

    </b-card>
    </b-card-group>
    </div>
    <form class="mt-5">
          <label>Ketik kata di atas</label><br>
          <input type="text" ><br>
          <button  class="btn btn-primary" type="submit">submit</button>
    </form>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Gameplay'

}
</script>

<style>

#card-text {
      font-size: 20px;
}
</style>
