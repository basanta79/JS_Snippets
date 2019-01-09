'use strict';

// closure es el contexto externo en donde creamos una función.
function creaAgente(nombre){
    let edad = 20;

    return{
        getNombre: function(){ // esta función siempre donde esté y como se llame podrá acceder a nombre y edad
            return nombre;
        },
        setNombre: function(){
            nombre = valor;
        },
        saluda: function(){
            console.log(('Hola soy ', nombre));
        } 
    }
}


const jones = creaAgente('Jones');

console.log(jones);
