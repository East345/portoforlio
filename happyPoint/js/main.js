
$(function(){

  /* header nav */
  var timeout;
  var subBg = $('<div class=sub_bg></div>');
  $('.header_container').append(subBg);
  $('.nav_menu').on('mouseover',function(){
    $('.header_container').css({
      'backgroundColor':'#fff'
    })
    $('.nav_sub_wrap').slideDown(200);
    clearTimeout(timeout);
    $('.sub_bg').slideDown(200);
  })
  $('.nav_menu').on('mouseout',function(){
    timeout=setTimeout(function(){
      $('.header_container').css({
        'backgroundColor':'transparent'
      })
      $('.nav_sub_wrap').slideUp(200);
      $('.sub_bg').slideUp(200);

    }, 300)
  })
  
  /* right loacation nav */
  var navOffset = $('.header_container').offset().top;
  var headerHeight = $('.header_container').height();
  var box1Offset = $('.box1_container').offset().top - headerHeight;
  var box2Offset = $('.box2_container').offset().top - headerHeight;
  var box3Offset = $('.box3_container').offset().top - headerHeight;
  var box4Offset = $('.box4_container').offset().top -headerHeight*2;
  var locationMark = $('.view_location_nav>ul>li');


  locationMark.click(function(e){
    e.preventDefault();
    var locationMarkIndex = $(this).index();
    var boxSection = $('.box_container').eq(locationMarkIndex);
    var boxOffset = boxSection.offset().top;
    $('html, body').animate({
      scrollTop : boxOffset
    })
  })

  /* scrolling */
  $(window).scroll(function(){
    console.log(headerHeight)
    var scrollPos = $(window).scrollTop();
    if(scrollPos > navOffset){
      $('.header_container').css({
        'position':'fixed'
      })
    }

    if(scrollPos >= box1Offset){
      $('.header_container').css({
        'backgroundColor':'#fff'
      })
      locationMark.removeClass('on');
      locationMark.eq(0).addClass('on');
      $('.box1_icon').css('display','inline-block');
      $('.box1_icon_wrap').addClass('show');
    }
    if(scrollPos >= box2Offset){
      $('.header_container').css({
        'backgroundColor':'transparent'
      })
      locationMark.removeClass('on');
      locationMark.eq(1).addClass('on');
      $('.point_brand_wrap').addClass('ani');

      $('.point_stack_view_wrap > div').each(function(i){
        setTimeout(function(){
          $('.point_stack_view_wrap > div').eq(i).css('opacity','1')
        },490*(i+1))
      })
      $('.point_bling_deco').css('opacity','1'); 
      $('.point_coin_wrap').addClass('show');
    }
    if(scrollPos >= box3Offset){
      $('.header_container').css({
        'backgroundColor':'#fff'
      })
      locationMark.removeClass('on');
      locationMark.eq(2).addClass('on');

      $('.point_use_list').addClass('show');
      $('.point_use_circle_deco').addClass('show');
      $('.point_use_brand_logo').addClass('show');
    }
    if(scrollPos >= box4Offset){
      $('.header_container').css({
        'backgroundColor':'transparent'
      })
      locationMark.removeClass('on');
      locationMark.eq(3).addClass('on');
      $('.point_event_wrap').animate({
        'opacity':'1'
      },3000)
      $('.point_event_icon_wrap').addClass('show');
      $('.point_event_circle_deco').addClass('show');
    }
  })

  /* box1 section */
  
    $('.box1_icon').on({
      mouseover:function(){
        var box1IconIndex = $('.box1_icon').index(this); //같은 레벨에서 내가 몇번째 요소인지 찾을때 index() - 부모요소 기준으로 내가 몇 번째 자식인지, index(this) - 존재하는 모든 box1_icon을 기준으로 몇 번째 인지 
        $('.icon_hover_text').eq(box1IconIndex).stop().animate({
          opacity:'1'
        },300);
        console.log(box1IconIndex)
        $('.box1_img_wrap').css({
          'background':'url(./images/phone_icon_hover'+ (box1IconIndex+1) +'.png)'
        })
      },
      mouseout:function(){
        var box1IconIndex = $('.box1_icon').index(this);
        $('.icon_hover_text').eq(box1IconIndex).stop().animate({
          opacity:'0'
        },50);
        $('.box1_img_wrap').css({
          'background':'url(./images/phone_basic_view.png)'
        })
      }
    })

  /* footer */
  $('form[name="familySiteForm"]').submit(function(){
    var url = $(".family_site_select", this).val();
    window.open(url);
    return false;
  })

})