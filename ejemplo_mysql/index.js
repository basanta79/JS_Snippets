'use strinct';

// cargar el driver
const mysql = require('mysql');
// crear una conexión
const conexion = mysql.createConnection({
    host:'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
})

// conectar
conexion.connect();

//hacer una consulta a la base de datos
conexion.query('SELECT * FROM agentes', (err, filas, campos) => {
    if (err){
        console.log('Error: ', err);
        process.exit(1); // Mejor que return por que si no dejaria la conexión abierta;
    }
    console.log(filas);
    conexion.end();
    
});