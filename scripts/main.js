$(document).scroll(resetNavbarStyle);

$(window).resize(function(){
  resetWindowSizeID();
  if (scrl() <= NAVBAR_STYLE_0_MAX_TOPSCROLL){
    setNavbarStyle0();
  }
}).resize();

$(document).ready(function(){
  setNavbarStyle0();
  $("#dropdown-button").click(function(){
    $("#links").slideToggle();
  });
  $("#home-link").click(setNavbarStyle0);
  $("#social-media-links a").attr("target", "_blank");
});
