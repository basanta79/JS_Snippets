'use strict';

// creamos una función para usarla como constructor de objetos.
function Fruta(nombre){
    // this contiene el objeto que se ha creado y que el constructor devolverá.
    this.nombre = nombre;
}

// usamos new para crear un objeto de tipo Fruta con el constructor
const limon = new Fruta('limon');

console.log(limon);