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

function buscarAltura(vInicial, aceleracion, tiempo){
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

//Fin Buscar Tiempo****************************************************


function BuscarDatos(){
    vInicialCl = document.getElementById('vInicialCl').value;
    vFinalCl = document.getElementById('vFinalCl').value;
    tiempoCl = document.getElementById('tiempoCl').value;
    alturaCl = document.getElementById('alturaCl').value;
    
   
    vInicialClRad = document.getElementById('vInicialClRad').checked;
    vFinalClRad = document.getElementById('vFinalClRad').checked;
    tiempoClRad = document.getElementById('tiempoClRad').checked;
    alturaClRad = document.getElementById('alturaClRad').checked;
    

    if(vFinalClRad){
        
        if(vFinalCl == "" && alturaCl=="" && vInicialCl != "" && tiempoCl!= ""){
        buscarvFinal(vInicialCl, 9.80, tiempoCl);
        }


    }else if(vInicialClRad){
        if(vInicialCl == "" && alturaCl=="" && vFinalCl != "" && tiempoCl!= ""){
            buscarvInicialSinAltura(vFinalCl, 9.80, tiempoCl);
            }else if(vInicialCl == "" && vFinalCl=="" && alturaCl != "" && tiempoCl!= ""){
            buscarvInicialSinvFinalConaltura(alturaCl, 9.80, tiempoCl);

            }else if(vInicialCl == "" && alturaCl=="" && vFinalCl == "" && tiempoCl!= ""){
            buscarvInicialSinAlturaSinvFinal(tiempoCl, 9.80)

            }
        


    }else if(alturaClRad){
        if(alturaCl == "" && vFinalCl=="" && vInicialCl != "" && tiempoCl!= ""){
            buscarAltura(vInicialCl , 9.80, tiempoCl);

        }
    }else if (tiempoClRad){
        if(tiempoCl == "" && alturaCl=="" && vFinalCl != "" && vInicialCl!= ""){

            buscarTiempoConvFinal(vFinalCl, vInicialCl, 9.80);
        }else if(tiempoCl == "" && alturaCl=="" && vInicialCl != "" && vFinalCl== ""){

            buscarTiempoSinvFinal(vInicialCl, 9.80);
        }



    }


}






