window.addEventListener("DOMContentLoaded",function(ev){
	var itemsDom = $$(".lecturer-item");
	var imgDoms = $$(".imgDom");
	var lecturerNameDoms = $$(".lecturer-name");
	var lecturerTitleDoms = $$(".lecturer-title");
	var lecturerPDoms = $$(".lecturer-p");
	var lecturerPsDom = Array.prototype.slice.call(lecturerPDoms);
	var lecturerTitlesDom = Array.prototype.slice.call(lecturerTitleDoms);
	var lecturerNamesDom = Array.prototype.slice.call(lecturerNameDoms);
	var imgsDom = Array.prototype.slice.call(imgDoms);
	var items = Array.prototype.slice.call(itemsDom);
	items.forEach(function(e,i){
		e.addEventListener('mouseenter',function(ev){
			imgsDom[i].style.transform = "scale(0.6)";
			imgsDom[i].style.top = '-34.6px';
			lecturerNamesDom[i].style.display = 'none';
			e.style.backgroundColor = '#fff';
			lecturerTitlesDom[i].style.display = 'none';
			lecturerPsDom[i].style.top = '50px';
			lecturerPsDom[i].style.height = '168px';
		},false);
		e.addEventListener('mouseleave',function(){
			imgsDom[i].style.transform = "scale(1)";
			imgsDom[i].style.top = '-16.6px';
			lecturerNamesDom[i].style.display = 'block';
			e.style.backgroundColor = 'rgba(255,255,255,.8)';
			lecturerTitlesDom[i].style.display = 'block';
			lecturerPsDom[i].style.top = '0';
			lecturerPsDom[i].style.height = '72px';
		},false);
	});

},false);