$(document).ready(function() {

	/** as soon as the toggle thing looses focus **/
	// $("#navbar-collapse").blur(function (event){

	// 	var screenWidth = window.innerWidth;
	// 	console.log(screenWidth);
	// 	if(screenWidth < 768)
	// 	{
	// 		$("#collapse-menu").collapse('hide');
	// 	}
	// });

	 $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-responsive-collapse").hasClass("navbar-responsive-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });

});

/** MULTI USE SHEETS CATEGORIES **/

function displayAllSheets(){

	$(".Catridge, .A3Sized, .ivory , .A4Pastel, .A4ruled, .others, .designed").show();

}

$(".idA4pastel").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".Catridge, .A3Sized, .ivory , .A4ruled, .others, .designed").hide();
	$(".A4Pastel").show();

});

$(".idAll").click(function(){

	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	displayAllSheets();

});

$(".idcatridge").click(function(){

	
	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");
	
	$(".A4Pastel, .A3Sized, .ivory , .A4ruled, .others, .designed").hide();
	$(".Catridge").show();

});

$(".idA3size").click(function(){

	
	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A4Pastel, .Catridge, .ivory , .A4ruled, .others, .designed").hide();
	$(".A3Sized").show();

});

$(".idA4Ruled").click(function(){

	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");
	
	$(".A4Pastel, .Catridge, .A3Sized , .ivory, .others, .designed").hide();
	$(".A4ruled").show();

});

$(".idIvory").click(function(){

	
	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	displayAllSheets();
	$(".A4Pastel, .Catridge, .A3Sized , .A4ruled, .others, .designed").not(".ivory").hide();
	/*$("ivory").show();*/

});

$(".idothers").click(function(){

	
	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A4Pastel, .Catridge, .ivory , .A4ruled, .A3Sized, .designed").hide();
	$(".others").show();

});

$(".iddesign").click(function(){

	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");
	
	$(".A4Pastel, .Catridge, .A3Sized , .ivory, .others, .A4ruled").hide();
	$(".designed").show();

});


/***************************************************************************/

/** SCRAP BOOKS CATEGORIES **/


function displayAllScrapBooks(){

	$(".ruled, .plain").show();

}

$(".idAllScrapBooks").click(function(){

	$(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	displayAllScrapBooks();

});

$(".idA4ruled").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".plain").hide();
	$(".ruled").show();

});

$(".idA4plain").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".ruled").hide();
	$(".plain").show();

});

/***************************************************/