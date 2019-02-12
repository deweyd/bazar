$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});



	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);




// $(window).scroll(function(){                              // отслеживаем событие
//     if ( $(window).$(".spoiler-ul").length >= 2 ){                   // ставим условие
//         $('.spoiler-ul').css("overflow-y", "scroll");
//     }
// });










$(document).ready(function () {
    $('.navigation__block1').click(function () {
//        $('.arrow').css('background', 'url("../../img/sprite1.png") -5px -10px');
        $(this).toggleClass("active");
                // $('.spoiler-ul').scroll();

        // $( ".spoiler-ul" ).css('overflow-y', 'scroll');
    });
});


$(document).ready(function() {
    $('.spoiler-body').css({'display':'none'});
    $('.spoiler-body1').css({'display':'none'});
    $('.arrow').click(function(){
        $(this).next('.spoiler-body').slideToggle(500);
        $(this).next('.spoiler-body1').slideToggle(500);
    });
});
$('.hot-slider').slick(
    {
        dots: true,
        arrows: true,
        // prevArrow: $('.prev__'),
        // nextArrow: $('.next__'),
        appendDots: $('.slid-dots'),
        autoplay: true,
        autoplaySpeed: 10000


    }
);

$('.slider-furniture').slick(
    {
        dots: true,
        arrows: true,
        // prevArrow: $('.prev__'),
        // nextArrow: $('.next__'),
        appendDots: $('.slid-dots_1'),
        autoplay: true,
        autoplaySpeed: 3000

    }
);
$('.slider-furniture1').slick(
    {
        dots: true,
        arrows: true,
        // prevArrow: $('.prev__'),
        // nextArrow: $('.next__'),
        appendDots: $('.slid-dots1'),
        autoplay: true,
        autoplaySpeed: 3000

    }
);
$('.slider-furniture2').slick(
    {
        dots: true,
        arrows: true,
        // prevArrow: $('.prev__'),
        // nextArrow: $('.next__'),
        appendDots: $('.slid-dots1'),
        autoplay: true,
        autoplaySpeed: 3000

    }
);
$('.slider-furniture3').slick(
    {
        dots: true,
        arrows: true,
        // prevArrow: $('.prev__'),
        // nextArrow: $('.next__'),
        appendDots: $('.slid-dots1'),
        autoplay: true,
        autoplaySpeed: 3000

    }
);
$('.slider-furniture4').slick(
    {
        dots: true,
        arrows: true,
        // prevArrow: $('.prev__'),
        // nextArrow: $('.next__'),
        appendDots: $('.slid-dots1'),
        autoplay: true,
        autoplaySpeed: 3000

    }
);
$('.brand-block').slick(
    {
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.arrow-block__prev'),
        nextArrow: $('.arrow-block__next'),
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]

    }
);
$('.slid-cl').slick(
    {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        appendDots: $('.slid-dots3')


    }
);
$('.blog-slid').slick({
    dots: true,
    appendDots: $('.slid-dots2'),
    autoplay: true,
    autoplaySpeed: 5000
});
// $('.blog-flex').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     dots: true,
//     appendDots: $('.slid-dots2'),
//     autoplay: true,
//     autoplaySpeed: 3000
// });



$('.gallery-slid').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.gallery-slid2'
});
$('.gallery-slid2').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.gallery-slid',
    arrows: true,
    prevArrow: $('.arrow-block__prev'),
    nextArrow: $('.arrow-block__next'),
    focusOnSelect: true,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        }
    ]
});
$('.client-sl1').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.client-sl2'
});
$('.client-sl2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.client-sl1',
    arrows: true,
    prevArrow: $('.arrow-block__prev'),
    nextArrow: $('.arrow-block__next'),
    focusOnSelect: true,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000
});
$('.slider-sh').slick(
    {
        dots: true,
        appendDots: $('.slid-dots_'),
        autoplay: true,
        autoplaySpeed: 5000

    }
);
$('.slider-chopper').slick({
    infinite: true,
    arrows: true,
    prevArrow: $('.arrow__prev'),
    nextArrow: $('.arrow__next'),
    autoplay: true,
    autoplaySpeed: 5000

});
$('.shop-slid').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.shop-slid2'
});
$('.shop-slid2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.shop-slid',
    arrows: true,
    prevArrow: $('.arrow-block__prev-shop'),
    nextArrow: $('.arrow-block__next-shop'),
    focusOnSelect: true,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000
});
$('.getting-started').countdown('2019/12/24').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
        + '<span><span>%-d</span> <b>DAYS</b></span> '
        + '<span><span>%H</span> <b>HRS</b></span> '
        + '<span><span>%M </span><b>MINS</b></span>  '
        + '<span><span>%S</span>  <b>SECS</b></span> '));
});


$("#range").ionRangeSlider({
    hide_min_max: true,
    keyboard: true,
    min: 0,
    max: 5000,
    from: 1000,
    to: 4000,
    type: 'double',
    step: 1,
    prefix: "$",
    grid: true
});



