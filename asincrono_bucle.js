'use strict';




console.log('empiezo');


// funcion que escribe un texto en la conosla tras dos segundos.

function escribeTras2Segundos(texto, callback){
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

// bucle asincrono en serie
// Llamamos a uns funcion n veces en serie.
function serie(n, fn, callbackFinal){
    if (n==0){// He terminado
        callbackFinal();
        return;
    }
    n-=1;
    fn(`texto ${n}`, () => { //fn en este punto es escribeTras2Segundos
        serie(n, fn, callbackFinal);
    });

}

serie(5,escribeTras2Segundos, function(){
    console.log('termino');
})


