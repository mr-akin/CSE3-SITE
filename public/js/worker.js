// JavaScript Document
$("#setPref").click(function(){
	var version='v3';
		var cname="cse3.cf_user_year_pref"+version;
	setCookie(cname,null,-1);
	window.location.replace("./index.html");
});
$(".menuOptions").click(function(){
	var version="v3";
	var cname="_trigger"+version;
	setCookie(cname,"no",1);
});