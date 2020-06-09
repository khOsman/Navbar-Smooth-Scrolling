
$(document).ready(function () {

    // Scrolling Web Page
    $("a").on('click', function () {
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);

    });

    if (window.location.hash) {
        scroll(0, 0);
        setTimeout(function () {
            scroll(0, 0);
        }, 1);
    }

    if (window.location.hash) {

        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top + 'px'
        }, 1000);
    }

});