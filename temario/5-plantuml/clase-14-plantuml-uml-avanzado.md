# PlantUML - UML - Parte 2

## Índice
- [Diagrama de Casos de Uso](#diagrama-casos-uso "Ir a Diagrama de Casos de Uso")
  - [Casos de Uso](#dcu-casos-uso "Ir a Casos de Uso")
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

Para definir en PlantUML un caso de uso, se puede hacer de dos formas:
- Escribir el caso de uso entre paréntesis. Ejemplo: (Caso de Uso 1)
- Usar la palabra reservada `usecase`. Ejemplo: usecase Caso de Uso 1

También puedes poner un alias al caso de uso con la palabra `as`.

**Ejemplo**
```
@startuml

(Caso de Uso 1)
(Caso de Uso 2) as (CU2)
usecase CU3
usecase (Otro\nCaso de Uso) as CU4

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


