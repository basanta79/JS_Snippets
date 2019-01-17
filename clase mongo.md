# **[Mongodb] - comandos de uso de colecciones**

## Bibliografias
https://docs.mongodb.com
https://docs.mongodb.com/v3.2/text-search
https://docs.mongodb.com/v3.2/tutorial/specify-language-for-text-index


**show dbs**
Visualiza las bases de datos que tenemos.


**use <database>**
Le decimos al servidor que utilice la base de datos que le pasamos como parametro.
No es necesario que exista, cuando ejecutamos este comando lo que le decimos es que queremos utilizar esa base de datos. 
ej:  
```cmd
> use text
> switched to db text
```

**show collections**
Lista las colecciones o tablas que compoenen la base de datos que estamos utilizando.


**insertar**
```shell
db.agentes.insert(_object_to_insertar_)
```

**buscar**
```shell
db.agentes.find()  //hace una busqueda de todos los documentos.
```
Entre parentesis podemos definir los filtros de busqueda.
```shell
db.agentes.find({name:"jhon"})
```
en documentacion podemos ver que podemos utilizar expresiones regualres, etc.

---
**buscar ordeandamente**
```shell
db.agentes.find().sort({age: -1})
```

---
**descargartar resultados**
```shell
db.agentes.find().skip(1).limit(1)
db.agenes.findOne()  //igual que limit(1)
```

---
**busquedas geoespaciales**
Para ello creamos un indice cuya porpiedad sea ```'2dsphere'```. luego podemos realizar uns consulta de proximidad.
```shell
db.productos.find({
    location: {
        $nearSphere:{
            $geometry:{
                type: 'Point',
                coordinates: [longitude, latitude]
            },
            $maxDistance: meters
        }
    }
})
```

---
**upgrade**
```shell
db.agentes.upgrade() //Hace una actualización de un documento, pero si no se pone unmodificador ```$set``` lo que hará será sustituir el documento entero
```
```shell
db.agentes.upgrade({_id: xxxx}, $set: {age: 38})
```

----
**Eliminar collection**
```shell
db.collection.drop
```
----
**Creacion de indices**
```shell
db.agentes.createindex( {name:1, age:-1})
```
Pueden hacer mas de un campo que sean indice.
```smith
db.agentes.createIndex({title:'text', author:'text'})
 // y para buscar
db.agentes.find({$text:{$search: 'smith jones'}});
```

---
**Obtención de indices**
```shell
db.agentes.getIndexes()
```

---
**Pre tranascciones. Operacion atómica**
```shell
db.agentes.findAndModify({
    query: {name: "Brown"},
    update: {$inc: {age:1}}
})
```

---
**Mongoose**
ODM de mongodb. Object Document Mapper


