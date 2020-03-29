

function VerResultado(res){

    var dialogo = document.getElementById('DialogoNotificacion');
    var btnOk = document.getElementById('btn-ok');
    document.getElementById('res').innerHTML = "<p>" + res + "</p>";
    dialogo.show();

    btnOk.addEventListener('click', () => location.reload());



}

