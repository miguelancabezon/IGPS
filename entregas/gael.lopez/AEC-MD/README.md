# StudyQuest

<p align="center">
  <img src="img/logo.svg" alt="Logotipo de StudyQuest: escudo con libro abierto y estrella" width="480">
</p>

![Versión](https://img.shields.io/badge/versi%C3%B3n-1.0.0-blue)
![Licencia](https://img.shields.io/badge/licencia-MIT-green)
![Estado](https://img.shields.io/badge/estado-en%20desarrollo-orange)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white)

> 🎓 **StudyQuest** es una aplicación web que convierte el estudio en una aventura: cada tarea completada otorga experiencia, cada asignatura es una *misión* y cada examen es un *jefe final*.

## Presentación del proyecto

**StudyQuest** es una plataforma de *gamificación del estudio* pensada para estudiantes de ESO, Bachillerato y universidad. Permite organizar asignaturas, planificar sesiones de estudio y seguir el progreso mediante un sistema de **niveles**, **logros** y **rachas diarias**.

### Problema que resuelve

Muchos estudiantes **pierden la motivación** o **no saben por dónde empezar** cuando se acercan los exámenes. Las agendas tradicionales listan tareas, pero no ofrecen ningún incentivo para cumplirlas.

### Objetivo principal

Aumentar la **constancia** y la **organización** del estudiante transformando sus hábitos de estudio en un juego con recompensas visibles, sin perder de vista el objetivo real: *aprender mejor*.

---

## Índice de contenidos

1. [Presentación del proyecto](#presentación-del-proyecto)
2. [Índice de contenidos](#índice-de-contenidos)
3. [Características principales](#características-principales)
4. [Instalación y configuración](#instalación-y-configuración)
   1. [Requisitos previos](#requisitos-previos)
   2. [Pasos de instalación](#pasos-de-instalación)
5. [Tecnologías utilizadas](#tecnologías-utilizadas)
6. [Arquitectura y funcionamiento](#arquitectura-y-funcionamiento)
7. [Ejemplos de uso](#ejemplos-de-uso)
8. [Información adicional](#información-adicional)
9. [Contacto](#contacto)
10. [Elementos visuales y caracteres especiales](#elementos-visuales-y-caracteres-especiales)

---

## Características principales

1. **Gestión de asignaturas y tareas**
   - Crear, editar y eliminar asignaturas con color propio.
   - Tareas con fecha límite, prioridad y estimación de tiempo.
2. **Sistema de experiencia y niveles**
   - Cada tarea completada suma puntos de experiencia (XP).
   - Al reunir suficiente XP el usuario sube de nivel.
3. **Rachas y logros**
   - Racha de días consecutivos estudiando.
   - Insignias desbloqueables (por ejemplo, «Madrugador» o «Maratón de estudio»).
4. **Temporizador Pomodoro integrado**
   - Sesiones de 25 minutos con descansos de 5.
   - Registro automático del tiempo dedicado a cada asignatura.
5. **Estadísticas de progreso**
   - Gráficas semanales de horas de estudio.
   - Comparativa entre asignaturas.
6. **Modo multijugador por grupos**
   - Retos compartidos entre compañeros.
   - Clasificación semanal del grupo.

### Estado de desarrollo

- [x] Registro e inicio de sesión de usuarios
- [x] Gestión de asignaturas y tareas
- [x] Sistema de experiencia y niveles
- [x] Temporizador Pomodoro
- [ ] Rachas y logros *(en curso)*
- [ ] Estadísticas de progreso
- [ ] Modo multijugador por grupos
- [ ] Aplicación móvil

---

## Instalación y configuración

### Requisitos previos

- **Node.js** 20 o superior
- **npm** 10 o superior
- **Git**
- Una base de datos **PostgreSQL** 15 en local o en la nube

### Pasos de instalación

1. Clona el repositorio y entra en la carpeta del proyecto:

   ```bash
   git clone https://github.com/usuario/studyquest.git
   cd studyquest
   ```

2. Instala las dependencias con `npm install`.
3. Copia el fichero de ejemplo de variables de entorno:

   ```bash
   cp .env.example .env
   ```

4. Edita `.env` y define al menos `DATABASE_URL` y `JWT_SECRET`:

   ```ini
   PORT=3000
   DATABASE_URL=postgresql://usuario:clave@localhost:5432/studyquest
   JWT_SECRET=cambia-esta-clave
   ```

5. Crea las tablas ejecutando `npm run migrate`.
6. Arranca el servidor de desarrollo con `npm run dev`.
7. Abre `http://localhost:3000` en tu navegador.

---

## Tecnologías utilizadas

| Tecnología | Versión | Descripción | Uso en el proyecto |
| :--- | :---: | :--- | :--- |
| **Node.js** | `20.x` | Entorno de ejecución de *JavaScript* en servidor | Ejecuta la API y la lógica de XP |
| **Express** | `4.19` | Framework web minimalista para Node.js | Define las rutas `/api/tasks` y `/api/users` |
| **PostgreSQL** | `15` | Base de datos relacional de código abierto | Guarda usuarios, tareas y logros |
| **React** | `18.3` | Biblioteca para interfaces de usuario | Construye el panel y el temporizador |
| **Mermaid** | `10.x` | Generador de diagramas desde texto | Documenta los flujos en este README |

---

## Arquitectura y funcionamiento

StudyQuest sigue una arquitectura **cliente-servidor**: la interfaz en *React* consume una API REST creada con *Express*, que persiste los datos en *PostgreSQL*. Cuando el usuario completa una tarea, el servidor calcula la experiencia ganada, comprueba si hay subida de nivel o logros nuevos y devuelve el resultado actualizado.

```mermaid
sequenceDiagram
    actor U as Estudiante
    participant F as Frontend (React)
    participant A as API (Express)
    participant D as Base de datos (PostgreSQL)

    U->>F: Marca una tarea como completada
    F->>A: PATCH /api/tasks/42 {done: true}
    A->>D: Actualiza la tarea
    D-->>A: Tarea guardada
    A->>A: Calcula XP y racha
    alt XP suficiente para subir de nivel
        A->>D: Incrementa el nivel del usuario
    end
    A-->>F: {xp, nivel, logros}
    F-->>U: Muestra animación de recompensa
```

---

## Ejemplos de uso

### Ejemplo 1: completar una tarea desde la API

Petición con `curl` para marcar como hecha la tarea `42`:

```bash
curl -X PATCH http://localhost:3000/api/tasks/42 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"done": true}'
```

Respuesta esperada:

```json
{
  "task": { "id": 42, "done": true },
  "xpGained": 30,
  "level": 5,
  "newAchievements": ["Madrugador"]
}
```

### Ejemplo 2: calcular la experiencia desde el código

La función que decide cuánta experiencia otorga una tarea según su prioridad:

```javascript
const BASE_XP = { low: 10, medium: 20, high: 30 };

function calculateXp(task, streakDays) {
  const bonus = Math.min(streakDays, 7) * 2; // máximo 14 puntos extra
  return BASE_XP[task.priority] + bonus;
}

console.log(calculateXp({ priority: "high" }, 3)); // 36
```

### Recursos relacionados

- [Documentación de Express](https://expressjs.com/es/)
- [Guía de Markdown de GitHub](https://docs.github.com/es/get-started/writing-on-github)
- [Documentación de Mermaid](https://mermaid.js.org/intro/)
- [Técnica Pomodoro (Wikipedia)](https://es.wikipedia.org/wiki/T%C3%A9cnica_Pomodoro)

---
