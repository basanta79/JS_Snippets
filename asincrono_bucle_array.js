'use strict';

const async = require('async');

console.log('empiezo');


// funcion que escribe un texto en la conosla tras dos segundos.

function escribeTras2Segundos(texto, callback){
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

// bucle asincrono en serie
// Llamamos a uns funcion con un array en serie.
function serie(arr, fn, callbackFinal){
    
    if (arr.length==0){
        callbackFinal();
        return;
    }
    fn(`texto ${arr.shift()}`, () => { //fn en este punto es escribeTras2Segundos
        serie(arr, fn, callbackFinal);
    });

}

/* serie([1,2,'tres',4,5],escribeTras2Segundos, function(){
    console.log('termino');
}) */

async.concatSeries([1,2,'tres',4,5],escribeTras2Segundos, function(err,resultados){
    if (err){
        console.log('hubo un error '+err);
    }else{
        console.log('termino');
    }
})

