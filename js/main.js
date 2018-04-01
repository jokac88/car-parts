$(document).ready(function () {
	$(".carousel").carousel({
		interval: 4000,
		pause: 'false',
		fade: 'true'
	});
});

$(document).ready(function () {
	setTimeout(function () {
		$('#pop-up').show("slow");
	}, 3000);
	$("#btn-close").click(function () {
		$("#pop-up").hide("slow");
	});
});

function initMap() {
	// your code
}

function openNav() {
	document.getElementById("mySidenav").style.width = "70%";
	document.body.style.overflowY = "hidden";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.body.style.overflowY = "auto";
}

//$(document).ready(function () {
//	$('#content').click(function (e) {
//		$('.sidenav').addClass('side-nav-hide');
//	});
//});

$("#leftside-navigation .sub-menu > a").click(function (e) {
	$("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
		e.stopPropagation()
})

$(document).ready(function () {
	var width = $("#item-1").width();
	$("#btn-left").click(function () {
		var scrollPosition = $("#top-items").scrollLeft();
		var scroll = scrollPosition - width;
		$("#top-items").animate({
			scrollLeft: scroll
		}, 800);
		if (scrollPosition === 0) {
			$("#btn-left").prop("disabled", true);
		} else {
			$("#btn-right").prop("disabled", false);
		};
	});
	$("#btn-right").click(function () {
		$("#btn-left").prop("disabled", false);
		var scrollPosition = $("#top-items").scrollLeft() + 0.5;
		var scroll = scrollPosition + width;
		$("#top-items").animate({
			scrollLeft: scroll
		}, 800);
		var widthScroll = $("#top-items").prop("scrollWidth") - $("#top-items").width();;
		if (scroll >= widthScroll) {
			$("#btn-right").prop("disabled", true);
		};
	});
});

$(document).ready(function () {
	$(".custom-select.arrow").click(function () {
		$(this).toggleClass("custom-select-arrow");
	});
	$(".custom-select.triangle").click(function () {
		$(this).toggleClass("custom-select-triangle");
	});
	$(".product").click(function () {
		$(this).toggleClass("product-focus");
	});
});

$(document).ready(function () {
	$("#inlineRadio1").click(function () {
		$("#company-name").fadeOut(500);
		$("#company-name input").prop("required", false);
	});
	$("#inlineRadio2").click(function () {
		$("#company-name").fadeOut(500);
		$("#company-name input").prop("required", false);
	});
	$("#inlineRadio3").click(function () {
		$("#company-name").fadeIn(500);
		$("#company-name input").prop("required", true);
	});
});

$(document).ready(function () {
	$("#shipping-check").click(function () {
		if ($(this).attr("aria-expanded") === "false") {
			$("#first-address input").prop("disabled", true);
			$("#first-address select").prop("disabled", true);
		} else {
			$("#first-address input").prop("disabled", false);
			$("#first-address select").prop("disabled", false);
		};
	});
});

//$(document).ready(function () {
//	$("#product-dropdown").click(function () {
//		$("#dropdown-hover").toggleClass("dropdown-hover-show");
//		$("#product-dropdown a").toggleClass("product-dropdown-a");
//		$(".fa-caret-down").toggleClass("product-dropdown-icon");
//	});
//});

$(document).ready(function () {
	$("#product-dropdown").mouseenter(function () {
		$("#dropdown-hover").addClass("dropdown-hover-show");
		$("#product-dropdown a").css("color", "#00AFEF");
		$(".fa-caret-down").css("transition", ".3s");
		$(".fa-caret-down").css("transform", "rotate(180deg)");
	});
	$("#dropdown-hover").mouseleave(function () {
		$("#dropdown-hover").removeClass("dropdown-hover-show");
		$("#product-dropdown a").css("color", "#FFFFFF");
		$(".fa-caret-down").css("transition", ".3s");
		$(".fa-caret-down").css("transform", "rotate(0deg)");
	});
	$(".nav-link").mouseenter(function () {
		$("#dropdown-hover").removeClass("dropdown-hover-show");
		$("#product-dropdown a").css("color", "#FFFFFF");
		$(".fa-caret-down").css("transition", ".3s");
		$(".fa-caret-down").css("transform", "rotate(0deg)");
	});
});

$(document).ready(function () {
	$("#type").on('change', function () {
		var type = $("#type option:selected").val();
		if (type != "") {
			$("#year").prop("disabled", false);
		} else {
			$("#year").prop("disabled", true);
			$("#make").prop("disabled", true);
			$("#model").prop("disabled", true);
			$("#engine").prop("disabled", true);
			$("#btn-search-vehicle").prop("disabled", true);
		}
	});
	$("#year").on('change', function () {
		var year = $("#year option:selected").val();
		if (year != "") {
			$("#make").prop("disabled", false);
		} else {
			$("#make").prop("disabled", true);
			$("#model").prop("disabled", true);
			$("#engine").prop("disabled", true);
			$("#btn-search-vehicle").prop("disabled", true);
		}
	});
	$("#make").on('change', function () {
		var make = $("#make option:selected").val();
		if (make != "") {
			$("#model").prop("disabled", false);
		} else {
			$("#model").prop("disabled", true);
			$("#engine").prop("disabled", true);
			$("#btn-search-vehicle").prop("disabled", true);
		}
	});
	$("#model").on('change', function () {
		var model = $("#model option:selected").val();
		if (model != "") {
			$("#engine").prop("disabled", false);
		} else {
			$("#engine").prop("disabled", true);
			$("#btn-search-vehicle").prop("disabled", true);
		}
	});
	$("#engine").on('change', function () {
		var engine = $("#engine option:selected").val();
		if (engine != "") {
			$("#btn-search-vehicle").prop("disabled", false);
		} else {
			$("#btn-search-vehicle").prop("disabled", true);
		}
	});
});

$(document).ready(function () {
	$("#seeMore").click(function () {
		$("#seeMore[aria-expanded='false']").html("See less");
		$("#seeMore[aria-expanded='true']").html("See more");
	});
});

$(".add-vehicle").click(function () {
	$('html, body').animate({
		scrollTop: $("#search-vehicle").offset().top - 50
	}, 1000);
	setTimeout(function () {
		$('#search-vehicle').addClass("border border-warning");
	}, 1200);
	$("#search-vehicle").click(function () {
		$(this).removeClass("border border-warning");
	});
});

$(document).ready(function () {
	$(".category #checkAllCategory").click(function () {
		$(".category .form-check-input").prop('checked', $(this).prop('checked'));
	});
	$(".brand #checkAllBrand").click(function () {
		$(".brand .form-check-input").prop('checked', $(this).prop('checked'));
	});
});

$(document).ready(function () {
	$(".switch-button-background").click(function () {
		$(".switch-button-button").toggleClass("checked");
	});
});

$(document).ready(function () {
	$("#btn-seeMore-Category").click(function () {
		if ($(".seeMore-Category.collapse").hasClass("show")) {
			$("#btn-seeMore-Category").html("See more");
		} else {
			$("#btn-seeMore-Category").html("See less");
		};
	});
	$("#btn-seeMore-Brand").click(function () {
		if ($(".seeMore-Brand.collapse").hasClass("show")) {
			$("#btn-seeMore-Brand").html("See more");
		} else {
			$("#btn-seeMore-Brand").html("See less");
		};
	});
});

$(document).ready(function () {
	$(".btn.btn-expand").click(function () {
		if ($(this).hasClass("collapsed")) {
			$(this).html('-');
		} else {
			$(this).html('+');
		};
	});
});

$(document).ready(function () {
	$(".listView").click(function () {
		$(".listView").addClass("activeView");
		$("#listView").addClass("show");
		$(".gridView").removeClass("activeView");
		$("#gridView").removeClass("show");
	});
	$(".gridView").click(function () {
		$(".gridView").addClass("activeView");
		$("#gridView").addClass("show");
		$(".listView").removeClass("activeView");
		$("#listView").removeClass("show");
	});
});

$(document).ready(function () {
	if ($("#back-to-top").length) {
		var scrollTrigger = 300, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$("#back-to-top").addClass("show");
				} else {
					$("#back-to-top").removeClass("show");
				}
			};
		backToTop();
		$(window).on("scroll", function () {
			backToTop();
		});
		$("#back-to-top").on("click", function (e) {
			e.preventDefault();
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
		});
	}
});


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '300px;',
		width: '100%',
		videoId: 'DvA4O3jdD6o',
		//		events: {
		//			'onReady': onPlayerReady,
		//			'onStateChange': onPlayerStateChange
		//		}
	});
}

//function onPlayerReady(event) {
//	event.target.playVideo();
//}
//
//var done = false;
//
//function onPlayerStateChange(event) {
//	if (event.data == YT.PlayerState.PLAYING && !done) {
//		setTimeout(stopVideo, 6000);
//		done = true;
//	}
//}
//
//function stopVideo() {
//	player.stopVideo();
//}


function myFunction() {
	var x = document.getElementById("password");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

$(document).ready(function () {
	$("#cart-show").click(function () {
		$("#cart").show("slow");
	});
	$("#btn-closeCart").click(function () {
		$("#cart").hide("slow");
	});
	$("#btn-removeItem").click(function () {
		$("#item").css("visibility", "hidden");
	});
});


//$(document).ready(function () {
//	var quantityCount = 0;
//	$("#btn-addToCart").click(function () {
//			$("#quantity option:selected").change(function () {
//				var quantity = parseInt($(this).val());
//				quantityCount += quantity;
//				$("#cart-quantity").text("Cart " + "(" + quantityCount + ")");
//			});
//		})
//		.trigger("change");
//});
