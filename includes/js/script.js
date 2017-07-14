$(document).ready(function() {

});

function displayAll(){

	$(".Catridge, .A3Sized, .ivory , .A4Pastel, .A4ruled").show();

}

$("#A4pastel").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".Catridge, .A3Sized, .ivory , .A4ruled").hide();
	$(".A4Pastel").show();

});

$("#All").click(function(){

	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	displayAll();

});

$("#catridge").click(function(){

	
	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");
	
	$(".A4Pastel, .A3Sized, .ivory , .A4ruled").hide();
	$(".Catridge").show();

});

$("#A3size").click(function(){

	
	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A4Pastel, .Catridge, .ivory , .A4ruled").hide();
	$(".A3Sized").show();

});

$("#A4Ruled").click(function(){

	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");
	
	$(".A4Pastel, .Catridge, .A3Sized , .ivory").hide();
	$(".A4ruled").show();

});

$("#Ivory").click(function(){

	
	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	displayAll();
	$(".A4Pastel, .Catridge, .A3Sized , .A4ruled").not(".ivory").hide();
	/*$("ivory").show();*/

});