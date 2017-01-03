//广告设计

window.alert = function(){
	var bottomDiv = document.createElement("div");
		bottomDiv.style.background = "url(img/first/bottom-ad-new_cc36637.png)";
		bottomDiv.style.position = "fixed";
		bottomDiv.style.bottom = "0px";
		bottomDiv.style.left= "50%";
		bottomDiv.style.marginLeft = "-525px";
		bottomDiv.style.width = "1000px";
		bottomDiv.style.height = "192px";
		bottomDiv.style.zIndex ="999";
		document.body.appendChild(bottomDiv);
	var btBg = document.createElement("div");
		btBg.style.backgroundColor = "#000000";
		btBg.style.position = "fixed";
		btBg.style.bottom = "0px";
		try{
			btBg.style.background = "rgba(0,0,0,.6)";
		}catch(e){
			btBg.style.background = "#000";
			btBg.style.filter = "alpha(opacity=60)";   //IE8
		}
		btBg.style.width = "100%";
		btBg.style.height = "144px";
		document.body.appendChild(btBg);
	var btBgimg = document.createElement("div");
		btBgimg.style.background = "url(img/first/bottom-ad-close_58c6470.png)";
		btBgimg.style.position = "fixed";
		btBgimg.style.bottom = "50px";
		btBgimg.style.right = "50%";
		btBgimg.style.marginRight = "-550px";
		btBgimg.style.width = "40px";
		btBgimg.style.height = "40px";
		document.body.appendChild(btBgimg);
		
		btBgimg.onclick = function(){
			bottomDiv.parentNode.removeChild(bottomDiv);
			btBg.parentNode.removeChild(btBg);
			btBgimg.parentNode.removeChild(btBgimg);
		}
}



function getStyle(obj,attr){
	if(obj.currentStyle){
//					IE获得属性值的方法
//					console.log(div[0].currentStyle.width);   //IE
		return obj.currentStyle[attr];
	}else{
//					console.log(getComputedStyle(div[0],false)["width"]);	//计算后的样式
		return getComputedStyle(obj,false)[attr];				//其他浏览器的方法
	}
}



