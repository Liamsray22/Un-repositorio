
function encontrarVelocidad(distancia, tiempo){
    velocidad = distancia/tiempo;
    velocidadx = tiempo.toString();
    velocidadx = velocidadx.substring(0,5);
    alert(velocidadx);

}

function encontrarTiempo(distancia, velocidad){
    tiempo = distancia/velocidad;
    tiempox = tiempo.toString();
    tiempox = tiempox.substring(0,5)
    alert(tiempox)
}



//encontrarVelocidad(12, 10);
encontrarTiempo(12, 46);


