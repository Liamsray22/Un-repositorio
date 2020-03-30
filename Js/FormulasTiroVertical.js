
//Buscar Velocidad Final


function FindvFinal(vInicial, aceleracion, tiempo){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vFinal = vInicial - (aceleracion * tiempo);

    vFinalx = vFinal.toString();
    vFinalx = vFinalx.substring(0,5);
        VerResultado(vFinalx, "m/s");

}

function FindvFinalConAltura(vInicial,altura, aceleracion){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    altura = parseFloat(altura);

    vFinal = (2*aceleracion*altura) + vInicial;
    vFinalx = vFinal.toString();
    vFinalx = vFinalx.substring(0,5);
        VerResultado(vFinalx, "m/s");

}

//Fin Velocidad Final***************************************************************


//Buscar Tiempo

function Findtiempo(vInicial, aceleracion){
    
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);

    tiempo = vInicial/aceleracion;

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
        VerResultado(tiempox, "s");


}


function FindtiempoConvFinal(vInicial, vFinal, aceleracion){
    vInicial = parseFloat(vInicial);
    vFinal = parseFloat(vFinal);

    tiempo = (vFinal - vInicial)/-1 *aceleracion;

    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5);
        VerResultado(tiempox, "s");

}

//Fin Buscar Tiempo*****************************************************************




//Buscar Velocidad Inicial

function FindvInicialSinvFinalConAltura(aceleracion, altura){
    aceleracion = parseFloat(aceleracion);
    altura = parseFloat(altura);

    vInicial = Math.sqrt(2* aceleracion* altura);

    vInicialx = vInicial.toString();
    vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx, "m/s");

}

function FindvInicialConvFinalSinAltura(vFinal, aceleracion, tiempo){
    aceleracion = parseFloat(aceleracion);
    vFinal = parseFloat(vFinal);
    tiempo = parseFloat(tiempo);

    vInicial = vFinal - (aceleracion * tiempo);

    vInicialx = vInicial.toString();
    vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx, "m/s");


}

function FindvInicialSinvFinalSinAltura(tiempo, aceleracion){
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vInicial = tiempo/aceleracion;

    vInicialx = vInicial.toString();
    vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx, "m/s");

}

function FindvInicialConvFinalConAltura(vFinal, aceleracion, altura){
    aceleracion = parseFloat(aceleracion);
    vFinal = parseFloat(vFinal);
    altura = parseFloat(altura);

    vInicial = (2*aceleracion*altura) + vFinal;

    vInicialx = vInicial.toString();
    vInicialx = vInicialx.substring(0,5);
        VerResultado(vInicialx, "m/s");

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
        VerResultado(alturax, "m");

}


function FindAlturaSinvFinal(vInicial, aceleracion){
    aceleracion = parseFloat(aceleracion);
    vInicial = parseFloat(vInicial);

    altura = (Math.pow(vInicial, 2))/(2*aceleracion);

    alturax = altura.toString();
    alturax = alturax.substring(0,5);
        VerResultado(alturax, "m");


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
            Animacion();
            setTimeout( function(){FindvInicialSinvFinalConAltura(9.80, alturaTv)},3000);

        }else if(vInicialTv == "" && alturaTv=="" && vFinalTv != "" && tiempo!= ""){
            Animacion();
            setTimeout( function(){FindvInicialConvFinalSinAltura(vFinalTv ,9.80, tiempoTv)},3000);

        }else if(vInicialTv == "" && alturaTv=="" && vFinalTv == "" && tiempo!= ""){
            Animacion();
            setTimeout( function(){FindvInicialSinvFinalSinAltura(tiempo,9.80)},3000);

        }else if(vInicialTv == "" && alturaTv!="" && vFinalTv != "" && tiempo== ""){
            Animacion();
            setTimeout( function(){FindvInicialConvFinalConAltura(vFinalTv,9.80,alturaTv )},3000);

        }else{

        }

    }else if(vFinalTvRad){

        if(vFinalTv == "" && alturaTv=="" && vInicialTv != "" && tiempoTv!= ""){
            Animacion();
            setTimeout( function(){FindvFinal(vInicialTv, 9.80, tiempoTv)},3000);
        }else if(vFinalTv == "" && alturaTv!="" && vInicialTv != "" && tiempo== ""){
            Animacion();
            setTimeout( function(){FindvFinalConAltura(vInicialTv,alturaTv ,9.80)},3000);

        }else{

        }



    }else if(tiempoTvRad){
        if(tiempoTv == "" && alturaTv=="" && vInicialTv != "" && vFinalTv!= ""){
            Animacion();
            setTimeout( function(){FindtiempoConvFinal(vInicialTv, vFinalTv, 9.80)},3000);
        }else if(tiempoTv == "" && alturaTv=="" && vInicialTv != "" && vFinalTv== ""){
            Animacion();
            setTimeout( function(){Findtiempo(vInicialTv, 9.80)},3000);

        }else{

        }


    }else if(alturaTvRad){
        if(alturaTv == "" && tiempoTv=="" && vInicialTv != "" && vFinalTv!= ""){
            Animacion();
            setTimeout( function(){FindAltura(vInicialTv,9.80 ,vFinalTv)},3000);
        }else if(alturaTv == "" && tiempoTv=="" && vInicialTv != "" && vFinalTv== ""){
            Animacion();
            setTimeout( function(){FindAlturaSinvFinal(vInicialTv, 9.80)},3000);

        }else{

        }



    }




}




