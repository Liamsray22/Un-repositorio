

//Encontrar Velocidad Final
function encontrarVfsindistancia(vInicial, aceleracion, tiempo){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);


    
    if(aceleracion < 0){
        vFinal = vInicial - (aceleracion * tiempo);

        vFinalx = vFinal.toString();
        vFinalx = vFinalx.substring(0,5);
        VerResultado(vFinalx);

    }else if(aceleracion > 0){

        vFinal = vInicial + (aceleracion*tiempo);
        
        vFinalx = vFinal.toString();
        vFinalx = vFinalx.substring(0,5);
        VerResultado(vFinalx);

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
    VerResultado(vFinalx);

}


function encontrarvFsintiempo(vInicial, aceleracion, distancia){
    vInicial = parseFloat(vInicial);
    distancia = parseFloat(distancia);
    aceleracion = parseFloat(aceleracion);

    if(aceleracion < 0){

    vFinal = Math.sqrt(Math.pow(vInicial, 2) - (2*aceleracion*distancia) );
    
    vFinalx = vFinal.toString();
    vFinalx = vFinalx.substring(0,5);
    VerResultado(vFinalx);
    }else if(aceleracion > 0){

        vFinal = Math.sqrt(Math.pow(vInicial, 2) + (2*aceleracion*distancia) );
        
        vFinalx = vFinal.toString();
        vFinalx = vFinalx.substring(0,5);
        VerResultado(vFinalx);

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
        VerResultado(distanciax);
}


function encontrarDistanciavFinal(vInicial, tiempo, aceleracion){

    vInicial = parseFloat(vInicial);
    tiempo = parseFloat(tiempo);
    aceleracion = parseFloat(aceleracion);

    if(aceleracion < 0){
        distancia = (vInicial * tiempo) - ((aceleracion*Math.pow(tiempo, 2)) / 2);
        distanciax = distancia.toString();
        distanciax = distanciax.substring(0,5);
        VerResultado(distanciax);

    }else if(aceleracion > 0){
        distancia = (vInicial * tiempo) + ((aceleracion*Math.pow(tiempo, 2)) / 2);
        distanciax = distancia.toString();
        distanciax = distanciax.substring(0,5);
        VerResultado(distanciax);

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
        VerResultado(distanciax);

    }else if(aceleracion > 0){
        distancia = (Math.pow(vFinal, 2)- Math.pow(vInicial, 2)/(-2*aceleracion));
        distanciax = distancia.toString();
        distanciax = distanciax.substring(0,5);
        VerResultado(distanciax);

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
        VerResultado(vInicialx);

    }else if(aceleracion > 0){

        vInicial = vFinal + (aceleracion*tiempo);

        vInicialx = vInicial.toString();
        vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx);

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
        VerResultado(vInicialx);

}


function encontrarvIsintiempo(vFinal, aceleracion, distancia){
    vFinal = parseFloat(vFinal);
    distancia = parseFloat(distancia);
    aceleracion = parseFloat(aceleracion);

    if(aceleracion < 0){

    vInicial = Math.sqrt(Math.pow(vFinal, 2) - (2*aceleracion*distancia) );

    vInicialx = vInicial.toString();
        vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx);

    }else if(aceleracion > 0){

        vInicial = Math.sqrt(Math.pow(vFinal, 2) + (2*aceleracion*distancia) );

        vInicialx = vInicial.toString();
        vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx);

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
        VerResultado(aceleracionx);

}

function encontrarAceleracionSinvFinal(vInicial, tiempo, distancia){
    vInicial = parseFloat(vInicial);
    tiempo = parseFloat(tiempo);
    distancia = parseFloat(distancia);

    aceleracion = (2*(distancia - (vInicial*tiempo)))/Math.pow(tiempo, 2);
    
    aceleracionx = aceleracion.toString();
        aceleracionx = aceleracionx.substring(0,5);
        VerResultado(aceleracionx);



}

