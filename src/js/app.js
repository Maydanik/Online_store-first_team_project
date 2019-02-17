$(document).on('click', '.tabs_nav-link', function(e){
  e.preventDefault();
  var tabId = $(this).attr('href');
  $(this).addClass('active');
  $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
  $(tabId).show(400);
  $(tabId).siblings('.tabs_tab').hide(400);
});

//Burger menu
  $(document).on('click', '.nav-togle', function(){
    $(this).toggleClass('active');
    $(this).next('.navigation').slideToggle(400);
  }); 

$(document).ready(function () {
  if ($('.carousel').length > 0) {
    $('.carousel').slick({
      infinite: true,
      dots: true,
      autoplay: true,
      speed: 1300,
      autoplaySpeed: 3200,
      slidesToShow: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

  if ($('.js_login-popup').length > 0) {
    $('.js_login-popup').magnificPopup({
      items: {
        src: '#popup',
        type: 'inline',
        closeBtnInside: true,
      }
    });
  }
  
  if($('.js_register-popup').length>0){
            $('.js_register-popup').magnificPopup({
                items: {
                    src: '#popup_register',
                    type: 'inline',
                    
                }
              });
              }

  if ($(window).width() < 768) {
    $(document).on('click', '.js_collapse', function(){
      $(this).toggleClass('active');
      $(this).next('.footer_col-main').slideToggle(400);
      $(this).parents('.flex_col').siblings().find('.footer_col-main').slideUp(400);
    });
  }

  if ($('.js_range').length > 0) {
    $(".js_range").ionRangeSlider({
        skin: "round",
        type: "double",
        min: 0,
        max: 1000,
        to: 600,
        prefix: "$",
        hide_min_max: true,

    });
  }

  if($('.js_products-list').length > 0){
    $('.js_products-list').on('click', function(){
      $(this).toggleClass('grid_active');
      $(this).siblings().find('.products_grid-btn').removeClass('grid_active');
      $('.products_grid').removeClass('js_grid-table');
      $('.products_grid').addClass('js_grid-list');
    })
  }

  if($('.js_products-table').length > 0){
    $('.js_products-table').on('click', function(){
      $(this).toggleClass('grid_active');
      $(this).siblings().find('.products_grid-btn').removeClass('grid_active');
      $('.products_grid').removeClass('js_grid-list');
      $('.products_grid').addClass('js_grid-table');
    })
  }
});