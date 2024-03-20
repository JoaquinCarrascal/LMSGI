
function factorial(numUser){

    for(var i = numUser - 1 ; i > 0 ; i--){

        numUser *= i;

    }

    return numUser;
}

alert('Su número es: ' + factorial(prompt('Introduzca un número: ')));