'use strict';

/*
Los objetos de Js tienen una porpiedad que es protipo. Si solicitamos una funcion o propiedad que 
no tiene....
*/


//definimos un constructor de objetos

function Persona(nombre) {
    this.nombre = nombre;
    // Si definimos una función aqui lo que hacemos es cada vez que instanciamos un objeto 
    // también cargamos una funcion nueva en memoria, por que los objetos tienen funciones y cada 
    // instancia carga en memoria una funcion definida como si fuera una propiedad.
}

// Para no cargar la memoria de funciones que se repiten utilizamos prototipos.

Persona.prototype.saluda = function(){
    console.log('Hola soy ', this.nombre);
}

Persona.prototype.despide = function(){
    console.log('Adios ', this.nombre);
}

const luis = new Persona('Luis');

//setTimeout(luis.saluda.apply(luis),2000);

// Herencia de persona ------------------------------------------------------------------------------

function Agente(nombre){
    // Heredar el comportamiento del constructor de Personas
    Persona.call(this, nombre); // Ejecutmaos un contructor con el contexto actual.
}
console.log(Agente.prototype);

//Vamos a heredar propiedades y métodos de las personas poniendo Personas como prototype de Agente.
Agente.prototype = Object.create(Persona.prototype); // Un objeto vacio cuyo protipo es una persona.
Agente.prototype.constructor = Agente;

Agente.prototype.saluda = function(){
    console.log('Hola soy Agente y me llamo ', this.nombre);
}

const smith = new Agente('Smith');

smith.saluda();
luis.saluda();

console.log(Agente.prototype);


// Herencia multiple -----------------------------------------------------------------------------

//La herencia multiple que podemos darle a los objetos. 

function Superheroe(){
    this.vuela = function(){
        console.log(this.nombre, 'vuela');
    }
    this.esquivaBalas = function(){
        console.log(this.nombre, 'esquiva balas');
    }
}

Superheroe.prototype.vuelaMasRapido = function(){
    console.log(this.nombre, 'vuela mas rapido');
}

// copiamos las propiedades de Superheroe al protipo del agente.
Object.assign(Agente.prototype, new Superheroe());


// Si tuviera alguna funci'on declaradas como prototipo necesitamos también asignarle los protipos.
Object.assign(Agente.prototype, Superheroe.prototype);

smith.vuela();
smith.vuelaMasRapido();

console.log(Agente.prototype);