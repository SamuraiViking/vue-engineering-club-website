<template>
  <div id="landing-page">
    <div id="landing-page-content">
      <h1>Northfield Engineers</h1>
      <button>Hello</button>
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
  background: black;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#landing-page-content {
  padding: 20px;
  background: blue;
}

</style>