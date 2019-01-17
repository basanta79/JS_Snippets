## Bibliografia

http://node.green

## gestor paquetes:
- chocolatey
- scoop.sh

nvm !!!!

nvm list
nvm install <version>

## Crear un paquete de node
```npm init```

## Para instalar una libreria dentro del paquete
```npm install __nombre del paquete__``` Por defecto se instala en la aplicacion local.
```npm install __nombre del paquete__``` Si queremos instalarlo de forma global.

## Para visualizar el repositorio de una palicación
```npm repo __nombre de aplicacion__```

## Evemnt looop
Nodejs utiliza un solo hilo. Hay cosas que pueden añadir threads pero la filosofia es que es un solo hilo.
dispone un bucle infinito que podemos llamar ```event loop``` cada vez que se ejecuta realiza todas las funciones que hay en el bucle, dejando los callbacks pendientes para la siguiente vuelta y cuando se hayan acabado.



## Process
Es un objeto de node. 

Dipsone de muchas propiedades como:
- ```process.platform```

Dispone de metodos útiles como:
- ```process.exit(int)``` -> para node con un codigo 
- ```process.nextTick(callback)``` -> añade un callback al inicio del siguiente event loop

Dispone de eventos a los que nos podemos suscribir
- ```process.on('exit', callback)``` 

## Modulos
Los modulos en node se basan en CommonJS
Los modulos uasn exports para exportar
Quien quiera usar un modulo usa require
Require es sincrona
cada modulo es un singleton (una sola instancia en memoria, siempre devuelve los mismos datos, no devuelve objetos nuevos.)
Ver ejemplo de modulos
Orden de busqueda:
- modulo del core
- file system ( ./ ,  /  ,  ../)
- carpeta node local

Si tenemos rutas complicadas, podemos evitarlo utilizando una variable de entorno ```NODE_PATH``` que esta en el sistema
NODE_PATH=lib node index.js

También podemos utilizar el package.json y definir una dependencia. para ello se puede buscar mas info.

También podemos hacer un paquete y publicarlo en npm. Nos abrimos una cuenta y listo.

## Base de datos
Modulos de terceros. Lo cargamos con npm

* npm install mysql
* npm install mongoskin
* npm install mongodb
* npm install mongoose

Un ORM puede hacer la aplicación mas lenta en función de los usos. (mogoose para mongoDB).

BBDD no relacional:
 * si no hace falta gestionar relaciones
 * si no tenemos transaccinoes
 * no es necesario convertir objetos a tablas.

 