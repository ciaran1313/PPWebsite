////////////////////////
var scrollState = 0; //
////////////////////////////////////////////////////////////////////
///  scrollState 0 is when the topScroll is under 350
///  scrollState 1 is when the topScroll is between 350 and 600
///  scrollState 2 is when the topScroll is greater than 600
///////////////////////////////////////////////////////////////////

//some shorthand:
function scrl(){
  return $(window).scrollTop();
}

function setScrollState0(){
  scrollState = 0;
  $("#links").css({
    "position" : "relative",
    "background-color" : ""
  });
  $("#links").offset({top: 350, left: 0});
  $("#splash").height(150);
}

function setScrollState2(){
  $("#links").css({
    "position" : "fixed",
    "background-color" : "rgba(20,20,20,1)"
  });
  $("#links").offset({top: scrl(), left: 0});
  $("#splash").height(150);
}

function resetScrollState(){
  if (scrollState != 0 && scrl() <= 350){
    setScrollState0();
  }else if (scrl() > 350 && scrl() < 600){
    if (scrollState == 1){
      $("#links").css("background-color", `rgba(20,20,20,${(scrl() - 350)/250})`)
    }else{
      scrollState = 1;
      $("#links").css("position","fixed");
      $("#links").offset({top: scrl(), left: 0});
      $("#splash").height(150);
    }
  }else if (scrollState != 2 && scrl() >= 600){
    setScrollState2();
  }
}

$(document).scroll(resetScrollState);

$(document).ready(function(){
  $("#home-link").click(setScrollState0);
});
