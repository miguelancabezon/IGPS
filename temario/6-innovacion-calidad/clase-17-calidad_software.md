# Calidad de Software

## Índice
- [Fundamentos de  Calidad del Software](#fundamentos "Ir a Fundamentos de  Calidad del Software")
  - [¿A qué nos referimos con Calidad del Software?](#calidad-definicion "Ir a ¿A qué nos referimos con Calidad del Software?")
  - [Características de la Calidad del Producto](#calidad-stats "Ir a Características de la Calidad del Producto")
- [Principios SOLID y Buenas Prácticas](#solid "Ir a Principios SOLID y Buenas Prácticas")
  - [Single Responsibility Principle (SRP)](#solid-1 "Ir a Single Responsibility Principle (SRP)")
  - [Open/Closed Principle (OCP)](#solid-2 "Ir a Open/Closed Principle (OCP)")
  - [Liskov Substitution Principle](#solid-3 "Ir a Liskov Substitution Principle")
  - [Interface Segregation Principle (ISP)](#solid-4 "Ir a Interface Segregation Principle (ISP)")
  - [Dependency Inversion Principle (DIP)](#solid-5 "Ir a Single Dependency Inversion Principle (DIP)")
  - [Otras buenas prácticas](#other "Ir a Otras buenas prácticas")
    - [DRY - Don't Repeat Yourself](#other-dry "Ir a DRY - Don't Repeat Yourself")
    - [KISS - Keep It Simple, Stupid](#other-kiss "Ir a KISS - Keep It Simple, Stupid")
    - [YAGNI - You Aren't Gonna Need It](#other-yagni "Ir a YAGNI - You Aren't Gonna Need It")

---

## Fundamentos de  Calidad del Software
<div id="fundamentos"></div>

### ¿A qué nos referimos con Calidad del Software?
<div id="calidad-definicion"></div>

La calidad del software es el grado en que un producto satisface las necesidades establecidad y brinda valor a todas las personas interesadas (clientes, accionistas, ...)


**Entornos o Perspectivas en la Calidad**
1. **Calidad del Producto**: El software en sí mismo.
2. **Calidad del Proceso**: Cómo se desarrolla el software.
3. **Calidad en Uso**: Experiencia del usuario final.


**¿Por qué es importante la Calidad del Software?**

- Menos costos: Los errores en producción son 100 veces más caros que en desarrollo.
- Seguridad: Las vulnerabilidades pueden comprometer datos sensibles.
- Reputación: Software de calidad = clientes satisfetchos.
- Mantenibilidad: El código de calidad es más fácil de mantener y evolucionar.
- Productividad: Menos bugs = más tiempo para nuevas funcionalidades.


Pero, **¿quién define el grado de calidad?**. La norma ISO/IEC 25010, es la norma internacional diseñada e impulsada por la Organización Internacional de Estandarización (International Organization for Standardization o ISO).
Esta norma también propone unas características que definen la calidad del producto:

### Características de la Calidad del Producto
<div id="calidad-stats"></div>

1. Funcionalidad (Functional Suitability): Qué funcione correctamente.
2. Eficiencia de desempeño (Performance): Que sea escalable y consuma el menor número de recursos (CPU, memoria, ...).
3. Compatibilidad (Compatibilty): Coexistencia con otros sistemas.
4. Usabilidad (Usability): Operabilidad, protección contra errores de usuario, estética en la interfaz, accesibilidad, ...
5. Fiabilidad (Reliability): Disponibilidad, capacidad de recuperación, ...
6. Seguridad (Security): Confidencialidad, integriddad, ...
7. Mantenibilidad (Maintainability): Reusabilidad, capacidad de modificación, ...
8. Portabilidad (Portability): Adaptabilidad, ...


<u>**Calidad Interna vs Calidad externa**</u>

*Calidad Interna (vista del desarrollador)*

```java
// MAL: Calidad interna pobre
public class UserService {
    public void doStuff(String u, String p) {
        // Código difícil de entender
        if(u!=null&&p!=null&&p.length()>5) {
            // lógica compleja sin documentar
            db.save(u,p); // ¿Qué db? ¿De dónde viene?
        }
    }
}

```

```java
// BIEN: Buena calidad interna
/**
 * Servicio para gestionar operaciones de usuarios
 */
public class UserService {
    private final UserRepository userRepository;
    private final PasswordValidator passwordValidator;
    
    public UserService(UserRepository userRepository, 
                      PasswordValidator passwordValidator) {
        this.userRepository = userRepository;
        this.passwordValidator = passwordValidator;
    }
    
    /**
     * Registra un nuevo usuario en el sistema
     * @param username Nombre de usuario único
     * @param password Contraseña (mínimo 6 caracteres)
     * @throws IllegalArgumentException si los parámetros son inválidos
     */
    public void registerUser(String username, String password) {
        validateUsername(username);
        validatePassword(password);
        
        User user = new User(username, hashPassword(password));
        userRepository.save(user);
    }
    
    private void validateUsername(String username) {
        if (username == null || username.trim().isEmpty()) {
            throw new IllegalArgumentException("Username cannot be empty");
        }
    }
    
    private void validatePassword(String password) {
        if (!passwordValidator.isValid(password)) {
            throw new IllegalArgumentException(
                "Password must be at least 6 characters");
        }
    }
    
    private String hashPassword(String password) {
        // Implementación de hashing seguro
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }
}


```


*Calidad Externa (vista del usuario)*
- Rendimiento: La app responde rápido.
- Seguridad: Los datos están protegidos.
- Usabilidad: La interfaz es intuitiva.
- Fiabilidad: La app no se cae.

***Relación***
Una buena calidad interna tiende a lograr una buena calidad externa, PERO una buena calidad externa no significa que exista una buena calidad interna.


## Principios SOLID y Buenas Prácticas
<div id="solid"></div>

Los principios SOLID son 5 reglas fundamentales para el diseño orientado a objetos de calidad. Se basa en un acrónimo de las siguientes palabras:

1. **S**ingle Responsibility Principle (SRP): Una clase debe tener una sola razón para cambiar.
2. **O**pen/Closed Principle (OCP): Abierto para extensión, cerrado para modificación.
3. **L**iskov Substitution Principle (LSP): Los objetos de una subclase deben poder sustituir a objetos de la superclase.
4. **I**nterface Segregation Principle (ISP): Los clientes no deben depender de interfaces que no usan.
5. **D**ependency Inversion Principle (DIP): Depender de abstracciones, no de implementaciones concretas.

###  Single Responsibility Principle (SRP)
<div id="solid-1"></div>


###  **O**pen/Closed Principle (OCP)
<div id="solid-2"></div>


###  **L**iskov Substitution Principle
<div id="solid-3"></div>


###  **I**nterface Segregation Principle (ISP)
<div id="solid-4"></div>


###  **D**ependency Inversion Principle (DIP)
<div id="solid-5"></div>

### Otras buenas prácticas
<div id="other"></div>

#### DRY - Don't Repeat Yourself
<div id="other-dry"></div>

#### KISS - Keep It Simple, Stupid
<div id="other-kiss"></div>

#### YAGNI - You Aren't Gonna Need It
<div id="other-yagni"></div>






   



