<template>
  <div id="landing-page">
    <div id="landing-page-content">
      <h1>Carlton & Stolaf Engineering Club</h1>
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

#landing-page {
  background: blue;
  height: 70%;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#landing-page-content {
  margin-top: 5%;
  padding: 20px;
  color: black;
  border-radius: 10px;
  background: transparent;
}

</style>