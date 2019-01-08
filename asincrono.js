'use strict';

console.log('empiezo');


// funcion que escribe un texto en la conosla tras dos segundos.

function escribeTras2Segundos(texto, callback){
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

// Este grupo de funciones se ejecuta practicamente a la vez por que no se esperan a que acabe.

escribeTras2Segundos('texto1', function(){
    // Y cuando termines haz esto.
    console.log('termino');
});

escribeTras2Segundos('texto2', function(){
    // Y cuando termines haz esto.
    console.log('termino');
});

escribeTras2Segundos('texto3', function(){
    // Y cuando termines haz esto.
    console.log('termino');
});


// Este grupo espera 2 segundos cada texto

escribeTras2Segundos('texto10', function(){
    escribeTras2Segundos('texto20', function(){
        escribeTras2Segundos('texto30', function(){
            console.log('termino');
        });
    });
});







