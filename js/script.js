$(document).ready(function(){

	//$("#target1").ready(function(){
		$("#target1").css("background-color","green");
	//});

	$(".list-item").css("background-color", "red");

	$("section").css("background-color", "blue");

	$("#child1").parent().css("background-color", "green");

	$("#child1").siblings().css("background-color", "blue");

});