/**
 * Created by Administrator on 2017/9/21.
 */
var oCss=document.getElementById("css");
var oClock=document.getElementById("clock1");
var oClock2 = document.getElementById("clock2");
var oUl=oClock.getElementsByTagName("dd")[0];
var strLi="";
var strCss="";
for(var i=0;i<10;i++){
    strLi+=`<dd class="othen-item">
        <img src="http://img3.mukewang.com/566f7dd600019fdf06000608-100-100.jpg" alt="">
                </dd><div class="othen-item-show"><p class="othen-item-show-title">="风骚课程学霸"=</p>
                <h3 class="othen-item-show-nickname">桥本奈奈未</h3>
                <p class="othen-item-show-desc">一周获得 23积分</p></div>`;
};
oClock.innerHTML=strLi;
oClock2.innerHTML=strLi;
for(var j=0;j<10;j++){
    strCss+='.othen-item:nth-of-type('+(j+1)+'){transform:rotate('+j*36+'deg);}';
}
oCss.innerHTML+=strCss;


Array.prototype.slice.call($(".wxy-start-list-l dd")).forEach(function(e,i){
    e.addEventListener("mouseover",function(ev){

        $$(".wxy-show")[i].style.display = 'block';

        e.style.paddingLeft = "95px";


    },false);
    e.addEventListener("mouseout",function(ev){
        $$(".wxy-show")[i].style.display = "none";
        e.style.paddingLeft = "0px";
    },false)
});
function student1(){
    var  ddDom = oClock.getElementsByTagName("dd");
    var showDom = oClock.getElementsByClassName("othen-item-show");
    var show = Array.prototype.slice.call(showDom);
    var DD = Array.prototype.slice.call(ddDom);
    DD.forEach(function(e,i){
        e.addEventListener("mouseover",function(ev){
            mathB = Math.round(150*Math.random())+50;
            mathA = Math.round(205*Math.random())+50;
            mathC = Math.round(205*Math.random())+50;
            show.forEach(function(e,i){
                e.style.opacity = "0";
                show[i].style.top = "109px";
            });
            show[i].style.opacity = "1";
            show[i].style.background = "rgb("+mathA+','+mathB+','+mathC+")";
            show[i].style.top = "99px";

        })
    })
}
student1();
function student2(){
    var  dd1Dom = oClock2.getElementsByTagName("dd");
    var show1Dom = oClock2.getElementsByClassName("othen-item-show");
    var show1 = Array.prototype.slice.call(show1Dom);
    var DD1 = Array.prototype.slice.call(dd1Dom);
    DD1.forEach(function(e,i){
        e.addEventListener("mouseover",function(ev){
            mathB = Math.round(150*Math.random())+50;
            mathA = Math.round(205*Math.random())+50;
            mathC = Math.round(205*Math.random())+50;

            show1.forEach(function(e,i){
                e.style.opacity = "0";
                show1[i].style.top = "109px";
            });
            show1[i].style.opacity = "1";
            show1[i].style.background = "rgb("+mathA+','+mathB+','+mathC+")";
            show1[i].style.top = "99px";

        })
    })
}
student2();