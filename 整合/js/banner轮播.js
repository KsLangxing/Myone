window.addEventListener("DOMContentLoaded", function () {
    //胡宏杰--------------------------------------------开始
    //banner 隐藏选项卡中盒子的高度
    let hhjHiddenTopHeight = $$(".hhj-hidden-top");
    $$(".hhj-hidden-bottom")[0].style.height = 444 - hhjHiddenTopHeight - 60 + "px";
    Array.prototype.slice.call($$(".hhj-hidden-bottom")).forEach((e, i) => {
        e.style.height = 444 - hhjHiddenTopHeight[i].offsetHeight - 60 + "px";
    });

    //banner 侧边栏隐藏框位置
    Array.prototype.slice.call($$(".hhj-hidden")).forEach(function (e, i) {
//            let number = randomto(1);
//            if (number === 0) {
//                set({one: e}, {top: "-444px"});
//            } else {
        set({one: e}, {top: "444px"});
//            }
    });
    //banner 侧边栏切换
    let lastindex = -1;   //判断是否是第一次移入
    let hhjtimer;
    Array.prototype.slice.call($$(".hhj-left-li")).forEach((e, i) => {
        e.addEventListener("mouseenter", qiehuan, false);
    });
    $$(".hhj-yesbanner-left")[0].addEventListener("mouseleave", chuqu, false);

    function qiehuan() {
        clearTimeout(hhjtimer);
        hhjtimer = setTimeout(() => {
            let index = this.getAttribute("data-index");
            if (lastindex !== -1) {
                let top = "444px";
                // if (index < lastindex) top = "-444px";
                set({one: $$(".hhj-hidden")[lastindex]}, {top: top});
            }
            set({one: $$(".hhj-hidden")[index]}, {top: "0"});
            lastindex = index;
        }, 150);
    }

    function chuqu() {
        setTimeout(() => {
            if (lastindex !== -1) {
                $$(".hhj-hidden")[lastindex].style.top = 444 + "px";
                lastindex = -1;
            }
        }, 150);
    }

    //banner  轮播图
    let banner_index = 0;
    let banner_first = 0;
    let bannerTimer = setInterval(lunbo, 2000);
    let hb = $$(".hhj-right-banner");
    let ho = $$(".hhj-dian-o");
    let hd = $$(".hhj-banner-background")[0];

//自动播放
    function lunbo() {
        toright();
    }

// 点击小圆点或左右切换按钮
    $$(".hhj-yesbanner-right")[0].addEventListener("click", dian, false);

    function dian(e) {
        yuanjie();
        //小圆点
        if (new RegExp(/hhj-dian-o/ig).test(e.target.className)) {
            let index = e.target.getAttribute("data-index");
            let images = $$(".hhj-right-banner")[index].getAttribute("data-image");
            let url = "url('" + images + "')";
            if (index === banner_first) return;
            setTimeout(() => {
                set({one: hb[banner_first]}, {transition: "none", left: "936px"});
                let num = banner_first;
                setTimeout(() => set({one: hb[num]}, {transition: "all .8s ease"}), 100);
                banner_first = index;
                banner_index = index;
            }, 800);
            set({one: hb[banner_first], two: ho[banner_first], there: hb[index], four: e.target, five: hd},
                {left: "-936px"}, {backgroundColor: "#424242"}, {left: "0"}, {backgroundColor: "#FFF"}, {backgroundImage: url});
        }
        //左按钮
        if (new RegExp(/hhj-leftt/ig).test(e.target.className)) {
            banner_index = --banner_index < 0 ? 5 : banner_index;
            let images = $$(".hhj-right-banner")[banner_index].getAttribute("data-image");
            let url = "url('" + images + "')";
            set({one: hb[banner_index]}, {transition: "none", left: "-936px"});
            setTimeout(() => {
                set({
                        one: hb[banner_index],
                        two: ho[banner_index],
                        there: hb[banner_first],
                        four: ho[banner_first],
                        five: hd
                    },
                    {
                        left: "0",
                        transition: "all .8s ease"
                    }, {backgroundColor: "#fff"}, {left: "936px"}, {backgroundColor: "#424242"}, {backgroundImage: url});
                banner_first = banner_index;
            }, 100);
        }
        //右按钮
        if (new RegExp(/hhj-rightt/ig).test(e.target.className)) {
            toright();
        }
    }

    function toright() {
        banner_index = ++banner_index > 5 ? 0 : banner_index;
        let images = $$(".hhj-right-banner")[banner_index].getAttribute("data-image");
        let url = "url('" + images + "')";
        set({one: hb[banner_first], two: ho[banner_first]}, {left: "-936px"}, {backgroundColor: "#424242"});
        setTimeout(() => {
            set({one: hb[banner_first]}, {transition: "none", left: "936px"});
            let num = banner_first;
            setTimeout(() => $$(".hhj-right-banner")[num].style.transition = "all .8s ease", 100);
            banner_first = banner_index;
        }, 800);
        set({
            one: hb[banner_index],
            two: ho[banner_index],
            five: hd
        }, {left: "0"}, {backgroundColor: "#FFF"}, {backgroundImage: url});
    }

//banner 轮播定时器节流
    $$(".hhj-yesbanner")[0].addEventListener("mouseenter", () => clearInterval(bannerTimer), false);
    $$(".hhj-yesbanner")[0].addEventListener("mouseleave", () => bannerTimer = setInterval(lunbo, 2000), false);

//banner 小圆点点击事件节流
    function yuanjie() {
        $$(".hhj-yesbanner-right")[0].removeEventListener("click", dian, false);
        setTimeout(() => $$(".hhj-yesbanner-right")[0].addEventListener("click", dian, false), 800);
    }

    //胡宏杰---------------------------------------------------------------结束


    //张春鑫---------------------------------------------------------------开始
    //1.获取dom对象
    let $arrow = $(".arrow");
    let $kralaContent = $(".krala-content");
    move();
    //2.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
    $kralaContent.on('mouseenter', function (ev) {
        // set({one:$$(".arrow")[0]},{display:"block"});
        document.getElementsByClassName("arrow")[0].style.display = "block";
    });
    $kralaContent.on('mouseleave', function (ev) {
        document.getElementsByClassName("arrow")[0].style.display = "none";
    });
    //3.两侧按钮绑定事件
    $arrow.on('click', ".next", function zcxright() {
        $arrow.off('click', '.next', zcxright);
        setTimeout(function () {
            $arrow.on('click', ".next", zcxright);
        }, 300);
        $(".karla-list").append($(".karla-list .karla-unit:first-child"));
        move();
    });
    $arrow.on('click', ".prev", function zcxleft() {
        $arrow.off('click', '.prev', zcxleft);
        setTimeout(function () {
            $arrow.on('click', ".prev", zcxleft);
        }, 300);
        $(".karla-list").prepend($(".karla-list .karla-unit:last-child"));
        move();
    });

    // 4.设置每个li的定位函数。
    function move() {
        var $karlaUnit = $(".karla-list .karla-unit");
        $karlaUnit.each(function (i, e) {
            $(e).animate(arr[i]);
            if (i === 2) {
                $($karlaUnit[i]).addClass('active').siblings('.karla-unit').removeClass('active');
            }
        });
    }

    //张春鑫-----------------------------------------------------------结束


    //梁超------------------------------------------------------------开始
    let searchBoxDom = $$(".search-box")[0];
    let seaIntDom = $$(".sea-int")[0];
    seaIntDom.addEventListener('focus', function () {
        set({one: searchBoxDom}, {borderBottom: "1px solid #f01400"});
    });
    seaIntDom.addEventListener('blur', function () {
        set({one: searchBoxDom}, {borderBottom: "1px solid #D9DDE1"});
    });



    //梁超----------------------------------------------------------结束

    //吴帅林-------------------------------------------------------------开始
    let canvas = $$("#canvas");
    let con = canvas.getContext("2d");
    setInterval(hua, 400);

    function hua() {
        for (let i = 0; i < 10; i++) {
            if (i > 2 && i < 8) {
                con.beginPath();
                con.moveTo(0, i * 10);
                con.lineTo(300, i * 10);
                con.strokeStyle = rgbto();
                con.stroke();

                con.beginPath();
                con.moveTo(850, i * 10);
                con.lineTo(1152, i * 10);
                con.strokeStyle = rgbto();
                con.stroke();
            } else {
                con.beginPath();
                con.moveTo(0, i * 10);
                con.lineTo(1152, i * 10);
                con.strokeStyle = rgbto();
                con.stroke();
            }
        }

        con.beginPath();
        let gradient = con.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", rgbto());
        gradient.addColorStop("0.5", rgbto());
        gradient.addColorStop("1.0", rgbto());
        con.font = "56px Georgia";
        con.fillStyle = gradient;
        con.fillText("我们一起追寻的IT梦", 325, 68);
    }

    function rgbto() {
        let r = randomto(255);
        let g = randomto(255);
        let b = randomto(255);
        let rgb = "rgb(" + r + "," + g + "," + b + ")";
        return rgb;
    }


    //吴帅林---------------------------------------------------------结束


    //吴希禹---------------------------------------------------------开始
    // tohttp(
    //     {
    //         method: "get",
    //         url: "js/wxyshuju.js",
    //         func: wxyxuan,
    //     }
    // );


//全明星格式渲染
    wxyxuan(wxydata);
    function wxyxuan(data) {
        let oClock = $$("#clock1");
        let oClock2 = $$("#clock2");
        // let todata = JSON.parse(data);

        for (let key in wxydata) {
            let strLi = "";
            wxydata[key].forEach(function (e, i) {
                strLi += `  <dd class="othen-item" data-img="${e.four}"
                         data-o="${e.one}" data-t="${e.two}" data-s="${e.there}">
                        <img src="${e.four}" alt="">
                    </dd>
                   `;
            });
            strLi += `
            <div class="minxing">
                 <div class="othen-item-show" style="background-image:url('${wxydata[key][0].four}'); ">
                     <div class="wxx"></div>
                     <div class="wyy">
                     <p class="othen-item-show-title">${wxydata[key][0].one}</p>
                     <h3 class="othen-item-show-nickname">${wxydata[key][0].two}</h3>
                     <p class="othen-item-show-desc">${wxydata[key][0].there}</p>
                     </div>
                 </div>
                 <div class="othen-item-showtwo">
                     <img class="index__img" src="${wxydata[key][0].four}" alt="">
                 </div>
            </div>
            `;
            if(key==="one"){
                oClock.innerHTML = strLi;
            }else {
                oClock2.innerHTML = strLi;
            }
        }
        zhunbei();
    }

    //图片的mouse事件
    let wxyShowDom = $$(".wxy-show");
    Array.prototype.slice.call($$(".wxy-leftdd")).forEach(function (e, i) {
        e.addEventListener("mouseover", function (ev) {
            set({one: wxyShowDom[i], two: e}, {display: "block"}, {paddingLeft: "95px"});
        }, false);
        e.addEventListener("mouseout", function (ev) {
            set({one: wxyShowDom[i], two: e}, {display: "none"}, {paddingLeft: "0px"});
        }, false)
    });

//全明星右边特效

    function zhunbei() {
        let othenItemShowtwoDom = $$(".othen-item-showtwo");
        let indexImgDom = $$(".index__img");
        let othenItemShowTitle = $$(".othen-item-show-title");
        let othenItemShowNickname = $$(".othen-item-show-nickname");
        let othenItemShowDesc = $$(".othen-item-show-desc");
        let othenItemsShow = $$(".othen-item-show");
        let minxingDoms = $$(".minxing");
        let minxingDom = Array.prototype.slice.call(minxingDoms);
        let othenItemDoms = $$(".othen-item");
        let oid = Array.prototype.slice.call(othenItemDoms);

        //旋转图片成环形排列
        for (let j = 0; j < 20; j++) {
            set({one: othenItemDoms[j]}, {transform: 'rotate(' + j * 36 + 'deg)'});
        }

        oid.forEach(function (e, i) {
            e.addEventListener("mouseenter", function () {
                set({one: e}, {border: "2px solid #ff6700"});
                let _img = e.getAttribute("data-img");
                let _one = e.getAttribute("data-o");
                let _two = e.getAttribute("data-t");
                let _there = e.getAttribute("data-s");

                if (i > 9) {
                    wxyxuan(1, _img, _one, _two, _there);
                } else {
                    wxyxuan(0, _img, _one, _two, _there);
                }
            }, false);
            e.addEventListener("mouseleave", function () {
                set({one: e}, {border: "none"});
            }, false);
        });
        minxingDom.forEach(function (e, i) {
            e.addEventListener("mouseenter", function (ev) {
                if (i === 1) {
                    wxyzhuan(1, 90, 0);
                } else {
                    wxyzhuan(0, 90, 0);
                }
            }, false);
            e.addEventListener("mouseleave", function (ev) {
                if (i === 1) {
                    wxyzhuan(1, 0, -90);
                } else {
                    wxyzhuan(0, 0, -90);
                }
            }, false);
        });

        function wxyzhuan(a, b, c) {
            set({
                one: othenItemShowtwoDom[a],
                two: othenItemsShow[a]
            }, {transform: "rotateY(" + b + "deg)"}, {transform: "rotateY(" + c + "deg)"});
        }

        function wxyxuan(a, b, c, d, e) {
            indexImgDom[a].src = b;
            othenItemsShow[a].style.backgroundImage = "url('" + b + "')";
            othenItemShowTitle[a].innerHTML = c;
            othenItemShowNickname[a].innerHTML = d;
            othenItemShowDesc[a].innerHTML = e;
        }
    }

    //吴希禹-----------------------------------------------------------结束


    //向晴隆-----------------------------------------------------------开始
    let backTopDom = $$("#backTop");
    window.onscroll = function () {
        //获取滚动条高度   判断滚动条位置
        let t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t >= 500) {
            set({one: backTopDom}, {display: "block"});
        } else {
            set({one: backTopDom}, {display: "none"});
        }

        //返回顶部
        backTopDom.onclick = function () {
            let xiangtimer = setInterval(totop, 5);
            let v = 40;
            let te = document.documentElement.scrollTop || document.body.scrollTop;

            function totop() {
                if (te <= v) {
                    clearInterval(xiangtimer);
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                } else {
                    document.body.scrollTop = te - v;
                    document.documentElement.scrollTop = te - v;
                    te -= v;
                }
            }
        }
    };

    //向晴隆--------------------------------------------------------------------结束


}, false);