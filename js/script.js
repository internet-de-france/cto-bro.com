
function testScroll() {
    var scroll = $('html').scrollTop();
    if(scroll > 100) {
        document.body.classList.add('scrolled');
        document.body.classList.remove('not-scrolled');
    }
    else {
        document.body.classList.remove('scrolled');
        document.body.classList.add('not-scrolled');
    }
    // close the menu
    $('#hamburger-check').attr('checked', false);
    
    // apply scroll with silex offset due to body transform
    $fixedElements.each(function($obj) {
        console.log($(this), $(this).get(0))
        var scrollNew = (scroll + $(this).get(0).offsetTop) / window.silex.resizeRatio;
        $(this).get(0).$el.css({
            'top': window.silex.resizeRatio === 1 ? '' : scrollNew + 'px',
            'position': 'fixed'
        });
    });
}
var fixedElements = $([]);
$(function() {
    // store all fixed elements with their initial top position
    $fixedElements = $('.fixed').map(function(el) { 
        return {
            offsetTop: $(this).offset().top,
            $el: $(this)
        };
    });
    // init scroll and listeeners
    window.addEventListener('scroll', testScroll);
    testScroll();
    // init lang as a class on the body
    var lang = $('html').attr('lang');
    $('body').addClass('page-lang-' + lang);
})
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PHXFR45');