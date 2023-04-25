function requestFS(){
  var elem = document.documentElement;
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  // check if screen orientation is supported
  if(screen.orientation.lock) {
  // lock screen to landscape orientation
    screen.orientation.lock("landscape").then(function() {
      console.log("Orientation locked to landscape");
    }).catch(function(error) {
      console.error("Failed to lock orientation", error);
    });
  };
};
$(document).ready(function(){
  requestFS();
    $("#fullscreenButton").click(function(){
        requestFS();
    });
    $("#fullscreenButton2").click(function(){
      let wb2 = $(".welcomeScreen");
      if (document.fullscreenElement !== null) {
        console.log("The document is in fullscreen mode.");
        wb2.animate({opacity: 0}, 500);
        setTimeout(function(){
          wb2.remove();
        }, 1500);
      } else {
        requestFS();
        wb2.animate({opacity: 0}, 500);
        setTimeout(function(){
          wb2.remove();
        }, 1500);
      }
    });
    $("button").click(function(){
      $("#click")[0].currentTime = 0;
      $("#click")[0].play();
    });
});