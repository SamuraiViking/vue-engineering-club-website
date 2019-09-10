<template>
  <div id="projects-container">
    <b-container fluid>
      <b-row>
        <b-col sm="4">
          <project v-bind:project="projects[0]"/>
        </b-col>
        <b-col sm="4">
          <project v-bind:project="projects[1]"/>
        </b-col>
        <b-col sm="4">
          <project v-bind:project="projects[2]"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="4">
          <project v-bind:project="projects[2]"/>
        </b-col>
        <b-col sm="4">
          <project v-bind:project="projects[2]"/>
        </b-col>
        <b-col sm="4">
          <project v-bind:project="projects[2]"/>
        </b-col>
      </b-row>
    </b-container>
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