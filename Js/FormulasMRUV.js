

//Encontrar Velocidad Final
function encontrarVfsindistancia(vInicial, aceleracion, tiempo){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);


    
    if(aceleracion < 0){
        vFinal = vInicial - (aceleracion * tiempo);

        vFinalx = vFinal.toString();
        vFinalx = vFinalx.substring(0,5);
        VerResultado(vFinalx, "m/s");

    }else if(aceleracion > 0){

        vFinal = vInicial + (aceleracion*tiempo);
        
        vFinalx = vFinal.toString();
        vFinalx = vFinalx.substring(0,5);
        VerResultado(vFinalx, "m/s");

    }else{


    }

}


function encontrarvFsinaceleracion(distancia, tiempo, vInicial ){
    vInicial = parseFloat(vInicial);
    distancia = parseFloat(distancia);
    tiempo = parseFloat(tiempo);

    vFinal = (2*distancia)/tiempo - vInicial;
    
    vFinalx = vFinal.toString();
    vFinalx = vFinalx.substring(0,5);
    VerResultado(vFinalx, "m/s");

}


function encontrarvFsintiempo(vInicial, aceleracion, distancia){
    vInicial = parseFloat(vInicial);
    distancia = parseFloat(distancia);
    aceleracion = parseFloat(aceleracion);

    if(aceleracion < 0){

    vFinal = Math.sqrt(Math.pow(vInicial, 2) - (2*aceleracion*distancia) );
    
    vFinalx = vFinal.toString();
    vFinalx = vFinalx.substring(0,5);
    VerResultado(vFinalx, "m/s");
    }else if(aceleracion > 0){

        vFinal = Math.sqrt(Math.pow(vInicial, 2) + (2*aceleracion*distancia) );
        
        vFinalx = vFinal.toString();
        vFinalx = vFinalx.substring(0,5);
        VerResultado(vFinalx, "m/s");

    }else{


    }




}
//Fin Velocidad Final ***********************************************************





//Encontrar Distancia

function encontrarDistanciaSinAceleracion(vInicial, tiempo, vFinal){

    vInicial = parseFloat(vInicial);
    tiempo = parseFloat(tiempo);
    vFinal = parseFloat(vFinal);

    distancia = ((vInicial+vFinal)/2)*tiempo;

        distanciax = distancia.toString();
        distanciax = distanciax.substring(0,5);
        VerResultado(distanciax, "m");
}


function encontrarDistanciavFinal(vInicial, tiempo, aceleracion){

    vInicial = parseFloat(vInicial);
    tiempo = parseFloat(tiempo);
    aceleracion = parseFloat(aceleracion);

    if(aceleracion < 0){
        distancia = (vInicial * tiempo) - ((aceleracion*Math.pow(tiempo, 2)) / 2);
        distanciax = distancia.toString();
        distanciax = distanciax.substring(0,5);
        VerResultado(distanciax, "m");

    }else if(aceleracion > 0){
        distancia = (vInicial * tiempo) + ((aceleracion*Math.pow(tiempo, 2)) / 2);
        distanciax = distancia.toString();
        distanciax = distanciax.substring(0,5);
        VerResultado(distanciax, "m");

    }else{

    }


}

function encontrarDistanciaSinTiempo(vFinal, vInicial, aceleracion){

    vInicial = parseFloat(vInicial);
    vFinal = parseFloat(vFinal);
    aceleracion = parseFloat(aceleracion);

    if(aceleracion < 0){
        distancia = (Math.pow(vFinal, 2)- Math.pow(vInicial, 2)/(-2*aceleracion));
        distanciax = distancia.toString();
        distanciax = distanciax.substring(0,5);
        VerResultado(distanciax, "m");

    }else if(aceleracion > 0){
        distancia = (Math.pow(vFinal, 2)- Math.pow(vInicial, 2)/(-2*aceleracion));
        distanciax = distancia.toString();
        distanciax = distanciax.substring(0,5);
        VerResultado(distanciax, "m");

    }else{

    }

}

//Fin Distancia**************************************************************


