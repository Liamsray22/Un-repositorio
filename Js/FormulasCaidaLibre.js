//Buscar Velocidad Final

function buscarvFinal(vInicial, aceleracion, tiempo){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vFinal = vInicial + (aceleracion * tiempo);

    vFinalx = vFinal.toString();
    vFinalx = vFinalx.substring(0,5);
        VerResultado(vFinalx, "m/s");

}

//Fin Velocidad Final***********************************************


//Buscar Velocidad Inicial

function buscarvInicialSinAltura(vFinal, aceleracion, tiempo){

    vFinal = parseFloat(vFinal);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vInicial = vFinal - (aceleracion*tiempo);
    
    vInicialx = vInicial.toString();
    vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx,  "m/s");
}

function buscarvInicialSinvFinalConaltura(altura, aceleracion, tiempo){
    altura = parseFloat(altura);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vInicial = (altura - (1/2)*aceleracion*Math.pow(tiempo, 2))/tiempo;

    vInicialx = vInicial.toString();
    vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx, "m/s");


}

function buscarvInicialSinAlturaSinvFinal(tiempo, aceleracion){
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vInicial = tiempo*aceleracion;

    vInicialx = vInicial.toString();
    vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx, "m/s");


}

//Fin Velocidad Inicial***************************************


//Buscar Altura

function buscarAltura(vInicial, aceleracion, tiempo){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    altura = vInicial*tiempo + ((1/2)*aceleracion*Math.pow(tiempo, 2));

    alturax = altura.toString();
    alturax = alturax.substring(0,5);
        VerResultado(alturax, "m");


}

//Fin Buscar Altura**************************************************************************


//Buscar Tiempo

function buscarTiempoConvFinal(vFinal, vInicial, aceleracion){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    vFinal = parseFloat(vFinal);


    tiempo = (vFinal - vInicial)/aceleracion;

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
        VerResultado(tiempox, "s");



}


function buscarTiempoSinvFinal(vInicial, aceleracion){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);

    tiempo = vInicial/aceleracion;

    
    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
        VerResultado(tiempox, "s");


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
            Animacion();
            setTimeout( function(){buscarvFinal(vInicialCl, 9.80, tiempoCl)},3000);
        }


    }else if(vInicialClRad){
        if(vInicialCl == "" && alturaCl=="" && vFinalCl != "" && tiempoCl!= ""){
            Animacion();
            setTimeout( function(){buscarvInicialSinAltura(vFinalCl, 9.80, tiempoCl)},3000);
            }else if(vInicialCl == "" && vFinalCl=="" && alturaCl != "" && tiempoCl!= ""){
                Animacion();
                setTimeout( function(){buscarvInicialSinvFinalConaltura(alturaCl, 9.80, tiempoCl)},3000);

            }else if(vInicialCl == "" && alturaCl=="" && vFinalCl == "" && tiempoCl!= ""){
                Animacion();
                setTimeout( function(){buscarvInicialSinAlturaSinvFinal(tiempoCl, 9.80)},3000);

            }
        


    }else if(alturaClRad){
        if(alturaCl == "" && vFinalCl=="" && vInicialCl != "" && tiempoCl!= ""){
            Animacion();
            setTimeout( function(){buscarAltura(vInicialCl , 9.80, tiempoCl)}, 3000);

        }

    }else if (tiempoClRad){
        if(tiempoCl == "" && alturaCl=="" && vFinalCl != "" && vInicialCl!= ""){
            Animacion();

            setTimeout( function(){buscarTiempoConvFinal(vFinalCl, vInicialCl, 9.80)}, 3000);
        }else if(tiempoCl == "" && alturaCl=="" && vInicialCl != "" && vFinalCl== ""){
            Animacion();

            setTimeout( function(){buscarTiempoSinvFinal(vInicialCl, 9.80)}, 3000);
        }



    }


}






