jQuery(document).ready(function() {
 "use strict";
function onScroll(e) {
	//menu start
    var t = $(document).scrollTop();
    $("ul.navbar-nav li a, ul.menu li a").each(function() {
        var e = $(this);
        var n = $(e.attr("href"));
		var attrofmenu = $(this).attr("href");
		if (attrofmenu.indexOf('#') > -1) {
        if (n.position().top <= t && n.position().top + n.height() > t) {
            $("ul.navbar-nav li a, ul.menu li a").removeClass("active");
            e.addClass("active")
        } else {
            e.removeClass("active")
        }
		}

    })
}
function scrollToID(e, t) {
    var n = 50;
    var r = $(e).offset().top - n;
    var i = $("#main-nav");
    $("html,body").animate({
        scrollTop: r
    }, t);
    if (i.hasClass("open")) {
        i.css("height", "1px").removeClass("in").addClass("collapse");
        i.removeClass("open")
    }
}
//menu end
//article video on safari
    if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1) {
        jQuery(".tr_safari_img").css("background", "url(http://placehold.it/1900x680)")
    }
	//article video on safari end
//js for fixed menu and fixed topbutton
    jQuery(window).load(function() {
        if (jQuery(".teresa_home").hasClass("teresa_home")) {
            var e = jQuery(".mainmenu");
            var t = window.innerHeight;
            jQuery(window).scroll(function() {
                if (!e.isOnScreen() && jQuery(this).scrollTop() > t) {
                    jQuery(".fixedmenu").slideDown(200)
                } else {
                    jQuery(".fixedmenu").slideUp(200)
                }
            });
            jQuery.fn.isOnScreen = function() {
                var e = jQuery(window);
                var t = {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                };
                t.right = t.left + e.width();
                t.bottom = t.top + e.height();
                if (this.offset()) {
                    var n = this.offset();
                    n.right = n.left + this.outerWidth();
                    n.bottom = n.top + this.outerHeight();
                    return !(t.right < n.left || t.left > n.right || t.bottom < n.top || t.top > n.bottom)
                }
            }
        } else {
            var e = jQuery(".mainmenu");
            var t = 320;
            jQuery(window).scroll(function() {
                if (!e.isOnScreen() && jQuery(this).scrollTop() > t) {
                    jQuery(".fixedmenu").slideDown(200)
                } else {
                    jQuery(".fixedmenu").slideUp(200)
                }
            });
            jQuery.fn.isOnScreen = function() {
                var e = jQuery(window);
                var t = {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                };
                t.right = t.left + e.width();
                t.bottom = t.top + e.height();
                if (this.offset()) {
                    var n = this.offset();
                    n.right = n.left + this.outerWidth();
                    n.bottom = n.top + this.outerHeight();
                    return !(t.right < n.left || t.left > n.right || t.bottom < n.top || t.top > n.bottom)
                }
            }
        }
	//js for fixed menu end
//preloader
        $("#status").fadeOut();
        $("#preloader").delay(300).fadeOut("slow")
    });
   //preloader end
	//contact form submtion
    $("#em_submit").on( "click", function() {
        var e = $("#uname").val();
        var t = $("#umail").val();
        var n = $("#subj").val();
        var r = $("#msg").val();
        $.ajax({
            type: "POST",
            url: "ajaxmail.php",
            data: {
                username: e,
                useremail: t,
                useresubject: n,
                mesg: r
            },
            success: function(n) {
                var i = n.split("#");
                if (i[0] == "1") {
                    $("#uname").val("");
                    $("#umail").val("");
                    $("#subj").val("");
                    $("#msg").val("");
                    $("#err").html(i[1])
                } else {
                    $("#uname").val(e);
                    $("#umail").val(t);
                    $("#subj").val(t);
                    $("#msg").val(r);
                    $("#err").html(i[1])
                }
            }
        })
    });
	//contact form submtion end
	//pretty photo
    jQuery("area[data-gal^='prettyPhoto']").prettyPhoto();
    jQuery(".gallery a[data-gal^='prettyPhoto']").prettyPhoto({
        animation_speed: "normal",
        theme: "light_square",
        slideshow: 3e3,
        autoplay_slideshow: false
    });
	//pretty photo end
	//portfolio
    jQuery("#grid").mixitup({
        filterSelector: ".filter-item"
    });
    jQuery(".filter-item").on( "click", function(e){
        e.preventDefault()
    });
	//portfolio end
	//navigation click actions
    $(".scroll-link").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("data-id");
        scrollToID("#" + t, 750)
    });
	//navigation click actions end
	//scroll to top action
    $(".scroll-top").on("click", function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    });
	//scroll to top action end
	// mobile nav toggle
    $("#nav-toggle").on("click", function(e) {
        e.preventDefault();
        $("#main-nav").toggleClass("open")
    });
	// mobile nav toggle end
    var e = window.innerHeight;
    
    jQuery(".tr_tab_slider").bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 360,
        slideMargin: 0,
        pager: false
    });
    jQuery(".tr_single_slider").bxSlider({
        controls: false,
        auto: true,
        pager: false
    });
    jQuery(".tr_fashion_slider_box").bxSlider({
        mode: "fade",
        pager: false,
        controls: false,
        auto: true
    });
	//about us gallery slider
    new Photostack(document.getElementById("photostack-1"), {
        callback: function(e) {}
    });
	//about us gallery slider end
	//goto top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".totop").fadeIn()
        } else {
            $(".totop").fadeOut()
        }
    });
    $(".totop").on( "click", function(){
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    })
	
	$(document).on("scroll", onScroll);
	$('ul.navbar-nav li a[href^="#"], ul.menu li a[href^="#"]').on("click", function(e) {
        e.preventDefault();
        $(document).off("scroll");
        $("ul.navbar-nav li a, ul.menu li a").each(function() {
            $(this).removeClass("active")
        });
        $(this).addClass("active");
        var t = this.hash,
            n = t;
        var $target = $(t);
        $("html, body").stop().animate({
            scrollTop: $target.offset().top + 2
        }, 500, "swing", function() {
            window.location.hash = t;
            $(document).on("scroll", onScroll)
        })
    })
	if (typeof console === "undefined") {
    console = {
        log: function() {}
    }
}
//main slider start
jQuery('.tp-banner').show().revolution(
					{
						dottedOverlay:"none",
						delay:16000,
						startwidth:1170,
						startheight:700,
						hideThumbs:200,
						thumbWidth:100,
						thumbHeight:50,
						thumbAmount:5,
						
						
						navigationType:"bullet",
						navigationArrows:"solo",
						navigationStyle:"preview4",
						
						touchenabled:"on",
						onHoverStop:"on",
						
						swipe_velocity: 0.7,
						swipe_min_touches: 1,
						swipe_max_touches: 1,
						drag_block_vertical: false,
						parallax:"mouse",
						parallaxBgFreeze:"on",
						parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
												
						keyboardNavigation:"off",
						
						navigationHAlign:"center",
						navigationVAlign:"bottom",
						navigationHOffset:0,
						navigationVOffset:20,

						soloArrowLeftHalign:"left",
						soloArrowLeftValign:"center",
						soloArrowLeftHOffset:20,
						soloArrowLeftVOffset:0,

						soloArrowRightHalign:"right",
						soloArrowRightValign:"center",
						soloArrowRightHOffset:20,
						soloArrowRightVOffset:0,
								
						shadow:0,
						fullWidth:"off",
						fullScreen:"on",

						spinner:"spinner4",
						
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,

						shuffle:"off",
						
						autoHeight:"off",						
						forceFullWidth:"off",						
												
												
												
						hideThumbsOnMobile:"off",
						hideNavDelayOnMobile:1500,						
						hideBulletsOnMobile:"off",
						hideArrowsOnMobile:"off",
						hideThumbsUnderResolution:0,
						
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						startWithSlide:0,
					});
					//main slider end
});