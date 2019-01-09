'use strict';

// constructor de objetos
function Coche(ruedas){
    this.ruedas = ruedas;
    this.cuantasRuedas = function(){
        console.log(`tiene ${this.ruedas} ruedas`);
    }
}

function Coche2(ruedas){
    this.ruedas = ruedas;
    this.cuantasRuedas = function(){
        console.log(`tiene ${this.ruedas} ruedas`);
    }.bind(this);
}

function Coche3(ruedas){
    this.ruedas = ruedas;
    this.cuantasRuedas = () => {
        console.log(`tiene ${this.ruedas} ruedas`);
    };
}

const todoterreno = new Coche(4);
const todoterreno2 = new Coche2(5);
const todoterreno3 = new Coche2(6);

const pintaRuedas = todoterreno.cuantasRuedas;

todoterreno.cuantasRuedas();
//pintaRuedas(); //this es undefined


setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000);
setTimeout(todoterreno2.cuantasRuedas, 2000);
setTimeout(todoterreno3.cuantasRuedas, 2000);

