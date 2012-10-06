$(document).ready(function() {

	$("a.fancybox").fancybox({
        "margin":10,"padding":0,"opacity":0,"modal":0,"cyclic":1,"scrolling":"auto","hideOnOverlayClick":1,"hideOnContentClick":0,"overlayShow":1,"overlayOpacity":0.8,"overlayColor":"#000","transitionIn":"elastic","transitionOut":"elastic","titlePosition":"over","autoScale":1,"titleShow":1,"speedIn":300,"speedOut":300,"changeFade":"fast","easingIn":"swing","easingOut":"swing","showCloseButton":1,"showNavArrows":1,"enableEscapeButton":1,

        'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">'+ (title.length ? '' + title : '') +  'Image ' + (currentIndex + 1) + ' of ' + currentArray.length + '</span>';
        },

        'onComplete': function() {
            $("#fancybox-title").hide();
            $("#fancybox-wrap").hover(function() {
                $("#fancybox-title").fadeIn("fast");
            }, function() {
                $("#fancybox-title").fadeOut("fast");
            });
        }
	});

});