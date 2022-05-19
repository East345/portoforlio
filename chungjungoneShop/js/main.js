'use strict'

/* header nav display */

function clickNav(){
  if( $('.all_category_wrap').hasClass('invisible')){
    $('.all_category_wrap').removeClass('invisible');
  }else{
    $('.all_category_wrap').addClass('invisible');
  }
}

$(document).ready(function(){
  $('.depth1_category > li').each(function(){ 
    $(this).mouseover(function(){
      $('.depth2_category_wrap').hide();
      $(this).find('.depth2_category_wrap').show();
    })
    $(this).mouseout(function(){
      $(this).find('.depth2_category_wrap').hide();
    })
  })
  $('.depth2_category_wrap').mouseover(function(){
    $(this).show();
  })
})



/* mvisual banner change */
$(document).ready(function(){
  $('.mvisual_list > li:not(:eq(0))').css('opacity','0.5');
  $('.mvisual_container').css({
    'background-image':'url(images/mvisual_img1.jpg)'
  })
  $('.mvisual_contents > li:gt(0)').hide();


  var mvisualNum = 0;
  var sid; 

  $('.mvisual_list > li').on({
    click : function(e){
      e.preventDefault();
      mvisualNum = $(this).index();
      
      selectMvisual(mvisualNum);
    },

    mouseover:function(){
      clearInterval(sid);
    },

    mouseout:function(){
      clearInterval(sid);
      sid = setInterval(auto, 5000);
    }

  })

  $('.mvisual_contents > li').on({
    mouseover:function(){
      clearInterval(sid);
    },

    mouseout:function(){
      clearInterval(sid);
      sid = setInterval(auto, 5000);
    }
  })

  $('.mvisual_prev_btn').on({
    click: function(){
      mvisualNum--;
      if(mvisualNum < 0){
        mvisualNum = $('.mvisual_list > li').length -1;
      }
      clearInterval(sid);
      selectMvisual(mvisualNum);
    },
    mouseover:function(){
      clearInterval(sid);
    },
    mouseout:function(){
      clearInterval(sid);
      sid = setInterval(auto, 5000);
    }
  })
    
  $('.mvisual_next_btn').on({
    click: function(){
      mvisualNum++;
      if(mvisualNum > $('.mvisual_list > li').length -1){
      mvisualNum = 0;
      }
      clearInterval(sid);
      selectMvisual(mvisualNum);
    },
    mouseover:function(){
      clearInterval(sid);
    },
    mouseout:function(){
      clearInterval(sid);
      sid = setInterval(auto, 5000);
    }
  })
    
    
  function selectMvisual(mvisualNum){
    $('.mvisual_list > li').css('opacity','0.5');
    $('.mvisual_list > li').eq(mvisualNum).css('opacity','1');
    $('.mvisual_container').css({
      'background-image':'url(images/mvisual_img'+ (mvisualNum+1) +'.jpg)'
    })
    $('.mvisual_contents > li').hide();
    if($('.mvisual_contents > li').css('display')=="none"){
      $('.mvisual_contents > li:eq('+(mvisualNum)+')').stop().fadeOut(200).fadeIn(500);
      /* $('.mvisual_contents > li').eq(mvisualNum).css('display','block'); */
    }
  }
  function auto(){
    mvisualNum++;
    if(mvisualNum > $('.mvisual_list > li').length -1){
      mvisualNum = 0;
    }
    selectMvisual(mvisualNum);

    /* $('#mvisual_next_btn').trigger('click') */
  }
  sid = setInterval(auto, 5000);

})


/* box1 sorted products change */
$(document).ready(function(){

  $('.box1_contents_list_wrap:gt(0)').addClass('invisible');
  $('.box1_contents_title_list > li:eq(0)').addClass('overSortTitle');

  $('.box1_contents_title_list > li').on({
    click:function(e){
      e.preventDefault();

      if($('.box1_contents_title_list > li').hasClass('overSortTitle')){
        $('.box1_contents_title_list > li').removeClass('overSortTitle');
        $(this).addClass('overSortTitle');
      }
      if($('.box1_contents_list_wrap').hasClass('invisible')){
        $('.box1_contents_list_wrap').addClass('invisible');
        $('.box1_contents_list_wrap').eq($(this).index()).removeClass('invisible');
      }     
    }
  })
})


/* box2  banner change */

