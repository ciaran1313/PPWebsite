$(document).scroll(resetScrollState);

$(window).resize(function(){
  if (scrl() <= SCROLL_STATE_0_MAX){
    setScrollState0();
  }
});

$(document).ready(function(){
  setScrollState0();
  $("#home-link").click(setScrollState0);
  $("#social-media-links a").attr("target", "_blank");
});
