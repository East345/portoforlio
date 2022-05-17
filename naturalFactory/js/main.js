'use strict'
window.onload = function(){
  /* display gnb */
  var headerNav = document.querySelector('.nav_');

  document.querySelector('.header_toggle_btn').onclick = function(e){
    e.preventDefault();
    if(headerNav.className =='nav_ none'){
      headerNav.className = 'nav_';
    }else{
      headerNav.className = 'nav_ none';
    }
  }

  var navCloseBtn = document.querySelector('.nav_close_btn');
  navCloseBtn.onclick = function(e){
    e.preventDefault();
    headerNav.className = 'nav_ none';
  }
  var shopNav = document.getElementsByClassName('gnb_list')[0].getElementsByTagName('li')[1];
  var communityNav = shopNav.nextElementSibling.nextElementSibling;
  shopNav.addEventListener('mouseover', function(){
    shopNav.className = 'nav_on';
  });
  communityNav.addEventListener('mouseover',function(){
    communityNav.className = 'nav_on';
  });
  shopNav.addEventListener('mouseout', function() {
    shopNav.className = '';
  });
  communityNav.addEventListener('mouseout', function() {
    communityNav.className = '';
  });

  /* set header */
  var header = document.getElementsByClassName('header_')[0];
  var category = document.querySelector('.section_category');

  var categoryClientRect = category.getBoundingClientRect();
  var categoryRelativeTop = categoryClientRect.top;

  window.addEventListener('scroll', function(){
    if(window.scrollY > categoryRelativeTop){
      header.style.position = 'fixed';
      header.style.top = '0px';
    }else{
      header.style.position = 'relative';
    }
  });

  /* display mypage */
  var userPage = document.getElementsByClassName('user_page')[0];
  var userPageList = document.getElementsByClassName('user_page_sub_list')[0];
  var userPageLists = document.getElementsByClassName('user_page_sub>a');
  var setuserPageTimeOut;
  userPage.addEventListener('mouseover', function(){
    onUserPage();
    clearTimeout(setuserPageTimeOut);
  });
  userPage.addEventListener('mouseout', function() {
    setuserPageTimeOut = setTimeout(offUserPage,300);
  });
for(var i = 0; i < userPageLists.length; i++){
  userPageLists[i].addEventListener('mouseover', function(){
    onUserPage();
    clearTimeout(setuserPageTimeOut);
  });
  userPageLists[i].addEventListener('mouseout', function(){
    setuserPageTimeOut = setTimeout(offUserPage,300);
  });
}
  function offUserPage(){
    userPageList.classList.add('none');
  }
  function onUserPage(){
    userPageList.classList.remove('none');
  }

  /* display search  */
  var searchBtn = document.querySelector('.search_modal_btn');
  var searchModal = document.querySelector('.search_modal_wrap');
  var searchModalCloseBtn = document.querySelector('.search_modal_close');
  
  searchBtn.onclick = function(event){
    event.preventDefault();
    searchModal.classList.remove('none');

  }
  searchModalCloseBtn.onclick = function(event){
    event.preventDefault();
    searchModal.classList.add('none');
  }


  /* display best seller*/
  window.addEventListener('resize', function(){
    var outWindowWidth = window.outerWidth;
    if(outWindowWidth < 768){
      bsLists.style.left = 0;
    }
  });
  var bsListWidth=25;
  var bsLists = document.querySelector('.best_seller_list');
  var bsPrevBtn = document.querySelector('.bs_prev_btn');
  var bsNextBtn = document.querySelector('.bs_next_btn');
  var bsIndex = 0;

  
  bsPrevBtn.onclick = function(e){
    e.preventDefault();
    bsIndex--;
    if(bsIndex < 0){
      bsIndex = 2;
    }
    moveBsLists(bsIndex);
  }
  bsNextBtn.onclick = function(e){
    e.preventDefault();
    bsIndex++;
    if(bsIndex > 2){
      bsIndex = 0;
    }
    moveBsLists(bsIndex);
  }

  function moveBsLists(bsIndex){
    bsLists.style.left = -(bsListWidth * bsIndex) +'%';
  }


  /* control right fixed menu */
  var scrollTopBtn = document.querySelector('.fixed_top');
  var scrollDownBtn = document.querySelector('.fixed_bottom');
  
  scrollTopBtn.onclick=function(){
    window.scrollTo(0,0);
  }
  scrollDownBtn.onclick=function(){
    window.scrollTo(0,document.querySelector('body').scrollHeight);
  }
}

