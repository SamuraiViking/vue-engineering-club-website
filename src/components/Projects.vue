<template>
  <div id="projects-container">
    <div id="projects-grid">
        <div 
          id="project-1"
          class="project" 
          @mouseover="setHoveredProject(1)" 
          @mouseleave="setHoveredProject(null)">
          <div 
            v-if="hovered(1)"
            @mouseover="hoveringContents('none')">
            <button>More Info</button>
            projects
          </div>
        </div>
        <div id="project-2" class="project">projects</div>
        <div id="project-3" class="project">projects</div>
        <div id="project-4" class="project">projects</div>
        <div id="project-5" class="project">projects</div>
        <div id="project-6" class="project">projects</div>        
    </div>
  </div>
</template>

<script>
  name: 'projects'
  export default {
    data() {
      return {
        hoveredProject: '',
        hoveredProjectContent: '',
      }
    },
    methods: {
      hovered(hoveredProjectId) {
        return this.hoveredProject === hoveredProjectId
      },
      setHoveredProject(hoveredProjectId) {
        this.hoveredProject = hoveredProjectId
      },
      resetHoveredProject() {
        this.hoveredProject = ''
      }
    }
  }
</script>
<style>

/*:root {
  --grid-gap: 10px;
  --bg-color: blue;
}*/

#projects-container {
  max-width: 1000px;
  margin: 0px auto;
  --grid-gap: 10px;
}

#projects-grid {
  margin-top: var(--grid-gap);
  display: grid;
  grid-gap: var(--grid-gap);
  grid-template-columns: auto auto auto;
}

.project {
  z-index: 99;
  padding: 50px;
  background: black;
}

</style>