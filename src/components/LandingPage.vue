<template>
  <div id="landing-page">
    <div id="landing-page-content">
      <h1>Carlton & Stolaf Engineering Club</h1>
    </div>
    <div id="video-container">
      <div id="home-page-video">
        <iframe width="600" height="461"
          src="https://www.youtube.com/embed/bipTWWHya8A">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
  name: 'landing-page'
  export default {
    data() {
      return {
        screen: {
          width: 500,
          height: 500
        }
      }
    }
  }
</script>

<style>

#home-page-video {
  /*position: absolute;*/
  /*bottom: 0px;*/
}

#video-container {
  display: flex;
  justify-content: center;
}

#landing-page {
  background: blue;
  height: 80%;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#landing-page-content {
  position: relative;
  padding: 20px;
  color: black;
  border-radius: 10px;
  background: transparent;
}

</style>