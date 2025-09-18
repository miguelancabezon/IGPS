# GIT SEASON 2

## Ramas

![Ramas GIT](imgs/git-branches.png)

![Ramas GIT Avanzado](imgs/branches.svg)


**Feature Branches (Ramas de Funcionalidad):** Estas ramas se utilizan para desarrollar nuevas características o funcionalidades. 

Prefijo: `feature` o `feat` 

Ejemplos: 
```
feature/login-system # Sistema de login 
feature/shopping-cart # Carrito de compras
```

**Bugfix Branches (Ramas de Corrección de Errores):** Estas ramas se utilizan para corregir errores en el código existente. 

Prefijo: `bugfix` o `fix` 

Ejemplos:
```
bugfix/mobile-responsive # Problemas de responsive 
bugfix/database-connection # Error de conexión a BD
```

**Hotfix Branches (Ramas de Corrección Urgente):** Estas ramas se crean directamente desde la rama de producción para corregir errores críticos en el entorno de producción.

Prefijo: `hotfix/`

Ejemplos:
```
hotfix/data-corruption # Corrupción de datos 
hotfix/server-crash # Caída del servidor 
hotfix/memory-leak # Fuga de memoria
```

**Release Branches (Ramas de Lanzamiento):** Estas ramas se utilizan para preparar un nuevo lanzamiento a producción. Permiten hacer los ajustes finales y pulir detalles.

Prefijo: `release/`

Ejemplos:
```
release/v2.1.0 # Versión 2.1.0 
release/2024-march # Release de marzo 2024 
release/sprint-15 # Release del sprint 15
```


**Documentation Branches (Ramas de Documentación):** Estas ramas se utilizan para escribir, actualizar o corregir documentación, como archivos README.md, wikis, o documentación de API.

Prefijo: `docs/`

Ejemplos:
```
docs/api-endpoints # Documentar endpoints de API 
docs/installation-guide # Guía de instalación
```
