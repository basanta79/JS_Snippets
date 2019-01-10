'use strict';

const fs = require('fs');
const path = require('path');

function versionModulo(nombreModulo, callback){
    /* const fichero=path.join(__dirname, 'node_modules', nombreModulo,'package.json');
    console.log(fichero); */
    const fichero=path.join('node_modules', nombreModulo,'package.json');
    console.log(fichero);
    fs.readFile(fichero, 'utf-8', (err, data) => {
        if (err){
            callback(err);
            return;
        }
        let packageObject;
        // esta función es sincrona por lo que utilizaremos try catch
        try{
            // Las variables definidas dentro del try..catch no se ven fuera
            // const packageObject = JSON.parse(data);  //esto da error dentro del try..catch
            packageObject = JSON.parse(data);
        }catch(err){
            callback(err);
            return;
        }
        

        //console.log(packageObject);
        callback(null, packageObject.version);
    })
}

//En un callback con parametros lo primero son los posibles errores
versionModulo('chance', (err, version) => {
    if(err){
        console.log('hubo un error', err);
        process.exit(1);
        //return;
    }
    console.log(`La version del modulo chance es ${version}.`);
});