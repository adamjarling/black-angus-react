const jQuery = window.$;

export const jQueryShowHideNavMenu = () => {
  if (jQuery("body").hasClass("menu-show")) {
    jQuery("body").removeClass("menu-show");
    jQuery("#colorlib-main-nav > .js-colorlib-nav-toggle").removeClass("show");
  } else {
    jQuery("body").addClass("menu-show");
    jQuery("#colorlib-main-nav > .js-colorlib-nav-toggle").addClass("show");
  }
};

export const jQueryBurgerMenu = () => {
  jQuery(".js-colorlib-nav-toggle").on("click", function(event) {
    event.preventDefault();
    jQueryShowHideNavMenu();
  });
};

export const jQueryFlexSlider = () => {
  jQuery("#colorlib-hero .flexslider").flexslider({
    animation: "fade",
    slideshowSpeed: 5000,
    directionNav: true,
    start: function() {
      setTimeout(function() {
        jQuery(".slider-text").removeClass("animated fadeInUp");
        jQuery(".flex-active-slide")
          .find(".slider-text")
          .addClass("animated fadeInUp");
      }, 500);
    },
    before: function() {
      setTimeout(function() {
        jQuery(".slider-text").removeClass("animated fadeInUp");
        jQuery(".flex-active-slide")
          .find(".slider-text")
          .addClass("animated fadeInUp");
      }, 500);
    }
  });
};

export const jQueryFullHeight = () => {
  jQuery(".js-fullheight").css("height", jQuery(window).height());
  jQuery(window).resize(function() {
    jQuery(".js-fullheight").css("height", jQuery(window).height());
  });
};

export const jQueryOwlCarousel = () => {
  var owl = jQuery(".owl-carousel1");
  owl.owlCarousel({
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    items: 1,
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: true,
    smartSpeed: 500,
    autoHeight: true,
    navText: [
      "<i class='icon-arrow-left3 owl-direction'></i>",
      "<i class='icon-arrow-right3 owl-direction'></i>"
    ]
  });
};

export const jQueryWaypoint = () => {
  var i = 0;
  jQuery(".animate-box").waypoint(
    function(direction) {
      if (direction === "down" && !jQuery(this.element).hasClass("animated")) {
        i++;

        jQuery(this.element).addClass("item-animate");
        setTimeout(function() {
          jQuery("body .animate-box.item-animate").each(function(k) {
            var el = jQuery(this);
            setTimeout(
              function() {
                var effect = el.data("animate-effect");
                if (effect === "fadeIn") {
                  el.addClass("fadeIn animated");
                } else {
                  el.addClass("fadeInUp animated");
                }

                el.removeClass("item-animate");
              },
              k * 200,
              "easeInOutExpo"
            );
          });
        }, 100);
      }
    },
    { offset: "85%" }
  );
};
