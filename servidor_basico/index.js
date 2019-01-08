// cargamos la libreria http 
const http = require('http');
const Chance = require('chance');

const chance = new Chance();

// defenir un servidor
const server = http.createServer(function (request, response){
    response.writeHead(200,{
        'content-type': 'text/html'
    });
    response.end(`wake up, <b>${chance.name()}</b>...`);
});

// arancar el servidor
server.listen(1337, '127.0.0.1');
console.log('servidor arrancado en http://127.0.0.1:1337');

