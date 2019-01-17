'use strict';

const axios = require('axios');

// consulta hhtp a un api
axios.get('http://localhost:3000/apiv1/agentes').then( httpResponse =>{
    console.log(httpResponse.data);
}).catch(err => {
    console.log('hubo un error ', err);
});

