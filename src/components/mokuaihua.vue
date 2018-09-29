<template>
  <div class="module">
        
  </div>
</template>

<script>
import {a} from './moduleByexport'
export default {
  components: {},
  name: "module",
  data() {
    return {
      show: true
    };
  },

  computed: {},
  mounted() {
      console.log(a)
  },
  
  methods: {
    compTest() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
