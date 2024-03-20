function detectorPalindromos(cadenaUser){

    let sinEspacios = cadenaUser.toLowerCase().split(' ').join('');

    let reversa = cadenaUser.toLowerCase().split(' ').join('').split('').reverse().join('');

    if(sinEspacios == reversa)
        return 'Es palíndromo.';
    else
        return 'No es palídromo.';

}

alert(detectorPalindromos(prompt('Diga una frase para detectar si es palídromo:')));