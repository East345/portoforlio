
$(function(){
  var htmlWrapWidth = $('html').width();
  var htmlWrapHeight = $('html').height();

  $(window).resize(function(){
    htmlWrapWidth = $('html').outerWidth();
    htmlWrapHeight = $('html').outerHeight();
    eachProductWidth = $('.each_product').outerWidth(true);
  })

  var sections = $('.section_');
  var sectionLinkBtns = $('.section_link');
  var scrollLeftPos; 
  var scrollTopPos;
  sectionLinkBtns.removeClass('location_selected');
  sectionLinkBtns.eq(0).addClass('location_selected')

  /* wheel scroll */
  $('html, body').mousewheel(function(e, delta){ //delta - 마우스 휠
    this.scrollLeft -= (delta * htmlWrapWidth);
    e.preventDefault(); //스크롤 다운 방지

    /* after scroll header color change, location btn select*/
    scrollLeftPos = $(document).scrollLeft();
    scrollTopPos = $(document).scrollTop();
    for(var i=0; i < sections.length; i++){
      if(htmlWrapWidth < 768){
        if(scrollTopPos<sections.eq(0).offset().top + sections.eq(0).height()){
          changeheaderNavWhite();
          selectSectionLinkBtn(0);
        }
        if( 0 < i < 4){
          if(scrollTopPos>=sections.eq(i).offset().top){
            changeheaderNavColored();
            selectSectionLinkBtn(i);
          }
        }
        if(i==4){
          if(scrollTopPos>=sections.eq(i).offset().top){
            changeheaderNavWhite();
            selectSectionLinkBtn(i);
          }
        }
        if(i==5){
          if(scrollTopPos>=sections.eq(i).offset().top){
            changeheaderNavColored();
            selectSectionLinkBtn(i);;
          }
        }
        
      }else if(htmlWrapWidth >= 768){
        if(scrollLeftPos<sections.eq(0).offset().left+ sections.eq(0).width()){
          changeheaderNavWhite();
          selectSectionLinkBtn(0);
        }
        if( 0 < i < 4){
          if(scrollLeftPos>=sections.eq(i).offset().left){
            changeheaderNavColored();
            selectSectionLinkBtn(i);
          }
        }
        if(i==4){
          if(scrollLeftPos>=sections.eq(i).offset().left){
            changeheaderNavWhite();
            selectSectionLinkBtn(i);
          }
        }
        if(i==5){
          if(scrollLeftPos==sections.eq(i).offset().left){
            changeheaderNavColored();
            selectSectionLinkBtn(i);
          }
        }
        
      }
    }
  });
  
  /* scroll */
  $(window).scroll(function(){
    scrollLeftPos = $(document).scrollLeft();
    scrollTopPos = $(document).scrollTop();
    for(var i=0; i < sections.length; i++){
      if(htmlWrapWidth < 768){  
        if(scrollTopPos<sections.eq(0).offset().top + sections.eq(0).height()){
          changeheaderNavWhite();
          selectSectionLinkBtn(0);
        }
        if( 0 < i < 4){
          if(scrollTopPos>=sections.eq(i).offset().top){
            changeheaderNavColored();
            selectSectionLinkBtn(i);
          }
        }
        if(i==4){
          if(scrollTopPos>=sections.eq(i).offset().top){
            changeheaderNavWhite();
            selectSectionLinkBtn(i);
          }
        }
        if(i==5){
          if(scrollTopPos>=sections.eq(i).offset().top){
            changeheaderNavColored();
            selectSectionLinkBtn(i);;
          }
        }
      }else if(htmlWrapWidth >= 768){
        if(scrollLeftPos<sections.eq(0).offset().left+ sections.eq(0).width()){
          changeheaderNavWhite();
          selectSectionLinkBtn(0);
        }
        if( 0 < i < 4){
          if(scrollLeftPos>=sections.eq(i).offset().left){
            changeheaderNavColored();
            selectSectionLinkBtn(i);
          }
        }
        if(i==4){
          if(scrollLeftPos>=sections.eq(i).offset().left){
            changeheaderNavWhite();
            selectSectionLinkBtn(i);
          }
        }
        if(i==5){
          if(scrollLeftPos==sections.eq(i).offset().left){
            changeheaderNavColored();
            selectSectionLinkBtn(i);
          }
        }
        
      }
    }
  });

  /* header nav */

  var navBtn = $('.nav_btn');
  var navMenu = $('.menu_nav');
  var navWarpCloseBtn = $('.nav_wrap_close_btn');
  
  var logo = $('.logo > a');
  var languageBtn = $('.language_btn');

  var searchBtn = $('.search_btn');
  var searchWarp = $('.search_wrap');
  var searchWarpCloseBtn = $('.search_wrap_close_btn');

  navBtn.on('click',function(e){
    e.preventDefault();
    navMenu.slideDown( 400, 'linear');
    navBtn.css('display','none');
  })
  navWarpCloseBtn.on('click',function(e){
    e.preventDefault();
    navMenu.stop().slideUp( 400, 'linear' );
    searchBtn.css('display','inline-block');
    navBtn.css('display','inline-block');
  })
  searchBtn.on('click',function(e){
    e.preventDefault();
    searchWarp.stop().slideDown( 500, 'linear');
    searchBtn.css('display','none');
    navBtn.css('display','none');
  })
  searchWarpCloseBtn.on('click',function(e){
    e.preventDefault();
    searchWarp.stop().slideUp( 500, 'linear' );
    searchBtn.css('display','inline-block');
    navBtn.css('display','inline-block');
  })
  

  /* select nav menu */
  var navEachMenuIndex;
  var navEachMenus = $('.menu_list > li').children('a');
  var navSubMenuList = $('.sub_menu_list');
  
  navEachMenus.on('click', function(e){
    e.preventDefault();
    navEachMenus.css('color','#fff');
    navSubMenuList.stop().animate({
      right:'-50vw'
    },400);

    navEachMenuIndex = navEachMenus.index(this);
    navEachMenus.eq(navEachMenuIndex).css('color','#6e6c44');

    navSubMenuList.eq(navEachMenuIndex).stop().animate({
      right:'0px'
    },600);

  }, {passive:false})

  /* product info */
  var productNum=1;
  var productList = $('.product_list');
  var eachProductWidth = $('.each_product').outerWidth(true);
  var presentProductCount = $('.present_product_count');
  var sid;
  sid = setInterval(nextSet, 3000);

  $('.product_prev_btn').on('click', function(e){
    e.preventDefault();
    productList.css('left', '-'+eachProductWidth+'px');
    productList.prepend($('.product_list li:last'));
    productList.animate({
      left:'0'
    }, 1000)

    productNum--;
    if(productNum < 1){
      productNum = 6;
    }
    presentProductCount.text(productNum);
    clearInterval(sid);
    sid = setInterval(prevSet, 3000);
  })
  $('.product_next_btn').on('click', function(e){
    e.preventDefault();
    productList.animate({
      left:'-'+eachProductWidth+'px'
    }, 1000, function(){
      productList.append($('.product_list li:first'));
      productList.css('left','0px');
    })

    productNum++;
    if(productNum > 6){
      productNum = 1;
    }
    presentProductCount.text(productNum);
    clearInterval(sid);
    sid = setInterval(nextSet, 3000);
  })



  function prevSet(){
    $('.product_prev_btn').trigger('click');
  }
  function nextSet(){
    $('.product_next_btn').trigger('click');
  }
  function changeheaderNavColored(){
    logo.css('background-image', 'url(./images/main_logo_color.png)');
    navBtn.children('span').css('backgroundColor', '#222');
    searchBtn.css('background-position', '-47px, 0px');
    languageBtn.css('background-position', '-71px, 0px');
  }
  function changeheaderNavWhite(){
    logo.css('background-image', 'url(./images/main_logo.png)');
    navBtn.children('span').css('backgroundColor', '#fff');
    searchBtn.css('background-position', '0px, 0px');
    languageBtn.css('background-position', '-23px, 0px');
  }

  function selectSectionLinkBtn(selectNum){
    sectionLinkBtns.removeClass('location_selected');
    sectionLinkBtns.eq(selectNum).addClass('location_selected');
  }
  
})

