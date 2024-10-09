
function comprobarDni(dni){
    let dniInt = "";
    let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    for (let i = 0; i < dni.length - 1; i++) {
        dniInt += dni[i];
    }
    let respuesta = "";
    if (letras[dniInt % 23] == dni[8]) {
        respuesta = "Tu DNI está bien"; 
    } else {
        respuesta = "Está mal";
    } 
    console.log(respuesta);
    return respuesta;
}


