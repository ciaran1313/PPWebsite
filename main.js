const SPLASH_HEIGHT = 750;
const SCROLL_STATE_0_MAX = 287;
const SCROLL_STATE_2_MIN = 600;
const LINKS_BACKGROUND_COLOR_RGB_STR = "20,20,20";

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
  $("#links").offset({top: SCROLL_STATE_0_MAX, left: 0});
  $("#splash").height(SPLASH_HEIGHT);
}

function setScrollState2(){
  $("#links").css({
    "position" : "fixed",
    "background-color" : `rgba(${LINKS_BACKGROUND_COLOR_RGB_STR}, 1)`
  });
  $("#links").offset({top: scrl(), left: 0});
  $("#splash").height(SPLASH_HEIGHT);
}

function resetScrollState(){
  if (scrollState != 0 && scrl() <= SCROLL_STATE_0_MAX){
    setScrollState0();
  }else if (scrl() > SCROLL_STATE_0_MAX && scrl() < SCROLL_STATE_2_MIN){
    if (scrollState == 1){
      $("#links").css("background-color", `rgba(${LINKS_BACKGROUND_COLOR_RGB_STR}, ${(scrl() - SCROLL_STATE_0_MAX)/(SCROLL_STATE_2_MIN - SCROLL_STATE_0_MAX)})`)
    }else{
      scrollState = 1;
      $("#links").css("position","fixed");
      $("#links").offset({top: scrl(), left: 0});
      $("#splash").height(SPLASH_HEIGHT);
    }
  }else if (scrollState != 2 && scrl() >= SCROLL_STATE_2_MIN){
    setScrollState2();
  }
}

$(document).scroll(resetScrollState);

$(document).ready(function(){
  $("#home-link").click(setScrollState0);
  $("#social-media-links a").attr("target", "_blank");
});
