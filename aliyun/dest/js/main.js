	var btn = document.querySelectorAll(".btn");
var contents = document.querySelectorAll(".nav-list");

var t =new TabView(btn,contents);

var libtn = document.querySelectorAll(".libtn");
var proList = document.querySelectorAll(".product-contant");
var p = new TabView(libtn,proList);
var nbtn = document.querySelectorAll(".nbtn");


var navbg = document.querySelector(".navbg");
var nbtn = document.querySelectorAll('.nbtn');
navbg.onmouseleave  = function(){
	for (var i=0;i<btn.length;i++) {
		contents[i].classList.remove('disBlock');
		btn[i].classList.remove('active');
	}
}
for (let i=0;i<nbtn.length;i++) {
	nbtn[i].onmouseover  = function(){
		for (var j=0;j<btn.length;j++) {
			contents[j].classList.remove('disBlock');
			btn[j].classList.remove('active');
		}
	}
	
}

var selectSix = document.querySelectorAll(".six-btn");
var contentSix = document.querySelectorAll(".six-contents");

for(let i=0;i<selectSix.length;i++){
	selectSix[i].onclick = function(){
		for(var j=0;j<selectSix.length;j++){
			selectSix[j].classList.remove('selectBtn');
			contentSix[j].classList.remove('disBlock');
		}
		selectSix[i].classList.add('selectBtn');
		contentSix[i].classList.add('disBlock')
	}
}

var picLi = document.querySelectorAll(".picLi");
var img1 = document.querySelectorAll(".pic1");
var img2 = document.querySelectorAll(".pic2");
picLi.onmouseover = function(){
	img1.classList.add("disNone");
	img2.classList.add("disBlock");
}
picLi.onmouseout = function(){
	img2.classList.remove("disBlock");
	img1.classList.remove("disNone");
}
for (let i=0;i<picLi.length;i++) {
	picLi[i].onmouseover = function(){
		img1[i].classList.add("disNone");
		img2[i].classList.add("disBlock");
	}
	picLi[i].onmouseout = function(){
		img2[i].classList.remove("disBlock");
		img1[i].classList.remove("disNone");
	}
}

var video = document.querySelector(".videoLive");
video.onclick = function(){
	alert();
}
window.alert = function(){
	var bottomDiv = document.createElement("div");
		bottomDiv.style.background = "rgba(0,0,0,0.5)";
		bottomDiv.style.position = "fixed";
		bottomDiv.style.top = "50%";
		bottomDiv.style.left= "50%";
		bottomDiv.style.marginLeft = "-350px";
		bottomDiv.style.marginTop = "-250px";
		bottomDiv.style.width = "700px";
		bottomDiv.style.height = "410px";
		bottomDiv.style.zIndex ="10";
		document.body.appendChild(bottomDiv);
		
		btnHtml = "<a class='videoBtn'; style='cursor:pointer;width:20px;height:20px;background:#28d0e9;position:fixed;top:50%;right:50%;margin-top:-245px;margin-right:-355px;color:#fff;text-align:center;z-index:1000;'>×";
		btnHtml += "</a>";
		bottomDiv.innerHTML = btnHtml;
	var play = document.createElement("video");
		play.style.position = "fixed";
		play.style.top = "50%";
		play.style.left= "50%";
		play.style.marginLeft = "-350px";
		play.style.marginTop = "-230px";
		play.style.width = "700px";
		play.style.height = "400px";
		play.width = "700";
		play.height = "500";
		play.autoplay = "autoplay";
		play.controls = "controls";
		play.style.zIndex ="12";
		document.body.appendChild(play);
		
		playHtml = "<source src='video/《Dota2》疑似新英雄孙悟空预告_超清_高清.mp4' type='video/mp4'>";
		playHtml += "</source>";
		
		play.innerHTML = playHtml;
		
		var vtn = document.querySelector(".videoBtn");
		vtn.onclick = function(){
			bottomDiv.parentNode.removeChild(bottomDiv);
			play.parentNode.removeChild(play);
		}
}
function TabView(btns,contents){
	var _this = this;
	this.btns = btns;
	this.contents = contents;
	this.len = this.btns.length;
	for(var i=0;i<this.len;i++){
		this.btns[i].index = i;
		this.btns[i].onmouseover = function(){
			_this.tab(this);
		};
	}
}
TabView.prototype.tab = function(obj){
	var _index = obj.index;
	for(var j=0;j<this.len;j++){
		this.btns[j].classList.remove('active');
		this.contents[j].classList.remove('disBlock');
	}
	obj.classList.add('active');
	this.contents[_index].classList.add('disBlock');
}


