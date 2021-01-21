<template>
  <div class="home container">
    <img
      src="https://cdn.dribbble.com/users/1061278/screenshots/12543160/media/7cd7ab7630ede8e6cb754180c4e46699.png?compress=1&resize=400x300"
    />
    <h1 style="margin: 10px 10px">WELCOME to LOBBY!</h1>
    <div class="col-4
    ">
      <div class="" style="margin: 30px 30px">
        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
      <div class="card " style="padding: 20px 20px">
        <p class="text-start">Start aligned text on all viewport sizes.</p>
        <p class="text-center">Center aligned text on all viewport sizes.</p>
        <p class="text-end">End aligned text on all viewport sizes.</p>
        <p class="text-sm-start">
          Start aligned text on viewports sized SM (small) or wider.
        </p>
        <p class="text-md-start">
          Start aligned text on viewports sized MD (medium) or wider.
        </p>
        <p class="text-lg-start">
          Start aligned text on viewports sized LG (large) or wider.
        </p>
        <p class="text-xl-start">
          Start aligned text on viewports sized XL (extra-large) or wider.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  sockets: {}
}
</script>
