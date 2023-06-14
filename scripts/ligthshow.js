let imageSelector = 0;

function selectorAdd(){
    if(imageSelector>12){
        imageSelector = 0;
    } else {
        imageSelector++
    }
}

function selectorSubstract(){
    if(imageSelector<0){
        imageSelector = 12;
    } else {
        imageSelector--
    }
}

function tutorialWindowShow(){
    $(".tutorialMenu").css("display", "unset")
}

function tutorialWindowClose(){
    $(".tutorialMenu").css("display", "none")
}

function imageSelection(image){
    switch(image){
        case 0:
            $("#tutorialImage").attr("src", "./media/other/logo.png");
            $("#tutorialTitle").html("¿Perdido?");
            $("#tutorialText").html("¡Esta guía te ayudara a familiarizarte con la aplicación!");
            break
        case 1:
            $("#tutorialImage").attr("src", "./media/other/01.png");
            $("#tutorialTitle").html("Objetos en Pantalla");
            $("#tutorialText").html("1. Zona de Operación<br>2. Boton Limpiar<br>3. Boton Comparar<br>4. Teclado Numerico<br>5. Teclado de Navegación<br>6. Zona de Comentario<br>7. Información<br>8. Graficos; 9. Pantalla Completa<br>10. Actividades");
            break
        case 2:
            $("#tutorialImage").attr("src", "./media/other/fracciones_principales.png");
            $("#tutorialTitle").html("Fracciones Principales");
            $("#tutorialText").html("Son las fracciones principales de las cuales se va a hacer la operación. Para navegar y seleccionar el operador, se usa el <a id='navigationKeyboard' href='#'>Teclado de Navegación</a>, el panel y operador seleccionado seran marcados <strong>azul</strong>. Para ingresar números se usa el <a id='numericKeyboard' href='#'>Teclado Numerico</a>.");
            break
        case 3:
            $("#tutorialImage").attr("src", "./media/other/fracciones_operacion.png");
            $("#tutorialTitle").html("Fraccion de Operacion");
            $("#tutorialText").html("Es la fraccion donde se realiza la operación.<br>El tipo de operación dependera del tipo que fue seleccionado en la operación anterior.");
            break
        case 4:
            $("#tutorialImage").attr("src", "./media/other/fracciones_respuesta.png");
            $("#tutorialTitle").html("Respuestas");
            $("#tutorialText").html("Son las fracciones las cuales contienen la respuestas de las operaciónes.<br>La primera fraccion tiene el resultado como es de la fraccion operación, mientras que el otro contiene el resultado simplificado de esta.");
            break
        case 5:
            $("#tutorialImage").attr("src", "./media/other/botones_funcion.png");
            $("#tutorialTitle").html("Botones de Función");
            $("#tutorialText").html("Son los botones que contienen las varias funciones principales.<br>\"Limpiar\" limpia el area de trabajo.<br>\"Comparar\" realiza la operación");
            break
        case 6:
            $("#tutorialImage").attr("src", "./media/other/teclado_numerico.png");
            $("#tutorialTitle").html("Teclado Numérico");
            $("#tutorialText").html("Es el teclado con el cuál se ingresa los numeros en el espacio seleccionado previamente con el <a id='navigationKeyboard' href='#'>Teclado de Navegación</a>.<b>Botones 1 a 9 agregan numeros, el boton de la Flecha borra un numero y la X borra el espacio entero.");
            break
        case 7:
            $("#tutorialImage").attr("src", "./media/other/teclado_navegacon.png");
            $("#tutorialTitle").html("Teclado de Navegación");
            $("#tutorialText").html("<big>Este teclado es con el que se navega en las dos fracciones principales.</big>");
            break
        case 8:
            $("#tutorialImage").attr("src", "./media/other/comentario.png");
            $("#tutorialTitle").html("Caja de Comentario");
            $("#tutorialText").html("<big>Contiene información de la operación realizada</big>");
            break
        case 9:
            $("#tutorialImage").attr("src", "./media/other/actividades.png");
            $("#tutorialTitle").html("Actividades");
            $("#tutorialText").html("Para ingresar al Panel de Actividades, ¡Presiona este boton!");
            break
        case 10:
            $("#tutorialImage").attr("src", "./media/other/actividades_normal.png");
            $("#tutorialTitle").html("Actividad Normal");
            $("#tutorialText").html("Una actividad normal es aquella que tiene un numero predeterminado de preguntas.<br>1. Barra de progreso<br>2. Ranking<br>3. Boton de empezar<br>4. Estado de la Actividad");
            break
        case 11:
            $("#tutorialImage").attr("src", "./media/other/actividades_infinito.png");
            $("#tutorialTitle").html("Actividad Infinta");
            $("#tutorialText").html("Una actividad infinita es aquella que tiene un tiempo limite para completar la mayor cantidad de operaciónes posible.<br>1. Boton Empezar<br>2. Ranking, Limite 5 estrellas<br>3. Record");
            break
        case 12:
            $("#tutorialImage").attr("src", "./media/other/activity_layout.png");
            $("#tutorialTitle").html("Zona de Actividad");
            $("#tutorialText").html("Es donde se realizan las Actividades.<br>1. Botones de Seleccion Multiple<br>2. Detalles de la actividad<br>3. Tiempo<br>4. Progreso<br>5. Cerrar Actividad.");
            break
    }
}

$(document).ready(function(){
    $("#tutorialBack").click(function(){
        selectorSubstract()
        imageSelection(imageSelector);
    });
    $("#tutorialNext").click(function(){
        selectorAdd()
        imageSelection(imageSelector)
    });
    $("#bottomAreaTrigger").click(function(event){
        event.preventDefault();
        tutorialWindowShow();
        imageSelection(imageSelector)
    });
    $("#tutorialClose").click(function(){
        tutorialWindowClose();
    });
});