<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Projects</b-nav-item>
          <b-nav-item href="#">The Team</b-nav-item>
          <b-nav-item href="#">Schedule</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Github</b-nav-item>
          <b-nav-item href="#">Instagram</b-nav-item>
          <b-nav-item href="#">Facebook</b-nav-item>
          <b-nav-item href="#">Snapchat</b-nav-item>
          <b-nav-item href="#">Youtube</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>  
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style>
</style>