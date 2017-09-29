let typesDOm = document.getElementsByClassName("types")[0];
let one = "Python",
    two = "大数据",
    qianimg = "http://szimg.mukewang.com/5940e2a20001045a05400300-360-202.jpg",
    qianjie = "大数据 Spark SQL 慕课网的日志分析",
    qianone = "实战",
    qiantwo = "中站",
    qianren = "267",
    qiansusu = "￥366.00";
let data = {
    qiantopone: {
        one: "大数据技术与实践训练营",
        two: "一站式搞定大数据，给你更多工作机会，赢在起跑线！",
    }
    ,
    qiantoptwo: {
        one: "AI和大数据时代的第一开发语言",
        two: "Python逆袭成为最佳开发语言的掌门",
    }
    ,
    qianthere: [
        {
            qianke: {
                one, two,
            }
            ,
            qianimg, qianjie, qianone, qiantwo, qianren, qiansusu,
        }
        ,
        {
            qianke: {
                one, two,
            }
            ,
            qianimg, qianjie, qianone, qiantwo, qianren, qiansusu,
        }
        ,
        {
            qianke: {
                one, two,
            }
            ,
            qianimg, qianjie, qianone, qiantwo, qianren, qiansusu,
        }
        ,
        {
            qianke: {
                one, two,
            }
            ,
            qianimg, qianjie, qianone, qiantwo, qianren, qiansusu,
        }
        ,
        {
            qianke: {
                one, two,
            }
            ,
            qianimg, qianjie, qianone, qiantwo, qianren, qiansusu,
        }
        ,
        {
            qianke: {
                one, two,
            }
            ,
            qianimg, qianjie, qianone, qiantwo, qianren, qiansusu,
        }
        ,
        {
            qianke: {
                one, two,
            }
            ,
            qianimg, qianjie, qianone, qiantwo, qianren, qiansusu,
        }
        ,
        {
            qianke: {
                one, two,
            }
            ,
            qianimg, qianjie, qianone, qiantwo, qianren, qiansusu,
        }
        ,
        {
            qianke: {
                one, two,
            }
            ,
            qianimg, qianjie, qianone, qiantwo, qianren, qiansusu,
        }
        ,
        {
            qianke: {
                one, two,
            }
            ,
            qianimg, qianjie, qianone, qiantwo, qianren, qiansusu,
        }
    ],
};

xuan(data);
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
        let keke = `	<label>${e.qianke.one}</label>
						<label>${e.qianke.two}</label>`;

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
							<span><i class="iconfont icon-person_outline">${e.qianren}</i></span>
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
    typesDOm.innerHTML=htmlto;
}