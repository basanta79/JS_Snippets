
## Bibliografia

- you don't know JS


http://es6-features.org

## Generalidades

límite de memoria: 1Gb, si se usa mas lo ideal es separarlo en webworkers.
ECMAScript 6



## Hoisting en JS
Se trata del contexto de nuestras variables o en ingles scope. Donde es visible esa variable.
si definimos una variable con ```var``` es lo mismo que si la declaramos al inicio de la funcion, incluso aunque esté definida dentro del if. (Ver ejemplo hoisting.js)
```let``` o ```const``` no hacen hoisting.

## Gestion de errores
Para la gestión de errores en código síncrono utilizaremos try catch.
Para la gestión de errores en código ASINCRONO utilizaremos callbacks.

## JSON
```JSON.stringify(empleado)``` Para convertir un objeto en un literal de texto
```JSON.parse(textoJSON)``` Para convertir desde un literal a un objeto.

## use Strict
El modo estricto. 
Las variables deben ser decalaradas. Una variable mal escrita la crea global.

## Funciones
Son objetos. De hecho TODO menos los objectos primitivos son opbjetos.
    *Funcion declarativa*
La palabra ```function``` al inicio de la línea define que estamos declarando una función. Y HACEN HOISTING
    *Funcion como variable*
Si definimos una función como variable ```var suma=function(...)``` NO HACE HOISTING
    *Función como método
``` 
var calculadora = {
    suma : function (...) {...},
    mult : function (...) {...}
}
```
    *palabra new*
Utilizamos new para crar objetos que tengan el formato de una función por ejemplo. ver instancias.js.

## Callbacks
Son referencias a funciones que se pasan a las funciones para que cuando terminan una determinada tarea o cuando acaben se llame a esa función de callback. 
Esto permite llamar a funciones que no bloquean la ejecución.
TODOS los usos de I/O como puertos de comunicaciones, escritura a fichero, bases de datos, etc. deben ser asincronos. para dejar libre la ejecución.

## Truthy Falsy
En Js todo dispone de un valor verdadero o falso. ver boolean.js
Valores Falsy:
- false
- 0 (cero)
- "" (cadena vacia)
- null -> solo es quevialentes en la comparación consigo mismo
- undefined -> solo es equivalente en la comparación consigo mismo
- NaN (not a number) -> no es equivalente con nada, ni siquiera consigo mismo.
Todo lo demàs es truthy. Icluido empty functions, empty arrays y empty objects.
Es evidente que si comparamos dos valores falsos el resutlado es true.

Complicaciones:
Cuando hacemos comparaciones de elementos que no son del mismo tipo lo que hace javascript es convertirlos a un tipo que pueda comparar y como ese cast es automático a veces el resultado es inesperado. Por ejemplo
Un array es una instancia de object y por lo tanto existe. si hay una string de por medio los convierte a string, etc.

### Comparacion estricta
Si definimos las cmparaciones con tres igualdades la comparación es doble, primero compara el tipo y si es diferente no sigue, en caso de que el tipo sea el mismo entonces compara su valor.

## This
This hace referencia al objeto que llama (contexto interno) si vemos el ejemplo this.js veremos que cuando ejecutamos ```todoterreno.cuantasRuedas()``` el objeto que llama es todoterreno, mientras que si la función la llamamos de forma de variable, la función queda desligada del objeto, en realidad cuando la hemos llamado desde ```pintaRuedas()``` no hay objeto que llame a esa funcieon es como un puntero a una función externa. 
Otra forma es mirar los parentesis que indican si es un objeto ejectubale o es una refernecia. y miramos el objeto que llama a esos parentesis y veremos si existe un parametro ruedas. Por ejemplo ```setTimeout(Todoterreno.cuantasRuedas, 2000);```. Esto es lo mismo que asignar la función a una variable.

Para evitar esto, y garantizar que el objeto this corresponde al objeto instanciado. utilizamos la funcion ```bind()``` que tienen todos los objetos ya que es un prototipo. Y le pasamos por parametros el objeto que queremos que sea this.
OJO: Esto crea una función nueva!!!!

La misma funcionalidad y uso de ```bind(thisArgs)``` podemos usar ```call``` y ```apply``` en call hayq ue poner todos los argumentos separados por comas y apply se le pasan en forma de array. Pero ```call``` y ```apply``` ejecutan las funciones.

Tambien podemos definir el bind al final de la definición para que esa funcieon lleve siempre el bind. ver la definición de Coche2. Con esto no hace falta decalrar el bind cada vez que asignamos esa función.

Tambien podemos definir las funciones como arrow functions, sin declarar el bind al final o en las declaraciones. Ver la definición de Coche3. La arrow function siempre heredan el this y lo llevan consigo.

## Closures
que una funcion tenga acceso a su contexto externo.
closure es el contexto externo en donde creamos una función.
Ver ejemplo de closure.js

### construccion
una funcion que devuelve una función
```
function CreaClosure(valor){
    return function(){
        return valor;
    }
}
```

## Prototipos
todos los objetos disponen de prototipos, como objetos todos van herendando de otro objeto y asi sucesivamente hasta llegar a ```Object```. Los prototipos son formas de añadir metodos a un objeto sin tener que variar el objeto en si. y ademas esto se transmite a través de la herencia.


## Clases
La sintaxis de clases hace lo mismo exactamente que lo que se hace con protipos, de hecho es una forma mas sencilla visualmente de formar la cadena de prototipos. aunque està mas capada.

## Control errores
ver codigo en ejemplos/version_modulo
