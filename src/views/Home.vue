<template>
  <div class="home">
    <navbar />
    <landing-page />
    <h1 class="custom-header">Featured Projects</h1>
    <projects id="completed-projects" 
              v-bind:projects="completedProjects"/>
    <h1 class="custom-header">Current</h1>
    <current-projects id="current-projects"
                      v-bind:currentProjects="currentProjects"/>
    <h1 class="custom-header">Schedule</h1>
    <schedule />
    <h1 class="custom-header">Meet the team</h1>
    <meet-the-team />
    <h1 class="custom-header">Contact</h1>
    <!-- <contact /> -->
  </div>
</template>

<script>
import LandingPage from '@/components/LandingPage.vue'
import Projects from '@/components/Projects.vue'
import Project from '@/components/Project.vue'
import Navbar from '@/components/Navbar.vue'
import CurrentProjects from '@/components/CurrentProjects'
import Schedule from '@/components/Schedule.vue'
import MeetTheTeam from '@/components/MeetTheTeam.vue'

export default {
  name: 'home',
  components: {
    MeetTheTeam,
    Schedule,
    CurrentProjects,
    Navbar,
    LandingPage,
    Projects,
    Project,
  },
  data() {
    return {
      completedProjects: [
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
      ],
      currentProjects: [
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
      ]
    }
  }
}
</script>

<style>

.custom-header {
  background: black;
  color: #BEBEBE;
  margin: 0px;
  padding: 20px 0px;
}

.home {
  margin: 0px auto;
  height: 100%;
  min-height: 200px;
  width: 100%;
}

</style>
