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
	 //$("body").autoClearfix(true);

	 $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-responsive-collapse").hasClass("navbar-responsive-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });

});

///CLEARFIXXXXXXXXXXX
$.fn.autoClearfix = function(cfloose) {
    var candidates = [];
    $("*", $(this)).filter(function() {
        return $(this).css("float") != "none" && $(this).siblings().length == $(this).siblings().filter(function() {
            return $(this).css("float") != "none";
        }).length && (cfloose ? true : $(this).parent().clone().children().remove().end().text().replace(/(\n|\s)/gm, '') === "");
    }).parent().each(function() {
        $(this).addClass("clearfix");
    });
};
//////////////////


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


/***************************************************************************/

/** PAINT BRUSH CATEGORIES **/

function displayAllPB(){

	$(".synthetic, .pony, .Pallette , .flat, .round").show();

}

$(".idAllBrushes").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	displayAllPB();

});

$(".idsynthetic").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".pony, .Pallette , .flat, .round").hide();
	$(".synthetic").show();

});

$(".idpony").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".synthetic, .Pallette , .flat, .round").hide();
	$(".pony").show();

});

$(".idflat").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".synthetic, .Pallette , .pony, .round").hide();
	$(".flat").show();

});

$(".idround").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".synthetic, .Pallette , .flat, .pony").hide();
	$(".round").show();
});

$(".idpallette").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".synthetic, .pony , .flat, .round").hide();
	$(".Pallette").show();

});


/***************************************************/


/***************************************************************************/

/** ART $ CRAFT CATEGORIES **/

function displayAllArt(){

	$(".dmaterial, .dsheet").show();

}

$(".idAllArt").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	displayAllArt();

});
$(".iddecorative").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".dsheet").hide();
	$(".dmaterial").show();

});
$(".iddecorativeSheets").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".dmaterial").hide();
	$(".dsheet").show();

});



/***************************************************/

/***************************************************************************/

/** SKETCH BOOK CATEGORIES **/

function displayAllArt(){

	$(".A4Size, .A5Size, .A3Size, .butter").show();

}

$(".idAllSF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	displayAllArt();

});

$(".idA4SF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A5Size, .A3Size, .butter").hide();
	$(".A4Size").show();

});

$(".idA5SF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A4Size, .A3Size, .butter").hide();
	$(".A5Size").show();

});

$(".idA3SF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A5Size, .butter, .A4Size").hide();
	$(".A3Size").show();

});

$(".idButterSF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A5Size, .A3Size, .A4Size").hide();
	$(".butter").show();

});

$(".idLargeSF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A5Size, .A4Size, .butter").hide();
	$(".A3Sized").show();

});




/***************************************************/

/***************************************************************************/

/** CANVAS CATEGORIES **/

function displayAllcanvas(){

	$(".board, .pad").show();

}

$(".idAllcanvas").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	displayAllcanvas();

});

$(".idcanvaspad").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".board").hide();
	$(".pad").show();

});

$(".idcanvasboard").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".pad").hide();
	$(".board").show();

});

/***************************************************/


