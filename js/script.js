
/*
$(function() {
    var siteWidth = $('meta[name=website-width]').attr('content');
    function doResize() {
        var viewportWidth = $(window).width();
        if(viewportWidth > 480 && viewportWidth < siteWidth) {
            $('body').css({
              'transform': 'scale(' + (viewportWidth / 1200) + ')',
              'transform-origin': '0 0',
            })
        }
        else {
            $('body').css({
              'transform': '',
              'transform-origin': '',
            })
        }
    }
    if(siteWidth) {
        $(window).resize(doResize);
        doResize();
    }
});
*/
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PHXFR45');