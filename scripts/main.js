$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  AOS.init();


  // Sidebar Functionality
  $("#menuOpen").click(function() {
    $("#menuOpen i").toggleClass('ion-md-menu ion-md-close');
    $(".sidebar").toggleClass('hide show');
  });

  $(window).click(function() {
    if ($("#menuOpen i").hasClass('ion-md-close')) {
      $("#menuOpen i").toggleClass('ion-md-close ion-md-menu');
      $(".sidebar").toggleClass('show hide');
    }
  });

  $('#menuOpen').click(function(event) {
    event.stopPropagation();
  });

  $(document).scroll(function() {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

  // Products Carousel

  $('#productsCarousel').slick({
    slidesToShow: 1,
    fade: true,
    speed: 500,
    cssEase: 'linear',
    appendArrows: $('.arrow-container'),
    nextArrow: '<i class="icon ion-ios-arrow-forward"></i>',
    prevArrow: '<i class="icon ion-ios-arrow-back"></i>',
  })

  // Centered Carousel
  $('.testimonals-carousel').slick({
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    responsive: [{
      //       breakpoint: 768,
      //       settings: {
      //         centerMode: true,
      //         centerPadding: '40px',
      //         slidesToShow: 3
      //       }
      //     },
      //     {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }]
  });
  // Continous Carousel
  $('.partners-carousel').slick({
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  });
});
