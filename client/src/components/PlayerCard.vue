<template>
  <div class="float-left justify-content-center mt-5">
    <b-card-group deck>
      <b-card
      :header="user.name"
      header-tag="header"
      title="Score">
        <b-card-text id="card-text" >{{ user.point }}</b-card-text>
      </b-card>
    </b-card-group>
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
