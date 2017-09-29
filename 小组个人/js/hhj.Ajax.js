

function tohttp({method:g="GET",url:to,async:tr=true,func:fun=function () {
    console.log("没有回调方法");
},data:data="",formdata:formdata=""}) {
    let xml = new XMLHttpRequest();
    let sendData="";
    if(g.toUpperCase()==="GET"){
        to+="?";
        for(let key in data){
            to+=key+"="+data[key]+"&";
        }
        to=to.substring(0,to.length-1);
    }else {
        sendData=formdata;
    }
    xml.open(g, to, tr);
    xml.send(sendData);
    xml.onreadystatechange = function () {
        let one=xml.status.toString().charAt(0);
        if (xml.readyState === 4) {
            if( one === "2" || one ==="3"){
                fun(xml.responseText);
            }
        }
    };
}
