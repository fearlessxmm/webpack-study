// 项目的入口文件
// es6代码一般主流浏览器解析不了
// import *** from *** ES6导入包
import $ from 'jquery';
// const $ = require("jquery");相当于
$(function(){
    $('#list li:odd').css('backgroundColor','yellow');
    $('#list li:even').css('backgroundColor',function(){
        return '#' + 'ccc';
    });
})