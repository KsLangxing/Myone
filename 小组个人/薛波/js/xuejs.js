function xuebo(){
var bh = $('.bh');
var item = $('.xuebo-item')
var _index = 0;
    bh.on('click',function(){
    	_index = $(this).index();
    	var itemTop = item.eq(_index).offset().top;
    	$(document).scrollTop(itemTop); 
    	item.eq(_index).css('box-shadow','0px 0px 10px blue')
    	.siblings('.xuebo-item').css('box-shadow','none');
 });
};xuebo();