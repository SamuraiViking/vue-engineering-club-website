<template>
  <div class="main">
    <div class="team">
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
      <div class="person">a</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'meet-the-team',
    data() {
      return {
        people: [
          { name: 'Kevin', description: 'A great description' },
          { name: 'Kevin', description: 'A great description' },
          { name: 'Kevin', description: 'A great description' },
          { name: 'Kevin', description: 'A great description' },
          { name: 'Kevin', description: 'A great description' },
          { name: 'Kevin', description: 'A great description' },
          { name: 'Kevin', description: 'A great description' },
          { name: 'Kevin', description: 'A great description' },
        ]
      }
    }
  }
</script>


<style>

.team {
  display: flex;
  overflow-x: scroll;
}

.person {
  min-width: 200px;
  height: 200px;
  background: orange;
}

</style>