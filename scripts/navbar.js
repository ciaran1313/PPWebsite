const SPLASH_HEIGHT = 750;
const NAVBAR_STYLE_0_MAX_TOPSCROLL = 350;
const NAVBAR_STYLE_2_MIN_TOPSCROLL = 600;
const LINKS_BACKGROUND_COLOR_RGB_STR = "20,20,20";

////////////////////////
var navbarStyle = 0; //
////////////////////////////////////////////////////////////////////
///  navbarStyle 0 is when the topScroll is under 350
///  navbarStyle 1 is when the topScroll is between 350 and 600
///  navbarStyle 2 is when the topScroll is greater than 600
///////////////////////////////////////////////////////////////////

//some shorthand:
function scrl(){
  return $(window).scrollTop();
}



function setNavbarStyle0(){
  navbarStyle = 0;
  $("#links").css({
    "background-color" : "",
    "display" : "block"
  });
  $("#navbar").css("position","relative");
  $("#navbar").offset({top: NAVBAR_STYLE_0_MAX_TOPSCROLL, left: 0});
  $("#dropdown-button button").hide();
  $("#home").height(SPLASH_HEIGHT);
}

function setNavbarStyle1(){
  navbarStyle = 1;
  $("#navbar").css("position","fixed");
  $("#links").css("display","block");
  if (windowSizeID == MOBILE){
    $("#dropdown-button button").slideUp();
  }
  $("#navbar,#links").offset({top: scrl(), left: 0});
  $("#home").height(SPLASH_HEIGHT);
}

function tweekStyle1AlphaValue(){
  $("#links").css("background-color", `rgba(${LINKS_BACKGROUND_COLOR_RGB_STR}, ${(scrl() - NAVBAR_STYLE_0_MAX_TOPSCROLL)/(NAVBAR_STYLE_2_MIN_TOPSCROLL - NAVBAR_STYLE_0_MAX_TOPSCROLL)})`);
}

function setNavbarStyle2(){
  navbarStyle = 2;
  $("#links").css("background-color",`rgba(${LINKS_BACKGROUND_COLOR_RGB_STR},1`);
  $("#navbar").css("position","fixed");
  if (windowSizeID == MOBILE){
    $("#links").css("display", "none");
    $("#dropdown-button button").slideDown();
  }
  $("#navbar,#links").offset({top: scrl(), left: 0});
  $("#home").height(SPLASH_HEIGHT);
}

resetNavbarStyle = function(){
  if (navbarStyle != 0 && scrl() <= NAVBAR_STYLE_0_MAX_TOPSCROLL){
    setNavbarStyle0();
  }else if (scrl() > NAVBAR_STYLE_0_MAX_TOPSCROLL && scrl() < NAVBAR_STYLE_2_MIN_TOPSCROLL){
    if (windowSizeID == DESKTOP){
      if (navbarStyle == 1){
        tweekStyle1AlphaValue();
      }else{
        setNavbarStyle1();
      }
    } else {
      setNavbarStyle0();
    }
  }else if (navbarStyle != 2 && scrl() >= NAVBAR_STYLE_2_MIN_TOPSCROLL){
    setNavbarStyle2();
  }
}
