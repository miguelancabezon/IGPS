# Markdown - Parte 2
<a id="begin"></a>

<div align="center" height="40">
  
![Mardown Logo](../../images/markdown-mark-white.svg "Markdown Logo")
</div>

## Repaso rápido de estilos de Markdown (ver en la pestaña de códgio para saber más)

# Encabezado 1
## Encabezado 2
### Encabezado 3

Texto normal

---

**Negrita** y *cursiva* o _cursiva_
***Negrita y cursiva***

- Lista no ordenada
- Otro elemento
  - Subelemento

1. Lista ordenada
2. Segundo elemento

- [ ] Lista de tareas (solo en GitHub)
- [x] Tarea completada 

[Texto del enlace](https://ejemplo.com "Texto Tooltip")
![Texto alternativo](../../images/markdown-mark-white.svg)

> Cita en bloque
> Continúa aquí

> [!NOTE]
> Alertas (solo en GitHub)

<!-- Comentario -->

`código en línea`

```
código en bloque
```

| Columna 1 | Columna 2 | Columna 3 |
|:-----------|:-----------:|-----------:|
| Dato 1    | Dato 2    | Dato 3    |
| Dato 4    | Dato 5    | Dato 6    |

<u>Podéis generar tablas de manera sencilla [aquí](https://www.tablesgenerator.com/markdown_tables)</u>

:smile: Emojis (solo en GitHub)

:bug: **Bug Fix**: Corregido problema de memoria :wrench:

:sparkles: **Nueva característica**: Sistema de notificaciones :bell:

[Lista completa de Emojis](https://github.com/ikatyang/emoji-cheat-sheet)


## Bloques de código avanzado

### Formato de sintáxis por lenguaje

```javascript
const saludar = (nombre) => {
    console.log(`¡Hola, ${nombre}!`);
};
```

```py
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

```sh
mkdir nueva_carpeta
```

**Ejemplos de errores**

```py
const add = (a, b) => {
  // Codigo Javascript con py en markdown
  console.log("La suma es ", a + b);
}
```


## Formato de tablas avanzado

### Tabla básica

| Columna 1 | Columna 2 | Columna 3 |
|-----------|-----------|-----------|
| Dato 1    | Dato 2    | Dato 3    |
| Dato 4    | Dato 5    | Dato 6    |


### Tabla con alineación

| Columna 1 | Columna 2 | Columna 3 |
|:-----------|:-----------:|-----------:|
| Dato 1    | Dato 2    | Dato 3    |
| Dato 4    | Dato 5    | Dato 6    |


### Tabla con formato interno

| Característica | Descripción | Estado |
|----------------|-------------|--------|
| **API REST** | Comunicación HTTP | ✅ Activo |
| *WebSockets* | Tiempo real | 🚧 En desarrollo |
| `GraphQL` | Consultas flexibles | ❌ Pendiente |


## Enlaces y referencias avanzadas

### Enlaces con referencias

[Texto del enlace][ref1]
[Otro enlace][ref2]

[ref1]: https://ejemplo.com "Título opcional"
[ref2]: https://github.com "Enlace a Github"


### Enlaces automáticos

<https://www.google.com>

### Enlaces a secciones (anclas)

Las anclas se pueden crear con un simpre `#titulo-seccion` en el enlace pero este formato puede dar errores cuando markdown lo quiere interpretar como enlace. Esto puede provocar que se rompa el enlace y no funcione. 
Para evitarlo, podemos usar HTML para añadir un enlace en la sección que quermos:

Colocamos el siguiente elemento HTML dónde queramos tener el ancla:
```html
  <a id="begin"></a>
```

Creamos el enlace en MD:
[Ir al Inicio](#begin)


## Bloques colapsables

<details>
<summary>Click para expandir</summary>

Aquí va el contenido oculto que se muestra al hacer click.
```python
def codigo_oculto():
    return "Se puede incluir código"
```

- También listas
- Y otros elementos markdown

</details>



<details>
<summary>🔍 Información técnica avanzada</summary>

### Subsección dentro del colapsable

Puedes incluir prácticamente cualquier markdown aquí:

| Característica | Valor |
|----------------|-------|
| Performance | Alta |
| Complejidad | Media |

</details>

## Badges

<!-- Badges básicos -->
![Status](https://img.shields.io/badge/status-active-success.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen.svg)

<!-- Badges dinámicos -->
![GitHub issues](https://img.shields.io/github/issues/usuario/repo)
![GitHub forks](https://img.shields.io/github/forks/miguelancabezon/25-26-igps)
![GitHub stars](https://img.shields.io/github/stars/miguelancabezon/repo)
![Contributors](https://img.shields.io/github/contributors/usuario/repo)

<!-- Badges de tecnologías -->
![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)
![Node](https://img.shields.io/badge/Node-18+-green.svg)
![React](https://img.shields.io/badge/React-18-61dafb.svg)

<!-- Crear badges personalizados en https://shields.io -->


## Mermaid

[Mermaid](https://mermaid.js.org/intro/ "Enlace a Mermaid") es una herramienta hecha en javascript que renderiza texto en diagramas.

### Diagrama de flujo
```mermaid
graph TD
    A[Inicio] --> B{¿Decisión?}
    B -->|Sí| C[Acción 1]
    B -->|No| D[Acción 2]
    C --> E[Fin]
    D --> E
```

```mermaid
graph TD
    A[Entramos tienda] --> B{¿Es Nike?}
    B --> |Sí| D{Talla}
    B --> |No| C[Fin]
    D --> |>40| E{Precio}
    D --> |<40| C
    E --> |<50€| F[Compramos]
    E --> |>50#| C
    F --> C
```

### Diagrama de secuencia
```mermaid
sequenceDiagram
    participant Usuario
    participant Frontend
    participant Backend
    participant DB
    
    Usuario->>Frontend: Solicita datos
    Frontend->>Backend: GET /api/datos
    Backend->>DB: Query
    DB-->>Backend: Resultados
    Backend-->>Frontend: JSON
    Frontend-->>Usuario: Muestra datos
```


### Diagrama de Gantt
```mermaid
gantt
    title Cronograma del Proyecto
    dateFormat  YYYY-MM-DD
    section Fase 1
    Diseño           :a1, 2024-01-01, 30d
    Desarrollo       :a2, after a1, 45d
    section Fase 2
    Testing          :a3, after a2, 20d
    Deploy           :a4, after a3, 10d
```

```mermaid
gantt
    title JUegardo Cósmico
    dateFormat  YYYY-MM-DD
    section Fase 1 - Prototipo
    Diseño y Desarrollo           :a1, 2025-11-01, 30d
    section Fase 2 - Beta
    Diseño           :a2, after a1, 30d
    Narrativa        :a3, after a2, 30d
    Desarrollo       :a4, after a3, 30d
    Pruebas          :a5, after a4, 30d
    section Fase 3 - 1.0
    Diseño           :a6, after a5, 60d
    Desarrollo       :a7, after a6, 180d
    Pruebas          :a8, after a7, 60d
```


### Git Graph
```mermaid
    gitGraph
       commit
       commit
       branch develop
       commit
       commit
       commit
       checkout main
       commit
       commit
```


### Gráfica de cuadrantes
```mermaid
quadrantChart
    title Alcance y engagement de las campañas
    x-axis Bajo Alcance --> Alto Alcance
    y-axis Bajo Engagement --> Alto Engagement
    quadrant-1 Deberiamos expandirnos
    quadrant-2 Necesitamos promover
    quadrant-3 Reevaluar
    quadrant-4 Deberíamos mejorar
    Campaña A: [0.3, 0.6]
    Campaña B: [0.45, 0.23]
    Campaña C: [0.57, 0.69]
    Campaña D: [0.78, 0.34]
    Campaña E: [0.40, 0.34]
    Campaña F: [0.35, 0.78]
```

### Gráfica de barras
```mermaid
xychart-beta
    title "Beneficio en Ventas"
    x-axis [ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic]
    y-axis "Beneficio (en €)" 4000 --> 11000
    bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
    line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
```


## Rechazar carácteres especiales de Markdown

\# Esto ya no es encabezado 1

\[No es enlace\]
\`No es código\`

Y si queréis poner es barra -> `\\`


## HTML

<!-- Comentarios invisibles en el render -->

<div align="center">
  <h1>Título Centrado</h1>
    <td><img src="https://www.markdownguide.org/assets/images/markdown-mark-white.svg" height="20"></td>
</div>

<kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar

<sup>Superíndice</sup> y <sub>subíndice</sub>

<mark>Texto resaltado</mark> (no funciona en todos los parsers)

<table>
  <tr>
    <td>Celda con<br>salto de línea</td>
    <td><img src="https://www.markdownguide.org/assets/images/markdown-mark-white.svg" height="20"></td>
  </tr>
</table>