window.onload = function(){
	
//  弹出广告
	alert();
//	get元素封装
	function $(str){
		var reg = /^(\s+)|(\s+)$/g;
		var str = str.replace(reg,"");
		if(str.substring(0,1)==="#"){
			return document.getElementById(str.substring(1));
		}else if(str.substring(0,1)==="."){
			if(document.getElementsByClassName){
				return document.getElementsByClassName(str.substring(1));
				}else{
				var arr = [];
				var all = document.getElementsByTagName("*");
				for(var i=0;i<all.length;i++){
					if(all[i].className === str.substring(1)){
						arr[arr.length] = all[i];
					}
				}
				return arr;
			}
		}else{
			return document.getElementsByTagName(str);
		}
	}
	
//	banner轮播
	var num = 0;
	var index;
	var divImg = $("#nav_right_img").getElementsByTagName("div");
	var btnImg = $("#nav_right_img_btn").getElementsByTagName("a");
	var parent = $("#nav_right_contianer");
	var left = $("#nav_right_img_left");
	var right = $("#nav_right_img_right");
	var timer = setInterval(autoMove,3000);
	
	function autoMove(){
		index = num+1;
		if(index==divImg.length){index=0;} //超出最后一张图片就返回第一张
		move();			//没有对象调用，this指向window
	}
	for(var i=0;i<divImg.length;i++){
		btnImg[i].index = i;				//存储对应<btnImg>的下标
		btnImg[i].onmouseover = function(){   //有对象调用，this指向调用者
			btnImg[num].className = "";
			btnImg[this.index].className = "pointShow";
			divImg[num].className = "";
			divImg[this.index].className = "show";
			num = this.index;
		}
	}
	function move(){
		btnImg[num].className = "";
		btnImg[index].className = "pointShow";
		divImg[num].className = "";
		divImg[index].className = "show";
		num = index;
	}
	parent.onmouseover = function(){
		clearInterval(timer);
	}
	parent.onmouseout = function(){
		timer = setInterval(autoMove,3000)
	}

	left.onclick = function(){
		index = num-1;
		if(index<0){index=divImg.length-1}
		move();
	}
	right.onclick = autoMove;
	
	
	
	$("#big_city").onmouseover = function(){
		over($("#city"),"block");
	}
	$("#city").onmouseover = function(){
		over($("#city"),"block");
	}
	$("#big_city").onmouseout = function(){
		over($("#city"),"none");
	}
	$("#city").onmouseout = function(){
		over($("#city"),"none");
	}
	$("#list").onmouseover = function(){
		over($("#list_xia"),"block");
	}
	$("#list_xia").onmouseover = function(){
		over($("#list_xia"),"block");
	}
	$("#list").onmouseout = function(){
		over($("#list_xia"),"none");
	}
	$("#list_xia").onmouseout = function(){
		over($("#list_xia"),"none");
	}
	$("#shouji").onmouseover = function(){
		over($("#shoujierweima"),"block");
	}
	$("#shoujierweima").onmouseover = function(){
		over($("#shoujierweima"),"block");
	}
	$("#shouji").onmouseout = function(){
		over($("#shoujierweima"),"none");
	}
	$("#shoujierweima").onmouseout = function(){
		over($("#shoujierweima"),"none");
	}
	$("#shangjia").onmouseover = function(){
		over($("#hezuo"),"block");
	}
	$("#hezuo").onmouseover = function(){
		over($("#hezuo"),"block");
	}
	$("#shangjia").onmouseout = function(){
		over($("#hezuo"),"none");
	}
	$("#hezuo").onmouseout = function(){
		over($("#hezuo"),"none");
	}
	$("#guanzhu").onmouseover = function(){
		over($("#weixin"),"block");
	}
	$("#weixin").onmouseover = function(){
		over($("#weixin"),"block");
	}
	$("#guanzhu").onmouseout = function(){
		over($("#weixin"),"none");
	}
	$("#weixin").onmouseout = function(){
		over($("#weixin"),"none");
	}
	$("#nav_left_meishi").onmouseover = function(){
		over($("#meishi_list"),"block");
	}
	$("#nav_left_meishi").onmouseout = function(){
		over($("#meishi_list"),"none");
	}
	$("#nav_left_movie").onmouseover = function(){
		over($("#movie_list"),"block");
	}
	$("#nav_left_movie").onmouseout = function(){
		over($("#movie_list"),"none");
	}
	$("#nav_left_xiuxianyule").onmouseover = function(){
		over($("#xiuxianyule"),"block");
	}
	$("#nav_left_xiuxianyule").onmouseout = function(){
		over($("#xiuxianyule"),"none");
	}
	$("#updown").onmouseover = function(){
		over($("#nav_right_bnttom_2_none"),"block");
		$("#nav_right_bnttom_2_style").style.border = "1px solid #999";
		$("#nav_right_bnttom_2_style").style.height = "200px";
		$("#nav_right_bnttom_2_style").style.height = "200px";
	}
	$("#updown").onmouseout = function(){
		over($("#nav_right_bnttom_2_none"),"none");
		$("#nav_right_bnttom_2_style").style.border = "";
		$("#nav_right_bnttom_2_style").style.height = "200px";
	}
	$("#nav_right_bnttom_2_style").onmouseover = function(){
		over($("#nav_right_bnttom_2_none"),"block");
		$("#nav_right_bnttom_2_style").style.border = "1px solid #999";
		$("#nav_right_bnttom_2_style").style.height = "200px";
		$("#nav_right_bnttom_2_style").style.height = "200px";
	}
	$("#nav_right_bnttom_2_style").onmouseout = function(){
		over($("#nav_right_bnttom_2_none"),"none");
		$("#nav_right_bnttom_2_style").style.border = "";
		$("#nav_right_bnttom_2_style").style.height = "200px";
	}
	$("#body_right_erweima").onmouseover = function(){
		over($("#body_right_img_erweima"),"block");
	}
	$("#body_right_erweima").onmouseout = function(){
		over($("#body_right_img_erweima"),"none");
	}
	
	
	
//	最下面的选项卡
	var hotA = $("#bottom_hotfenlei_nav").getElementsByTagName("a");
	var hotDiv =$("#bottom_hotfenlei_navlist").getElementsByTagName("div");
	var num1 = 0;
	var index1;
	for(var i=0;i<hotDiv.length;i++){
		hotA[i].index1 = i;				//存储对应<btnImg>的下标
		hotA[i].onmouseover = function(){   //有对象调用，this指向调用者
			hotA[num1].className = "";
			hotA[this.index1].className = "bottom_show_bg";
			hotDiv[num1].className = "bottom_noshow";
			hotDiv[this.index1].className = "bottom_show";
			num1 = this.index1;
		}
	}

//回到顶部
	var oBtn=document.getElementById("body_right_top");
	var timer=null;
	oBtn.onclick = function(){
		clearInterval(timer);
		timer=setInterval(function(){
			var oSt = document.documentElement.scrollTop || document.body.scrollTop;
			var speed=Math.floor(-oSt/6);
			
			if(document.body.scrollTop){
				document.body.scrollTop = oSt+speed;
			}else{
				document.documentElement.scrollTop = oSt+speed;
			}
			
			if (oSt==0) {
				clearInterval(timer);
			}
		},30);
	}
	
	
	
	
//	每个商品的地址显示动画
	var addressLi = $(".meishi_list_content_address");
	for (var i=0;i<addressLi.length;i++) {
		addressLi[i].timer;            //为每一个div创建一个属于自己的定时器
		addressLi[i].onmouseover = function(){
			var m = this;
//			m存储this的值
//			{opacity:100,width:400,hight:300}
			movesty(m,{opacity:70});
		}
		addressLi[i].onmouseout = function(){
			var m = this;
			movesty(m,{opacity:0});
		}
	}
	
//	滚轮到了一定程度显示搜索框和侧边栏
	console.log(scrollY);
	function scl(){
		setInterval(function(){
			if(900<=scrollY&&scrollY<=5822){
				over($("#top_search_bg"),"block");
				over($("#body_left"),"block");
			}else{
				over($("#top_search_bg"),"none");
				over($("#body_left"),"none");
			}
		},10)
	}
	scl();
	
	
	
	
//	抢购倒计时
	function Itime(){
		var h = parseInt($("#q_g_pindao_nav_bg_li1").textContent);
		var m = parseInt($("#q_g_pindao_nav_bg_li2").textContent);
		var s = parseInt($("#q_g_pindao_nav_bg_li3").textContent);
		
		setInterval(function(){
			s-=1;
			if (s<0) {
				m-=1;
				s=59;
			}else if(m<0){
				h-=1;
			}else if (h<0) {
				h=1;
				m=59;
				s=59;
			}
			$("#q_g_pindao_nav_bg_li3").textContent = s;
			$("#q_g_pindao_nav_bg_li2").textContent = m;
			$("#q_g_pindao_nav_bg_li1").textContent = h;
		},1000)
	}
	
	Itime();
	
	
	
	
}

//onmouseover函数的封装
function over(x,m){          
	x.style.display = m;
}


//样式改变
function movesty(obj,json,fn){							//fn回调函数
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in json){
			if (attr === "opacity") {
//						处理改变透明度时候的数值
				var icur = parseFloat(getStyle(obj,attr))*100;
			} else{
//						处理改变其他样式时候的数值
				var icur = parseInt(getStyle(obj,attr));
			}
//					除以一个值并按照拉长还是还原对其数值进行上浮还是下浮的舍入
			var speed = (json[attr]-icur)/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
//					speed>0往右移；speed<0往左移
			if (icur != json[attr]) {
				flag = false;
			}
			if (attr === "opacity") {
				obj.style.opacity = (icur+speed)/100;
				obj.style.filter = "alpha(opacity:"+icur+speed+")";
			} else{
				obj.style[attr] = icur + speed + "px";
			}
		}
		if (flag) {
			clearInterval(obj.timer);
//					清除完时间控制器之后，如果后面还有函数，则接着调用
			if(fn){
				fn();
			}
		}
	},30)
}















	
	
	