//Encontrar Velocidad Inicial
function encontrarVisindistancia(vFinal, aceleracion, tiempo){
    vFinal = parseFloat(vFinal);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);


    
    if(aceleracion < 0){
        vInicial = vFinal - (aceleracion * tiempo);

        vInicialx = vInicial.toString();
        vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx, "m/s");

    }else if(aceleracion > 0){

        vInicial = vFinal + (aceleracion*tiempo);

        vInicialx = vInicial.toString();
        vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx, "m/s");

    }else{


    }

}


function encontrarvIsinaceleracion(distancia, tiempo, vFinal ){
    vFinal = parseFloat(vFinal);
    distancia = parseFloat(distancia);
    tiempo = parseFloat(tiempo);

    vInicial = (2*distancia)/tiempo - vFinal;

    vInicialx = vInicial.toString();
        vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx, "m/s");

}


function encontrarvIsintiempo(vFinal, aceleracion, distancia){
    vFinal = parseFloat(vFinal);
    distancia = parseFloat(distancia);
    aceleracion = parseFloat(aceleracion);

    if(aceleracion < 0){

    vInicial = Math.sqrt(Math.pow(vFinal, 2) - (2*aceleracion*distancia) );

    vInicialx = vInicial.toString();
        vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx, "m/s");

    }else if(aceleracion > 0){

        vInicial = Math.sqrt(Math.pow(vFinal, 2) + (2*aceleracion*distancia) );

        vInicialx = vInicial.toString();
        vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx, "m/s");

    }else{


    }




}
//Fin Velocidad Inicial ***********************************************************


// Encontrar Aceleracion 

function encontrarAceleracionSinDistancia(vFinal, tiempo, vInicial){
    vFinal = parseFloat(vFinal);
    tiempo = parseFloat(tiempo);
    vInicial = parseFloat(vInicial);

    aceleracion = (vFinal - vInicial)/tiempo;

    aceleracionx = aceleracion.toString();
        aceleracionx = aceleracionx.substring(0,5);
        VerResultado(aceleracionx, "m/s^2");

}

function encontrarAceleracionSinvFinal(vInicial, tiempo, distancia){
    vInicial = parseFloat(vInicial);
    tiempo = parseFloat(tiempo);
    distancia = parseFloat(distancia);

    aceleracion = (2*(distancia - (vInicial*tiempo)))/Math.pow(tiempo, 2);
    
    aceleracionx = aceleracion.toString();
        aceleracionx = aceleracionx.substring(0,5);
        VerResultado(aceleracionx, "m/s^2");



}

function encontrarAceleracionSinTiempo(vInicial, vFinal, distancia){
    vInicial = parseFloat(vInicial);
    vFinal = parseFloat(vFinal);
    distancia = parseFloat(distancia);    

    aceleracion = (Math.pow(vInicial,2) - Math.pow(vFinal, 2)/(2*distancia));

    aceleracionx = aceleracion.toString();
        aceleracionx = aceleracionx.substring(0,5);
        VerResultado(aceleracionx, "m/s^2");


}



//Fin Aceleracion*****************************************************************



//Encontrar Tiempo

function encontrarTiempoSinDistancia(vFinal, vInicial, aceleracion){
    vInicial = parseFloat(vInicial);
    vFinal = parseFloat(vFinal);
    aceleracion = parseFloat(aceleracion);
    
    tiempo = (vInicial - vFinal)/aceleracion;

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
        VerResultado(tiempox, "s");

}

function encontrarTiempoSinAceleracion(vInicial, vFinal, distancia){
    vInicial = parseFloat(vInicial);
    vFinal = parseFloat(vFinal);
    distancia = parseFloat(distancia);

    tiempo = (2*distancia)/ (vInicial + vFinal);

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
        VerResultado(tiempox, "s");

}


function encontrarTiempoSinvFinal(vInicial, aceleracion, distancia){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    distancia = parseFloat(distancia);

    tiempo = (Math.sqrt((2*aceleracion*distancia)+Math.pow(vInicial, 2) ) - vInicial)/aceleracion;

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
        VerResultado(tiempox, "s");



}





//Ver que pide

