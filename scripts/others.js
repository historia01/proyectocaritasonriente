$(document).ready(function(){
    $("#fullscreenButton").click(function(){
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
        }
    });
});