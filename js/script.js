$(document).ready(function(){
    popUp();
    menu();
    slide();
    // autoSlide();
    contents02tab();
    contents03tab();
    bookSlide();
})

function popUp(){
    // alert('이 사이트는 포트폴리오용 페이지입니다');
    // return false;
    var popUp = $(".popUpContainer");

    popUp.show(0);

    $(".closeBtn").on('click',function(){
        popUp.hide(0);
    })
}

function menu(){
    var mainMenu = $(".mainMenu > li");
    var subMenu = $(".subMenu");

    subMenu.slideUp(0);
    $(".gnbBg").slideUp(0);

    mainMenu.on('mouseenter',function(){
        subMenu.stop().slideDown(300);
        $(".gnbBg").stop().slideDown(300)
    })

    mainMenu.on('mouseleave',function(){
        subMenu.stop().slideUp(300);
        $(".gnbBg").stop().slideUp(300)
    })
}

function slide(){
    var slide = $(".slideList");
    var slideNum = slide.children().size();
    var slideWidth = $(".slideContainer").width();

    slide.css({"width": slideNum * slideWidth, 'left': -slideWidth});
    slide.children().css({"width": slideWidth});

    slide.children().last().prependTo(slide);

    $(".nextBtn").on('click',function(){
        var currentPosition = slide.position().left;

        slide.stop().animate({"left": currentPosition - slideWidth},500,function(){
            slide.children().first().appendTo(slide);
            slide.css({"left":-slideWidth})
        })
    })

    $(".prevBtn").on('click',function(){
        var currentPosition = slide.position().left;

        slide.stop().animate({"left":currentPosition + slideWidth},500,function(){
            slide.children().last().prependTo(slide);
            slide.css({'left':-slideWidth})
        })
    })
}

// function autoSlide(){
//     var slideNum = 0;
//     var slideList = $(".slideList");

//     setInterval(function(){
//         if(slideNum < 2)
//         {slideNum++;
//          slideList.animate({"left":'-=1200'},300)}
//         else{slideNum = 0;
//         slideList.animate({"left":0},300)};
//         // $(".nextBtn").on('click',function(){
//         //     autoSlide
//         // },3000)
//     },3000)
// }

function contents02tab(){
    var hope = $(".tabMenu > li:first-child");
    var rental = $(".tabMenu > li:last-child");

    $(".rental").fadeOut(0);

    hope.on('click',function(){
        $(".rental").fadeOut(200);
        $(".hopeBooks").fadeIn(200);

        return false
    })

    rental.on('click',function(){
        $(".hopeBooks").fadeOut(200);
        $(".rental").fadeIn(200)

        return false
    })
}

function contents03tab(){
    var adult = $(".bookTabMenu > li:first-child");
    var children = $(".bookTabMenu > li:last-child");

    $(".children").hide(0);

    adult.on('click',function(){
        $(".children").fadeOut(200);
        $(".adult").fadeIn(200);

        return false
    })

    children.on('click',function(){
        $(".adult").fadeOut(200);
        $(".children").fadeIn(200);

        return false
    })
}

function bookSlide(){
    var slide = $(".adult");
    var slideNum = slide.children().size();
    var slideWidth = slide.children().width()+100;  //400

    console.log(slideWidth);

    slide.css({"width": slideNum * slideWidth, 'left': -slideWidth});
    slide.children().css({"width": slideWidth});

    slide.children().last().prependTo(slide);

    $(".bookNextBtn").on('click',function(){
        var currentPosition = slide.position().left;

        slide.stop().animate({"left": currentPosition - slideWidth},500,function(){
            slide.children().first().appendTo(slide);
            slide.css({"left":-slideWidth})
        })
    })

    $(".bookPrevBtn").on('click',function(){
        var currentPosition = slide.position().left;

        slide.stop().animate({"left":currentPosition + slideWidth},500,function(){
            slide.children().last().prependTo(slide);
            slide.css({'left':-slideWidth})
        })
    })

    
    var childrenSlide = $(".children");
    var childrenSlideNum = childrenSlide.children().size();
    var childrenSlideWidth = childrenSlide.children().width()+380;  //400

    console.log(childrenSlideWidth);

    childrenSlide.css({"width": childrenSlideNum * childrenSlideWidth, 'left': -childrenSlideWidth});
    childrenSlide.children().css({"width": childrenSlideWidth});

    childrenSlide.children().last().prependTo(childrenSlide);

    $(".bookNextBtn").on('click',function(){
        var currentPosition = childrenSlide.position().left;

        childrenSlide.stop().animate({"left": currentPosition - childrenSlideWidth},500,function(){
            childrenSlide.children().first().appendTo(childrenSlide);
            childrenSlide.css({"left":-childrenSlideWidth})
        })
    })

    $(".bookPrevBtn").on('click',function(){
        var currentPosition = childrenSlide.position().left;

        childrenSlide.stop().animate({"left":currentPosition + childrenSlideWidth},500,function(){
            childrenSlide.children().last().prependTo(childrenSlide);
            childrenSlide.css({'left':-childrenSlideWidth})
        })
    })
}

	// // book slide js
	// var box_l = $(".book_slide .slider ul li").length,
	// 	box_w = $(".book_slide .slider ul li").outerWidth();
	// $(".book_slide .slider ul").css("width", (box_w*box_l) + "px");

	// $(".book_slide .next").click(function(){
	// 	if(!($(".book_slide .slider ul").is(":animated"))){
	// 		$(".book_slide .slider ul").animate({"margin-left": -box_w + "px"}, 500, function(){
	// 			$(".book_slide .slider ul li:first").appendTo($(".slider ul"));
	// 			$(".book_slide .slider ul").css("margin-left","0");
	// 		});
	// 	}
	// });
	// $(".book_slide .prev").click(function(){
	// 	if(!($(".book_slide .slider ul").is(":animated"))){
	// 		$(".book_slide .slider ul li:last").prependTo($(".slider ul"));
	// 		$(".book_slide .slider ul").css("margin-left", -box_w + "px");
	// 		$(".book_slide .slider ul").stop().animate({"margin-left":"0"}, 500);
	// 	}
	// });
	
	// var autoSlider;
	// function autoFun(){
	// 	autoSlider = setTimeout(function(){
	// 		$(".book_slide .next").click();
	// 		autoFun();
	// 	}, 3000);
	// }
	// autoFun();