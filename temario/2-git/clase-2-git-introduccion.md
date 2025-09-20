# GIT

## Control de Versiones

Un **sistema de control de versiones** es una herramienta que registra los cambios realizados en archivos a lo largo del tiempo, permitiendo recuperar versiones específicas cuando sea necesario. Es como tener un "historial de cambios" detallado de tu proyecto.

## Tipos de Sistemas de Control de Versiones

### **1. Sistemas Locales**

- Guardan versiones en tu computadora.
- **Problema**: No hay colaboración, riesgo de pérdida de datos.
- **Ejemplo**: RCS (Revision Control System)

### **2. Sistemas Centralizados**

- Un servidor central almacena todas las versiones.
- Los desarrolladores descargan archivos del servidor.
- **Ejemplos**: SVN (Subversion), Perforce, CVS.
- **Problemas**:
  - Si el servidor falla, nadie puede trabajar.
  - Punto único de falla.
  - Dependencia de conexión a internet.

### **3. Sistemas Distribuidos (Como Git)**

- Cada desarrollador tiene una **copia completa** del historial.
- No hay un punto central único.

## Representación Visual

![Distribuido vs Centralizado](../../images/control_versiones-distribuido_vs_centralizado.jpg)

## GIT - Fundamentos

### ¿Qué es Git?

Git es un software de control de versiones diseñado por Linus Torvalds. Enfocado a la eficiencia y la compatibilidad de versiones en archivos de código, su propósito es llevar registro de los cambios incluyendo coordinar el trabajo que varias personas realizan sobre archivos compartidos en un repositorio de código.

Gratis, de código abierto y compatible para proyectos tanto grandes cómo pequeños.

### Historia de Git

A principios de los 2000 el kernel de Linux comenzaba a tener un tamaño considerable. Las versiones, se controlaban con parches enviado a través de correo electrónico indicando los cmabios realizados en los archivos. Paralelamente, muchos desarrolladores que aportaban al proyecto, usaban Beekeeper como herramienta para la gestión del código fuente.
En 2005, Beekeeper eliminó la versión gratuita alegando infracciones de contrato debido a que varios desarrolladores de Linux habían realizado modificaciones en el software desbloqueando funciones de pago. Esta trifulca entre el equipo de Beekeeper y Linux llevó a Linus Torvalds, iniciador y parte importante de Linux, a diseñar un nuevo software de control de versiones tan libre como lo era (y es) Linux.

Así nació Git.

![Linus Torvalds](../../images/linus_torvalds.jpg)

### Git y GitHub

**GitHub** es una forja (plataforma de desarrollo colaborativo) para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador.

