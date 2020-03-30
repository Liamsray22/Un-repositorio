
function encontrarVelocidad(distancia, tiempo){
    velocidad = parseFloat(distancia/tiempo);
    velocidadx = velocidad.toString();
    velocidadx = velocidadx.substring(0,5);
    VerResultado(velocidadx, "m/s");



}

function encontrarTiempo(distancia, velocidad){
    tiempo = parseFloat(distancia/velocidad);

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
    VerResultado(tiempox, "s");

    
}

function encontrarDistancia(velocidad, tiempo){
    distancia = parseFloat(tiempo * velocidad);
    distanciax = distancia.toString();
    distanciax = distanciax.substring(0,5)
    VerResultado(distanciax , "m");

}


function verVacio(){

    distancia = document.getElementById('distancia').value;
    velocidad = document.getElementById('Velocidad').value;
    tiempo = document.getElementById('Tiempo').value;


    if(distancia == "" && velocidad != "" && tiempo != "" ){
        Animacion();
        setTimeout( function(){encontrarDistancia(velocidad,tiempo)}, 3000);

    }else if(velocidad == "" && distancia != "" && tiempo != ""){
        Animacion();

        setTimeout( function(){encontrarVelocidad(distancia,tiempo) }, 3000);

    }else if(tiempo == "" && velocidad != "" && distancia != ""){
        Animacion();

        setTimeout(  function(){encontrarTiempo(distancia , velocidad)},3000      );


    }else{


    }
}



