let listado = [ 1 , 3 , 20 , 4 , 8 , 10];

function ordenarDeMayorAMenor(listado){

    listado.sort((a,b) => a - b);

    listado.reverse();

    return listado;

}

/*
Debemos usar lambda (flechas) si queremos hacer la comparación entre números
mayores que 10 ya que el método sort de js detecta por defecto el número 20 como un 2
o el 10 como un 1, para esto simplemente pasamos un criterio de ordenacion al método sort
de la misma forma que haríamos en Java en forma de lambda que devuelve un num negativo si el
primero es menor y positivo si el primero es mayor o igual que el anterior de esta forma podemos
ordenar números mayores a la decena.
Podría haber hecho el ejercicio con una lista de números <= 9 y funcionaría sin
lambda solo con el método sort(), pero prefiero hacer las cosas bien hechas. 
*/ 

alert('Aquí tienes el listado ordenado de mayor a menor: ' + ordenarDeMayorAMenor(listado));