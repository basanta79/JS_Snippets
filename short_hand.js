
const type = 'p';

const template= {
    id: '123',
    [`type${type}`]: 'lorem ipsum',
    [type]: 'hola',
    ['type2' + type]: 'caracola',
};

console.log(template);
