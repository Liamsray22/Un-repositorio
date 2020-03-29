

//Encontrar Velocidad Final
function encontrarVfsindistancia(vInicial, aceleracion, tiempo){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);


    
    if(aceleracion < 0){
        vFinal = vInicial - (aceleracion * tiempo);
        //alert(vFinal);


    }else if(aceleracion > 0){

        vFinal = vInicial + (aceleracion*tiempo);
        //alert(vFinal);


    }else{


    }

}


function encontrarvFsinaceleracion(distancia, tiempo, vInicial ){
    vInicial = parseFloat(vInicial);
    distancia = parseFloat(distancia);
    tiempo = parseFloat(tiempo);

    vFinal = (2*distancia)/tiempo - vInicial;
    //alert(vFinal);


}


function encontrarvFsintiempo(vInicial, aceleracion, distancia){
    vInicial = parseFloat(vInicial);
    distancia = parseFloat(distancia);
    aceleracion = parseFloat(aceleracion);

    if(aceleracion < 0){

    vFinal = Math.sqrt(Math.pow(vInicial, 2) - (2*aceleracion*distancia) );
    //alert(vFinal);    

    }else if(aceleracion > 0){

        vFinal = Math.sqrt(Math.pow(vInicial, 2) + (2*aceleracion*distancia) );
        //alert(vFinal);    


    }else{


    }




}
//Fin Velocidad Final ***********************************************************





//Encontrar Distancia

function encontrarDistanciaSinAceleracion(vInicial, aceleracion, vFinal){

    vInicial = parseFloat(vInicial);
    tiempo = parseFloat(tiempo);
    vFinal = parseFloat(vFinal);

    distancia = ((vInicial+vFinal)/2)*tiempo;
}


function encontrarDistanciavFinal(vInicial, tiempo, aceleracion){

    vInicial = parseFloat(vInicial);
    tiempo = parseFloat(tiempo);
    aceleracion = parseFloat(aceleracion);

    if(aceleracion < 0){
        distancia = (vInicial * tiempo) - ((aceleracion*Math.pow(tiempo, 2)) / 2);

    }else if(aceleracion > 0){
        distancia = (vInicial * tiempo) + ((aceleracion*Math.pow(tiempo, 2)) / 2);

    }else{

    }


}

function encontrarDistanciaSinAceleracion(vFinal, vInicial, aceleracion){

    vInicial = parseFloat(vInicial);
    vFinal = parseFloat(vFinal);
    aceleracion = parseFloat(aceleracion);

    if(aceleracion < 0){
        distancia = (Math.pow(vFinal, 2)- Math.pow(vInicial, 2)/(-2*aceleracion));

    }else if(aceleracion > 0){
        distancia = (Math.pow(vFinal, 2)- Math.pow(vInicial, 2)/(-2*aceleracion));

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
        //alert(vFinal);


    }else if(aceleracion > 0){

        vInicial = vFinal + (aceleracion*tiempo);
        //alert(vFinal);


    }else{


    }

}


function encontrarvIsinaceleracion(distancia, tiempo, vFinal ){
    vFinal = parseFloat(vFinal);
    distancia = parseFloat(distancia);
    tiempo = parseFloat(tiempo);

    vInicial = (2*distancia)/tiempo - vFinal;
    //alert(vFinal);


}


function encontrarvIsintiempo(vFinal, aceleracion, distancia){
    vFinal = parseFloat(vFinal);
    distancia = parseFloat(distancia);
    aceleracion = parseFloat(aceleracion);

    if(aceleracion < 0){

    vInicial = Math.sqrt(Math.pow(vFinal, 2) - (2*aceleracion*distancia) );
    //alert(vFinal);    

    }else if(aceleracion > 0){

        vInicial = Math.sqrt(Math.pow(vFinal, 2) + (2*aceleracion*distancia) );
        //alert(vFinal);    


    }else{


    }




}
//Fin Velocidad Inicial ***********************************************************

function encontrarAceleracionSinDistancia(vFinal, tiempo, vInicial){
    vFinal = parseFloat(vFinal);
    tiempo = parseFloat(tiempo);
    vInicial = parseFloat(vInicial);

    aceleracion = (vFinal - vInicial)/tiempo;

}



