<template>
  <div class="main">
    <div id="scroll-area-content" v-for="person in people">
      <b-card
        :title="person.name"
        @mouseover="test()"
        class="my-b-card"
        img-src="https://prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/placeholder-profile_3.png"
        img-top
        style="min-width: 14rem;"
      >
        <b-card-text>
          <div style="text-align: left;">
            <p> Senior </p>
            <p> Stolaf </p>
            <p> Math Majior </p>
            <p> "I like cheese"</p>
          </div>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'meet-the-team',
    data() {
      return {
        people: [
          { name: 'Amy', description: 'A great description' },
          { name: 'Bruce', description: 'A great description' },
          { name: 'Caroline', description: 'A great description' },
          { name: 'Danny', description: 'A great description' },
          { name: 'Elsa', description: 'A great description' },
          { name: 'Fred', description: 'A great description' },
          { name: 'Greg', description: 'A great description' },
          { name: 'Harry', description: 'A great description' },
          { name: 'Isabelle', description: 'A great description' },
          { name: 'Amy', description: 'A great description' },
          { name: 'Bruce', description: 'A great description' },
          { name: 'Caroline', description: 'A great description' },
          { name: 'Danny', description: 'A great description' },
          { name: 'Elsa', description: 'A great description' },
          { name: 'Fred', description: 'A great description' },
          { name: 'Greg', description: 'A great description' },
          { name: 'Harry', description: 'A great description' },
          { name: 'Isabelle', description: 'A great description' },
        ]
      }
    },
    methods: {
      test() {
        console.log('woring');
      }
    }
  }
</script>


<style>

.my-b-card {
  transition: ease 0.3s;
  padding: 5px;
  border-color: transparent !important;
}

.my-b-card:hover {
  padding: 0px;
}

.main {
    overflow-y: auto;
    border: 1px solid black;
    /*height: 3em;*/
    /*width: 10em;*/
    line-height: 1em;
}

.main::-webkit-scrollbar {
    -webkit-appearance: none;
}

.main::-webkit-scrollbar:vertical {
    width: 11px;
}

.main::-webkit-scrollbar:horizontal {
    height: 11px;
}

.main::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid white; /* should match background, can't be transparent */
    background-color: rgba(0, 0, 0, .5);
}

.main {
  display: flex;
  overflow-x: scroll;
}

.main::-webkit-scrollbar {
    -webkit-appearance: none;
}

.main::-webkit-scrollbar:horizontal {
    height: 11px;
}

.person {
  min-width: 200px;
  height: 200px;
  background: orange;
}

</style>