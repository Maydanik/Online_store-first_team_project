$(document).on('click', '.tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $(this).addClass('active');
    $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).siblings('.tabs_tab').hide(400);
  });

  $(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 3200,
    slidesToShow: 4,
    arrows: false,
    responsive:[
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      }     
    ]
    });

  

  $('.js_login-popup').magnificPopup({
    items: {
      src: '#popup',
      type: 'inline'
    }
  });

  $(document).on('click', '.js_collapse', function(){
    $(this).toggleClass('active');
    $(this).next('.footer_col-main').slideToggle(400);
    $(this).parents('.flex_col').siblings().find('.footer_col-main').slideUp(400);
  });
});