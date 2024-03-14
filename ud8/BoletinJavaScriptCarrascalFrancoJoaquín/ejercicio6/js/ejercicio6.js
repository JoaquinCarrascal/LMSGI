let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
            'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt('Diga su DNI: ');

let letra = dni.substring(dni.length-1);

let numDni = dni.substring(0,dni.length-1);

dni < 0 || numDni > 999999999 ? alert('DNI no válido') 
    : letras[numDni%23] == letra ? alert('Letra correcta') 
    : alert('Letra incorrecta');

