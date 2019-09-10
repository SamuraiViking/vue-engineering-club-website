<template>
  <div id="projects-container">
    <b-container fluid class="no-padding">
      <b-row :no-gutters="true">
        <b-col md="4">
          <project v-bind:project="projects[0]"/>
        </b-col>
        <b-col md="4">
          <project v-bind:project="projects[1]"/>
        </b-col>
        <b-col md="4">
          <project v-bind:project="projects[2]"/>
        </b-col>
      </b-row>
      <b-row :no-gutters="true">
        <b-col md="4">
          <project v-bind:project="projects[2]"/>
        </b-col>
        <b-col md="4">
          <project v-bind:project="projects[2]"/>
        </b-col>
        <b-col md="4">
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

#projects-container  class="no-padding"{
  background: red;
}

.no-padding {
  padding-right: 0px !important;
  padding-left: 0px !important;
}

#projects-grid {
  margin: 0px auto;
  display: flex;
}

</style>