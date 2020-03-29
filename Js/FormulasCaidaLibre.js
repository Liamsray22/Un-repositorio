//Buscar Velocidad Final

function buscarvFinal(vInicial, aceleracion, tiempo){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vFinal = vInicial + (aceleracion * tiempo);

}

//Fin Velocidad Final***********************************************


//Buscar Velocidad Inicial

function buscarvInicialSinAltura(vFinal, aceleracion, tiempo){

    vFinal = parseFloat(vFinal);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vInicial = vFinal - (aceleracion*tiempo);
}

function buscarvInicialSinvFinalConaltura(altura, aceleracion, tiempo){
    altura = parseFloat(altura);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vInicial = (altura - (1/2)*aceleracion*Math.pow(tiempo, 2))/tiempo;


}

function buscarvInicialSinAlturaSinvFinal(tiempo, aceleracion){
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vInicial = tiempo*aceleracion;


}

//Fin Velocidad Inicial***************************************


//Buscar Altura

function buscarAltura(){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    altura = vInicial*tiempo + ((1/2)*aceleracion*Math.pow(tiempo, 2));


}

//Buscar Altura**************************************************************************


//Buscar Tiempo

function buscarTiempoConvFinal(vFinal, vInicial, aceleracion){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    vFinal = parseFloat(vFinal);


    tiempo = (vFinal - vInicial)/aceleracion;



}


function buscarTiempoSinvFinal(vInicial, aceleracion){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);

    tiempo = vInicial/aceleracion;


}








