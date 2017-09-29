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