$(document).ready(function(){

  $('.box2_control_bar:eq(0)').css('opacity','1');
  var box2BannerNum = 0;
  var box2sid;

  $('.box2_prev_btn').on({
    click:function(){
      clearInterval(box2sid);
      box2Moving('prev');
    },
    mouseover:function(){
      clearInterval(box2sid);
    },
    mouseout:function(){
      clearInterval(box2sid);
      box2sid = setInterval(box2Moving, 4000, 'next');
    }
  })
  $('.box2_next_btn').on({
    click:function(){
      clearInterval(box2sid);
      box2Moving('next');
    },
    mouseover:function(){
      clearInterval(box2sid);
    },
    mouseout:function(){
      clearInterval(box2sid);
      box2sid = setInterval(box2Moving, 4000, 'next');
    }
  })

  $('.box2_content_list').on({
    mouseover:function(){
      clearInterval(box2sid);
    },
    mouseout:function(){
      clearInterval(box2sid);
      box2sid = setInterval(box2Moving, 4000, 'next');
    }
  })

  $('.box2_control_ps').on('click',function(){
    if($('.box2_control_ps').hasClass('pause')){
      $(this).removeClass('pause');
      $(this).addClass('play')
      clearInterval(box2sid);
    }else{
      $(this).removeClass('play');
      $(this).addClass('pause')
      clearInterval(box2sid);
      box2sid = setInterval(box2Moving, 4000, 'next');
    }
  })

  function box2Moving(dir){
    if(dir == 'next'){
      $('.box2_content_list').append($('.box2_content:first'));
      box2BannerNum++;
      if(box2BannerNum > ($('.box2_content').length)/2  - 1){
        box2BannerNum = 0;
      }
      box2BarControl(box2BannerNum)
    }else{
      $('.box2_content_list').prepend($('.box2_content:last'));
      box2BannerNum--;
      if(box2BannerNum < 0){
        box2BannerNum = ($('.box2_content').length)/2  - 1;
      }
      box2BarControl(box2BannerNum);
    }
  }
  function box2BarControl(box2BannerNum){
    $('.box2_control_bar').css('opacity','0.5');
    $('.box2_control_bar:eq('+ box2BannerNum +')').css('opacity','1'); 
  }
  box2sid = setInterval(box2Moving, 4000, 'next');
})


/* box4  banner change */
$(document).ready(function(){
  $('.box4_control:eq(0)').addClass('over');

  var box4BannerNum=0; 
  var box4sid; 
  
  $('.box4_control').on('click', function(){
    box4BannerNum = $(this).index();
    clearInterval(box4sid);
    box4Moving(box4BannerNum);
    box4sid = setInterval(auto, 5000);
  })
  $('.box4_control_ps').on('click',function(){
    if($('.box4_control_ps').hasClass('pause')){
      $(this).removeClass('pause');
      $(this).addClass('play')
      clearInterval(box4sid);
    }else{
      $(this).removeClass('play');
      $(this).addClass('pause')
      clearInterval(box4sid);
      box4sid = setInterval(auto, 5000);
    }
  })

  function box4Moving(box4BannerNum){
    $('.box4_control').removeClass('over');
    $('.box4_control').eq(box4BannerNum).addClass('over');

    $('.box4_text_list').css({
      top: -(box4BannerNum * 130)+'px'
    })


    $('.box4_container').css({
      'opacity':'0.8',
      'background-image':'url(images/box4_banner'+ (box4BannerNum+1) +'.jpg)'
    }).show().animate({opacity:1})
  }
  function auto(){
    box4BannerNum++;
    if(box4BannerNum > $('.box4_control').length-1) {
      box4BannerNum = 0;
    }
    box4Moving(box4BannerNum);
  }
  box4sid = setInterval(auto, 5000);
})

/* box5  timmer, products change */
function timeCount(){
  var t = new Date();
  var hours = 24 - t.getHours();
  var min = 60 - t.getMinutes();
  var sec = 60 - t.getSeconds();

  //분으로 채워지면 시를 올리기
  if(min == '00'){
    hours = 24 - t.getHours();
  }else{
    hours = 23 - t.getHours();
  }

  //초로 채워지면 분을 올리기
  if(sec == '00'){
    min = 60 - t.getMinutes();
  }else{
    min = 59 - t.getMinutes();
  }

  //1 자리 수일 경우 0 붙이기
  if((hours + '').length == 1){
    hours = '0' + hours;
  }
  if((min + '').length == 1){
    min = '0' + min;
  }
  if((sec + '').length == 1){
    sec = '0' + sec;
  }
  $('.today_timer').html(
    hours + ':' + min + ':' + sec
  )
}
$(document).ready(function(){
  setInterval(timeCount, 1000);
  $('.box5_control_bar:eq(0)').addClass('over');

  var box5BannerNum = 0;
  var box5sid;
  $('.box5_control_bar').on({
    click: function(e){
      e.preventDefault();
      box5BannerNum = $(this).index();
      box5Set(box5BannerNum);
    },
    mouseover: function(){
      clearInterval(box5sid);
    },
    mouseout: function(){
      clearInterval(box5sid);
      box5sid = setInterval(auto, 5000);
    }
  })

  $('.box5_control_ps').click(function(){
    if($(this).hasClass('pause')){
      $(this).removeClass('pause');
      $(this).addClass('play');
      clearInterval(box5sid);
    }else{
      $(this).removeClass('play');
      $(this).addClass('pause');
      clearInterval(box5sid);
      box5sid = setInterval(auto, 5000);
    }
  })

  $('.box5_content').on({
    mouseover: function(){
      clearInterval(box5sid);
    },
    mouseout: function(){
      clearInterval(box5sid);
      box5sid = setInterval(auto, 5000);
    }
  })
  function box5Set(box5BannerNum){
    if($('.box5_right_content').is(':animated') == false){
      $('.box5_control_bar').removeClass('over');
      $('.box5_control_bar:eq('+box5BannerNum+')').addClass('over');
      $('.box5_right_content').animate({
        top:-(box5BannerNum * 783) + 'px'
      },1500)
    }
  }
  function auto(){
    box5BannerNum++;
    if(box5BannerNum > $('.box5_control_bar').length -1) box5BannerNum = 0;
    box5Set(box5BannerNum);
  }
  box5sid = setInterval(auto, 5000);
})

