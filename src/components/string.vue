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
    //******************************闭包 */
    function makeFunc() {
      var name = "Mozilla";
      function displayName() {
        console.log(name);
      }
      return displayName; //直接把函数体return出去了
    }
    var myFunc = makeFunc();
    myFunc(); //myFunc 是执行 makeFunc 时创建的 displayName 函数实例的引用
    // 另一个更有意思的闭包例子
    function makeAdder(x) {
      return function(y) {
        return x * y;
      };
    }
    let add1 = makeAdder(2);
    let add2 = makeAdder(10);
    console.log(add1(3)); //6
    console.log(add2(10));//100
    //闭包小例子
    this.size12 = this.makeSizer(12);
    this.size13 = this.makeSizer(13);
    this.size14 = this.makeSizer(14);

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