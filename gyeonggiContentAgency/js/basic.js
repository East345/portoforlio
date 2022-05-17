'use strict'
/* view header intro language list */
var languageBtn = document.querySelector('.language_btn');
var languageWrap = document.querySelector('.intro_language_wrap');
var languageItem = document.querySelectorAll('.intro_language_wrap > li > a');
var languageLastItem = languageItem[3];

languageBtn.onclick = function (e) {
  e.preventDefault();
  if (languageWrap.className == 'intro_language_wrap off') {
    languageWrap.className = 'intro_language_wrap';
  } else {
    languageWrap.className = 'intro_language_wrap off';
  }
}
languageLastItem.onblur = function(){
  languageWrap.className = 'intro_language_wrap off'; 
}


/* hover header nav */
var currentNavNum = 0;
var navbarLists = document.querySelectorAll('.nav_item');
var navbarItems = document.querySelectorAll('.nav_item > a');
var subMenus = document.getElementsByClassName('sub_menu');
var lastSubItem = document.getElementsByClassName('last_sub_item');
var setNavOffTimeOut;


for (var i = 0; i < navbarLists.length; i++) {
  navbarLists[i].num = i;
  navbarItems[i].num = i;
  subMenus[i].num = i;  
  navbarLists[i].onmouseover = subMenus[i].onmouseover = navbarItems[i].onfocus = function () {
    selectNavMenu(this.num);
    clearTimeout(setNavOffTimeOut);   
  } 
  navbarLists[i].onmouseout = function () {
    setNavOffTimeOut = setTimeout(offNav, 200);
  }
  lastSubItem.onblur = function(){
    navbarLists[currentNavNum].className = "nav_item"
    subMenus[currentNavNum].className = "sub_menu off"
  }
}


function selectNavMenu(num) {
  if (num != currentNavNum) { 
    navbarLists[currentNavNum].className = "nav_item"
    subMenus[currentNavNum].className = "sub_menu off"

    navbarLists[num].className = "nav_item nav_on"
    subMenus[num].className = "sub_menu"

    currentNavNum = num;
  }
  if (num == currentNavNum) {
    navbarLists[currentNavNum].className = "nav_item"
    subMenus[currentNavNum].className = "sub_menu off"

    navbarLists[num].className = "nav_item nav_on"
    subMenus[num].className = "sub_menu"

    currentNavNum = num;
  }
}

function offNav() {
  navbarLists[currentNavNum].className = "nav_item"
  subMenus[currentNavNum].className = "sub_menu off"
}

/* show search visual */
var searchBtn = document.querySelector('.hm_searh_btn');
var searchBox = document.querySelector('.search_wrap');
var searchInnerBtn = document.querySelector('.search_inner_btn');

searchBtn.onclick = searchBtn.onfocus = function (e) {      
  e.preventDefault();
  if (searchBox.className == 'search_wrap off') {
    searchBox.className = 'search_wrap'
  } else {
    searchBox.className = 'search_wrap off'
  }
}
searchInnerBtn.onblur = function(){
  searchBox.className = 'search_wrap off'
}


  /* view relate site at footer */
  var siteMenus = document.querySelector('.site_menu');
  var siteBtn = document.querySelector('.relate_site_btn');
  siteBtn.onclick = function(e){
    e.preventDefault();
    viewRelateSite();
  }
  function viewRelateSite(){
    if(siteMenus.className == 'site_menu off'){
      siteMenus.className = 'site_menu'
    }else{
      siteMenus.className = 'site_menu off'
    }
  }
