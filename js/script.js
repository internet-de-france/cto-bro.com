

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