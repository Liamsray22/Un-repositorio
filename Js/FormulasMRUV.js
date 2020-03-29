function encontrarVfsindistancia(vInicial, aceleracion, tiempo){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);


    
    if(aceleracion < 0){
        vFinal = vInicial - (aceleracion * tiempo);
        alert(vFinal);


    }else if(aceleracion > 0){

        vFinal = vInicial + (aceleracion*tiempo);
        alert(vFinal);


    }else{


    }

}


function encontrarvFsinaceleracion(distancia ){

}






