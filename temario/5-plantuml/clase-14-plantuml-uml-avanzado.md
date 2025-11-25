# PlantUML - UML - Parte 2

## Índice
- [Diagrama de Casos de Uso](#diagrama-casos-uso "Ir a Diagrama de Casos de Uso")
  - [Casos de Uso](#dcu-casos-uso "Ir a Casos de Uso")
  - [Actores](#dcu-actores "Ir a Actores")
  - [Paquetes](#dcu-paquetes "Ir a Paquetes")
  - [Otra sintáxis](#dcu-other "Ir a Otra sintáxis")
- [Diagramas de Estado](#diagrama-estados "Ir a Diagrama de Estado")
- [Recursos](#recursos "Ir a Recursos")
- [Bibliografía](#que-es-uml "Ir a Bibliografía")

---

## Diagrama de Casos de Uso
<div id="diagrama-casos-uso"></div>

Un diagrama de **casos de uso** es una representación visual usada para representar las **interacciones entre los actores del sistema y el propio sistema**. 
Estos diagramas son esenciales para especificar los requisitos funcionales del sistema y comprender cómo interactuarán los usuarios con él. 

### Casos de uso
<div id="dcu-casos-uso"></div>

Un caso de uso es una funcionalidad que va a añadir valor a tu sistema.

Para definir en PlantUML un caso de uso, se puede hacer de dos formas:
- Escribir el caso de uso entre paréntesis. Ejemplo: (Caso de Uso 1)
- Usar la palabra reservada `usecase`. Ejemplo: usecase Caso de Uso 1

También puedes poner un alias al caso de uso con la palabra `as`.

**Ejemplo**
```
@startuml

(CasoUso 1)
(CasoUso 2) as (CU2)
usecase CU3
usecase (Otro\nCasoUso) as CU4

@enduml
```

#### Descripción

Se puede añadir más texto y separadores a los casos de uso usando la siguiente sintáxis:

```
@startuml

usecase CU1 as "Puedes usar
varias líneas para definir tu caso de uso.
También puedes añadir separadores
--
Es posible usar mútliples separadores.
==
Y puedes añadir títulos:
..Conclusión..
Esto permite una descripción más larga."

@enduml
```


### Actores
<div id="dcu-actores"></div>

Los actores van definir qué tipo de usuarios va a interactuar con tu sistema o con los casos de uso de tu sistema.

Se pueden escribir en PlantUML de dos maneras:
- Entre dos puntos `:`. Ejemplo: :Actor1:
- Usando la palabra reservada `actor`. Ejemplo: actor Actor2

También puedes cambiar el estilo del actor para variar de la versión *palística* que viene por defecto (se puede mezclar):
- skinparam actorStyle awesome
- skinparam actorStyle hollow

**Ejemplo**
```
@startuml

:User:

skinparam actorStyle awesome
"Main Admin" as Admin

skinparam actorStyle Hollow
"Content Editor" as Editor

"Use the application" as (Use)
:User: --> (Use)

Admin --> (Admin the application)

usecase "Edit the content" as Edit
Editor --> Edit
Admin --> Edit

@enduml
```

### Paquetes
<div id="dcu-packages"></div>

Puedes usar la palabra reservada `package` para reunir casos de uso dentro de un contexto específico (paquete) del sistema.

**Ejemplo**
```
@startuml
left to right direction
actor Cliente as cli
rectangle Profesional {
  actor Chef as c
  actor "Crítico de Cocina" as cc
}
package Restaurante {
  usecase "Comer" as UC1
  usecase "Pagar" as UC2
  usecase "Beber" as UC3
  usecase "Reseñar" as UC4
}
cc --> UC4
cli --> UC1
cli --> UC2
cli --> UC3
@enduml
```

### Otra sintáxis
<div id="dcu-other"></div>

#### Cambiar dirección flechas

Puedes cambiar la dirección de las flechas de la siguiente manera:

```
@startuml
:usuario: -left-> (Caso Izquierda)
:usuario: -right-> (Caso Derecha)
:usuario: -up-> (Caso Arriba)
:usuario: -down-> (Caso Abajo)
@enduml
```

#### Etiquetas en las relaciones

Al igual que con los diagramas de objetos se pueden poner etiquetas a las relaciones al final después de dos puntos `:`:

```
@startuml

Usuario -> (Login)
Usuario --> (Usar la aplicación) : Una etiqueta simple

:Amdministrador\nPrincipal: ---> (Usar la aplicación) : Esto es\notra\netiqueta

@enduml
```

Para saber más sobre los diagramas de casos de uso, podéis ver más en la documentación oficial -> [Enlace](https://plantuml.com/es/use-case-diagram "Ir a PlantUML - Diagrama de Casos de Uso")

---

## Diagramas de Estado
<div id="diagrama-estados"></div>

Para saber más sobre los diagramas de estado, podéis ver más en la documentación oficial -> [Enlace](https://plantuml.com/es/state-diagram "Ir a PlantUML - Diagramas de Estado")

---

## Recursos
<div id="recursos"></div>

- [Editor PlantUML Online](https://shorturl.at/elELo)
- [Editor PlantUML Oficial](https://editor.plantuml.com)


## Bibliografía
<div id="bibliografia"></div>

- [Guía de Referencia de PlantUML](https://pdf.plantuml.net/PlantUML_Language_Reference_Guide_es.pdf)



