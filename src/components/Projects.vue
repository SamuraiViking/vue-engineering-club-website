<template>
  <div id="projects-container">
    <div id="projects-grid">
      <project v-bind:project="projects[0]"/>
      <project v-bind:project="projects[1]"/>
      <project v-bind:project="projects[2]"/>
    </div>
  </div>
</template>

<script>
  import Project from './Project.vue'

  export default {
    props: ['projects'],
    name: 'projects',
    components: {
      Project
    },
    data() {
      return {
        hoveredProject: null,
      }
    },
  }
</script>
<style>

#projects-container {
  background: red;
}

#projects-grid {
  margin: 0px auto;
  display: flex;
}

</style>