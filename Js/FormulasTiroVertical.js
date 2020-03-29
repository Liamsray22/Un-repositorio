
//Buscar Velocidad Final


function FindvFinal(vInicial, aceleracion, tiempo){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    tiempo = parseFloat(tiempo);

    vFinal = vInicial - (aceleracion * tiempo);

}








//Buscar Tiempo

function Findtiempo(vInicial, aceleracion){
    
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);

    tiempo = vInicial/aceleracion;


}







//Buscar Velocidad Inicial

function FindvInicial(aceleracion, altura){
    aceleracion = parseFloat(aceleracion);
    altura = parseFloat(altura);

    vInicial = Math.sqrt(2* aceleracion* altura);




}









//Buscar Altura

function FindAltura(vInicial, aceleracion, vFinal){
    vInicial = parseFloat(vInicial);
    aceleracion = parseFloat(aceleracion);
    vFinal = parseFloat(vFinal);

    altura = (vFinal - vInicial)/aceleracion



}

