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

function displayAllSF(){

	$(".A4Size, .A5Size, .A3Size, .butter, .Big , .small , .imperial").show();

}

$(".idAllSF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	displayAllSF();

});

$(".idA4SF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A5Size, .A3Size, .butter, .Big , .small , .imperial").hide();
	$(".A4Size").show();

});

$(".idA5SF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A4Size, .A3Size, .butter, .Big , .small , .imperial").hide();
	$(".A5Size").show();

});

$(".idA3SF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A5Size, .butter, .A4Size, .Big , .small , .imperial").hide();
	$(".A3Size").show();

});

$(".idButterSF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A5Size, .A3Size, .A4Size, .Big , .small , .imperial").hide();
	$(".butter").show();

});

$(".idLargeSF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A5Size, .A4Size, .butter, .A3Size , .small , .imperial").hide();
	$(".Big").show();

});

$(".idsmallSF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A5Size, .A4Size, .butter, .A3Size , .Big , .imperial").hide();
	$(".small").show();

});

$(".idImperialSF").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

	$(".A5Size, .A4Size, .butter, .A3Size , .small , .Big").hide();
	$(".imperial").show();

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

/*$("#ibSellers").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

      console.log(this);

      $(".scrap, .artset, ,canvasP, .paint ").hide();
      $(".multi, .sketch, .notebook").show();
	

});

$("#iallProducts").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

      console.log(this);

	$(".scrap, .canvasP, .artset, .multi, .sketch , .paint , .notebook").show();


});

$("#inewLaunched").click(function(){

	
	 $(this).siblings("a").removeClass("active");
      $(this).addClass("active");

      console.log(this);

	
    $(".scrap, .canvasP, .artset, .multi, .sketch ").hide();
	$(".paint , .notebook").show();

});*/

$(".idcontact").click(function(){

	
	
	 $(".contactInformation").siblings("div").removeClass("active");
      $(".contactInformation").addClass("active");
  // $('#tab2 div').trigger('click');
  $('.nav-tabs a:last').tab('show') 
      console.log(this);


});

// $(".idcontactInfo").click(function(){

	
// // 	console.log("CLICKED");
// // 	$(document).ready(function() {
// //    var hash = window.location.hash;
// //    console.log(hash);

// //    // if (hash != "")
// //    //     $('#tabs a[href="' + hash + '"]').tab('show');
// //    // else
// //    //     $('#tabs a:first').tab('show');
// //    $(".contactInformation").siblings("div").removeClass("active");
// //       $(".contactInformation").addClass("active");
// //   // $('#tab2 div').trigger('click');
// //   $('.nav-tabs a:last').tab('show') 
// //       console.log(this);
// // });

//   //grabs the hash tag from the url
//   var hash = window.location.hash;
//   //checks whether or not the hash tag is set
//   if (hash != "") {
//     //removes all active classes from tabs
//     $('#tabs ul').each(function() {
//       $(this).removeClass('active');
//     });
//     $('#my-tab-content div').each(function() {
//       $(this).removeClass('active');
//     });
//     //this will add the active class on the hashtagged value
//     var link = "";
//     $('#tabs li').each(function() {
//       link = $(this).find('a').attr('href');
//       if (link == hash) {
//         $(this).addClass('active');
//       }
//     });
//     $('#my-tab-content div').each(function() {
//       link = $(this).attr('id');
//       if ('#'+link == hash) {
//         $(this).addClass('active');
//       }
//     });
//   }

// });


$(".idLocation").click(function(){

	console.log("CLICK");
	 $(".contactMap").siblings("div").removeClass("active");
      $(".contactMap").addClass("active");
      $('.nav-tabs a:first').tab('show') 
      console.log(this);

});
