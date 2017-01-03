window.onload = function(){
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
	$("#nav_fenlei").onmouseover = function(){
		over($("#nav_left"),"block");
	}
	$("#nav_fenlei").onmouseout = function(){
		over($("#nav_left"),"none");
	}
	$("#nav_left").onmouseover = function(){
		over($("#nav_left"),"block");
	}
	$("#nav_left").onmouseout = function(){
		over($("#nav_left"),"none");
	}
	
	
	
//	商品数量添加
	
	var num =parseInt($("#text").value);
	function add(){
			var btn = $("button");
			btn[0].onclick = function(){
				num-=1;
				if (num <= 0) {
					num=0;
				}
				console.log(num);
				$("#text").value = num;
			}
			btn[1].onclick = function(){
				num++;
				$("#text").value = num;
				console.log(num);
			}
	}
	add();
	
	
	
	
	
	
	
	
	
	
	
	console.log(scrollY);
	var m = $("#qg_price");
	function fixed(){
		setInterval(function(){
			if(900<scrollY&&scrollY<=9400){
				$("#shangpin_jieshao_right").style.position = "fixed";
				$("#shangpin_jieshao_right").style.top = "0px";
				$("#shangpin_jieshao_right").style.right = "50%";
				$("#shangpin_jieshao_right").style.marginRight = "-500px";
			}else{
				$("#shangpin_jieshao_right").style.position = "";
				$("#shangpin_jieshao_right").style.top = "";
				$("#shangpin_jieshao_right").style.right = "";
				$("#shangpin_jieshao_right").style.marginRight = "";
			}
			
			var right =$("#qg_price");
			right.timer;
			
			if (1300<scrollY) {
				$("#shangpinka").style.position = "fixed";
				$("#shangpinka").style.top = "-30px";
				$("#shangpinka").style.width = "1000px";
				$("#shangpinka").style.background = "#FAFAFA";
				$("#shangpin_jieshao_right").style.top = "50px";
				right.style.display = "block";
				$("#shangpinka").style.width = "1000px";
				$("#shangpinka").style.zIndex = 2;
				
			}else{
				$("#shangpinka").style.position = "";
				$("#shangpinka").style.top = "";
				right.style.display = "none";
				$("#shangpinka").style.background = "#FFFFFF";
				movesty(right,{right:0});
				$("#shangpinka").style.width = "700px";
			}
		},10)
	}
	
	fixed();
	
	
	function movesty(obj,json,fn){							//fn回调函数
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var flag = true;
			for(var attr in json){
				if (attr === "opacity") {
	//						处理改变透明度时候的数值
					var icur = parseFloat(setOpacity(obj,attr))*100;
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
	
	
	
	
	
	function getStyle(obj, attr) {
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	}
	
	
//	shangpinka的点击事件
	var chose = $(".chose");
	var list1 = $("#fendianxinxi_bg");
	var list2 = $("#taocanneirong");
	var list3 = $("#xiaofeitishi");
	var list4 = $("#tuandanxiangqing_bg");
	var list5 = $("#shangjiajieshao_bg");
	var list6 = $("#shangpin_pingjia_bg");
	var list7 = $("#dajiazaishuo_bg");
	var list8 = $("#pinglunfenlei_bg");
	chose[0].onclick = function(){
		list1.style.display = "block";
		list2.style.display = "block";
		list3.style.display = "block";
		list4.style.display = "block";
		list5.style.display = "block";
		list6.style.display = "block";
		list7.style.display = "block";
		list8.style.display = "block";
		chose[0].style.background = "#FA6790";
		chose[1].style.background = "#FFFFFF";
		chose[2].style.background = "#FFFFFF";
		chose[3].style.background = "#FFFFFF";
		chose[0].style.color = "#FFFFFF";
		chose[1].style.color = "#000";
		chose[2].style.color = "#000";
		chose[3].style.color = "#000";
	}
	chose[1].onclick = function(){
		chose[1].style.background = "#FA6790";
		chose[0].style.background = "#FFFFFF";
		chose[2].style.background = "#FFFFFF";
		chose[3].style.background = "#FFFFFF";
		chose[1].style.color = "#FFFFFF";
		chose[0].style.color = "#000";
		chose[2].style.color = "#000";
		chose[3].style.color = "#000";
		list1.style.display = "none";
		list2.style.display = "none";
		list3.style.display = "block";
		list4.style.display = "none";
		list5.style.display = "none";
		list6.style.display = "none";
		list7.style.display = "none";
		list8.style.display = "none";
	}
	chose[2].onclick = function(){
		chose[2].style.background = "#FA6790";
		chose[1].style.background = "#FFFFFF";
		chose[0].style.background = "#FFFFFF";
		chose[3].style.background = "#FFFFFF";
		chose[2].style.color = "#FFFFFF";
		chose[1].style.color = "#000";
		chose[0].style.color = "#000";
		chose[3].style.color = "#000";
		list1.style.display = "none";
		list2.style.display = "none";
		list3.style.display = "none";
		list4.style.display = "none";
		list5.style.display = "block";
		list6.style.display = "none";
		list7.style.display = "none";
		list8.style.display = "none";
	}
	chose[3].onclick = function(){
		chose[3].style.background = "#FA6790";
		chose[1].style.background = "#FFFFFF";
		chose[2].style.background = "#FFFFFF";
		chose[0].style.background = "#FFFFFF";
		chose[3].style.color = "#FFFFFF";
		chose[1].style.color = "#000";
		chose[2].style.color = "#000";
		chose[0].style.color = "#000";
		list1.style.display = "none";
		list2.style.display = "none";
		list3.style.display = "none";
		list4.style.display = "none";
		list5.style.display = "none";
		list6.style.display = "block";
		list7.style.display = "block";
		list8.style.display = "block";
	}
	
	
	
	
	
	
	
	
	
}

//onmouseover函数的封装
function over(x,m){          
	x.style.display = m;
}








































