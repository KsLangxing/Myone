$(document).ready(function (ev) {
    var arr = [
        {   //  1
            width: 200,
            top: 70,
            left: 175,
            opacity: 0.2,
            zIndex: 2,
            height: 250
        },
        {  // 2
            width: 270,
            top: 120,
            left: 125,
            opacity: 0.7,
            zIndex: 3,
            height: 375
        },
        {   // 3
            width: 400,
            top: 100,
            left: 376,
            opacity: 1,
            zIndex: 4,
            height: 500
        },
        {  // 4
            width: 270,
            top: 120,
            left: 752,
            opacity: 0.7,
            zIndex: 3,
            height: 375
        },
        {   //5
            width: 200,
            top: 70,
            left: 750,
            opacity: 0.2,
            zIndex: 2,
            height: 250
        }
    ];
    //1.获取dom对象
    var $arrow = $(".arrow");
    var $kralaContent = $(".krala-content");
    move();
    //2.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
    $kralaContent.on('mouseenter', function (ev) {
        // set({one:$$(".arrow")[0]},{display:"block"});
        document.getElementsByClassName("arrow")[0].style.display="block";
    });
    $kralaContent.on('mouseleave', function (ev) {
        document.getElementsByClassName("arrow")[0].style.display="none";
    });
    //3.两侧按钮绑定事件
    $arrow.on('click', ".next", function zcxright() {
        $arrow.off('click', '.next',zcxright);
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
});