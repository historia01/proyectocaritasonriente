$(document).ready(function(){
    let elementText = $("#lightShowText");
    let element1 = $("#LSCircleElement");
    let rootElement = $(".lightShow");
    let defpos = [//0 = x ; 1 = y ; 2 = x
        ["-1%", "-128%", "111px"], //navigation || 0
        ["-77%", "-131%", "126px"], //keyboard || 1
        ["-56%", "-166%", "53px"], //fraction 1 || 2
        ["-42%", "-166%", "53px"], //fraction 2 || 3
        ["-18%", "-166%", "53px"], //result 1 || 4
        ["-7%", "-166%", "53px"], //result 2 || 5
        ["-30%", "-167%", "61px"], //operation zone || 6
        ["10.5%", "-144%", "42px"], //compare || 7
        ["-73%", "-144%", "42px"], //clear || 8
        ["-73.5%", "-168%", "35px"], //graphics || 9
        ["13.5%", "-156%", "35px"], //resources || 10
        ["13.5%", "-168%", "35px"], //fullscreen || 11
        ["-38%", "-128%", "112px"], //comments || 12
        ["-31%", "-86%", "42px"], //about || 13
        ["-48%", "-162%", "40px"], //operators || 14
    ]
    function dctext(nstring){
        console.log(elementText.html())
        console.log(nstring)
        elementText.html(nstring);
        console.log(elementText.html())
        elementText.animate({opacity: 1}, 200);
    }
    function dctextFade(){
        elementText.animate({opacity: 0}, 500);
    };
    function ligthpos(pos){
        let x = pos[0];
        let y = pos[1];
        let size = pos[2];
        console.log('current position values are ' + element1.css("left") + " " + element1.css("top") + " " + element1.css("padding"));
        console.log('new position values are ' + x + " " + y + " " + size);
        element1.animate({
            left: x,
            top: y
        }, 600);
        setTimeout(function(){
            element1.animate({
                padding: size,
            })
        })
    };
    $("#howToUse").click(function(event){
        console.log("funtion executed")
        event.preventDefault();
        rootElement.css("display", "unset");
        dctext("this is some sample text");
        dctextFade();
        setTimeout(function(){
            rootElement.css("display", "none");
        }, 1000);
        /* rootElement.css("display", "unset");
        element1.animate({opacity: 0.5}, 600);
        setTimeout(function(){
            $(document).one("click", function(){
                ligthpos(defpos[0]);
                dctext("Este es el teclado de navegación.<br>Presiona los botones A, B, C y D para cambiar la parte de la fracción seleccionada. <br>Los botones + y - definen el tipo de operación.");
                dctextFade();
                ligthpos(defpos[1]);
                dctext("keyboard");
                dctextFade();
                ligthpos(defpos[2]);
                dctext("fraction 1");
                dctextFade();
                ligthpos(defpos[3]);
                dctext("fraction 2");
                dctextFade();
            });
        }, 600); */
    });
});

/*ligthpos(defpos[0]);
            dctext("Este es el teclado de navegación.<br>Presiona los botones A, B, C y D para cambiar la parte de la fracción seleccionada. <br>Los botones + y - definen el tipo de operación.");
            */