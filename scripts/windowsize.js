const MOBILE = 0;
const DESKTOP = 1;

const MIN_DESKTOP_WIDTH = 500;

var windowSizeID = undefined;

function setWindowSizeID(new_id){
  windowSizeID = new_id;
  mobile = new_id == MOBILE;
  $("#size-specific-stylesheet").attr("href",`stylesheets/${mobile? "mobile" : "desktop"}.css`);
  $("#navbar-script").attr("src",`scripts/navbar_${mobile? "mobile" : "desktop"}.js`);
}

function resetWindowSizeID(){
  const WINDOW_WIDTH = $(window).width();
  if (windowSizeID != MOBILE && WINDOW_WIDTH < MIN_DESKTOP_WIDTH){
    setWindowSizeID(MOBILE);
  }else if (windowSizeID != DESKTOP && WINDOW_WIDTH >= MIN_DESKTOP_WIDTH){
    setWindowSizeID(DESKTOP);
  }
}
