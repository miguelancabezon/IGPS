# Markdown - Parte 1

<!--# 📝 Clase de Markdown Básico (2 horas)

## 🎯 Objetivos de la Clase
Al finalizar esta clase serás capaz de:
- Crear documentos con formato en Markdown
- Estructurar contenido de forma profesional
- Crear README.md para tus proyectos
- Documentar código y proyectos efectivamente

---

## 📚 PARTE 1: Introducción y Fundamentos (30 min)

### **¿Qué es Markdown? (10 min)**

**Markdown** es un lenguaje de marcado ligero creado por John Gruber en 2004. Su objetivo es ser fácil de leer y escribir en formato de texto plano, y convertirse en HTML válido.

**Ventajas:**
- ✅ Sintaxis simple y legible
- ✅ Multiplataforma (funciona en cualquier SO)
- ✅ No necesitas editor especial (funciona en Notepad)
- ✅ Ampliamente usado (GitHub, Reddit, Discord, etc.)
- ✅ Se convierte fácilmente a HTML, PDF, etc.

**Dónde se usa:**
- README.md en GitHub
- Documentación técnica
- Blogs y sitios web estáticos (Jekyll, Hugo)
- Notas y wikis personales (Obsidian, Notion)
- Mensajería (Discord, Slack)

### **Configuración del Entorno (10 min)**

**Opciones de editores:**

1. **Visual Studio Code** (Recomendado)
   - Extensiones útiles:
     - Markdown All in One
     - Markdown Preview Enhanced
   - Vista previa: `Ctrl+Shift+V`

