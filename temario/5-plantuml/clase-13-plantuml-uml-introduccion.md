# PlantUML - UML - Parte 1

## Índice
- [¿Qué es UML?](#que-es-uml "Ir a ¿Qué es UML?")
- [Diagrama de Objetos](#diagrama-objetos "Ir a Diagrama de Objetos")
  - [Relaciones entre objetos](#relaciones "Ir a Relaciones entre objetos")
  - - [Dependencia](#relaciones-dependencia "Ir a Dependencia")
    - [Extensión/Herencia](#relaciones-extension "Ir a Extensión/Herencia")
    - [Implementación](#relaciones-implementacion "Ir a Implementación")
    - [Composición](#relaciones-composicion "Ir a Composición")
    - [Agregación](#relaciones-agregacion "Ir a Agregación")
  - [Cardinalidad](#cardinalidad "Ir a Cardinalidad")
- [Recursos](#recursos "Ir a Recursos")
- [Bibliografía](#que-es-uml "Ir a Bibliografía")

---


![UML](../../images/uml-img.jpg "UML")


---

## ¿Qué es UML?
<div id="que-es-uml"></div>

UML o Unified Modeling Language o Lenguaje Unificado de Modelado, es uno de los lenguajes de modelado de sistemas de software más conocidos actualmente. Es un lenguaje gráfico para visualizar, graficar, contruir y documentar un sistema en todas sus vertientes. Se usa a modo de plano para diseñar y construir sus funciones, variables, entradas, salidas, procesos...

## Diagrama de Objetos
<div id="diagrama-objetos"></div>

Un **diagrama de objetos** es una representación gráfica de los distintos componentes abstractos de un sistema y la relación entre ellos en un momento dado. Dentro del UML, se establece como un tipo de *diagrama estructural*, dando a entender que gracias a este tipo de diagramas vamos a poder definir la arquitectura de nuestro sistema.

En la programación orientada a objetos (POO), se establece una relación intrínseca entre objetos abstractos y clases programadas. También se pueden utilizar para representar una base de datos.


### Sintáxis básica

Podemos empezar a crear nuestros objetos con la palabra reservada `object`:

```
@startuml
object primerObjeto
object "Mi segundo Objeto" as o2
@enduml
```

### Relaciones entre objetos
<div id="relaciones"></div>

![Relaciones UML](../../images/relations-in-uml.png "Relaciones en UML")

|**Tipo**|**Símbolo**|**Finalidad**|
|--------|:-----------:|-------------|
|Extensión|<\|--|Especialización de una clase en una jerarquía|
|Implementación|<\|..|Realización de una interfaz mediante una clase|
|Composición|*--|La parte no puede existir sin el todo|
|Agregación|o--|La parte puede existir independientemente del todo|
|Dependencia|-->|El objeto utiliza otro objeto|
|Dependencia|..>|Una forma más débil de dependencia|

#### Dependencia
<div id="relaciones-dependencia"></div>

La relación de **dependencia** es la relación más básica y se podría entender como la base de todas las relaciones. Indica que un objeto necesita de otro objeto para lograr un comportamiento deseado en un momento de tiempo.

**Ejemplo**
```
@startuml
object Mecanico
object Herramienta

Mecanico --> Herramienta  : usa
@enduml
```

#### Extensión/Herencia
<div id="relaciones-extension"></div>

La relación de **extensión** describe que un elemento base (un objeto, un caso de uso, etc...) incorpora de manera implícita el comportamiento de otro elemento. Este otro elemento es el que va añadir un comportamiento extra dependiendo de aspectos como reglas de negocio (lo que te describe el cliente), validaciones, etc...
Se podría decir que el objeto/caso de uso dónde se origina esta relación *extiende* o amplía el comportamiento del elemento base.

**Ejemplo**
```
@startuml
object CuentaBancaria
object CuentaAhorros
object CuentaInversiones

CuentaBancaria <|-- CuentaAhorros
CuentaBancaria <|-- CuentaInversiones
@enduml
```

#### Implementación
<div id="relaciones-implementacion"></div>

La relación de **implementación** muestra el paso de un ente abstracto a uno concreto. En programación podemos replicar este comportamiento mediante el uso de interfaces. Con esto conseguimos que el elemento raíz transfiera el comportamiento a los hijos.

**Ejemplo**
```
@startuml
object Vehiculo
object Coche
object Barco
object Avion

Vehiculo <|.. Coche
Vehiculo <|.. Barco
Vehiculo <|.. Avion

Vehiculo : + run()
Coche : + run()
Coche : - numRuedas = 4
Barco : + run()
Barco : - tieneVelas = true
Avion : + run()
Avion : - altitud = 10000ft
@enduml
```

#### Composición
<div id="relaciones-composicion"></div>

La relación de **composición** describe cuando un objeto adicional no puede existir sin su objeto base.

**Ejemplo**
```
@startuml
object Persona
object Cabeza
object Pierna
object Mano

Persona *-- Cabeza
Persona *-- Pierna
Persona *-- Mano
@enduml
```

#### Agregación
<div id="relaciones-agregacion"></div>

La relación de **agregación** explica cuando un objeto adicional puede existir sin su objeto base.

**Ejemplo**
```
@startuml
object Libreria
object Libro

Libreria o-- Libro
@enduml
```

### Cardinalidad o multiplicidad de una relación
<div id="cardinalidad"></div>

La **cardinalidad** o **multiplicidad** de una relación indica cuantas veces va a ocurrir una relación entre dos objetos. Esta cardinalidad se indica únicamente y si es necesario a cada lado de la relación, así que habrá como máximo 2 por relación.

Las posibles relaciones son las siguientes:


|**Cardinalidad**|**Significado**
|:--------:|-----------|
|1|Uno y sólo uno (también puedes poner cualquier número para indicar que sólo ocurres ese número de veces)|
|0..1|Cero o uno|
|0..*|Cero a muchos|
|1..*|Uno a muchos|
|n..m|Desde *n* hasta *m*|

**Ejemplo de cardinalidad**
```
@startuml
object Cliente
object CarritoCompras
object Pedido
object InfoEnvio
object DetallesPedido

Cliente "1" *-- "0..*" CarritoCompras
Cliente "1" *-- "0..*" Pedido
Pedido "1" *-- "1" InfoEnvio
Pedido "1" *-- "1" DetallesPedido
@enduml
```

En este ejemplo, vemos que un **cliente** puede tener **muchos pedidos**, pero **un pedido concreto** solo puede ser de **un cliente**.



Adicionalmente, se puede **añadir una etiqueta a la relación** con `:` y la cardinalidad se puede añadir entre comillas `""` al lado que quieras de la relación. Aquí tenéis un resumen con la sintáxis:

```
@startuml
object Objeto01
object Objeto02
object Objeto03
object Objeto04
Objeto01 o-- "4" Objeto02
Objeto03 .. Objeto04 : Etiqueta
@enduml
```

Para saber más sobre los diagramas de objetos, podéis ver más en la documentación oficial -> [Enlace](https://plantuml.com/es/object-diagram "Ir a PlantUML - Diagrama de Objetos")

---

## Recursos
<div id="recursos"></div>

- [Editor PlantUML Online](https://shorturl.at/elELo)
- [Editor PlantUML Oficial](https://editor.plantuml.com)


## Bibliografía
<div id="bibliografia"></div>

- [Guía de Referencia de PlantUML](https://pdf.plantuml.net/PlantUML_Language_Reference_Guide_es.pdf)














