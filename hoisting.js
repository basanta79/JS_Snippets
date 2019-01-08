var pinto = 'myvalue';

function pinta(){
    console.log('pinto',pinto);
    var pinto = 'otro valor'; // La asignación no la mueve solo mueve la definición. se pinta undefined
}

function pinta2(){
    console.log('pinto 2',pinto);
    //let pinto = 'otro valor'; 
}


pinta();
pinta2();
