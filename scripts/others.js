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
        
    });
});