function scrollToElementById(elementID){
  var target = $(document.getElementById(elementID)).offset().top;
  var position = $(window).scrollTop();
  var direction = target <= scrollTop ? (+1) : (-1);
  function increment(){
    position += direction;
    $(window).scrollTop(position);
    setTimeout(increment, 10);
  }
}

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
  /*$("#links li a").each(function(){
    $(this).attr("href",`javascript: scrollToElementById( ${ $(this).attr("href").substr(1) } )`);
  });*/
});
