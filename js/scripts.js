$("a[href^='#']").on("click", function(e)  {

    e.preventDefault();

        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000);
});

$(window).on('scroll', function() {

    var scrolled = $(window).scrollTop(),
        firstSection = $("#home").offset().top;

    if (scrolled > firstSection) {
        $("#scroll-top").fadeIn();
    } else $("#scroll-top").fadeOut();
});

$("#scroll-top").on("click", function(e)  {

    e.preventDefault();

    $("body, html").animate({
        scrollTop: 0
    }, 1000);

});