Podéis acceder a GitHub a través de este [enlace](https://github.com).

### Instalación

Para instalar GIT en Windows, se puede descargar la última versión [aquí](https://git-scm.com). Si usáis algún sistema operativo Linux, podéis usar el siguiente comando:

```
sudo apt install git-all
```

Para ver si está instalado correctamente, sólo hay que acceder al terminal e introducir el siguiente comando:

```
git --version
```

### Configuración inicial

Por su naturaleza colaborativa, Git utiliza un sistema de cuentas para poder conocer quién ha realizado los cambios en los archivos.
Para poder usar Git sin que te pida la contraseña en cada acción debemos configurarlo en un inicio con nuestras credenciales:

```
git config --global user.name "Tu Nombre" # Usuario de Git
git config --global user.email "tu@email.com" # Email de Git
git config --list # Lista los usuarios (opcional)
```


### Conceptos básicos

![Git Resumen](../../images/git-resumen.png)

#### Los tres entornos de Git

**Working directory (Directorio de trabajo)**

Este es el directorio/carpeta en el que el ingeniero trabaja, ya sea para cambiar líneas de código, añadir o eliminar archivos, ...

Dentro de esta carpeta, aparte del proyecto a trabajar, tendremos la carpeta oculta _.git_ que tiene toda la información sobre el repositorio local y remoto y sus ramas.

Un ejemplo de proyecto con Git sería:

```
mi-proyecto/
├── .git
├── index.html
├── style.css
└── script.js
```

Dato: El nombre de la carpeta "mi-proyecto" es el nombre del repositorio de Git.

**Staging Area (Área de "Preparación")**

El _Staging Area_ es un área intermedia al que iremos añadiendo los archivos que has modificado con el objetivo de preparar tu próximo _commit_.

Para añadir archivos al staging area sólo necesitaréis el siguiente comando:

```
git add index.html # Para un solo archivo
git add * # Para incluir al commit todo lo modificado
```

**Repositorio (carpeta .git)**

El repositorio guarda todas las modificaciones y versiones de forma permanente en el historial de git. Esta carpeta es la que va a coordinar con el repositorio remoto (GitHub, por ejemplo) para que se pueda acceder de manera remota.

Para añadir los cambios preparados en la staging area, debemos hacer un commit con el siguiente comando:

```
git commit -m "Add homepage design" # -m Indica el mensaje que vas a escribir entre comillas
```

Podemos ver cada commit como una versión única del repositorio.

#### ¿Qué es HEAD?

HEAD es el nombre de una variable que almacena la dirección del último commit. Es útil para cuando queramos realizar acciones partiendo desde ese commit.


#### Estados - git status

Cuando ejecutamos el comando `git status` nos va a devolver una serie de estados por archivo. Cada uno tiene su significado:

- **Untracked**: El archivo con este estado es nuevo y no está añadido a git.
- **Modified**: Está en git y detecta cambios en el archivo.
- **Staged**: El archivo está en el _staging area_.
- **Commited**: El archivo está en el repositorio, registrado en el historial de git.

#### Registro de cambios - git log

Con `git log` vamos a poder ver los commits realizados en el repositorio con su id único y demás datos de interés. Si queremos ver una versión simplificada de estos registros, podemos usar `git log --oneline`.


#### Comandos personalizados - git alias

*¿Cansado de escribir comandos largos todo el día?* Ahora puedes crear tus propios comandos con `git alias`. Git alias es otra configuración para poder crear tus propios comandos personalizados.

Como ejemplo, podemos crear un alias para el comando `git status` ejecutando el siguiente comando `git config --global alias.st status`. Ahora, cada vez que quieras ver el estado del repositorio puedes ejecutar `git st`.

Otro ejemplo puede ser simplificar el comando `git log --oneline`. Podemos configurarlo con `git config --global alias.logone "log --onlineline"` (OJO, OJITO a que el comando lleva comillas, porque le hemos añadido el parámetro --oneline).



### Revertir cambios y manejo de commits

Imagináos la siguiente situación. Estamos trabajando y hacemos distintos commits pero, en un momento, nos damos cuenta de que tenemos un error que hiciste hace varios commits y no tienes ni idea de cómo volver atrás.
Pues existen varias maneras en las que tendremos que tener en cuenta, qué queremos hacer o deshacer y a qué areas va a afectar esa restauración.

#### git reset

Es un poderoso comando que reescribe el historial de commits. Para usarlo, tenemos tres opciones:

  - Soft: `git reset --soft <id_commit>` Mantiene los cambios tanto en el directorio de trabajo cómo en el área de preparación.
  - Mixed (por defecto): `git reset --mixed <id_commit>` Mantiene los cambios sólo en el directorio de trabajo.
  - Hard (muy destructivo): `git reset --hard <id_commit>` Descarta todos los cambios en todos los entornos.

#### git restore

Es un comando introducido en las versiones más recientes de Git (concretamente la 2.23 de Agosto de 2019) diseñada para deshacer cambios en el directorio de trabajo y en el *staging area*.

  - Para descartar cambios en el directorio de trabajo podemos usar `git restore <ruta_archivo>`. Esto es lo mismo que si usasemos `git checkout -- <ruta_archivo>`.
  - Para eliminar del *staging area* un archivo, se puede usar `git restore --staged <ruta_archivo>`. Es lo mismo que `git reset <ruta_archivo>`. Este comando no traerá los cambios al directorio de trabajo, tendrías que usar nuevamente `git restore` para que apareciesen (o añadir `--worktree` al comando).
  - Para reestablecer un archivo de un commit en específico, podemos usar `git restore --source=<id_commit> <ruta_archivo>`.

Se introdujo este nuevo comando para separar la funcionalidad de restaurar archivos con git chekcout y crear comandos más específicos.

#### git checkout

Es un comando flexible que te permite navegar entre ramas y reestablecer los archivos en el directorio de trabajo.
Podemos usarlo para cambiar a un commit específico con `git checkout <id_commit>`.

Y también podemos usarlo para cambiar a una rama existente con `git checkout <nombre_rama>`, o cambiar a una nueva `git checkout -b <nombre_rama_nueva>`.


**---Ejercicio práctico---**

- Crear proyecto HTML simple
- Hacer 5 commits diferentes
- Explorar git log y git status

### El Formato

Como cuando cada lenguaje, patrón de diseño o tipo de proyecto tiene su formato de carpetas y archivos, Git también tiene el suyo. Puede variar de proyecto en proyecto pero aquí tenéis algunas convenciones:

**CONVENCIONES GENERALES**

Sea como sea tu proyecto asegúrate de cumplir las siguientes normas:

- **Minúsculas y separación por guiones:** Siempre escribe todo en minúsculas y separado por un guión (-).
- **Sólo caracteres alfanuméricos y guión:** Ni espacios, ni barras bajas, etc, etc...
- **Sólo un único guión**: Usar más de un guión puede ser confuso.
- **No terminar con un guión**
- **Descriptivos:** Con un vistazo deberíamos saber sobre qué trata la rama/commit.

**Mensaje en los commits**

Más información sobre el formato de los commits [aquí](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13).

### Más información

#### Comandos útiles

- `gitk`: Muestra una representación visual de los cambios de tu repositorio

Si queréis saber más sobre Git y sus posibilidades, [aquí tenéis la documentación](https://git-scm.com/doc).
