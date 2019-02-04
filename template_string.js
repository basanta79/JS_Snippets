
const foo = (nombre = '?????', age = 0) => (
    `
    <div>
        <header> ${nombre} </header>
        <p> ${age} </p>
    </div>
    `
);


console.log(foo()); 



const fooString = (string, ...arg) => {
    return`
    ${string[0]}
    <div>
        <header> ${arg[0]} </header>
        <p> ${arg[1]} </p>
    </div>
    ${string[2]}
    `
};

let name = 'Pablo';
let surname = 'López';
console.log(fooString`<main>${name}${surname}<main>`); 


