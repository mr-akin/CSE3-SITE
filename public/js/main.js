// JavaScript Document
	//var cname="cse3.cf_user_year_pref";
console.log(window.location+"");
$(document).ready(function(e){
		console.log("main.js loaded");
	var version='v3';
	var cname="cse3.cf_user_year_pref"+version;
		var trigger="_trigger"+version;

	var url=getCookie(cname);
		//	$("#user-pref-modal").show();
	if(url===null)
	{
		$("#user-pref-modal").modal('show');
	}
	else {
		console.log("trigger:"+getCookie(trigger));
		if(url!="./" && getCookie(trigger)=="yes"){
			console.log("opening url:"+url);
		window.location.replace(url);
		}
		
	}
	setCookie(trigger,"yes",1);
});
$("#setPref").click(function(){
	
		$("#user-pref-modal").modal('show');
});
$(".pref-data").click(function(obj){
		var version='v3';

		var cname="cse3.cf_user_year_pref"+version;
	var baselink="./";
	//="https://cse3.cf/";
  var pagelink=["sem1.html","sem3.html",""];
	var which_year=$(this).attr("id");
	console.log("year="+which_year);
	var url=baselink+pagelink[which_year-1];
	setCookie(cname,url,150);
	$("#user-pref-modal").modal('hide');
	
	if(which_year!=3)
	window.location.replace(url);
});
