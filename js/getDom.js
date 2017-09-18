//Dom对象获取
/*
* $$(".hhj-hidden-bottom")[0]
* $$("#hhj-hidden-bottom")
* $$("div")[0]
*
* */
"use strict";
const buguize="!@$%^&(*)~`?/><\\,|";
var $$ = function (...x) {
    //检测异常字符
    for(let s of x.toString()){
        if(buguize.indexOf(s) !== -1){
            error();
            return;
        }
    }
    //把数组a转换成字符串，并去掉最前面和最后面的空字符
    let a=x.toString();
    a=a.replace(/(^\s+)|(\s+$)/g,"");
    //获取DOM
    if(a[0]==="#"){
        let m=a.replace("#","");
        return document.getElementById(m);
    }else if(a[0]==="."){
        let m=a.replace(".","");
        return document.getElementsByClassName(m);
    }else {
        return document.getElementsByTagName(a);
    }
};
var error = function () {
    alert("参数异常！");
};


//Dom对象赋值
/*
* 需要传入的参数
* 参数1：
*{
* one:domone
* two:dontwo
* }  //要赋值的dom对象  可以传入多个对象，每个对象的属性值单独放在一个对象中
* 参数2：
*{
* //domone的第一个属性
* style:value  //要赋值的属性和值
* //domone的第二个属性
*
* }
* 参数3：
* {
* //domtwo的第一个属性值
* style:value  //要赋值的属性和值
* }
*
*
* 例：set({one:domone,two:domtwo},{color:"red",fontSize:"16px"},{color:"blue",fontSize:"20px"});
*
*
* */
var set=function (dm,...sv) {
    let index=-1;
    for(let k in dm){
        index++;
        for(let key in sv[index]){
           dm[k].style[key]=sv[index][key];
        }
    }
}



//随机数
var randomto=function(a=1,b=0) {
    return Math.round(Math.random()*a+b);
}