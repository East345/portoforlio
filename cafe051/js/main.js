const swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  autoplay:{
    delay:3000
  }
});
const swiper2 = new Swiper('.swiper2', {
  
  direction: 'vertical',
  loop: true,

  autoplay:{
    delay:2000
  }

});
$('.touchFlow').touchFlow({
  axis:'x',
  snap:true
})



$(document).ready(function(){

  /* header position*/
  const headerNav = $('.header_');
  const headerNavHeight = headerNav.height();
  $(window).on('scroll',function(){
    if($(window).scrollTop() > headerNavHeight){
      headerNav.css('position','fixed');
    }else{
      headerNav.css('position', 'relative');
    }
  })

  /* header nav */
  const headerNavBtn = $('.header_nav_toggle_btn');
  const navi = $('.header_nav');
  const navCloseBtn = $('.nav_close');
  headerNavBtn.on('click',function(e){
    e.preventDefault();
    navi.animate({
      left:'0'
    },'slow');
  })
  navCloseBtn.on('click',function(e){
    e.preventDefault();
    navi.animate({
      left:'-100vw'
    },'slow');
  })

  /* header alert */
  const headerAlertBtn = $('.alert_btn');
  const headerAlertWrap = $('.alert_wrap');
  const headerAlertCloseBtn = $('.alert_close');
  headerAlertBtn.on('click',function(e){
    e.preventDefault();
    headerAlertWrap.css('display','block');
  })
  headerAlertCloseBtn.on('click',function(e){
    e.preventDefault();
    headerAlertWrap.css('display','none');
  })
})
