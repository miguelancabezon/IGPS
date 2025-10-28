# PlantUML

## ¿Qué es PlantUML?

PlantUML es una herramienta que permite crear diagramas usando un lenguaje de texto simple. En lugar de arrastrar y soltar elementos, escribes código que se convierte en diagramas.
Esta forma de actuar sobre el diseño de un diagrama ayuda a crear diagramas completos de manera más rápida y con menos errores.

Las principales ventajas que tiene, aparte de las dos mencionadas, es que, al tratarse de texto, es fácilmente versionable en Git, porque es rápido de crear y modificar.
De igual manera, usando elementos fijos para crear las variables, conseguimos una consistencia en el estilo y el lenguaje que lo hace fácil de revisar.
Por último, una de las mayores ventajas es que PlantUML es gratuito y [open source](https://github.com/plantuml "Repositorio PlantUML").

### ¿Dónde se usa?

PlantUML es útil en multitud de entornos:

- Documentación técnica
- Planificación de proyectos
- Presentaciones de arquitectura de software
- READMEs de GitHub
- Wikis y documentación

### Configuración del Entorno

#### Opción 1: Online

- [PlantUML Online Server](https://www.plantuml.com/plantuml/uml/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000 "Ir a PlantUML Online Server")
- [PlantText](https://www.planttext.com "Ir a PlantText")

#### Opción 2: Visual Studio Code

Instalar extensión:

1. Abrir VS Code
2. Extensions (Ctrl + Shift + X)
3. Buscar "PlantUML"
4. Instalar "PlantUML" de jebbs

<u>Requisitos:</u>

- O Java instalado (para renderizar localmente)
- O usar servidor online

**Crear primer archivo:**

1. Crear archivo .puml
2. Vista previa en VS Code:
   - Alt + D - Vista previa
   - Ctrl + Shift + P → "PlantUML: Preview Current Diagram"

# Estructura básica

[![Primer ejemplo](../../images/modelosUML/puml-basico-ejemplo-1.png "Primer ejemplo")](../../documentos/modelosUML/primer-uml.puml)

[![Segundo ejemplo](../../images/modelosUML/puml-basico-ejemplo-2.png "Segundo ejemplo")](../../documentos/modelosUML/puml-basico-ejemplo-2.puml)

[![Tercer ejemplo](../../images/modelosUML/puml-basico-ejemplo-3.png "Tercer ejemplo")](../../documentos/modelosUML/puml-basico-ejemplo-3.puml)

## Mindmaps (Mapas Mentales)

Los mapas mentales (mindmaps) son diagramas utilizados para plasmar distintas ideas, conceptos, tareas u otros objetos relacionados y sus relaciones.

### Sintaxis básica

[![Ejemplo Mindmap](../../images/modelosUML/puml-mindmap-ejemplo-1.png "Ejemplo Mindmap")](../../documentos/modelosUML/mindmap/primer-mindmap.puml)

### Direcciones de los elementos

[![Mindmap direcciones](../../images/modelosUML/plantuml-mindmap-direcciones.png "Mindmap direcciones")](../../documentos/modelosUML/mindmap/mindmap-direcciones.puml)

### Ejemplos Prácticos

**Ejemplo 1: Plan de Aprendizaje**

[![Mindmap aprendizaje](../../images/modelosUML/plantuml-mindmap-aprendizaje.png "Mindmap aprendizaje")](../../documentos/modelosUML/mindmap/mindmap-aprendizaje.puml)

**Ejemplo 2: Planificación de Proyecto**

[![Mindmap planificacion](../../images/modelosUML/plantuml-mindmap-planificacion.png "Mindmap planificacion")](../../documentos/modelosUML/mindmap/mindmap-planificacion.puml)

**Ejemplo 3: Organización Personal**

[![Mindmap semana](../../images/modelosUML/plantuml-mindmap-semana.png "Mindmap semana")](../../documentos/modelosUML/mindmap/mindmap-semana.puml)

### Ejercicio Práctico 1

Crear un mindmap sobre uno de estos temas:

- Tu carrera profesional (estudios, habilidades, objetivos)
- Plan de viaje (destino, actividades, logística)
- Estructura de un proyecto personal

Debe tener:

- Al menos 3 ramas principales
- Mínimo 2 niveles de profundidad
- Usar ambos lados (left/right)

---

## JSON Visualizer

JSON (acrónimo de JavaScript Object Notation, 'notación de objeto de JavaScript') es un formato de texto sencillo para el intercambio de datos.

**Ejemplo JSON**

```json
{
  "nombre": "Ana",
  "edad": 30,
  "es_empleado": true,
  "hobbies": ["leer", "caminar", "cocinar"],
  "direccion": {
    "calle": "Calle Falsa 123",
    "ciudad": "Ciudad Ejemplo",
    "codigo_postal": "12345"
  }
}
```

<u>_Tipos de datos_</u>

```json
{
  "string": "texto",
  "numero": 42,
  "decimal": 3.14,
  "booleano": true,
  "nulo": null,
  "array": [1, 2, 3],
  "objeto": {
    "clave": "valor"
  }
}
```

### Ejemplos Prácticos

[![JSON Basico](../../images/modelosUML/plantuml-json-primer.png "JSON Basico")](../../documentos/modelosUML/json-visualizer/puml-json-primer.puml)

**Ejemplo 1: Configuración de Usuario**

[![JSON Usuario](../../images/modelosUML/plantuml-json-usuario.png "JSON Usuario")](../../documentos/modelosUML/json-visualizer/puml-json-usuario.puml)

**Ejemplo 2: Respuesta de API**

[![JSON API](../../images/modelosUML/plantuml-json-api.png "JSON API")](../../documentos/modelosUML/json-visualizer/puml-json-api.puml)

**Ejemplo 3: Configuración de Proyecto**

[![JSON Proyecto](../../images/modelosUML/plantuml-json-proyecto.png "JSON Proyecto")](../../documentos/modelosUML/json-visualizer/puml-json-proyecto.puml)

### Ejercicio Práctico 2

Crear una visualización JSON para uno de estos casos:

Tu perfil (nombre, edad, habilidades, proyectos)
Datos de un libro (título, autor, páginas, reseñas)
Configuración de aplicación (tema, idioma, opciones)

Debe incluir:

Al menos 5 campos principales
1 objeto anidado
1 array
Diferentes tipos de datos

<!--
## Diagramas de Gantt

Fundamentos de Gantt
Sintaxis básica:
plantuml@startgantt
[Tarea 1] lasts 5 days
[Tarea 2] lasts 3 days
[Tarea 3] lasts 4 days
@endgantt
Configurar inicio del proyecto:
plantuml@startgantt
Project starts 2025-11-01
[Tarea 1] lasts 5 days
@endgantt
Dependencias entre tareas:
plantuml@startgantt
[Tarea 1] lasts 3 days
[Tarea 2] starts at [Tarea 1]'s end and lasts 2 days
@endgantt
Elementos Avanzados
Separadores y secciones:
plantuml@startgantt
-- Fase 1: Planificación --
[Reunión inicial] lasts 1 day
[Análisis requisitos] lasts 3 days

-- Fase 2: Desarrollo --
[Setup proyecto] lasts 1 day
[Desarrollo] lasts 10 days
@endgantt
Hitos (milestones):
plantuml@startgantt
[Desarrollo] lasts 10 days
[Entrega Beta] happens at [Desarrollo]'s end
[Testing] lasts 5 days
[Release] happens at [Testing]'s end
@endgantt
Colores y completado:

```plantuml@startgantt
[Tarea completada] lasts 3 days and is colored in Green
[Tarea completada] is 100% completed
[Tarea en progreso] lasts 5 days and is colored in Blue
[Tarea en progreso] is 60% completed
[Tarea pendiente] lasts 4 days and is colored in Red
@endgantt
Ejemplos Prácticos
Ejemplo 1: Desarrollo de Aplicación Web
plantuml@startgantt
title Desarrollo Aplicación E-commerce
printscale daily

Project starts 2025-11-01

-- Fase 1: Planificación (1 semana) --
[Reunión kick-off] lasts 1 day
[Definir requisitos] lasts 3 days and starts at [Reunión kick-off]'s end
[Diseño UX/UI] lasts 5 days and starts at [Definir requisitos]'s end
[Aprobación diseño] happens at [Diseño UX/UI]'s end

-- Fase 2: Setup (1 semana) --
[Setup repositorio] lasts 1 day and starts at [Aprobación diseño]'s end
[Configurar CI/CD] lasts 2 days and starts at [Setup repositorio]'s end
[Setup base de datos] lasts 2 days and starts at [Setup repositorio]'s end

-- Fase 3: Desarrollo (3 semanas) --
[Autenticación] lasts 5 days and starts at [Setup base de datos]'s end
[Autenticación] is colored in Green
[Autenticación] is 100% completed

[Catálogo productos] lasts 7 days and starts at [Autenticación]'s end
[Catálogo productos] is colored in Blue
[Catálogo productos] is 70% completed

[Carrito de compras] lasts 5 days and starts at [Catálogo productos]'s end
[Carrito de compras] is colored in Orange
[Carrito de compras] is 30% completed

[Sistema de pago] lasts 4 days and starts at [Carrito de compras]'s end
[Sistema de pago] is colored in Red

-- Fase 4: Testing (1 semana) --
[Testing unitario] lasts 3 days and starts at [Sistema de pago]'s end
[Testing integración] lasts 3 days and starts at [Testing unitario]'s end
[Testing e2e] lasts 2 days and starts at [Testing integración]'s end

-- Fase 5: Deployment --
[Deploy staging] happens at [Testing e2e]'s end
[Testing producción] lasts 2 days and starts at [Deploy staging]'s end
[Deploy producción] happens at [Testing producción]'s end

@endgantt
Ejemplo 2: Proyecto Personal - Portafolio
plantuml@startgantt
title Creación de Portfolio Personal
printscale weekly

Project starts 2025-11-01

-- Diseño --
[Investigar portfolios] lasts 2 days
[Bocetos papel] lasts 1 day and starts at [Investigar portfolios]'s end
[Diseño Figma] lasts 5 days and starts at [Bocetos papel]'s end
[Revisión diseño] happens at [Diseño Figma]'s end

-- Desarrollo Frontend --
[Setup React] lasts 1 day and starts at [Revisión diseño]'s end
[Página inicio] lasts 3 days and starts at [Setup React]'s end
[Página inicio] is 100% completed and is colored in Green

[Sección proyectos] lasts 4 days and starts at [Página inicio]'s end
[Sección proyectos] is 80% completed and is colored in Blue

[Sección sobre mí] lasts 2 days and starts at [Sección proyectos]'s end
[Sección sobre mí] is 50% completed and is colored in Orange

[Contacto] lasts 2 days and starts at [Sección sobre mí]'s end
[Contacto] is colored in Red

-- Contenido --
[Escribir descripciones] lasts 3 days and starts at [Página inicio]'s end
[Capturas proyectos] lasts 2 days and starts at [Escribir descripciones]'s end
[Bio y CV] lasts 1 day and starts at [Capturas proyectos]'s end

-- Deploy --
[Configurar dominio] lasts 1 day and starts at [Contacto]'s end
[Deploy Vercel] lasts 1 day and starts at [Configurar dominio]'s end
[Testing final] lasts 2 days and starts at [Deploy Vercel]'s end
[Lanzamiento] happens at [Testing final]'s end

@endgantt
Ejemplo 3: Sprint de Desarrollo Ágil
plantuml@startgantt
title Sprint 5 - Equipo Development
printscale daily

Project starts 2025-11-04

-- Sprint Planning --
[Sprint Planning] lasts 1 day
[Sprint Planning] is colored in Purple

-- Desarrollo (2 semanas) --
[USER-101: Login social] lasts 3 days and starts at [Sprint Planning]'s end
[USER-101: Login social] is 100% completed and is colored in Green

[USER-102: Dashboard] lasts 5 days and starts at [USER-101: Login social]'s end
[USER-102: Dashboard] is 60% completed and is colored in Blue

[BUG-045: Header mobile] lasts 2 days and starts at [Sprint Planning]'s end
[BUG-045: Header mobile] is 100% completed and is colored in Green

[FEAT-201: Notificaciones] lasts 4 days and starts at [BUG-045: Header mobile]'s end
[FEAT-201: Notificaciones] is 40% completed and is colored in Orange

-- Testing & Review --
[Code Review] lasts 2 days and starts at [USER-102: Dashboard]'s end
[Testing QA] lasts 2 days and starts at [Code Review]'s end

-- Ceremonias Ágiles --
[Daily Stand-up 1] happens 2025-11-05
[Daily Stand-up 2] happens 2025-11-06
[Daily Stand-up 3] happens 2025-11-07
[Mid-Sprint Review] happens 2025-11-11
[Sprint Review] happens at [Testing QA]'s end
[Retrospectiva] happens at [Sprint Review]'s end

@endgantt
💻 Ejercicio Práctico 3
Crear un diagrama de Gantt para:

Estudiar para exámenes (4-5 materias)
Organizar un evento (preparativos, invitaciones, día del evento)
Aprender una tecnología nueva (teoría, práctica, proyecto)

Debe incluir:

Al menos 8 tareas
Mínimo 2 secciones
1 hito importante
Usar colores y porcentajes

📚 PARTE 5: Mockups/Salt
Fundamentos de Salt (Wireframes)
Sintaxis básica:
plantuml@startsalt
{
Texto simple
[Botón]
^Checkbox^
Radio button
}
@endsalt
Layout con Grid:
plantuml@startsalt
{
Título | Botón
Campo 1 | [Input 1]
Campo 2 | [Input 2]
}
@endsalt
Elementos de formulario:
plantuml@startsalt
{
Usuario | "Juan"
Contraseña | "\*\*\*\*"
^Recordarme^
[Login] | [Cancelar]
}
@endsalt
Elementos Avanzados
Listas desplegables y scroll:
plantuml@startsalt
{
País | ^España^
Ciudad | ^Madrid^
.
Lista de tareas
{SI + Tarea 1 + Tarea 2 + Tarea 3 + Tarea 4 + Tarea 5
}
}
@endsalt
Tabs y navegación:
plantuml@startsalt
{+
{/ <b>Inicio | Perfil | Configuración | Ayuda }
{
Contenido de la pestaña seleccionada
.
[Botón de acción]
}
}
@endsalt
Tablas de datos:
plantuml@startsalt
{#
ID | Nombre | Email | Acciones
001 | Juan | juan@mail.com | [Editar] [Borrar]
002 | María | maria@mail.com | [Editar] [Borrar]
003 | Pedro | pedro@mail.com | [Editar] [Borrar]
}
@endsalt
Ejemplos Prácticos
Ejemplo 1: Formulario de Login
plantuml@startsalt
title Pantalla de Login

{+
<b><size:16>Iniciar Sesión</size></b>
.
.
{
Usuario: | " "
Contraseña: | "\*\*\*\* "
}
.
^Recordarme en este dispositivo^
.
{
[ Iniciar Sesión ] | [ Cancelar ]
}
.

---

.
¿Olvidaste tu contraseña? | <u>Recuperar</u>
¿No tienes cuenta? | <u>Registrarse</u>
}
@endsalt
Ejemplo 2: Dashboard Principal
plantuml@startsalt
title Dashboard - Panel de Control

{+
{/ <b>Dashboard | Proyectos | Tareas | Equipo | Configuración }
.
{
{T + <b>Resumen</b>
++ Proyectos activos: 5
++ Tareas pendientes: 23
++ Miembros del equipo: 12 + <b>Actividad Reciente</b>
++ Juan completó "Diseño UI"
++ María inició "API Rest"
++ Pedro comentó en "Bug #123"
} | {
<b>Gráfico de Progreso</b>
{SI
==
==
Proyecto A ||||||||||||| 75%
Proyecto B |||||||||| 50%
Proyecto C ||||||| 35%
Proyecto D |||||| 30%
==
==
}
.
<b>Próximos Deadlines</b>
{#
Proyecto | Tarea | Fecha | [...]
App Mobile | Testing | 2025-11-15 | [Ver]
Web Admin | Deploy | 2025-11-20 | [Ver]
API v2 | Documentación | 2025-11-25 | [Ver]
}
}
}
}
@endsalt
Ejemplo 3: Aplicación de Tareas (To-Do)
plantuml@startsalt
title Gestor de Tareas

{
{\* <b>Mis Tareas</b> }
.
{
Buscar... | " " | [🔍]
}
.
{/ Todas | Pendientes | Completadas | Importantes }
.

---

.
<b>Hoy - 27 Oct 2025</b>
.
{SI
[X] Reunión de equipo (9:00 AM)
[ ] Completar informe mensual
[X] Code review del PR #234
[ ] Actualizar documentación
[ ] Preparar presentación cliente
.

---

.
<b>Mañana - 28 Oct 2025</b>
.
[ ] Deploy a producción
[ ] Testing de la nueva feature
[ ] Reunión con stakeholders
}
.

---

.
{
[ Nueva Tarea ] | Categoría: ^Trabajo^ | [+ Agregar]
}
}
@endsalt
Ejemplo 4: Perfil de Usuario
plantuml@startsalt
title Perfil de Usuario

{+
{/ <b>Información | Seguridad | Preferencias | Notificaciones }
.
{
{
<b>Foto de Perfil</b>
{SI
[ FOTO ]
[ 150x150 ]
}
[Cambiar foto]
} | {
<b>Datos Personales</b>
{
Nombre: | "Juan Pérez "
Email: | "juan@ejemplo.com "
Teléfono: | "+34 600 000 000 "
País: | ^España^
Ciudad: | ^Madrid^
.
Biografía:
{SI
"Desarrollador full-stack "
"con 5 años de experiencia. "
" "
" "
}
}
}
}
.

---

.
<b>Redes Sociales</b>
{
GitHub: | "github.com/usuario " | [🔗]
LinkedIn: | "linkedin.com/in/usuario " | [🔗]
Twitter: | "@usuario " | [🔗]
}
.
{
[ Guardar Cambios ] | [ Cancelar ]
}
}
@endsalt
Ejemplo 5: Configuración de Aplicación
plantuml@startsalt
title Configuración

{
{T + <b>General</b>
++ Apariencia
++ Idioma
++ Zona horaria + <b>Cuenta</b>
++ Información personal
++ Privacidad
++ Seguridad + <b>Notificaciones</b>
++ Email
++ Push
++ SMS + <b>Avanzado</b>
++ Importar/Exportar
++ API Keys
++ Logs
} | {
<b>Apariencia</b>
.
Tema:
Claro
(X)Oscuro
Automático
.

---

.
<b>Idioma y Región</b>
.
{
Idioma: | ^Español^
Formato fecha: | ^DD/MM/YYYY^
Zona horaria: | ^(GMT+1) Madrid^
}
.

---

.
<b>Accesibilidad</b>
.
^Modo alto contraste^
^Aumentar tamaño de fuente^
^Reducir animaciones^
.
.
[Restablecer a valores por defecto]
}
}
@endsalt
💻 Ejercicio Práctico 4
Crear un mockup para:

Formulario de registro (nombre, email, contraseña, términos)
Página de búsqueda (barra de búsqueda, filtros, resultados)
Carrito de compras (lista de productos, total, botones)

Debe incluir:

Título de la página
Al menos 5 elementos interactivos
Layout organizado
Botones de acción

📋 Proyecto Final Integrador
🎯 Crear Documentación Completa de Proyecto
Crear un documento PlantUML que incluya:

1. Mindmap del proyecto

Estructura general
Funcionalidades principales
Tecnologías

2. JSON de configuración

Configuración de la aplicación
O respuesta de API ejemplo

3. Gantt de planificación

Fases del proyecto
Tareas principales
Hitos importantes

4. Mockup de interfaz

Pantalla principal
O formulario clave

Ejemplo de estructura:
plantuml' ========================================
' PROYECTO: Sistema de Gestión de Biblioteca
' ========================================

' 1. MINDMAP - Estructura del Proyecto
@startmindmap
!include mindmap_proyecto.puml
@endmindmap

' 2. JSON - Configuración
@startjson
!include config.json
@endjson

' 3. GANTT - Planificación
@startgantt
!include planificacion.gantt
@endgantt

' 4. MOCKUP - Interfaz
@startsalt
!include interfaz.salt
@endsalt

````

```

```
````
-->
