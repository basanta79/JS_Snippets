
const key = 'status';

const template = {
    id: 24,
    text: 'lorem ipsum',
    key,
    module: {
        rules: [
            {
                test: /\.css$/
            }
        ]
    }
};

/**
 * DESTRUCTURING DE OBJETOS
 * Con esta instrucción definimos dos variables nuevas y le asignamos como valor de las variables
 * el valor de las claves que hay dentro del objeto tamplate. Si hay alguna clave que no existe
 * aparece con valor undefined.
 */
const {id, text} = template;

console.log(id, text);

const {module: {rules}} = template;

console.log(rules);


/**
 * Destructuring de arrays
 */

const data = [ 1, 2, 3, 4, 5, 6, 7];

const [first, second, ,fourth] = data;

console.log(first, second, fourth);


