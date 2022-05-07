$(document).ready(function(){
  
  //search
  $('.search_wrap').css('display', 'none');
  $('#search_btn').on('mouseover',function(e){
    e.preventDefault();
    $('.search_wrap').css('display', 'block');
  })

  $('.search_wrap').on({
      mouseover:function(e){
      e.preventDefault();
      $('.search_wrap').css('display', 'block');
    },
    mouseout:function(e){
      e.preventDefault();
      $('.search_wrap').css('display', 'none');
    }
  })

  //gnb nav
  $('.sub_menu_wrap').hide();
  $('.sub_menu_bg').hide();

  $('.gnb_list > li').on({
    mouseover:function(){
      var gnbIndex = $(this).index();
      $('.sub_menu_wrap').hide();
      $('.sub_menu_bg').hide();
      $('.gnb_list > li').each(function(){
        if(gnbIndex == $(this).index()){
          $(this).find('.sub_menu_wrap').css('display','block');
          $('.sub_menu_bg').css('display','block');
          $(this).children('a').css('color', '#37bbb1');
        }
      })
    },
    mouseout:function(){
      $('.sub_menu_wrap').hide();
      $('.sub_menu_bg').hide();
      $(this).children('a').css('color', '#eee');
    }
  })

  $(window).resize(function(){
    var intViewportWidth = window.innerWidth;
    if(intViewportWidth > 1024){
      $('.gnb_wrap').show();
    }else{
      $('.gnb_wrap').hide();
    }
  })
  $('.menu_toggle_btn').on({
    mouseover:function(e){
    e.preventDefault();
    $('.gnb_wrap').stop().slideToggle('fast');
    },
  });
  $('.gnb_wrap').on({
    mouseover:function(){
      $('.gnb_wrap').css('display', 'block');
    },
    /* mouseout:function(){
      $('.gnb_wrap').css('display', 'none');
    } */
  })

  /* visual_banner bxslider */
  var visualSlider = $('#visual_bxslider').bxSlider({
    auto:true,
    pause: 3500,

    onSlideAfter: function(){
      visualSlider.stopAuto();
      visualSlider.startAuto();
    }
  });
  $('.visual_banner_btn_play').on('click',function(e){
    e.preventDefault();
    visualSlider.startAuto();
  })
  $('.visual_banner_btn_pause').on('click',function(e){
    e.preventDefault();
    visualSlider.stopAuto();
  })

  /* popupZone Banner */

  var popupBannerIndex = 1;
  
  $('.pz_btn_next').on('click',function(e){
    e.preventDefault();
    popupBannerIndex++;
    if(popupBannerIndex > 3) popupBannerIndex =1;
    clearInterval(popupset);
    popupset = setInterval(function(){popupBannerSet() }, 3000)
    changePopupBannerImg(popupBannerIndex);
  })
  $('.pz_btn_prev').on('click',function(e){
    e.preventDefault();
    popupBannerIndex--;
    if(popupBannerIndex < 1) popupBannerIndex =3;
    clearInterval(popupset);
    popupset = setInterval(function(){popupBannerSet() }, 3000)
    changePopupBannerImg(popupBannerIndex);
  })

  $('.popupZone_btn_wrap .pause').on('click',function(e){
    e.preventDefault();
    if($(this).hasClass('pause')==true){
      $(this).removeClass('pause');
      $(this).addClass('play');
      clearInterval(popupset);
    }else{
      $(this).removeClass('play');
      $(this).addClass('pause');
      clearInterval(popupset);
      popupset = setInterval(function(){popupBannerSet() }, 3000)
    }
  })

  var popupset = setInterval(function(){
    popupBannerSet()
  }, 3000)

  function changePopupBannerImg(popupBannerIndex){
    $('.popupZone_banner_img').prop({
      src:'images/popupZone_banner_img' + popupBannerIndex +'.jpg'
    })
  }
  function popupBannerSet(){
    $('.pz_btn_next').trigger('click');
  }
})
