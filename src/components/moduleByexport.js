//export应该在脚本尾部，一眼看清楚输出了哪些变量。

//>>>>>>>>暴露变量
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};

//>>>>>>>>重命名
function v1() {  }
function v2() {  }
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion 
};

//>>>>>>>>暴露函数
export function multiply(x, y) {
    return x * y;
  };
//or
function f() {};
export {f}

//>>>>>>>>可以取到实时的值
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);//500ms后，在外部调用foo，会输出baz