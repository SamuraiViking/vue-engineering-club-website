<template>
  <div>
    <div class="project"
      @mouseenter="setHoveredProject">
      <div class="overlay">
        <div id="overlay-content">
          <div id="overlay-from-right">
            <h2>Awesome Drone</h2>
          </div>
          <div id="overlay-from-left">
            <b-button variant="primary">More Info</b-button>
          </div>
        </div>
      </div>
      <img id="project-img" src="https://www.digipen.edu/sites/default/files/public/img/engineering/02-image/digipen-computer-engineering-4th-year-handheld-gaming-console-im.jpg">
    </div>
    <div id="project-card-footer">
    </div>
  </div>
</template>


<script>
  export default {
    name: 'project',
    props: ['project'],
    methods: {
      setHoveredProject() {
        console.log('hello')
      }
    }
  }
</script>

<style>

.overlay {
  position:absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  transition: 1s ease;
}

.overlay:hover {
  background-color:rgba(0,0,255,0.3);
}

#overlay-content {
  height: 0px;
  background: blue;
  position: relative;
  color: white;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.8s ease;
  top: 50px;
}

#overlay-from-right {
  position: relative;
  right: 300px;
  transition: 0.8s ease;
}

#overlay-from-left {
  position: relative;
  left: 300px;
  transition: 0.8s ease;
}

.overlay:hover #overlay-content {
  left: 0px;
  opacity: 1;
}

.overlay:hover #overlay-from-left {
  left: 0px;
}

.overlay:hover #overlay-from-right {
  right: 0px;
}

#more-info-btn {
  top: 50%;
}

.project {
  overflow: hidden;
  position: relative;
}

#project-img {
  background-image: blue;
  width: 100%;
  height: auto;
  transition: .8s ease;
}

.project:hover #project-img {
  transform: scale(1.3);
}

#project-card-footer {
  /*background: blue;*/
}


</style>