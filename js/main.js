if (screen.width <= 699) { document.location = "http://m.inderpreet.info/"; }
$(function() {
// if($(window).width() < 1280){
// 	$('.who').show();
// 	$('#smokeImg0, #smokeImg1').css("left", '0px');
// 	$('.fadein-delay').css("opacity", 1);
// }
    $('[data-toggle="tooltip"]').tooltip({html:true, trigger:"hover"});

    var visited = document.cookie.replace(/(?:(?:^|.*;\s*)visited\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    
    if(visited == 'true'){
        $('.who').fadeIn(100);
        $('#site-name').hide().fadeIn(100);
        $('#backgroundImg, #smokeImg0, #smokeImg1').hide();
        setTimeout(function(){
            $(".fadein-delay").each(function(index) {
                $(this).delay(100*(3-index)).animate({opacity: 1}, {duration: 800, queue:true});
            });
            $('#backgroundImg').fadeIn(500);
            //$('.who').fadeIn(1300).animate({left: "0px"}, {duration:1200, queue:false});
            $('#smokeImg0').fadeIn(800).animate({left: "0px"}, {duration:1000, queue:false});
        }, 400);
        setTimeout(function(){
            $('#smokeImg1').fadeIn(1300).animate({left: "0px"}, {duration:1000, queue:false});
            //$('[href="javascript:homeClicked()"]').transition({scale:1.2, delay:700 /*, 'font-weight': 400*/}, 2000);
        }, 650);
        setTimeout(() => {
            $('[href="javascript:homeClicked()"]').addClass("current-nav", 200);
        }, 1500)
    }
    else if (!$("*").hasClass("STOP-ANIM")){
        $('.who').fadeIn(1700);
        $('#site-name').hide().fadeIn(1700);
        $('#backgroundImg, #smokeImg0, #smokeImg1').hide();
        setTimeout(function(){
            $(".fadein-delay").each(function(index) {
                $(this).delay(200*(3-index)).animate({opacity: 1}, {duration: 1500});
            });
            $('#backgroundImg').fadeIn(1000);
            //$('.who').fadeIn(1300).animate({left: "0px"}, {duration:1200, queue:false});
            $('#smokeImg0').fadeIn(1300).animate({left: "0px"}, {duration:1500, queue:false});
        }, 1300);
        setTimeout(function(){
            $('#smokeImg1').fadeIn(2000).animate({left: "0px"}, {duration:1500, queue:false});
            //$('[href="javascript:homeClicked()"]').transition({scale:1.2, delay:850, easing:'easeInOutBack' /*, 'font-weight': 400*/}, 2500);
        }, 2100);
        setTimeout(() => {
            $('[href="javascript:homeClicked()"]').addClass("current-nav", 200);
        }, 3750)
    } 
    else{
        $('.who').show();
        $('#smokeImg0, #smokeImg1').css("left", '0px');
        $('.fadein-delay').css("opacity", 1);
    }
    $('.linkimg').each(function(index) {
            $(this).delay(300*(index)).animate({bottom: '0px'}, {duration: 2000,queue:false}).fadeIn(2500);
    });
    document.cookie = "visited=true";
    
});

function homeClicked(){
    if(!$('#me').hasClass("current")){
        $('section.current').fadeOut(500).delay(500).removeClass("current");
        $('a.current-nav').removeClass('current-nav');
        $('#me').delay(500).fadeIn(500).addClass("current");
        $('[href="javascript:homeClicked()"]').addClass("current-nav");
    }
}

function mediaClicked(){
// 	if(!$('#media-group').hasClass("current")){
        //$('li>a').not('[href="javascript:homeClicked()"]').transition({scale:1}, 1300);
        //$('[href="javascript:homeClicked()"]').transition({scale:1.2}, 1300, 'easeInOutBack');
// 		$('section.current').fadeOut(500).delay(500);
// 		$('section.current').removeClass("current");
// 		$('#media-group').delay(500).fadeIn(500);
// 		$('#media-group').addClass("current");
// 	}
}

function linksClicked(){
    if(!$('#links-group').hasClass("current")){
        $('section.current').fadeOut(500).delay(500).removeClass("current");
        $('a.current-nav').removeClass('current-nav');
        $('#links-group').delay(500).fadeIn(500).addClass("current");
        $('[href="javascript:linksClicked()"]').addClass("current-nav");
    }
}

function workClicked(){
    if(!$('#work-group').hasClass("current")){
        $('section.current').fadeOut(500).delay(500).removeClass("current");
        $('a.current-nav').removeClass('current-nav');
        $('#work-group').delay(500).fadeIn(500).addClass("current");
        $('[href="javascript:workClicked()"]').addClass("current-nav");
    }
}

$('[href="javascript:mediaClicked()"]').on({
    mousedown: () => {$('[href="javascript:mediaClicked()"]').transition({scale:0.9}, 500, 'ease');},
    mouseup: () => {$('[href="javascript:mediaClicked()"]').transition({scale:1.0}, 500, 'ease');}
});

$('.link').on({
    mouseenter: () => {$('#'+$(this).attr('id')+'Img').addClass('blacknwhiteLinkImg', 6000, "ease");},
    mouseleave: () => {$('#'+$(this).attr('id')+'Img').removeClass('blacknwhiteLinkImg', 6000, "ease");}
});

// if(typeof(localStorage.setVisit)=='undefind' || localStorage.setVisit==''){
// 	localStorage.setVisit='yes';
// }