
//Buscar Velocidad Final


function FindvFinal(vInicial, aceleracion, tiempo){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vFinal = vInicial - (aceleracion * tiempo);

    vFinalx = vFinal.toString();
    vFinalx = vFinalx.substring(0,5);
        VerResultado(vFinalx);

}

function FindvFinalConAltura(vInicial,altura, aceleracion){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    altura = parseFloat(altura);

    vFinal = (2*aceleracion*altura) + vInicial;
    vFinalx = vFinal.toString();
    vFinalx = vFinalx.substring(0,5);
        VerResultado(vFinalx);

}

//Fin Velocidad Final***************************************************************


//Buscar Tiempo

function Findtiempo(vInicial, aceleracion){
    
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);

    tiempo = vInicial/aceleracion;

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
        VerResultado(tiempox);


}


function FindtiempoConvFinal(vInicial, vFinal, aceleracion){
    vInicial = parseFloat(vInicial);
    vFinal = parseFloat(vFinal);

    tiempo = (vFinal - vInicial)/-1 *aceleracion;

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
        VerResultado(tiempox);

}

//Fin Buscar Tiempo*****************************************************************




//Buscar Velocidad Inicial

function FindvInicialSinvFinalConAltura(aceleracion, altura){
    aceleracion = parseFloat(aceleracion);
    altura = parseFloat(altura);

    vInicial = Math.sqrt(2* aceleracion* altura);

    vInicialx = vInicial.toString();
    vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx);

}

function FindvInicialConvFinalSinAltura(vFinal, aceleracion, tiempo){
    aceleracion = parseFloat(aceleracion);
    vFinal = parseFloat(vFinal);
    tiempo = parseFloat(tiempo);

    vInicial = vFinal - (aceleracion * tiempo);

    vInicialx = vInicial.toString();
    vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx);


}

function FindvInicialSinvFinalSinAltura(tiempo, aceleracion){
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vInicial = tiempo/aceleracion;

    vInicialx = vInicial.toString();
    vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx);

}

function FindvInicialConvFinalConAltura(vFinal, aceleracion, altura){
    aceleracion = parseFloat(aceleracion);
    vFinal = parseFloat(vFinal);
    altura = parseFloat(altura);

    vInicial = (2*aceleracion*altura) + vFinal;

    vInicialx = vInicial.toString();
    vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx);

}

//Fin Velocidad Inicial************************************************************

//Buscar Altura

function FindAltura(vInicial, aceleracion, vFinal){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    vFinal = parseFloat(vFinal);

    altura = (vFinal - vInicial)/aceleracion;

    alturax = altura.toString();
    alturax = alturax.substring(0,5);
        VerResultado(alturax);

}


function FindAlturaSinvFinal(vInicial, aceleracion){
    aceleracion = parseFloat(aceleracion);
    vInicial = parseFloat(vInicial);

    altura = (Math.pow(vInicial, 2))/(2*aceleracion);

    alturax = altura.toString();
    alturax = alturax.substring(0,5);
        VerResultado(alturax);


}


//Fin Altura*******************************************************************************


function FindDatos(){

    vInicialTv = document.getElementById('vInicialTv').value;
    vFinalTv = document.getElementById('vFinalTv').value;
    tiempoTv = document.getElementById('tiempoTv').value;
    alturaTv = document.getElementById('alturaTv').value;
    

    vInicialTvRad = document.getElementById('vInicialTvRad').checked;
    vFinalTvRad = document.getElementById('vFinalTvRad').checked;
    tiempoTvRad = document.getElementById('tiempoTvRad').checked;
    alturaTvRad = document.getElementById('alturaTvRad').checked;

    if(vInicialTvRad){

        if(vInicialTv == "" && alturaTv!="" && vFinalTv == "" && tiempoTv== ""){
            FindvInicialSinvFinalConAltura(9.80, alturaTv);

        }else if(vInicialTv == "" && alturaTv=="" && vFinalTv != "" && tiempo!= ""){
            FindvInicialConvFinalSinAltura(vFinalTv ,9.80, tiempoTv);

        }else if(vInicialTv == "" && alturaTv=="" && vFinalTv == "" && tiempo!= ""){
            FindvInicialSinvFinalSinAltura(tiempo,9.80);

        }else if(vInicialTv == "" && alturaTv!="" && vFinalTv != "" && tiempo== ""){
            FindvInicialConvFinalConAltura(vFinalTv,9.80,alturaTv );

        }else{

        }

    }else if(vFinalTvRad){

        if(vFinalTv == "" && alturaTv=="" && vInicialTv != "" && tiempoTv!= ""){
            FindvFinal(vInicialTv, 9.80, tiempoTv);
        }else if(vFinalTv == "" && alturaTv!="" && vInicialTv != "" && tiempo== ""){
            FindvFinalConAltura(vInicialTv,alturaTv ,9.80);

        }else{

        }



    }else if(tiempoTvRad){
        if(tiempoTv == "" && alturaTv=="" && vInicialTv != "" && vFinalTv!= ""){
            FindtiempoConvFinal(vInicialTv, vFinalTv, 9.80);
        }else if(tiempoTv == "" && alturaTv=="" && vInicialTv != "" && vFinalTv== ""){
            Findtiempo(vInicialTv, 9.80);

        }else{

        }


    }else if(alturaTvRad){
        if(alturaTv == "" && tiempoTv=="" && vInicialTv != "" && vFinalTv!= ""){
            FindAltura(vInicialTv,9.80 ,vFinalTv);
        }else if(alturaTv == "" && tiempoTv=="" && vInicialTv != "" && vFinalTv== ""){
            FindAlturaSinvFinal(vInicialTv, 9.80);

        }else{

        }



    }




}



