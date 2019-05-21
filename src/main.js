// 项目的入口文件
// es6代码一般主流浏览器解析不了
// import *** from *** ES6导入包
import $ from 'jquery';
// const $ = require("jquery");相当于
import './css/style.css';
import './css/style2.less';// 注意这里的less文件会被编译成css文件，如果与css同名，就会覆盖style.css文件
$(function(){
    $('#list li:odd').css('backgroundColor','yellow');
    $('#list li:even').css('backgroundColor',function(){
        return '#' + 'ccc';
    });
})