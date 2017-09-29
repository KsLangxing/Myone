
/**
 * Created by Administrator on 2017/9/17.
 */
window.addEventListener('DOMContentLoaded', function () {

    var searchBoxDom = document.getElementsByClassName('search-box')[0];
    var seaIntDom = document.getElementsByClassName('sea-int')[0];
    console.log(seaIntDom);
    seaIntDom.addEventListener('focus', function () {
        //alert(1);
        searchBoxDom.style.borderBottom = '1px solid #f01400';
    });
    seaIntDom.addEventListener('blur', function () {
        searchBoxDom.style.borderBottom = '1px solid #D9DDE1';
    });


    var navListDom = document.getElementsByClassName('nav-list')[0];
    console.log(navListDom);
    var listBoxDom = document.getElementsByClassName('list-box')[0];
    navListDom.addEventListener('mouseenter', function () {
        listBoxDom.style.display = 'block';
    });
    navListDom.addEventListener('mouseleave', function () {
        listBoxDom.style.display = 'none';
    });
},false);