function verDatos(){
    
    vInicial = document.getElementById('vInicial').value;
    vFinal = document.getElementById('vFinal').value;
    aceleracion = document.getElementById('aceleracionMRUV').value;
    tiempo = document.getElementById('tiempoMRUV').value;
    distancia = document.getElementById('distanciaMRUV').value;
    

    vInicialRad = document.getElementById('vInicialRad').checked;
    vFinalRad = document.getElementById('vFinalRad').checked;
    aceleracionRad = document.getElementById('aceleracionRad').checked;
    tiempoRad = document.getElementById('tiempoRad').checked;
    distanciaRad = document.getElementById('distanciaRad').checked;

    if(vInicialRad){
        if(vInicial == ""&& distancia == ""  && vFinal != "" && aceleracion != "" && tiempo != ""){
            Animacion();

            setTimeout( function(){encontrarVisindistancia(vFinal, aceleracion, tiempo)}, 3000);

        }else if(vInicial == "" &&aceleracion=="" && distancia != "" && tiempo != "" && vFinal!= "" ){
            Animacion();

            setTimeout( function(){encontrarvIsinaceleracion(distancia, tiempo, vFinal)},3000);

        }else if(vInicial == "" && tiempo =="" && vFinal != "" && aceleracion != "" && distancia != ""){
            Animacion();
            setTimeout( function(){encontrarvIsintiempo(vFinal, aceleracion, distancia)},3000);


        }else{


        }


    }else if(vFinalRad){
        if(vFinal == ""&& distancia == ""  && vInicial != "" && aceleracion != "" && tiempo != ""){
            Animacion();

            setTimeout( function(){encontrarVfsindistancia(vInicial, aceleracion, tiempo)},3000);

        }else if(vFinal == "" &&aceleracion=="" && distancia != "" && tiempo != "" && vInicial!= "" ){
            Animacion();

            setTimeout( function(){encontrarvFsinaceleracion(distancia, tiempo, vInicial)},3000);

        }else if(vFinal == "" && tiempo =="" && vInicial != "" && aceleracion != "" && distancia != ""){
            Animacion();

            setTimeout( function(){encontrarvFsintiempo(vInicial, aceleracion, distancia)},3000);

        }else{


        }





    }else if(aceleracionRad){
        if(aceleracion == ""&& distancia == ""  && vInicial != "" && vFinal != "" && tiempo != ""){
            Animacion();

            setTimeout( function(){encontrarAceleracionSinDistancia(vFinal, tiempo, vInicial)},3000);

        }else if(aceleracion == "" &&vFinal=="" && distancia != "" && tiempo != "" && vInicial!= "" ){
            Animacion();

            setTimeout( function(){encontrarAceleracionSinvFinal(vInicial, tiempo, distancia )},3000);

        }else if(aceleracion == "" && tiempo =="" && vInicial != "" && vFinal != "" && distancia != ""){
            Animacion();

            setTimeout( function(){encontrarAceleracionSinTiempo(vInicial, vFinal, distancia)},3000);

        }else{


        }




    }else if(tiempoRad){

        if(tiempo == ""&& distancia == ""  && vInicial != "" && vFinal != "" && aceleracion != ""){
            Animacion();

            setTimeout( function(){encontrarTiempoSinDistancia(vFinal, vInicial, aceleracion)},3000);

        }else if(tiempo == "" &&aceleracion=="" && distancia != "" && vFinal != "" && vInicial!= "" ){
            Animacion();

            setTimeout( function(){encontrarTiempoSinAceleracion(vInicial,vFinal, distancia )},3000);

        }else if(tiempo == "" && vFinal =="" && vInicial != "" && aceleracion != "" && distancia != ""){
            Animacion();

            setTimeout( function(){encontrarTiempoSinvFinal(vInicial, aceleracion, distancia)},3000);

        }else{


        }



    }else if(distanciaRad){
        if(distancia == ""&& aceleracion == ""  && vInicial != "" && vFinal != "" && tiempo != ""){
            Animacion();

            setTimeout( function(){encontrarDistanciaSinAceleracion(vInicial, tiempo,vFinal)},3000);

        }else if(distancia == "" &&vFinal=="" && tiempo != "" && aceleracion != "" && vInicial!= "" ){
            Animacion();

            setTimeout( function(){encontrarDistanciavFinal(vInicial,tiempo,aceleracion )},3000);

        }else if(distancia == "" && tiempo =="" && vInicial != "" && aceleracion != "" && vFinal != ""){
            Animacion();

            setTimeout( function(){encontrarDistanciaSinTiempo(vFinal,vInicial, aceleracion)},3000);

        }else{


        }





    }else{

        alert("Seleccione que dato quiere encontrar");

    }




}

