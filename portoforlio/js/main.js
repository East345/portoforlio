'use strict'
$(document).ready(function(){

  $('.gnb_').hide();

  /* header nav */
  $('.nav_toggle_btn').on('click',function(e){
    e.preventDefault();
    $('.gnb_').slideToggle();
    $('.nav_toggle_btn').toggleClass('btn_clicked');
  })
  $('.nav_menu').on('click', function(e){
    $('.gnb_').slideUp(400);
    $('.nav_toggle_btn').toggleClass('btn_clicked');
  })
  var headerNav = $('.header_');
  var headerNavHeight = headerNav.height();
  $(window).on('scroll',function(){
    if($(window).scrollTop() > headerNavHeight * 3){
      headerNav.css('position','fixed');
    }else{
      headerNav.css('position','relative');
    }
  })

  /* select nav menu */
  $('.nav_list > li > a').on('click', function(){
    $('.gnb_').slideToggle();
    $('.nav_toggle_btn').toggleClass('btn_clicked');
  })


  /* visual view control */
  var visualArea = $('.visual_wrap');
  var visualAreaWidthHalf = $('.visual_wrap').outerWidth() / 2;
  var visualList = $('.visual_list');
  var pageCode;
  var visualNum=1;
  visualArea.on({
    click:function(event){
      
      pageCode = event.pageX - visualArea.offset().left;    
      if(pageCode > visualAreaWidthHalf){
        visualNum++;
        if(visualNum > 2) visualNum = 1;
        visualList.stop().animate({
          left:'-100%'
        },1000,function(){
          visualList.append($('.visual_list .each_visual:first'));
          visualList.css('left','0px');
        });

      }else{
        visualNum--;
        if(visualNum < 1) visualNum = 2;
        visualList.css('left','-100%');
        visualList.prepend($('.visual_list .each_visual:last'));
        visualList.stop().animate({
          left:'0'
        }, 1000);
        
      }
      $('.visual_present_page').text(visualNum);
    },
    mouseenter:function(){
      visualArea.mousemove(function(event){
        pageCode = event.pageX - visualArea.offset().left;
        if($(window).innerWidth()>768){
          if(pageCode > visualAreaWidthHalf){
            $('html').css({'cursor':'url(./images/next.png), auto'});
          }if(pageCode <= visualAreaWidthHalf){
            $('html').css({'cursor':'url(./images/back.png), auto'});
          }
        }
        
      })
    },
    mouseout:function(){
      $('html').css({'cursor':'default'});
    }
  })

  

  /* scroll Animation */
  var saTriggerMargin = 80;
  var saElementList = $('.sa');

  var doScrollAni = function(){
    for(var i  = 0; i < saElementList.length; i++){
      if(saElementList.hasClass('show')=== false){
        if(window.innerHeight > saElementList[i].getBoundingClientRect().top + saTriggerMargin){
            saElementList.addClass('show')
        }
      }
    }
  }

  window.addEventListener('scroll', doScrollAni);


  /* greet section mode control */
  $('.day_mode_btn').on('click',function(e){
    e.preventDefault();
    $('.day_mode_btn').addClass('mode_on');
    $('.night_mode_btn').removeClass('mode_on');
    $('body').css(
      {
        'backgroundColor':'#fff',
        'color':'#222'
      }
    );
    $('.logo > a > img').prop({
      src:'images/logo.png'
    })
    $('.nav_toggle_btn > span').css('backgroundColor', '#222');
    $('.sec_greet .inner').css('border-color', '#222');
    $('.add_sprout').removeClass('text_o');  
    $('.sun_img').prop({
      src:'images/sun_day_mode.png'
    })
    $('.work_link_wrap > a').css('color', '#222');
    $('.work_link_wrap > a').on({
      mouseover : function(){
        $(this).css('color', '#ff8e32');
      },
      mouseout : function(){
        $(this).css('color', '#222');
      }
    })
  })

  $('.night_mode_btn').on('click',function(e){
    e.preventDefault();
    $('.night_mode_btn').addClass('mode_on');
    $('.day_mode_btn').removeClass('mode_on');
    $('body').css(
      {
        'backgroundColor':'#5c5851',
        'color':'#fff'
      }
    );
    $('.logo > a > img').prop({
      src:'images/logo_dark_mode.png'
    })
    $('.nav_toggle_btn > span').css('backgroundColor', '#fff');
    $('.sec_greet .inner').css('border-color', '#fff');

    $('.about_summary').css('color', '#222');
    $('.contact_text').css('color', '#222');
    $('.add_sprout').addClass('text_o');
    $('.sun_img').prop({
      src:'images/sun_night_mode.png'
    })
    $('.work_link_wrap > a').css('color', '#fff');
    $('.work_link_wrap > a').on({
      mouseover : function(){
        $(this).css('color', '#ff8e32');
      },
      mouseout : function(){
        $(this).css('color', '#fff');
      }
    })
  })


  /* work section */

  const workSortBtns = $('.work_sort_btn_wrap > button');
  const workProjectsContainer = $('.work_wrap');
  const workProjects = document.querySelectorAll('.work');

  workSortBtns.on('click',function(e){
    e.preventDefault();
    workSortBtns.removeClass('selected');
    $(this).addClass('selected');

    workProjectsContainer.addClass('workSortingAni');

    const sort = e.target.dataset.sort;
    if(sort == null){
      return;
    }
    setTimeout(function(){
      for(var i=0; i < workProjects.length;i++ ){
        if(sort == workProjects[i].dataset.type || sort == '*'){
          workProjects[i].classList.remove('invisible');
        }else{
          workProjects[i].classList.add('invisible');
        }
      }
      workProjectsContainer.removeClass('workSortingAni');
    }, 300)

  })
})