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
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0,
      person: {
        name: 'ryan',
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
      },
      mobile_phone: 18888888888,
      tel_phone: 68984431,
      show: true
    }
  },

  computed: {
    // 当computed属性所需要的属性或者对象有变化时，会自动执行，比如下面这个name属性。
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.person.name
        .split('')
        .reverse()
        .join('')
    }
  },
  mounted() {
    //*************************set
    const s = new Set([1, 2, 3])
    console.log(s)
    s.add('a')
    console.log(s)

    //*************************arguments
    fn1(1, 2, 3)
    function fn1() {
      console.log('arg>>>>', arguments) //1，2，3
      console.log('arg>>>>', arguments[0]) //Object
    }

    //*************************ES6中用 ... 来代替arguments
    function average(...num) {
      let total = 0
      for (const item of num) {
        total += item
      }
      return total / num.length || 0 //有可能是NaN
    }
    console.log(average(2, 6))
    console.log(average(2, 3, 3, 5, 7, 10))
    console.log(average(7, 1432, 12, 13, 100))
    console.log(average())

    //*************************对象字面量写法
    let a = 1
    let b = 2
    let c = 3
    let obj = { a, b, c }
    console.log('>>>>>>>>obj', obj)

    //*************************for in 迭代
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 99]
    for (const index in digits) {
      //index是下标，索引，digits的index就能 取到数组里面的每一项了
      console.log(digits[index])
    }
    //*************************for of 迭代
    const days = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday'
    ]
    //不需要index了
    for (const day of days) {
      console.log(day)
    }

    //*************************展开运算符
    const books = [
      'chines',
      'math',
      'art',
      'computer',
      'Psychology',
      'Dynamics'
    ]
    // const person = {a:1, b:2, c:3, d:4}
    console.log(...books) //chines math art computer Psychology Dynamics

    //*************************数组连接方法concat或展开运算符...
    let a1 = [1, 2, 3, 4, 5]
    let b1 = [6, 7, 8, 9]
    console.log([a1, b1]) //相当于对象字面量写法，但是里面会有两个数组
    console.log(a1.concat(b1)) //数组连接方法
    console.log([...a1, ...b1]) // 展开操作符，这相当于数组连接方法

    //*************************剩余运算符
    const order = [20, 18, 1, 'cheese', 'eggs', 'milk', 'bread']
    const [total, subtotal, tax, ...items] = order
    console.log(total, subtotal, tax, items) //20 18 1  ["cheese", "eggs", "milk", "bread"]

    //*************************map操作数组方法
    var data = [1, 2, 3, 4]
    let newarr = data.map(item => item * item)
    console.log(newarr) //1 4 9 16
    console.log(typeof null) //Object

    //*************************Ajax请求
    let xhr = new XMLHttpRequest()
    xhr.open('get', 'www.baidu.com', true)
    xhr.send({ time: '2019' }) //send方法必须接收至少一个参数
    console.log(xhr.status)
    console.log(0x1)
  },
  watch: {
    person: function() {
      return this.person.firstName + 'π' + this.person.lastName
    },
    deep: true
  },
  methods: {
    compTest() {
      this.person.name = 'newryan'
    },
    tips() {
      //删除一个属性
      let obj = { name: 'zhuhuijie', age: '18', forever: true }
      delete obj.age //销毁一个属性。

      //作用域
      function b() {
        let a = a || 2
        console.log(a)
      }

      let a = 1
      b() // =>2
    }
  }
}
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
