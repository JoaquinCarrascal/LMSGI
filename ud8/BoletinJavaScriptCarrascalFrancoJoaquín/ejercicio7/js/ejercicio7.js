let numUser = prompt('Introduzca un número: ');

function factorial(numUser){

    let resultado = numUser;

    let factorial = 1;

    for(let i = numUser ; i > 0 ; i--){

        resultado *= i;

    }

    return resultado;
}

