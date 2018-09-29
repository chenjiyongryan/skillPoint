<template>
  <div class="hello">
        <button v-on:click="show = !show">click</button>
        <transition name="fade">
            <p v-show="show">hello</p>
        </transition>
  </div>
</template>

<script>
export default {
  components: {},
  name: "css",
  data() {
    return {
      show: true
    };
  },

  computed: {},
  mounted() {},
  
  methods: {
    compTest() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active {
  transition: all 1s ease-in-out;
}
.fade-leave-active {
  transition: all 1s ease-in-out;
}

.fade-enter, .fade-leave-to/* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
  transform: translateX(10px);
}
</style>
