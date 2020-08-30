
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.header_bottom').addClass('active');
        } else {
            $('.header_bottom').removeClass('active');
        }
    });
});
