# AEC-GIT

## Autor

Alejandro Serna

## Introducción

En esta actividad se han utilizado Git y GitHub para trabajar con un repositorio, realizar un fork, clonarlo de forma local, crear una estructura de entrega, realizar commits y trabajar con distintas ramas.

---

## 1. Clonado del repositorio

Después de realizar el fork del repositorio de la asignatura en GitHub, cloné el repositorio en mi ordenador utilizando Git desde la terminal.

![Clonado del repositorio](capturas/1.clonado.png)

---

## 2. Comprobación del repositorio remoto

Una vez clonado el repositorio, comprobé mediante Git que el repositorio remoto `origin` correspondía con mi fork de GitHub.

![Comprobación del remote](capturas/2.remote.png)

---

## 3. Creación de la carpeta de entrega

Dentro de la carpeta `entregas` se creó la estructura correspondiente para realizar la actividad AEC-GIT.

La estructura utilizada fue:

`entregas/alejandro.serna/AEC-GIT`

![Creación de la carpeta](capturas/3.carpeta.png)

---

## 4. Creación del informe

Dentro de la carpeta `AEC-GIT` se creó el archivo `informe.md`, que se utilizará para documentar los diferentes pasos realizados durante la actividad y mostrar las evidencias correspondientes.

![Creación del informe](capturas/4.informe.png)

El archivo fue añadido al seguimiento de Git y posteriormente se realizó el commit inicial indicado en el enunciado:

`docs: nuevo archivo`

---

## 5. Creación de la rama de trabajo

Después del commit inicial se creó una nueva rama denominada:

`docs/modificaciones`

Esta rama se utiliza para realizar los cambios relacionados con la documentación de la actividad sin trabajar directamente sobre la rama principal `main`.

![Creación de la rama](capturas/5.rama.png)

---

## 6. Trabajo realizado en la rama

Una vez creada la rama `docs/modificaciones`, se continuó trabajando en el informe y añadiendo las capturas correspondientes.

Los cambios realizados se dividieron en varios commits para mantener un historial de modificaciones claro y ordenado.

---

## 7. Fusión de las ramas

Una vez terminados los cambios de documentación, se volvió a la rama `main` y se fusionaron los cambios realizados en `docs/modificaciones`.

Después de comprobar que la fusión se había realizado correctamente, se subieron los cambios al repositorio remoto.

---

## 8. Pull Request

Finalmente, se creó una Pull Request desde mi fork hacia el repositorio original de la asignatura para realizar la entrega de la actividad.