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
      eval(str); // 欺骗词法,只接收原始字符串作爲參數
      console.log(qp); // 2
    }

    //*****************************字符串连接，比连接符+好用吧。。。str.concat()*/
    //语法str.concat(string2, string3[, ..., stringN])
    let str1 = "";
    console.log(
      str1.concat(...["a", "b", "c"], ...["d", "e", "f"], ...["g", "h", "i"])
    ); //abcdfeghi

    //*****************************str.indexOf()方法返回调用  String 对象中第一次出现的指定值的索引，否则返回-1
    //语法str.indexOf(searchValue[, fromIndex])
    "Blue Whale".indexOf("Blue"); // returns 0
    "Blue Whale".indexOf("Blute"); // returns -1
    //一个小例子,找出某个字符串出现的次数
    let str2 = "my sweetheart is HuiJie Zhu ahahaha";
    let count = 0;
    let pos = str2.indexOf("e");
    while (pos != -1) {
      count++;
      pos = str2.indexOf("e", pos + 1);
    }
    console.log(count); // 4

    //****************************** lastIndexOf() 方法返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。从该字符串的后面向前查找
    //语法str.lastIndexOf(searchValue[, fromIndex])
    "canal".lastIndexOf("a"); // returns 3

    //****************************** */str.padEnd(targetLength [, padString])
    "abc".padEnd(10); // "abc       "
    "abc".padEnd(10, "foo"); // "abcfoofoof"
    "abc".padEnd(6, "123456"); // "abc123"
    "abc".padEnd(1); // "abc"
    console.log("abc".padEnd(10, "ddddddddddddddddddd")); //加上原来的最长length为10

    //******************************方法用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。填充从当前字符串的开始(左侧)应用的。
    //语法str.padStart(targetLength [, padString])
    "abc".padStart(10); // "       abc"
    "abc".padStart(10, "foo"); // "foofoofabc"
    "abc".padStart(6, "123465"); // "123abc"
    "abc".padStart(8, "0"); // "00000abc"
    "abc".padStart(1); // "abc"

    //******************************repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。
    //重复填充一个字符串，不会改变原始字符串
    console.log("abc".repeat(2)); //abcabc  重复三次，处理函数会自动把Number参数向下取整
    console.log("abc".repeat(3.5)); //abcabcabc  重复三次，处理函数会自动把Number参数向下取整

    //******************************slice() 方法提取一个字符串的一部分，并返回一新的字符串。
    //str.slice(beginSlice[, endSlice]) beginSlice如果为负数，则会认为是从倒数第几位开始,也相当于str.length -beginSlice
    // 如果beginSlice 是 -3 则看作是: sourceLength - 3)
    let str;
    console.log("abcdefghijklmn".slice(1, 3)); //bc
    console.log("abcdefghijklmn".slice(-6, -1)); //ij

    //******************************方法使用指定的分隔符字符串将一个String对象分割成字符串数组
    //语法str.split([separator[, limit]])
    console.log("12341234123412341234".split("1")); //["", "234", "234", "234", "234", "234"]
    //******************************转换为字符串类型toString()
    // 1.如果被转换的类型是undefined或者null时,会报错,所以他不安全,

    let num2 = 12345;
    console.log(12345 + ""); //"12345" 这是一个巧妙的方法，记住它！！！
    console.log(num2.toString()); //"12345"
    // console.log(null.toString()) //报错!!!

    //******************************转换为字符串类型的另一個方法String(),这个似乎比toString更安全!
    console.log(String(null));
    console.log(String(undefined));
    console.log(String(123456));
    //**************************** 用一元 +  - 转为Number类型*/
    let str3 = "3.1";
    let str4 = "4.1";
    +str3; // 输出number类型的 3.1
    -str4; // 输出number类型的 -4.1

    //**************************** 通过下标[]访问字符串的某一个*/
    var stringValue = "hello world";
    alert(stringValue[1]); //"e"

    //**************************** 一些字符串操作方法 */
    var stringValue = "hello world";
    alert(stringValue.slice(3)); //"lo world"
    alert(stringValue.substring(3)); //"lo world"
    alert(stringValue.substr(3)); //"lo world"
    alert(stringValue.slice(3, 7)); //"lo w"
    alert(stringValue.substring(3, 7)); //"lo w"
    alert(stringValue.substr(3, 7)); //"lo worl"
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