/* box6 brand logo, sort brand products change */

$(document).ready(function(){
  $('.brand_content:gt(0)').hide();

  var brandNameWidth = 159;
  var box6BrandNum = 0;

  $('.brand_name').on('click',function(e){
    e.preventDefault();
    box6BrandNum = $(this).index();
    box6LogoSet(box6BrandNum);
    box6Set(box6BrandNum);
  })

  $('.box6_prev_btn').click(function(e){
    e.preventDefault();
    if($('.brand_name_list').is(':animated')==false){
      $('.brand_name_list').css('left','-'+ (brandNameWidth)+'px');
      $('.brand_name_list').prepend($('.brand_name:last'));
      $('.brand_content_list').prepend($('.brand_content:last'));
      $('.brand_name_list').animate({
        left:'0'
      }, 400)
    }
  })

  $('.box6_next_btn').click(function(e){
    e.preventDefault();
    if($('.brand_name_list').is(':animated')==false){
      $('.brand_name_list').animate({
        left:'-'+(brandNameWidth)+'px'
      }, 400, function(){
        $('.brand_name_list').append($('.brand_name:first'));
        $('.brand_content_list').append($('.brand_content:first'));
        $('.brand_name_list').css('left','0px');
      })
    }
  })

  

  function box6Set(box6BrandNum){
    if($('.brand_content:eq('+box6BrandNum+')').css('display')=='none'){
      $('.brand_content').hide();
      $('.brand_content:eq('+box6BrandNum+')').show();
    }
  }
  function box6LogoSet(box6BrandNum){
    if($('.brand_name:eq('+ box6BrandNum +')').find('img').attr('src').substring($('.brand_name:eq('+ box6BrandNum +')').find('img').attr('src').length-6) != "_h.png"){
      /* 
      console.log($('.brand_name_list').find('img').attr('src)) 를 찾을 경우 첫번째 img src 값만 출력되기 때문에 모든 이미지를 한번에 변경 불가 -> for문 활용
      $('.brand_name_list').find('img').attr('src', $('.brand_log_img').attr('src').replace('_h.png', '.png')); 
      */
      for(var i = 0; i < $('.brand_name').length; i++){
        $('.brand_log_img:eq('+ i +')').attr('src', $('.brand_log_img:eq('+ i +')').attr('src').replace('_h.png', '.png'));
      }
      $('.brand_name:eq('+ box6BrandNum +')').find('img').attr('src', $('.brand_name:eq('+ box6BrandNum +')').find('img').attr('src').replace('.png', '_h.png'));
    }
  }
})

/* footer family site */
$(document).ready(function(){
  $('.family_site_list').css('display','none');
  $('.family_site_btn').on('click',function(e){
    e.preventDefault();
    if($('.family_site_list').css('display') == 'none'){
      $('.family_site_list').css('display','block');
    }else{
      $('.family_site_list').css('display','none');
    }
  })
})

/* floating_menu_wrap(recent_looked, top) */
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 500){
      $('.floating_menu_wrap').fadeIn();
    }else{
      $('.floating_menu_wrap').fadeOut();
    }
  })

  var footerHeight = $('.footer_contianer').outerHeight();
  
  $(window).scroll(function(){
    var scrollT = $(window).scrollTop();
    var val = $(document).height() - $(window).height() - footerHeight;

    if(scrollT >= val){
      $('.floating_menu_wrap').addClass('on');
    }else{
      $('.floating_menu_wrap').removeClass('on');
    }
  })

  $('.scroll_top_btn').click(function(e){
    e.preventDefault();
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  })
  
  $('.recent_looked_btn').click(function(e){
    e.preventDefault();
    if($('.recent_looked_img_container').css('display')=='none'){
      $('.recent_looked_img_container').css('display','block')
    }else{
      $('.recent_looked_img_container').css('display','none')
    }
  })


  /* view three recent looked product img  */
  $('.product').on('click', function(e){
    e.preventDefault();
    var productImgSrc = $(this).find('img').attr('src');
    var productName = $(this).find('.product_name').text();

    if($('.recent_looked_img_container').hasClass('no-data') == true){
      $('.recent_looked_img_container').removeClass('no-data');
      $('.no_looked_text').remove();
    }

    var html = '<a href="">';
    html += '<img class="recent_looked_img" src="' + productImgSrc + '" alt="'+ productName +'">';
    html += '</a>';

    $('.recent_looked_img_container').append(html);
    /* $('.recent_looked_img_container').css('display','block'); */

    if( $('.recent_looked_img').length > 3){
      $('.recent_looked_img_container').find('a:first').remove();
    }
  })
})

