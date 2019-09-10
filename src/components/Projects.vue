<template>
  <div id="projects-container">
    <div id="projects-grid">
      <project v-bind:project="projects[0]"/>
      <project v-bind:project="projects[1]"/>
      <project v-bind:project="projects[2]"/>
      <project v-bind:project="projects[3]"/>
      <project v-bind:project="projects[4]"/>
      <project v-bind:project="projects[5]"/>
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
  grid-gap: 20px;
  max-width: 800px;
  display: grid;
  grid-template-columns: auto auto auto;
}

</style>