
Express es un web framework muy liviano.

1. Instalamos **express generator** que es un generador de la estructura base y mínima de una aplicación express ```npm install express-generator -g```
2. Creamos una aplicación express con plantillas ejs para la parte web. la pantilla puede cambiarse posteriormente. ```express [nombre app] -ejs```
3. Nos movemos a la carpeta de la aplicación y creamos un paquete npm ```npm init -y```, el modificador ```-y``` hace que la creación del paquete npm la cree con todos los valores por defecto y no nos pregunte nada.
4. Instalamos las dependencias ```npm install```
5. Instalamos los paquetes que necesitemos para nuestro proyecto
6. Arrancamos el servidor de test. Podemos hacerlo usando: DEBUG=nodeapi:* npm start para iniciar


Utiliza modelo MVC


## Ejecucion de una aplicacion Express
desde el package JSON directamente nos dicen que tenemos que ejecutar 

## Servir ficheros estaticos
```js
app.use('/facturas', express.static('d:/facturas'))
```

## Recibiendo parametros
ver ejemplo en nodeapi para mas info

### Parametros en ruta
Estos parametros los encontramos en req.param
Para definir los parametros en ruta se definen con dos puntos en la ruta, estos parametros son **obligatorios**
```js
router.get('/paramenruta/:algo', (req,res,next)=> {});
```
En cambio si ponemos una interrogación al final definimos ese parametro como opcional.
```js
router.get('/paramenrutaopcional/:algo?', (req,res,next) => {});
```
También podemos definir una expresión regular para definir un filtro de validación, se pone entre parentesis después del identificador de la variable.
```js
router.get('/param/:id([0-9]+)', (req,res,next) => {});
```
Parametros separados por barras inclinadas
```js
router.get('/param/:id([0-9]+)', (req,res,next) => {});
```
Parametros en query string, definidos en barra de direcciones separados por interrogante.
```js
outer.get('/enquerystring', (req,res,next) => {});
```

## Parametros en body
Es información que esta en el body del mensaje http con un método post, pero no get. 
Los parametros los encontraremos en req.body

## metodos de respuesta
res.download() descarga de un fichero.
res.send - método generico, convierte en funcion del contenido y con un Content-Type adecuado.
res.status(404).send() - lo mismo especificado un c'odigo de retorno.
res.json() - metodo de devolver un JSON.
res.redirect - redirigir. indica al navegdor que realice una nueva petición a otro sitio. 
res.render - renderizar una vista, y acepta un parametros opcional 'locals' para dar variables.
res.sendFile - enviamos el fichero y listo, sin cabecera ni nada.
res.set - establece los valores de la cabecera.

## middlewares de terceros
expressjs.com/en/resources/middleware.html -> los mas usados


## Template engines
Express por defecto utiliza Jade, pero podemos cambiarlo por ejs

variables para toda la aplicacion: 
```
app.global.titulo = 'Anuncios';
```
varibales locales solo para esa pagina
```
res.locals.saludo('variable local');
```

Las varibales se llaman poneindo los nombres de las variables entre símbolos ```<%= nombre variable %>``` esta llamada escapa los tags html, para que no escape utilizaremos ```<%- nombre variable %>```

Podemos usar include ```<% include ruta %>``` 

Podemos poner lógica javascript sin el = ni el -
```
<% if (condicion.estdo) %>

```

## Promesa
Un objeto que contiene una función que no ha acabado pero que lo hará.
Estados= pendientes (pending), completadas ok (fulfilled), completadas ko (rejected).

si llegamos a un codigo suscrito a una promesa ya finalizada se ejecutar'a igualmente.
```
promes1()
.then(promesa 2)
.then(promesa 3)

.catch(function (err))
```
Podemos también esperar a todas las promesas
```
Promise.all
```
También podemos poner un array de tareas y ejecutarse en cuanto una estuviera resuelta.
```
Promise.race
```
Tambien podemos crear una promesa aceptada
```
Promise
```

## Async/await
Permite consumir promesas sin el then.
Pero bloquea la ejecución hasta que se cumple.

async es un modificador que convierte cualquier funcion en una función que devuelve una promesa.


