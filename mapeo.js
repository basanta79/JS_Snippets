const contactos = [
    {nombre: 'nombre1', age: 37},
    {nombre: 'nombre2', age: 41},
    {nombre: 'nombre3', age: 23},
    {nombre: 'nombre4', age: null,},
];
console.log('-----------ORIGIN-------------');
console.log(contactos);

/**
 * Esta función hace una iteración sobre todos los elementos de la array. 
 * En cada iteración aplica lo que se define en la función que tenemos por parametro
 */
const mapeo = contactos.map( (item, index) => ({
    nombre:'****',
    age: item.age,
}))
console.log('-----------MAP-------------');
console.log(mapeo);

/**
 * Esta función hace una iteración con todos los elementos del array. Si en cada iteración devolvemos true el objeto que itera se qued dentro del array
 */
const filtro = contactos.filter( (item, index) => {
    return item.age===41;
})
console.log('-----------FILTER-------------');
console.log(filtro);


const reduce = contactos.reduce(function(acum,item) {
    return acum = acum - item.age
},0)
console.log('-----------REDUCE-------------');
console.log(reduce);

const final= contactos
    .map( (item, index) => ({ nombre: '****', age: index + 30}))
    .filter( item => item.nombre != undefined)
    .reduce( (acum, item) => {return acum = acum + item.age}, 0);

console.log('-----------FINAL-------------');
console.log(final);