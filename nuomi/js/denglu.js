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

window.onload = function(){
	var cos1 = $("#chose");
	var cos2 = $("#dx_login_btn");
	cos1.onclick = function(){
		$("#zh_login").style.display = "none";
		$("#dx_login").style.display = "block";
	}
	cos2.onclick = function(){
		$("#zh_login").style.display = "block";
		$("#dx_login").style.display = "none";
	}
	
	var username = $("#uersname");
	var password = $("#password");
	var checkbox = $("#checkbox");
	var btn = $("#btn");
	
	btn.onclick = function(){
		if(checkbox.checked===true){
			setCookie(username,password,30);
		}else{
			setCookie(username,password,-1);
		}
		console.log(document.cookie)
	}
	
	username.onblur = function(){
		var cookie = decodeURIComponent(document.cookie);
		var str = cookie.split(";");
		for(var i=0;i<str.length;i++){
			if(username.value===str[i].split("=")[0].trim()){
				password.value = str[i].split("=")[1].trim();
			}
		}
	}
	
	function setCookie(key,val,d){
		var now = new Date();
			now.setTime(now.getTime()+d*24*3600*1000);
			document.cookie = key.value+"="+
							  encodeURIComponent(val.value)+
							  ";expires="+
							  now.toGMTString();
	}
	
}




























































