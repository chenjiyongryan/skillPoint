<template>
<div>
  <a href="#" id="size-12" @click="size12">12号字体</a>
  <a href="#" id="size-14" @click="size13">13号字体</a>
  <a href="#" id="size-16" @click="size14">14号字体</a>

</div>

</template>
 <script>
export default {
  name: "string",
  data() {
    return {
      size12: function() {},
      size13: function() {},
      size14: function() {}
    };
  },
  mounted() {
    
    console.log(this.size14);
    //******************************词法作用域 */
    function foo(str) {
      eval(str); // 欺骗词法 8080
      console.log(b); // 2
    }
    var b = 2;
    foo("var b = 8080;console.log(b)");
  },
  methods: {
    makeSizer(size) {
      return function() {
        document.body.style.fontSize = size + "px";
      };
    }
  }
};
</script>