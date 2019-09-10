<template>
  <div>
    <div>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://www.digipen.edu/sites/default/files/public/img/engineering/02-image/digipen-computer-engineering-4th-year-handheld-gaming-console-im.jpg"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Horizontal Card">
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
  import HorizontalCard from './HorizontalCard.vue'
  export default {
    name: 'current-projects',
    props: ['currentProjects']
  }
</script>

<style>

</style>