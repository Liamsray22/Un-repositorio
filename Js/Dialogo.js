

function VerResultado(res , unidad){

    var dialogo = document.getElementById('DialogoNotificacion');
    var btnOk = document.getElementById('btn-ok');
    document.getElementById('res').innerHTML = "<p>" + res + " "+ unidad+ "</p>";
    dialogo.show();

    btnOk.addEventListener('click', () => location.reload());



}

