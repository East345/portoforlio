/* ie에서 작동하지 않는 요소들을 주의할 것  ex) let, const, remove...*/

  'use strict'
  /* change & control mvisual */
  var mvisualPrevBtn = document.querySelector('.mvisual_prev');
  var mvisualNextBtn = document.querySelector('.mvisual_next');
  var mvisuals = document.querySelector('.item_group').getElementsByTagName('li');
  var mvisualNum = 0; /* 공유변수 */
  var currentMvisualNum = 0;
  var mvisualCount = document.querySelector('.mvisual_present_count');
  var mvisualControlBars = document.querySelector('.control_sequence').getElementsByTagName('a');
  var setMvisualInterval;
  var mvisualPlay = document.querySelector('.mvisual_play');
  var mvisualStop = document.querySelector('.mvisual_stop');
  var mvisualViewMores = document.getElementsByClassName('view_more');

  mvisualPrevBtn.onclick = function(e) {
    e.preventDefault();
    clearInterval(setMvisualInterval);
    mvisualNum--;
    if (mvisualNum < 0) {
      mvisualNum = mvisuals.length - 1;
    }
    controlMvisual(mvisualNum);
  }
  mvisualPrevBtn.onmouseover = function() {
    clearInterval(setMvisualInterval);
  }
  
  mvisualPrevBtn.onmouseout = function() {
    setMvisualInterval = setInterval(mvisualRolling, 5000);
  }

  mvisualNextBtn.onclick = function() {
    clearInterval(setMvisualInterval);
    mvisualNum++;
    if (mvisualNum > mvisuals.length - 1) {
      mvisualNum = 0;
    }
    controlMvisual(mvisualNum);
  }
  mvisualNextBtn.onmouseover = function() {
    clearInterval(setMvisualInterval);
  }
  
  mvisualNextBtn.onmouseout = function() {
    setMvisualInterval = setInterval(mvisualRolling, 5000);
  }

  for (var i = 0; i < mvisuals.length; i++) {
    mvisualControlBars[i].num = i;
    mvisualControlBars[i].onmouseover = function () {
      clearInterval(setMvisualInterval);
      mvisualNum = this.num;
      controlMvisual(mvisualNum);
    }
    mvisualControlBars[i].onfocus = function () {
      clearInterval(setMvisualInterval);
      mvisualNum = this.num;
      controlMvisual(mvisualNum);
    }
    mvisualViewMores[i].onmouseover = function(){
      clearInterval(setMvisualInterval);
    }
    mvisualViewMores[i].onmouseout = function(){
      setMvisualInterval = setInterval(mvisualRolling, 5000);
    }
  }

  function controlMvisual(mvisualNum) {
    mvisuals[currentMvisualNum].className = "off"
    mvisuals[mvisualNum].className = ""

    mvisualControlBars[currentMvisualNum].className = "control_state";
    mvisualControlBars[mvisualNum].className = "control_state selected";

    mvisualCount.innerHTML = mvisualNum + 1;
    currentMvisualNum = mvisualNum;
  }

  function mvisualRolling() {
    mvisualNum++;
    if (mvisualNum > mvisuals.length - 1) {
      mvisualNum = 0;
    }
    controlMvisual(mvisualNum);
  }

  setMvisualInterval = setInterval(mvisualRolling, 5000);

  mvisualPlay.onclick=function(){
    setMvisualInterval = setInterval(mvisualRolling, 5000);
  }
  mvisualStop.onclick = function(){
    clearInterval(setMvisualInterval);
  }



  /* news list change*/

  var currentNewsNum = 0;
  var newsLists = document.querySelectorAll('.news>li');
  var newsContents = document.getElementsByClassName('obj');

  for(var i = 0; i < newsLists.length; i++){
    newsLists[i].num = i;
    newsLists[i].onclick = function(e){
      e.preventDefault();
      selectNews(this.num);
    }
  }
  function selectNews(newsNum){
    if(currentNewsNum != newsNum){
      newsLists[currentNewsNum].className = ""
      newsContents[currentNewsNum].className = "obj off"

      newsLists[newsNum].className = "over"
      newsContents[newsNum].className = "obj"

      currentNewsNum = newsNum;
    }
  }



  /* change education month */
  var monthPrevBtn = document.querySelector('.month_prev');
  var monthNextBtn = document.querySelector('.month_next');
  var currentMonth = document.querySelector('.present_month');
  var now = new Date();
  var presentMonthNum = now.getMonth() + 1;
  currentMonth.innerHTML = presentMonthNum;

  monthPrevBtn.onclick = function(e){
    e.preventDefault();
    presentMonthNum--;
    if(presentMonthNum < 1){
      presentMonthNum = 12;
    }
    currentMonth.innerHTML = presentMonthNum;
  }
  monthNextBtn.onclick = function(e){
    e.preventDefault();
    presentMonthNum++;
    if(presentMonthNum > 12){
      presentMonthNum = 1;
    }
    currentMonth.innerHTML = presentMonthNum;
  }

