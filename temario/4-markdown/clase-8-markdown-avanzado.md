# Markdown - Parte 2

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
![Texto alternativo](url-imagen.jpg)

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




