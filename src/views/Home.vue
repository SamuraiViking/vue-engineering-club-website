<template>
  <div class="home">
    <landing-page />
    <h1>Featured Projects</h1>
    <projects id="featured-projects" 
              v-bind:projects="featuredProjects"/>
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue'
import Projects from '@/components/Projects.vue'
import Project from '@/components/Project.vue'

export default {
  name: 'home',
  components: {
    LandingPage,
    Projects,
    Project,
  },
  data() {
    return {
      featuredProjects: [
        {
          id: 1,
          img: "img.jpg",
          description: "a great description",
        },
        {
          id: 2,
          img: "img.jpg",
          description: "a great description",
        },
        {
          id: 3,
          img: "img.jpg",
          description: "a great description",
        },
        {
          id: 4,
          img: "img.jpg",
          description: "a great description",
        },
        {
          id: 5,
          img: "img.jpg",
          description: "a great description",
        },
        {
          id: 6,
          img: "img.jpg",
          description: "a great description",
        },
      ],
    }
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
