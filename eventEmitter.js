'use strict';

const EventEmitter = require('events');

//creamos un emisor de eventos.
const emisor = new EventEmitter();

emisor.on('llamada telefono', (quien) => {
    /* if (quien === 'madre'){
        return;
    } */
    console.log('ring ring ring');
});

emisor.once('llamada telefono', (quien) => {
    console.log('brr brr brr');
});

emisor.emit('llamada telefono', 'madre');
emisor.emit('llamada telefono', 'madre');
emisor.emit('llamada telefono', 'madre');