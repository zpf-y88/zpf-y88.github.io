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
	
	
	
//	全选/全部选
	$("#checkbox").onclick = function(){
		$("#checkbox1").checked = "checked";
		$("#checkbox2").checked = "checked";
		$("#checkbox3").checked = "checked";
	}
	$("#nocheckbox").onclick = function(){
		$("#checkbox1").checked = "";
		$("#checkbox2").checked = "";
		$("#checkbox3").checked = "";
		$("#checkbox").checked = "";
	}
	
	
	
	
	
//	移除商品
//	$("#delate1").onclick = function(){
//		alert("确定要删除？");
//		$("#delate1").parentNode.parentNode.remove("tr");
//	}
	var del = $(".delate");
	for (var i=0;i<del.length;i++) {
		del[i].index = i;
		del[i].onclick = function(){
			alert("确定要删除？");
			del[this.index].parentNode.parentNode.remove("tr");
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
//	购物车
	function sum(){
		console.log($("#sold1").innerHTML);
		setInterval(function(){
			
			
			var Num = $(".text");
			
//			for(var i=0;i<btn.length;i++){
//				btn[i].index = i;
//				btn[i]
//			}
//			
			
			
			
			
			
			var num =parseInt($("#text1").value);
			var num1 =parseInt($("#text2").value);
			var num2 =parseInt($("#text3").value);
			var btn = $("button");
			btn[0].onclick = function(){
				num-=1;
				if (num <= 0) {
					num=0;
				}
				console.log(num);
				$("#text1").value = num;
			}
			btn[1].onclick = function(){
				num++;
				$("#text1").value = num;
				console.log(num);
			}
			btn[2].onclick = function(){
				num1-=1;
				if (num1 <= 0) {
					num1=0;
				}
				console.log(num1);
				$("#text2").value = num1;
			}
			btn[3].onclick = function(){
				num1++;
				$("#text2").value = num1;
				console.log(num1);
			}
			btn[4].onclick = function(){
				num2-=1;
				if (num2 <= 0) {
					num2=0;
				}
				console.log(num2);
				$("#text3").value = num2;
			}
			btn[5].onclick = function(){
				num2++;
				$("#text3").value = num2;
				console.log(num2);
			}
			
			var dj1 = parseInt($("#dj1").innerHTML.split("¥")[1]);
			var dj2 = parseInt($("#dj2").innerHTML.split("¥")[1]);
			var dj3 = parseInt($("#dj3").innerHTML.split("¥")[1]);
			$("#sold1").innerHTML = "¥"+(dj1*num);
			$("#sold2").innerHTML = "¥"+(dj2*num1);
			$("#sold3").innerHTML = "¥"+(dj3*num2);
			
			
			var flag1 = $("#checkbox1").checked;
			var flag2 = $("#checkbox2").checked;
			var flag3 = $("#checkbox3").checked;
			var sold1 = parseInt($("#sold1").innerHTML.split("¥")[1]);
			var sold2 = parseInt($("#sold2").innerHTML.split("¥")[1]);
			var sold3 = parseInt($("#sold3").innerHTML.split("¥")[1]);
			if (flag1=== true && flag2 == false && flag3 ==false) {
				$("#sum").innerHTML = $("#sold1").innerHTML;
			}else if(flag1===false  && flag2 == true && flag3 ==false){
				$("#sum").innerHTML = $("#sold2").innerHTML;
			}else if(flag1===false  && flag2 ==false  && flag3 ==true){
				$("#sum").innerHTML = $("#sold3").innerHTML;
			}else if(flag1===true  && flag2 ==true  && flag3 ==true){
				$("#sum").innerHTML = "¥"+(sold1+sold2+sold3);
			}else if(flag1===true  && flag2 ==true  && flag3 ==false){
				$("#sum").innerHTML = "¥"+(sold1+sold2);
			}else if(flag1===true  && flag2 ==false  && flag3 ==true){
				$("#sum").innerHTML = "¥"+(sold1+sold3);
			}else if(flag1===false  && flag2 ==true  && flag3 ==true){
				$("#sum").innerHTML = "¥"+(sold2+sold3);
			}else{
				$("#sum").innerHTML = "";
			}
			
		},10);
	}
	
	
	sum();
	

	
	
	
	
	
	
	
	
	
	
	
	$(".mylist1")[0].onclick = function(){
		if ($(".mylist_content1")[0].style.display == "block") {
			$(".mylist_content1")[0].style.display = "none";
		} else{
			$(".mylist_content1")[0].style.display = "block";
		}
	}
	$(".mylist2")[0].onclick = function(){
		if ($(".mylist_content2")[0].style.display == "block") {
			$(".mylist_content2")[0].style.display = "none";
		} else{
			$(".mylist_content2")[0].style.display = "block";
		}
	}
	$(".mylist3")[0].onclick = function(){
		if ($(".mylist_content3")[0].style.display == "block") {
			$(".mylist_content3")[0].style.display = "none";
		} else{
			$(".mylist_content3")[0].style.display = "block";
		}
	}
	
	
	$("#tuangou").onclick = function(){
		$("#user_info_nav").style.display = "block";
		$("#user_info_tab").style.display = "block";
		$("#userchuzhika").style.display = "none";
		$("#shouhuo").style.display = "none";
		$("#chuzhika").className = "";
		$("#tuangou").className = "lishow";
		$("#wuliudan").className = "";
		console.log($("#chuzhika"));
	}
	$("#chuzhika").onclick = function(){
		$("#user_info_nav").style.display = "none";
		$("#user_info_tab").style.display = "none";
		$("#userchuzhika").style.display = "block";
		$("#shouhuo").style.display = "none";
		$("#chuzhika").className = "lishow";
		$("#tuangou").className = "";
		$("#wuliudan").className = "";
	}
	$("#wuliudan").onclick = function(){
		$("#user_info_nav").style.display = "none";
		$("#user_info_tab").style.display = "none";
		$("#userchuzhika").style.display = "none";
		$("#shouhuo").style.display = "block";
		$("#chuzhika").className = "";
		$("#wuliudan").className = "lishow";
		$("#tuangou").className = "";
	}
	
	
	function sty(obj1,attr1,obj2,attr2){
		obj1.style.display = attr1;
		obj2.style.className = attr2;
	}
	
	
	
	
	
	
	
	
	
	
	
}

//onmouseover函数的封装
function over(x,m){          
	x.style.display = m;
}










































