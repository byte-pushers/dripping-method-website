/* =============================================
|   |   |   |   Navigation
=================================================*/

/* Show & Hide White Navigation */
$(function () {

        // show/hide nav on page load
        showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {
        if( $(window).scrollTop() > 50 ) {

            // Show White nav
            $("nav").addClass("white-nav-top");
        } else {

            // Hide White nav
            $("nav").removeClass("white-nav-top");
        }
    }
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about #products, and etc.
        var sectiion_id= $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(sectiion_id).offset().top -64
        },1250, "easeInOutExpo");

    });
});
