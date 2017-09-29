//胡宏杰banner部分
//获取数据
function newto() {
//            tohttp({method:"GET",url:"http://",func:returnto,data:"name"});
}

newto();
//处理返回的数据
returnto(data);

function returnto(data) {
//            let datato=JSON.parse(data);
    //banner 图片
    bannertoimage(data);
    //banner 课程
    bannertoke(data);
    //banner 隐藏框
    bannercebian(data);
}

function bannertoimage(data) {
    let bannerImgUrl = "";
    data.bannerImage.forEach((e, i) => {
        bannerImgUrl += `
                    <div class="hhj-right-banner" data-image="${e.img}">
                        <img src="${e.img}" alt="">
                    </div>
                `;
    });
    $$(".hhj-banner-imgdiv")[0].innerHTML = bannerImgUrl;
}

function bannertoke(data) {
    let bannerLian = "";
    data.bannerKeCheng.forEach((e, i) => {
        bannerLian += `
                    <li>
                        <i class="hhj-i"></i>
                        <p class="hhj-yesbanner-right-bottom-pone">${e.curriculum}</p>
                        <p class="hhj-yesbanner-right-bottom-ptwo">${e.introduction}</p>
                    </li>
                `;
    });
    $$(".hhj-bottom-ul")[0].innerHTML = bannerLian;
}

function bannercebian(data) {
    let bannerCeBian = "";
    let bannerCeBianJinJie = "";
    let bannerCeBianKe = "";
    data.banneryin.forEach((e, i) => {
        e.jinjie.forEach((ev) => {
            let ato="";
            for (let key in ev) {
                if (key !== "kename") {
                    ato += `
                        <a class="hhj-banner-left-a" href="javascript:void(0)">${ev[key]}</a>
                    `;
                }
            }
            bannerCeBianJinJie += `
                     <div class="hhj-hidden-top-one">
                         <p>${ev.kename}</p>
                         <span></span>
                         <div>
                            ${ato}
                         </div>
                     </div>
                `;


        });
        e.ke.forEach((ev) => {
            bannerCeBianKe += `
                    <div class="hhj-hidden-top-two-div">
                        <img src="${ev.bimage}" alt="">
                        <a href="javascript:void(0)">${ev.bnameone}</a>
                        <div>
                            <span class="zhiye">${ev.bnametwo}</span>
                            <span class="kecheng">${ev.bnamethere}</span>
                            <span class="xunumber">
                            <i class="icon-user"></i>
                            ${ev.bnamefour}</span>
                        </div>
                        <span class="qian">${ev.bnamefive}</span>
                    </div>
                `;
        });
        bannerCeBian += `
                    <li class="hhj-left-li" data-index="${e.index}">
                            <a class="hhj-left-li-a" href="javascript:void(0)">${e.zhuti}
                                <span>></span>
                            </a>
                        <div class="hhj-hidden">
                            <div class="hhj-hidden-top">
                            ${bannerCeBianJinJie}
                            </div>
                            <div class="hhj-hidden-bottom">
                                <div class="hhj-hidden-top-two">
                                ${bannerCeBianKe}
                                </div>
                            </div>
                        </div>
                    </li>
                `;
        bannerCeBianJinJie = "";
        bannerCeBianKe = "";
    });
    $$(".hhj-yesbanner-left-ul")[0].innerHTML = bannerCeBian;
}


//李张晗部分


xuan(lzhdata);

function xuan(data) {
//		let datato=JSON.parse(data);
    let htmlto = "";
    htmlto += `<div class="adsensbox-1">
                <a href="javascript:void(0)">
                    <h3 class="ellipsis">${data.qiantopone.one}</h3>
                    <p class="p">${data.qiantopone.two}</p>
                </a>
            </div>
            <div class="adsensbox-1">
                <a href="javascript:void(0)">
                    <h3 class="ellipsis">${data.qiantoptwo.one}</h3>
                    <p class="p">${data.qiantoptwo.two}</p>
                </a>
            </div>`;

    data.qianthere.forEach(function (e, i) {
        let keke="";
        for(let key in e.qianke){
            keke+= `	<label>${e.qianke[key]}</label>`;
        }

        htmlto += `<div class="container">
				<div class="hashadow">
					<img src="${e.qianimg}">
					<div class="baohan">
					${keke}
					</div>
				</div>
				<div class="course-card-content">
					<h3 class="course-card-name">${e.qianjie}</h3>
					<div class="course-card-bottom">
						<div class="course-card-info">
							<span>${e.qianone}</span>
							<span>${e.qiantwo}</span>
							<span><i class="iconfont icon-rentou"></i>${e.qianren}</span>
							<span class="julidy">
								<i class="icon-star-full iconfont"></i>
								<i class="icon-star-full iconfont"></i>
								<i class="icon-star-full iconfont"></i>
								<i class="icon-star-full iconfont"></i>
								<i class="icon-star-full iconfont"></i>
							</span>
						</div>
						<div class="course-card-price">${e.qiansusu}</div>
					</div>
				</div>
			</div>`;
    });
    $$(".types")[0].innerHTML = htmlto;
}




