$(document).on('click', '.tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $(this).addClass('active');
    $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).siblings('.tabs_tab').hide(400);
  });

  //Burger menu
  $(document).on('click','.nav-togle',function(){
    $(this).toggleClass('active');
    $(this).next('.navigation').slideToggle(400);
  });



    $(document).ready(function(){

      if($('.js_login-popup').length>0){
      $('.js_login-popup').magnificPopup({
          items: {
              src: '#popup',
              type: 'inline',
              
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


  if($(window).width()<768){
    $(document).on('click', '.js_collapse', function(){
      $(this).next('.footer_col-main').slideToggle(400);
      $(this).parents('flex_col').siblings().find('.footer_col-main').slideUp(400);
    });
  }

  if($('.js_range').length>0){
    $(".js-range-slider").ionRangeSlider();
  }
})
