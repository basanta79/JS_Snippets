'use strict';

// funcion que retirna una promesa
function sleep(ms){

    return new Promise((resolve, reject) => {
        // Aqui ponemos el código que hará resolver o no la promesa.
        setTimeout( () => {
            resolve(56)
            //reject(new Error('fatal'));
        }, ms );
    });
};


//consumidor la promesa
const promesa = sleep(2000);

console.log(promesa);

promesa.then( (data) => {
    console.log('la promesa se completó con éxito', data);
    return sleep(1000);
}).then(data => {
    console.log('ha pasado otro segundo');
})
.catch((err) => {
    console.log('la promesa se rechazó, con error: ' , err)
});