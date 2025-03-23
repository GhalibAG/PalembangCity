$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        if ($(this).scrollTop() > $nav.height()) {
           $nav.addClass("scrolled");
           $nav.removeClass("navbar-light");
           $nav.addClass("navbar-dark");
        }
        else {
           $nav.removeClass("scrolled");
              $nav.removeClass("navbar-dark");
                $nav.addClass("navbar-light");
        }
    });
});

$(document).ready(function(){
    $("#testimonialCarousel").carousel({
      interval: 1000
    });
  });