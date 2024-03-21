let cadenaUser = prompt('Introduzca su cadena te texto');

function checkCadena(cadenaUser){

    let msg;

    cadenaUser == cadenaUser.toUpperCase() ? msg = 'La cadena solo contiene mayúsculas.'
        : cadenaUser == cadenaUser.toLowerCase() ? msg = 'La cadena solo contiene minúsculas.'
            : msg = 'la cadena contiene mayúsculas y minúsculas';

    return msg;

}

alert(checkCadena(cadenaUser));