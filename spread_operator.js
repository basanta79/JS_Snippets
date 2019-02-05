const array1 = ['nombre1', 'nombre2'];
const array2 = array1;

/**
 * Aunque sean const a los arrays y los objetos los podemos modificar.
 * Y la modificació de array2 modifica array1 por que en realidad estamos asignando 
 * el puntero.
 */
array2.push('nombre3');

console.log(array1);
console.log(array2);


array3 = array1.concat();
array4 = [].concat(array1);
array2.push('nombre4');

console.log(array2);
console.log(array3);
console.log(array4);

/**
 * En este ejemplo lo que conseguimos es un array en el primer parametroy dos parametros mas.
 */
array5 = [array1, 'nombre4', 'nombre5'];
console.log(array5);

/***
 * Los tres puntos ademas de definir el resto de parametros. lo que hace es descomponer el array
 * En el siguietne ejemplo el spread operator lo que hace es que despliega el array y luego concatena
 */
array6 = [...array1, 'nombre4', 'nombre5'];
console.log(array6);

/**
 * Si definimos una función con un parametros spread operator es lo mismo que decir que leemos el resto de parametros.
 * Si en la llamada ponemos un array solo pasaremos un parametro, mientras que si en la llamada utilizamos
 * un spread operator lo que conseguimos es desplegar ese array en diversas variables.
 */
const printNames= (...param)=> {
    console.log(param);
}
printNames(array1, 'pepe', 'juan');
printNames(...array1, 'pepe', 'juan');


/**
 * Nos pasa con los objetos lo mismo que con los arrays. Asignamos las referencias.
 */
const state = {
    loading: true,
    text: 'lorem ipsum',
};

/**
 * Si haemos esto que se muestra abajo,lo que hacemos es asignar una variable array a otro por referencia.
 */
const stateForm = Object.assign(state, {nuevo:'hola'}, {text: '****'})

console.log(state);
console.log(stateForm);

/**
 * Pero si creamos el object assing desde un objeto vacio no se asigna por referencia por que estamos creando un 
 * objeto nuevo.
 */
const stateForm2 = Object.assign({}, state, {nuevo:'hola'}, {text: 'RRRR'})
console.log(state);
console.log(stateForm2);

/**
 * Lo mismo nos pasa con un spread operator. nos acaba hacer una copia del objeto.
 */
const stateForm3 = {...state, nuevo:'hola', text: '????'}
console.log(state);
console.log(stateForm3);
