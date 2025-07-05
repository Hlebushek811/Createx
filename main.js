$(function () {
  var mixer = mixitup('.direction_list', {
});

  $(".team_slider").slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    waitForAnimate: false,
    responsive:
    [
      {
        breakpoint: 1100,
        settings: {
        slidesToShow: 3,
         },
      },
      {
        breakpoint: 750,
        settings: {
        slidesToShow: 2,
         },
      },
      {
        breakpoint: 550,
        settings: {
        slidesToShow: 1,
        draggable: true,
         },
      },
    ],
  });
  $('.team_slider-arrow-prev').on("click", function (e) {
    e.preventDefault()
  $(".team_slider").slick("slickPrev");
  })

  $('.team_slider-arrow-next').on("click", function (e) {
    e.preventDefault()
  $(".team_slider").slick("slickNext");
  })

  $('.testimonials_slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials_dots'),
    responsive:
    [
      {
        breakpoint: 700,
        settings: {
        
         },
      },
    ]
  })

  $('.testimonils_prev').on("click", function (e) {
    e.preventDefault()
  $(".testimonials_slider").slick("slickPrev");
  })

  $('.testimonils_next').on("click", function (e) {
    e.preventDefault()
  $(".testimonials_slider").slick("slickNext");
  })

$(function () {
  $('.programm_acc-link').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('programm_acc-link--active');
  });
});

var hashTagActive = "";
$(".header_nav-list a, .header_top-button, .footer_top-col a, .footer_bottom a").on("click touchstart", function (event) {
    if (this.hash !== "" && hashTagActive != this.hash) {
        event.preventDefault();
        var offset = 180;
        var targetOffset = $(this.hash).offset().top - offset;
        var dest = Math.max(0, targetOffset);
        $('html,body').animate({
            scrollTop: dest
        }, 1000, 'swing');
        hashTagActive = this.hash;
    }
});
  
$(document).ready(function () {
  function updateBurgerFollow() {
    if ($(window).scrollTop() > 0 && !$('.header_top-burger').hasClass('header_top--opens')) {
      $('.burger').addClass('burger--follow');
    } else {
      $('.burger').removeClass('burger--follow');
    }
  }

  updateBurgerFollow();
  $(window).on('scroll', updateBurgerFollow);
  $('.burger, .header_nav-list a').on('click', function (event) {
    event.preventDefault();
    $('.header_top-burger').toggleClass('header_top--opens');
    $('.overlay').toggleClass('overlay--show');
  });
  $('.overlay').on('click', function () {
    $('.header_top-burger').removeClass('header_top--opens');
    $('.overlay').removeClass('overlay--show');
  });
})

$('.footer_top-title').on('click', function () {
  $(this).next().slideToggle()
})
});
