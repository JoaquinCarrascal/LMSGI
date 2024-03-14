let valores = [true, 5 , false, "hola", "adios",2];

let cantidadAux = 0;

let masLarga = "";

for (let x of valores) {
    if(typeof x === "string" && x.length > cantidadAux){
        cantidadAux = x.length;
        masLarga = x;
    }
}

alert(masLarga);

alert(valores[0]||valores[2]);
alert(valores[0]&&valores[2]);

alert(valores[1]/valores[4]);
alert(valores[1]*valores[4]);
alert(valores[1]-valores[4]);
alert(valores[1]+valores[4]);
alert(valores[1]%valores[4]);
