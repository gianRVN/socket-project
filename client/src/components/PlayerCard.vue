<template>
<div class="container">
  <div>
  <div class="justify-content-center mt-5">
    <b-card-group deck class="">
      <b-card
      :header="user.name"
      header-tag="header"
      title="Score">
        <b-card-text id="card-text" >{{ user.point }}</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerCard',
  props: ['user']
}
</script>

<style>

</style>