function encontrarAceleracionSinTiempo(vInicial, vFinal, distancia){
    vInicial = parseFloat(vInicial);
    vFinal = parseFloat(vFinal);
    distancia = parseFloat(distancia);    

    aceleracion = (Math.pow(vInicial,2) - Math.pow(vFinal, 2)/(2*distancia));

    aceleracionx = aceleracion.toString();
        aceleracionx = aceleracionx.substring(0,5);
        VerResultado(aceleracionx);


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
        VerResultado(tiempox);

}

function encontrarTiempoSinAceleracion(vInicial, vFinal, distancia){
    vInicial = parseFloat(vInicial);
    vFinal = parseFloat(vFinal);
    distancia = parseFloat(distancia);

    tiempo = (2*distancia)/ (vInicial + vFinal);

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
        VerResultado(tiempox);

}


function encontrarTiempoSinvFinal(vInicial, aceleracion, distancia){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    distancia = parseFloat(distancia);

    tiempo = (Math.sqrt((2*aceleracion*distancia)+Math.pow(vInicial, 2) ) - vInicial)/aceleracion;

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
        VerResultado(tiempox);



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
            encontrarVisindistancia(vFinal, aceleracion, tiempo);

        }else if(vInicial == "" &&aceleracion=="" && distancia != "" && tiempo != "" && vFinal!= "" ){
            encontrarvIsinaceleracion(distancia, tiempo, vFinal);

        }else if(vInicial == "" && tiempo =="" && vFinal != "" && aceleracion != "" && distancia != ""){
            encontrarvIsintiempo(vFinal, aceleracion, distancia);

        }else{


        }


    }else if(vFinalRad){
        if(vFinal == ""&& distancia == ""  && vInicial != "" && aceleracion != "" && tiempo != ""){
            encontrarVfsindistancia(vInicial, aceleracion, tiempo);

        }else if(vFinal == "" &&aceleracion=="" && distancia != "" && tiempo != "" && vInicial!= "" ){
            encontrarvFsinaceleracion(distancia, tiempo, vInicial);

        }else if(vFinal == "" && tiempo =="" && vInicial != "" && aceleracion != "" && distancia != ""){
            encontrarvFsintiempo(vInicial, aceleracion, distancia);

        }else{


        }





    }else if(aceleracionRad){
        if(aceleracion == ""&& distancia == ""  && vInicial != "" && vFinal != "" && tiempo != ""){
            encontrarAceleracionSinDistancia(vFinal, tiempo, vInicial);

        }else if(aceleracion == "" &&vFinal=="" && distancia != "" && tiempo != "" && vInicial!= "" ){
            encontrarAceleracionSinvFinal(vInicial, tiempo, distancia );

        }else if(aceleracion == "" && tiempo =="" && vInicial != "" && vFinal != "" && distancia != ""){
            encontrarAceleracionSinTiempo(vInicial, vFinal, distancia);

        }else{


        }




    }else if(tiempoRad){

        if(tiempo == ""&& distancia == ""  && vInicial != "" && vFinal != "" && aceleracion != ""){
            encontrarTiempoSinDistancia(vFinal, vInicial, aceleracion);

        }else if(tiempo == "" &&aceleracion=="" && distancia != "" && vFinal != "" && vInicial!= "" ){
            encontrarTiempoSinAceleracion(vInicial,vFinal, distancia );

        }else if(tiempo == "" && vFinal =="" && vInicial != "" && aceleracion != "" && distancia != ""){
            encontrarTiempoSinvFinal(vInicial, aceleracion, distancia);

        }else{


        }



    }else if(distanciaRad){
        if(distancia == ""&& aceleracion == ""  && vInicial != "" && vFinal != "" && tiempo != ""){
            encontrarDistanciaSinAceleracion(vInicial, tiempo,vFinal);

        }else if(distancia == "" &&vFinal=="" && tiempo != "" && aceleracion != "" && vInicial!= "" ){
            encontrarDistanciavFinal(vInicial,tiempo,aceleracion );

        }else if(distancia == "" && tiempo =="" && vInicial != "" && aceleracion != "" && vFinal != ""){
            encontrarDistanciaSinTiempo(vFinal,vInicial, aceleracion);

        }else{


        }





    }else{

        alert("Seleccione que dato quiere encontrar");

    }




}

