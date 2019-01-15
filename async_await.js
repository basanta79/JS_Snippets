'use strict';

// funcion que retirna una promesa
function sleep(ms){

    return new Promise((resolve, reject) => {
        // Aqui ponemos el código que hará resolver o no la promesa.
        setTimeout( () => {
            //resolve(56)
            reject(new Error('fatal'));
        }, ms );
    });
};


//consumidor la promesa
//const promesa = sleep(2000);
// IIFE - Inmediatelly invoked function expression
( async () => { //Esta función devuelve una promesa
    console.log('empiezo');
    
    const resultado = await sleep(2000);
    console.log(resultado);

    for(let i=0 ; i<5 ; i++){
        console.log('espero 1 segundo');
        await sleep(1000);
    }

    console.log('fin');

})().catch(err => { // Este catch no solo recoje errores de la promesa, si no que ademas también recoje otros errores sincronos.
    console.log(err);
});




