<template>
  <div class="home">
    <landing-page />
    <projects />
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue'
import Projects from '@/components/Projects.vue'

export default {
  name: 'home',
  components: {
    LandingPage,
    Projects,
  }
}
</script>

<style>

.home {
  margin: 0px auto;
  height: 100%;
  min-height: 200px;
  width: 100%;
}

</style>