2. **Editores online:**
   - [Dillinger](https://dillinger.io/)
   - [StackEdit](https://stackedit.io/)
   - [HackMD](https://hackmd.io/)

3. **Otros editores:**
   - Typora, Obsidian, Notion

**Crear tu primer archivo:**
```bash
# Crear carpeta para práctica
mkdir markdown-clase
cd markdown-clase

# Crear primer archivo
touch mi-primer-documento.md
# Abrir con VS Code
code mi-primer-documento.md
```

### **Sintaxis Básica - Encabezados (10 min)**

```markdown
# Encabezado Nivel 1 (H1)
## Encabezado Nivel 2 (H2)
### Encabezado Nivel 3 (H3)
#### Encabezado Nivel 4 (H4)
##### Encabezado Nivel 5 (H5)
###### Encabezado Nivel 6 (H6)
```

**Reglas importantes:**
- Siempre dejar un espacio después del `#`
- Solo hay 6 niveles de encabezados
- H1 usar solo para título principal
- Mantener jerarquía lógica

**❌ Errores comunes:**
```markdown
#SinEspacio           ❌ Falta espacio
####### 7 niveles     ❌ No existe H7
## Nivel 2
# Nivel 1             ❌ Jerarquía ilógica
```

**💻 Ejercicio Práctico 1 (5 min):**
Crear estructura de un CV:
- Tu nombre (H1)
- Secciones: Experiencia, Educación, Habilidades (H2)
- Subsecciones en cada una (H3)

---

## 📚 PARTE 2: Formato de Texto (30 min)

### **Énfasis y Formato (15 min)**

```markdown
**Texto en negrita**
__También negrita__

*Texto en cursiva*
_También cursiva_

***Negrita y cursiva***
___También negrita y cursiva___

~~Texto tachado~~

`Código en línea`

> Cita o blockquote
> Puede tener múltiples líneas
```

**Resultado:**
- **Texto en negrita**
- *Texto en cursiva*
- ***Negrita y cursiva***
- ~~Texto tachado~~
- `Código en línea`
- > Cita o blockquote

**Combinaciones útiles:**
```markdown
Este es un texto **importante** con un *énfasis* especial.
El comando `git init` inicia un repositorio.
**ADVERTENCIA:** ~~No usar~~ Usar con precaución.
```

### **Párrafos y Saltos de Línea (5 min)**

```markdown
Este es un párrafo.
Esta línea está en el mismo párrafo.

Este es un nuevo párrafo (doble salto de línea).

Para forzar un salto de línea  
usa dos espacios al final.
```

**Reglas:**
- Párrafos separados por línea en blanco
- Salto de línea dentro de párrafo: 2 espacios + Enter
- No mezclar tabulaciones y espacios

### **Listas (10 min)**

**Listas no ordenadas:**
```markdown
- Item 1
- Item 2
- Item 3
  - Subitem 3.1
  - Subitem 3.2
    - Subsubitem 3.2.1
- Item 4

* También con asterisco
+ O con signo más
```

**Listas ordenadas:**
```markdown
1. Primer paso
2. Segundo paso
3. Tercer paso
   1. Subpaso 3.1
   2. Subpaso 3.2
4. Cuarto paso
```

**Listas de tareas (GitHub):**
```markdown
- [x] Tarea completada
- [ ] Tarea pendiente
- [ ] Otra tarea pendiente
```

**💻 Ejercicio Práctico 2 (5 min):**
Crear una lista de compras con:
- 5 categorías (Frutas, Verduras, etc.)
- Cada categoría con 3-4 items
- Usar sublistas donde tenga sentido

---

## ☕ DESCANSO (10 min)

---

## 📚 PARTE 3: Enlaces e Imágenes (25 min)

### **Enlaces (12 min)**

**Sintaxis básica:**
```markdown
[Texto del enlace](https://www.ejemplo.com)
[Google](https://www.google.com)
[GitHub](https://github.com)
```

**Con título (tooltip):**
```markdown
[Google](https://www.google.com "Ir a Google")
```

**Enlaces de referencia:**
```markdown
Este es un [enlace de referencia][1] y otro [enlace][google].

[1]: https://www.ejemplo.com
[google]: https://www.google.com "Motor de búsqueda"
```

**Enlaces automáticos:**
```markdown
<https://www.google.com>
<correo@ejemplo.com>
```

**Enlaces a secciones (anclas):**
```markdown
[Ir a la sección de imágenes](#imágenes)

## Imágenes
Contenido aquí...
```

**Enlaces mailto:**
```markdown
[Contáctame](mailto:correo@ejemplo.com)
[Enviar email con asunto](mailto:correo@ejemplo.com?subject=Consulta)
```

### **Imágenes (13 min)**

**Sintaxis básica:**
```markdown
![Texto alternativo](ruta/imagen.jpg)
![Logo](https://ejemplo.com/logo.png)
```

**Con título:**
```markdown
![Paisaje](imagen.jpg "Hermoso paisaje")
```

**Imágenes como enlaces:**
```markdown
[![Logo](logo.png)](https://www.ejemplo.com)
```

**Imágenes de referencia:**
```markdown
![Logo][logo]

[logo]: https://ejemplo.com/logo.png "Logo de la empresa"
```

**💻 Ejercicio Práctico 3 (8 min):**
Crear una mini bio que incluya:
- Tu nombre como título
- Párrafo de presentación
- Enlaces a tus redes (GitHub, LinkedIn, etc.)
- Una imagen (puede ser placeholder)

---

## 📚 PARTE 4: Código y Tablas (25 min)

### **Bloques de Código (15 min)**

**Código en línea:**
```markdown
Usa el comando `git status` para ver el estado.
La variable `userName` almacena el nombre.
```

**Bloques de código:**
````markdown
```
Código sin sintaxis específica
Múltiples líneas
```
````

**Con sintaxis highlighting:**
````markdown
```javascript
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}
```

```python
def saludar(nombre):
    print(f"Hola, {nombre}!")
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi Página</title>
  </head>
</html>
```
````

**Lenguajes comunes:**
- `javascript`, `python`, `java`, `csharp`, `cpp`
- `html`, `css`, `sql`, `bash`, `json`
- `markdown`, `yaml`, `dockerfile`

### **Tablas (10 min)**

**Sintaxis básica:**
```markdown
| Columna 1 | Columna 2 | Columna 3 |
|-----------|-----------|-----------|
| Dato 1    | Dato 2    | Dato 3    |
| Dato 4    | Dato 5    | Dato 6    |
```

**Alineación:**
```markdown
| Izquierda | Centrado | Derecha |
|:----------|:--------:|--------:|
| Texto     | Texto    | Texto   |
| Más texto | Centrado | 100.00  |
```

- `:---` = Alineado a la izquierda
- `:---:` = Centrado
- `---:` = Alineado a la derecha

**Tablas complejas:**
```markdown
| Nombre | Edad | Profesión | Ciudad |
|--------|:----:|-----------|--------|
| Juan | 25 | Desarrollador | Madrid |
| María | 30 | Diseñadora | Barcelona |
| Pedro | 28 | DevOps | Valencia |
```

**💻 Ejercicio Práctico 4 (5 min):**
Crear tabla de lenguajes de programación con:
- Columnas: Lenguaje, Año, Tipo, Dificultad
- Al menos 5 lenguajes
- Usar alineación apropiada

---

## 📚 PARTE 5: Elementos Avanzados (20 min)

### **Líneas Horizontales**
```markdown
---
***
___

Tres formas diferentes de crear una línea horizontal
```

### **Listas de Definiciones (HTML en Markdown)**
```markdown
<dl>
  <dt>Git</dt>
  <dd>Sistema de control de versiones distribuido</dd>
  
  <dt>Markdown</dt>
  <dd>Lenguaje de marcado ligero</dd>
</dl>
```

### **Escapar Caracteres**
```markdown
\* No será un item de lista
\# No será un encabezado
\[No será un enlace\]
```

### **Comentarios (no visibles)**
```markdown
<!-- Este es un comentario que no se verá -->
[//]: # (Este es otro tipo de comentario)
```

### **Emojis (GitHub Markdown)**
```markdown
:smile: :rocket: :heart: :+1: :tada:
```

### **Menciones y Referencias (GitHub)**
```markdown
@usuario
#123 (referencia a issue)
SHA: a1b2c3d (referencia a commit)
```

### **Alertas (GitHub)**
```markdown
> [!NOTE]
> Información útil que los usuarios deben saber

> [!WARNING]
> Contenido de advertencia crítica

> [!IMPORTANT]
> Información clave para el usuario
```

---

## 📚 PARTE 6: Proyecto Práctico Final (20 min)

### **💻 Proyecto: Crear README.md Profesional**

**Requisitos:**
Crear un README.md completo para un proyecto ficticio que incluya:

1. **Encabezado principal** con nombre del proyecto
2. **Badges** (opcional, usar shields.io)
3. **Descripción** del proyecto
4. **Tabla de contenidos** con enlaces internos
5. **Características principales** (lista)
6. **Instalación** (código en bloques)
7. **Uso** con ejemplos de código
8. **Capturas de pantalla** (puede usar placeholders)
9. **Tabla de tecnologías** usadas
10. **Contribución** (instrucciones)
11. **Licencia**
12. **Contacto** con enlaces

**Plantilla base:**
```markdown
# Nombre del Proyecto

![Badge](https://img.shields.io/badge/version-1.0.0-blue)

## Descripción
Breve descripción del proyecto...

## Tabla de Contenidos
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías](#tecnologías)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Características
- ✅ Característica 1
- ✅ Característica 2
- ✅ Característica 3

## Instalación
```bash
npm install mi-proyecto
```

## Uso
```javascript
const proyecto = require('mi-proyecto');
proyecto.iniciar();
```

## Tecnologías
| Tecnología | Versión |
|------------|---------|
| Node.js    | 18.x    |
| Express    | 4.18    |

## Contribución
1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia
MIT

## Contacto
- GitHub: [@usuario](https://github.com/usuario)
- Email: correo@ejemplo.com
```

---

## 📋 Cheat Sheet - Resumen Rápido---

## 🎯 Recursos Adicionales

### **Guías y Referencias:**
- [Markdown Guide](https://www.markdownguide.org/) - Guía completa
- [GitHub Markdown](https://docs.github.com/es/get-started/writing-on-github) - Documentación oficial
- [CommonMark](https://commonmark.org/) - Especificación estándar

### **Herramientas:**
- [Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables)
- [Shields.io](https://shields.io/) - Badges para README
- [Carbon](https://carbon.now.sh/) - Capturas bonitas de código

### **Práctica:**
- Crear README para proyectos personales
- Documentar código con Markdown
- Tomar notas en Markdown
- Crear blog con Jekyll o Hugo

---

## 📝 Evaluación y Tareas

### **Para entregar:**
1. README.md completo del proyecto práctico
2. Documento Markdown con tu CV/portfolio
3. Cheat sheet personal con comandos más usados

### **Criterios de evaluación:**
- ✅ Uso correcto de sintaxis
- ✅ Estructura lógica y jerarquía
- ✅ Formato apropiado
- ✅ Enlaces e imágenes funcionales
- ✅ Tablas bien formateadas
- ✅ Código con syntax highlighting

¡Markdown es una habilidad esencial para cualquier desarrollador! Practica creando documentación para tus proyectos y pronto se volverá segunda naturaleza. 🚀
-->

