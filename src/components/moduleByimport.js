//import应该放在脚本的顶部，这样一眼就可以看出引用了哪些模块进来
//加载的模块都是只读的，不允许改写！

//>>>>>>>>>>>>引入模块
import {firstName, lastName, year} from './profile.js';

//>>>>>>>>如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
import { lastName as surname } from './profile.js';

//>>>>>>>>不能改写引入的模块
lastName = [] //报错

//>>>>>>>>.js后缀可以省略
import {myMethod} from 'util';  //省略 .js 也可以省略路径，但是必须要在配置文件里声明
