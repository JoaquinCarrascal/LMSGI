let tamanyo = prompt('Determine el tamaño de la lista:');

function agregarAlListado(num, listado) {

    listado.push(parseInt(num, 10));

}

function sumarListado(listado) {

    let sumatorio = 0;

    for (let x of listado) {

        sumatorio += x;

    }

    return sumatorio;

}

function sustituirPrimero(num, listado) {

    listado.shift();

    listado.push(num);

}

let listado = new Array();

for (let i = 0; i < tamanyo; i++) {

    agregarAlListado(prompt('Diga un número:'), listado);

}

alert('El listado es : ' + listado + ' y suma un total de: ' + sumarListado(listado));

alert('Agregue números a la lista y cuando haya terminado escriba 0 o un número negativo.');

do {

    aux = parseInt(prompt('Introduzca el siguiente elemento'));

    if (aux > 0) {

        sustituirPrimero(aux,listado);

    } else {

        alert('El listado es : ' + listado + ' y suma un total de: ' + sumarListado(listado));

    }

} while (aux > 0);



