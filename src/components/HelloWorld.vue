<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
      <li>
        {{reversedMessage}}
      </li>
      <li>
        <transition>
          <span v-if="show=!show">
            this is transition bind v-if directive
          </span>
        </transition>
      </li>
      <!-- 
        1.图表选型
        2.公共组件  （面包屑，）
        3.ajax封装，支持是否显示loading
        4.loading加载效果设计图
        5.动态的图片，效果，和过渡效果
        6.不同屏幕的兼容性质
       -->
      <li>
        {{ person.fullName }}
      </li>
      <li>
        <input type="button" @click=compTest value="click">
      </li>
      <li>
        <!--
        v-model：
        .lazy修饰符是惰性加载，也就是在“change”时而非“input”时更新；
        .number自动将用户的输入值转为数值类型；
        .trim自动过滤用户输入的首尾空白字符;
        -->
        <input type="text" v-model.lazy="mobile_phone">
        <span>{{mobile_phone}}</span>
        <!--model是实时绑定的和变化的-->
        <input type="text" v-model="tel_phone">
        <span>{{tel_phone}}</span>
      </li>
      <li>
        <button v-on:click="show = !show">
          Toggle
        </button>
        <transition name="fade">
          <p v-if="show">hello</p>
        </transition>
      </li>
      <li>
        <string1></string1>
        <mokuaihua></mokuaihua>
      </li>
    </ul>
  </div>
</template>

<script>
import string1 from "./string";
import mokuaihua from "./mokuaihua";

export default {
  components: { string1 ,mokuaihua},
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      count: 0,
      person: {
        name: "ryan",
        firstName: "Foo",
        lastName: "Bar",
        fullName: "Foo Bar"
      },
      mobile_phone: 18888888888,
      tel_phone: 68984431,
      show: true
    };
  },

  computed: {
    // 当computed属性所需要的属性或者对象有变化时，会自动执行，比如下面这个name属性。
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.person.name
        .split("")
        .reverse()
        .join("");
    }
  },
  mounted() {
    //*************************set
    const s = new Set([1, 2, 3]);
    console.log(s);
    s.add("a");
    console.log(s);

    //*************************arguments
    fn1(1, 2, 3);
    function fn1() {
      console.log("arg>>>>", arguments); //1，2，3
      console.log("arg>>>>", arguments[0]); //Object
    }

    //*************************ES6中用 ... 来代替arguments
    function average(...num) {
      let total = 0;
      for (const item of num) {
        total += item;
      }
      return total / num.length || 0; //有可能是NaN
    }
    console.log(average(2, 6));
    console.log(average(2, 3, 3, 5, 7, 10));
    console.log(average(7, 1432, 12, 13, 100));
    console.log(average());

    //*************************对象字面量写法
    let a = 1;
    let b = 2;
    let c = 3;
    let obj = { a, b, c };
    console.log(">>>>>>>>obj", obj);

    //*************************for in 对数组迭代
    const digits = ["a", "b", "c", 3, 4, 5, 6, 7, 8, 99];
    for (const i in digits) {
      //index是下标，索引，digits的index就能 取到数组里面的每一项了
      console.log(digits[i]);
    }
    //对对象迭代
    const atts = { a: 1, b: 2, c: 3 };
    for (const att in atts) {
      console.log(att); //属性名 顺序可能因浏览器而异
      console.log(atts[att]); //拿到属性值 这一行是点语法操作符 att不是下标
    }
    //*************************for of 迭代
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"
    ];
    //不需要index了
    for (const day of days) {
      console.log(day);
    }

    //*************************展开运算符
    const books = [
      "chines",
      "math",
      "art",
      "computer",
      "Psychology",
      "Dynamics"
    ];
    // const person = {a:1, b:2, c:3, d:4}
    console.log(...books); //chines math art computer Psychology Dynamics

    //*************************数组连接方法concat或展开运算符...
    let a1 = [1, 2, 3, 4, 5];
    let b1 = [6, 7, 8, 9];
    console.log([a1, b1]); //相当于对象字面量写法，但是里面会有两个数组
    console.log(a1.concat(b1)); //数组连接方法
    console.log([...a1, ...b1]); // 展开操作符，这相当于数组连接方法

    //*************************剩余运算符,...只能放在最后面
    const order = [20, 18, 1, "cheese", "eggs", "milk", "bread"];
    const [total, subtotal, tax, ...items] = order;
    console.log(total, subtotal, tax, items); //20 18 1  ["cheese", "eggs", "milk", "bread"]

    //*************************Ajax请求
    let xhr = new XMLHttpRequest();
    xhr.open("get", "www.baidu.com", true);
    xhr.send({ time: "2019" }); //send方法必须接收至少一个参数
    console.log(xhr.status);
    console.log(0x1); //16进制

    //*************************浅克隆
    //直接用等号来进行复制会有对象引用的问题，
    let scores = [12, 5, 8, 130, 44];
    //用...浅拷贝
    let arrs = [12, 5, 8, 130, 444];
    let [...spread] = [...arrs];
    arrs[1] = 66;
    console.log(spread); //  12 5 8 130 444

    //
    console.log(arrs instanceof Array);//true
    console.log(arrs instanceof Object);//true // 数组也是Array类型的Object
    console.log(arrs instanceof RegExp);//false
  },
  watch: {
    person: function() {
      return this.person.firstName + "π" + this.person.lastName;
    },
    deep: true
  },
  methods: {
    compTest() {
      this.person.name = "newryan";
    },
    tips() {
      //删除一个属性
      let obj = { name: "zhuhuijie", age: "18", forever: true };
      delete obj.age; //销毁一个属性。

      //作用域
      function b() {
        let a = a || 2;
        console.log(a);
      }

      let a = 1;
      b(); // =>2
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}
</style>
