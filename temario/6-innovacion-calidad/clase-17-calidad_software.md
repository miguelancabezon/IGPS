# Calidad de Software

## Índice
- [Fundamentos de  Calidad del Software](#fundamentos "Ir a Fundamentos de  Calidad del Software")
  - [¿A qué nos referimos con Calidad del Software?](#calidad-definicion "Ir a ¿A qué nos referimos con Calidad del Software?")
  - [Características de la Calidad del Producto](#calidad-stats "Ir a Características de la Calidad del Producto")
- [Principios SOLID y Buenas Prácticas](#solid "Ir a Principios SOLID y Buenas Prácticas")
  - [Single Responsibility Principle (SRP)](#solid-1 "Ir a Single Responsibility Principle (SRP)")
  - [Open/Closed Principle (OCP)](#solid-2 "Ir a Open/Closed Principle (OCP)")
  - [Liskov Substitution Principle (LSP)](#solid-3 "Ir a Liskov Substitution Principle (LSP)")
  - [Interface Segregation Principle (ISP)](#solid-4 "Ir a Interface Segregation Principle (ISP)")
  - [Dependency Inversion Principle (DIP)](#solid-5 "Ir a Single Dependency Inversion Principle (DIP)")
  - [Otras buenas prácticas](#other "Ir a Otras buenas prácticas")
    - [DRY - Don't Repeat Yourself](#other-dry "Ir a DRY - Don't Repeat Yourself")
    - [KISS - Keep It Simple, Stupid](#other-kiss "Ir a KISS - Keep It Simple, Stupid")
    - [YAGNI - You Aren't Gonna Need It](#other-yagni "Ir a YAGNI - You Aren't Gonna Need It")
- [Métricas de Calidad](#metricas "Ir a Métricas de Calidad")
  - [Complejidad Ciclomática](#metricas-1 "Ir a Complejidad Ciclomática")
  - [Cobertura de Código (Code Coverage)](#metricas-2 "Ir a Cobertura de Código (Code Coverage)")
  - [Duplicación de Código](#metricas-3 "Ir a Duplicación de Código")
  - [Cálculo final - Maintainability Index](#metricas-4 "Ir a Calculo final - Maintainability Index") 



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

**Mal Ejemplo**
```java
// ❌ MAL: Múltiples responsabilidades
public class User {
    private String username;
    private String email;
    
    // Responsabilidad 1: Gestión de datos
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    
    // Responsabilidad 2: Validación
    public boolean validateEmail() {
        return email.contains("@");
    }
    
    // Responsabilidad 3: Persistencia
    public void saveToDatabase() {
        // Código SQL directo
        Connection conn = DriverManager.getConnection("...");
        // INSERT INTO users...
    }
    
    // Responsabilidad 4: Notificaciones
    public void sendWelcomeEmail() {
        // Código de envío de email
    }
}
```

**Buen Ejemplo**
```java
// ✅ BIEN: Una responsabilidad por clase
public class User {
    private final String username;
    private final Email email;
    
    public User(String username, Email email) {
        this.username = username;
        this.email = email;
    }
    
    public String getUsername() { return username; }
    public Email getEmail() { return email; }
}

public class Email {
    private final String value;
    
    public Email(String value) {
        if (!isValid(value)) {
            throw new IllegalArgumentException("Invalid email");
        }
        this.value = value;
    }
    
    private boolean isValid(String email) {
        return email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }
    
    public String getValue() { return value; }
}

public class UserRepository {
    private final DataSource dataSource;
    
    public void save(User user) {
        try (Connection conn = dataSource.getConnection()) {
            String sql = "INSERT INTO users (username, email) VALUES (?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, user.getUsername());
            stmt.setString(2, user.getEmail().getValue());
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException("Error saving user", e);
        }
    }
}

public class EmailService {
    public void sendWelcomeEmail(User user) {
        String subject = "Welcome to our platform!";
        String body = "Hello " + user.getUsername() + "...";
        // Enviar email
    }
}
```


###  **O**pen/Closed Principle (OCP)
<div id="solid-2"></div>

**Mal Ejemplo**
```java
// ❌ MAL: Necesitas modificar la clase para añadir tipos
public class PaymentProcessor {
    public void processPayment(String type, double amount) {
        if (type.equals("CREDIT_CARD")) {
            // Procesar tarjeta
            System.out.println("Processing credit card: " + amount);
        } else if (type.equals("PAYPAL")) {
            // Procesar PayPal
            System.out.println("Processing PayPal: " + amount);
        } else if (type.equals("BITCOIN")) {
            // Procesar Bitcoin
            System.out.println("Processing Bitcoin: " + amount);
        }
        // ❌ Cada nuevo método de pago requiere modificar esta clase
    }
}
```

**Buen Ejemplo**
```java
// ✅ BIEN: Extensible sin modificar
public interface PaymentMethod {
    void process(double amount);
    String getName();
}

public class CreditCardPayment implements PaymentMethod {
    private final String cardNumber;
    
    public CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }
    
    @Override
    public void process(double amount) {
        System.out.println("Processing credit card payment: €" + amount);
        // Lógica específica de tarjeta
    }
    
    @Override
    public String getName() { return "Credit Card"; }
}

public class PayPalPayment implements PaymentMethod {
    private final String email;
    
    public PayPalPayment(String email) {
        this.email = email;
    }
    
    @Override
    public void process(double amount) {
        System.out.println("Processing PayPal payment: €" + amount);
        // Lógica específica de PayPal
    }
    
    @Override
    public String getName() { return "PayPal"; }
}

public class BitcoinPayment implements PaymentMethod {
    private final String walletAddress;
    
    public BitcoinPayment(String walletAddress) {
        this.walletAddress = walletAddress;
    }
    
    @Override
    public void process(double amount) {
        System.out.println("Processing Bitcoin payment: €" + amount);
        // Lógica específica de Bitcoin
    }
    
    @Override
    public String getName() { return "Bitcoin"; }
}

public class PaymentProcessor {
    public void processPayment(PaymentMethod paymentMethod, double amount) {
        System.out.println("Processing with: " + paymentMethod.getName());
        paymentMethod.process(amount);
        // ✅ Añadir nuevos métodos de pago no requiere modificar esta clase
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        PaymentProcessor processor = new PaymentProcessor();
        
        processor.processPayment(new CreditCardPayment("1234-5678"), 100.0);
        processor.processPayment(new PayPalPayment("user@email.com"), 50.0);
        processor.processPayment(new BitcoinPayment("1A2b3C..."), 200.0);
        
        // ✅ Fácil añadir nuevos métodos sin cambiar código existente
    }
}
```

###  **L**iskov Substitution Principle (LSP)
<div id="solid-3"></div>

**Mal Ejemplo**
```java
// ❌ MAL: Violación del LSP
public class Bird {
    public void fly() {
        System.out.println("Flying...");
    }
}

public class Penguin extends Bird {
    @Override
    public void fly() {
        // ❌ Los pingüinos no vuelan!
        throw new UnsupportedOperationException("Penguins can't fly");
    }
}

// Problema en uso
public class BirdWatcher {
    public void makeBirdFly(Bird bird) {
        bird.fly(); // ❌ Falla con Penguin!
    }
}
```

**Buen Ejemplo**
```java
// ✅ BIEN: Diseño correcto
public abstract class Bird {
    public abstract void move();
}

public interface Flyable {
    void fly();
}

public class Sparrow extends Bird implements Flyable {
    @Override
    public void move() {
        fly();
    }
    
    @Override
    public void fly() {
        System.out.println("Sparrow flying...");
    }
}

public class Penguin extends Bird {
    @Override
    public void move() {
        swim();
    }
    
    public void swim() {
        System.out.println("Penguin swimming...");
    }
}

// Uso correcto
public class BirdWatcher {
    public void observeBird(Bird bird) {
        bird.move(); // ✅ Funciona para todos los pájaros
    }
    
    public void watchFlight(Flyable flyable) {
        flyable.fly(); // ✅ Solo para aves que vuelan
    }
}
```

###  **I**nterface Segregation Principle (ISP)
<div id="solid-4"></div>

**Mal Ejemplo**
```java
// ❌ MAL: Interfaz demasiado grande
public interface Worker {
    void work();
    void eat();
    void sleep();
    void attendMeeting();
    void writeCode();
}

public class Developer implements Worker {
    @Override
    public void work() { /* desarrollar */ }
    
    @Override
    public void eat() { /* comer */ }
    
    @Override
    public void sleep() { /* dormir */ }
    
    @Override
    public void attendMeeting() { /* asistir a reunión */ }
    
    @Override
    public void writeCode() { /* escribir código */ }
}

public class Robot implements Worker {
    @Override
    public void work() { /* trabajar */ }
    
    @Override
    public void eat() { 
        // ❌ Los robots no comen!
        throw new UnsupportedOperationException();
    }
    
    @Override
    public void sleep() { 
        // ❌ Los robots no duermen!
        throw new UnsupportedOperationException();
    }
    
    @Override
    public void attendMeeting() { /* puede asistir */ }
    
    @Override
    public void writeCode() { /* puede programar */ }
}
```

**Buen Ejemplo**
```java
// ✅ BIEN: Interfaces segregadas
public interface Workable {
    void work();
}

public interface Eatable {
    void eat();
}

public interface Sleepable {
    void sleep();
}

public interface Attendable {
    void attendMeeting();
}

public interface Programmable {
    void writeCode();
}

public class Developer implements Workable, Eatable, Sleepable, 
                                 Attendable, Programmable {
    @Override
    public void work() { 
        System.out.println("Developer working..."); 
    }
    
    @Override
    public void eat() { 
        System.out.println("Developer eating..."); 
    }
    
    @Override
    public void sleep() { 
        System.out.println("Developer sleeping..."); 
    }
    
    @Override
    public void attendMeeting() { 
        System.out.println("Developer attending meeting..."); 
    }
    
    @Override
    public void writeCode() { 
        System.out.println("Developer writing code..."); 
    }
}

public class Robot implements Workable, Attendable, Programmable {
    @Override
    public void work() { 
        System.out.println("Robot working..."); 
    }
    
    @Override
    public void attendMeeting() { 
        System.out.println("Robot attending meeting..."); 
    }
    
    @Override
    public void writeCode() { 
        System.out.println("Robot writing code..."); 
    }
    // ✅ No necesita implementar eat() ni sleep()
}
```

###  **D**ependency Inversion Principle (DIP)
<div id="solid-5"></div>

**Mal Ejemplo**
```java
// ❌ MAL: Alto acoplamiento
public class MySQLDatabase {
    public void save(String data) {
        System.out.println("Saving to MySQL: " + data);
    }
}

public class UserService {
    private MySQLDatabase database = new MySQLDatabase();
    // ❌ Acoplado directamente a MySQL
    
    public void registerUser(String username) {
        database.save(username);
        // ❌ Si quieres cambiar a PostgreSQL, debes modificar esta clase
    }
}
```

**Buen Ejemplo**
```java
// ✅ BIEN: Inversión de dependencias
public interface Database {
    void save(String data);
    String find(String id);
}

public class MySQLDatabase implements Database {
    @Override
    public void save(String data) {
        System.out.println("Saving to MySQL: " + data);
    }
    
    @Override
    public String find(String id) {
        return "Data from MySQL: " + id;
    }
}

public class PostgreSQLDatabase implements Database {
    @Override
    public void save(String data) {
        System.out.println("Saving to PostgreSQL: " + data);
    }
    
    @Override
    public String find(String id) {
        return "Data from PostgreSQL: " + id;
    }
}

public class MongoDatabase implements Database {
    @Override
    public void save(String data) {
        System.out.println("Saving to MongoDB: " + data);
    }
    
    @Override
    public String find(String id) {
        return "Data from MongoDB: " + id;
    }
}

public class UserService {
    private final Database database;
    
    // ✅ Inyección de dependencias
    public UserService(Database database) {
        this.database = database;
    }
    
    public void registerUser(String username) {
        database.save(username);
        // ✅ Funciona con cualquier implementación de Database
    }
    
    public String getUser(String id) {
        return database.find(id);
    }
}

// Configuración (por ejemplo, con Spring)
@Configuration
public class AppConfig {
    @Bean
    public Database database() {
        // ✅ Cambiar de BD solo requiere modificar esta configuración
        return new PostgreSQLDatabase();
        // return new MySQLDatabase();
        // return new MongoDatabase();
    }
    
    @Bean
    public UserService userService(Database database) {
        return new UserService(database);
    }
}
```

### Otras buenas prácticas
<div id="other"></div>


#### DRY - Don't Repeat Yourself
<div id="other-dry"></div>

**Mal Ejemplo**
```java
// ❌ MAL: Código duplicado
public class ReportService {
    public void generatePDFReport(List<Sale> sales) {
        // Calcular totales
        double total = 0;
        for (Sale sale : sales) {
            total += sale.getAmount();
        }
        
        // Generar PDF
        System.out.println("PDF Report - Total: " + total);
    }
    
    public void generateExcelReport(List<Sale> sales) {
        // Calcular totales (código duplicado)
        double total = 0;
        for (Sale sale : sales) {
            total += sale.getAmount();
        }
        
        // Generar Excel
        System.out.println("Excel Report - Total: " + total);
    }
    
    public void generateHTMLReport(List<Sale> sales) {
        // Calcular totales (código duplicado)
        double total = 0;
        for (Sale sale : sales) {
            total += sale.getAmount();
        }
        
        // Generar HTML
        System.out.println("HTML Report - Total: " + total);
    }
}
```

**Buen Ejemplo**
```java
// ✅ BIEN: Sin duplicación
public class ReportService {
    
    private double calculateTotal(List<Sale> sales) {
        return sales.stream()
                   .mapToDouble(Sale::getAmount)
                   .sum();
    }
    
    public void generatePDFReport(List<Sale> sales) {
        double total = calculateTotal(sales);
        System.out.println("PDF Report - Total: " + total);
    }
    
    public void generateExcelReport(List<Sale> sales) {
        double total = calculateTotal(sales);
        System.out.println("Excel Report - Total: " + total);
    }
    
    public void generateHTMLReport(List<Sale> sales) {
        double total = calculateTotal(sales);
        System.out.println("HTML Report - Total: " + total);
    }
}
```

#### KISS - Keep It Simple, Stupid
<div id="other-kiss"></div>

**Mal Ejemplo**
```java
// ❌ MAL: Complejidad innecesaria
public class StringUtils {
    public static boolean isNullOrEmpty(String str) {
        if (str != null) {
            if (str.length() > 0) {
                if (!str.trim().isEmpty()) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
}
```

**Buen Ejemplo**
```java
/ ✅ BIEN: Simple y claro
public class StringUtils {
    public static boolean isNullOrEmpty(String str) {
        return str == null || str.trim().isEmpty();
    }
}
```

#### YAGNI - You Aren't Gonna Need It
<div id="other-yagni"></div>

**Mal Ejemplo**
```java
// ❌ MAL: Funcionalidad prematura
public class User {
    private String username;
    private String email;
    private String phone; // ¿Necesario ahora?
    private String address; // ¿Necesario ahora?
    private String socialSecurityNumber; // ¿Necesario ahora?
    private List<String> hobbies; // ¿Necesario ahora?
    private String favoriteColor; // ¿Necesario ahora?
    
    // 20+ getters/setters que nadie usa todavía
}
```

**Buen Ejemplo**
```java
// ✅ BIEN: Solo lo necesario ahora
public class User {
    private String username;
    private String email;
    
    // Se añadirán más campos cuando realmente sean necesarios
}
```

--- 

## Métricas de Calidad
<div id="metricas"></div>

### Complejidad Ciclomática
<div id="metricas-1"></div>

Mide el número de caminos independientes a través del código.

```java
// Complejidad: 1 (sin bifurcaciones)
public int sum(int a, int b) {
    return a + b;
}

// Complejidad: 2 (1 if)
public String getGrade(int score) {
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// Complejidad: 4 (3 ifs)
public String getLetterGrade(int score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}

// ❌ Complejidad: 7 (muy alta - difícil de probar)
public boolean validateUser(String username, String password, 
                           boolean isAdmin, int age) {
    if (username != null && !username.isEmpty()) {
        if (password != null && password.length() >= 8) {
            if (isAdmin || age >= 18) {
                if (username.matches("[a-zA-Z0-9]+")) {
                    if (!password.contains(username)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
```


```java
// ✅ Complejidad reducida: Refactorizado
public boolean validateUser(String username, String password, 
                           boolean isAdmin, int age) {
    return isUsernameValid(username) &&
           isPasswordValid(password, username) &&
           isAuthorized(isAdmin, age);
}

private boolean isUsernameValid(String username) {
    return username != null && 
           !username.isEmpty() && 
           username.matches("[a-zA-Z0-9]+");
}

private boolean isPasswordValid(String password, String username) {
    return password != null && 
           password.length() >= 8 && 
           !password.contains(username);
}

private boolean isAuthorized(boolean isAdmin, int age) {
    return isAdmin || age >= 18;
}
```

**Guía de Complejidad**
|Grado|Significado|
|:---:|---|
|1-10| Simple, fácil de probar ✅|
|11-20| Moderadamente complejo ⚠️|
|21-50| Complejo, difícil de mantener ❌|
|50+| No testeable, *refactorizar urgente* 🚨|



### Cobertura de Código (Code Coverage)
<div id="metricas-2"></div>

```java
public class Calculator {
    public int divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero");
        }
        return a / b;
    }
}

// ❌ Cobertura parcial: 50%
@Test
public void testDivideSuccess() {
    Calculator calc = new Calculator();
    assertEquals(5, calc.divide(10, 2));
    // Solo prueba el caso exitoso
}

// ✅ Cobertura completa: 100%
@Test
public void testDivideSuccess() {
    Calculator calc = new Calculator();
    assertEquals(5, calc.divide(10, 2));
}

@Test
public void testDivideByZero() {
    Calculator calc = new Calculator();
    assertThrows(IllegalArgumentException.class, () -> {
        calc.divide(10, 0);
    });
}
```

<u>**Tipos de Cobertura**</u>
- Line Coverage: % de líneas ejecutadas
- Branch Coverage: % de ramas (if/else) ejecutadas
- Method Coverage: % de métodos ejecutados

<u>**Objetivos recomendados**</u>
- Proyectos críticos: 80-90%
- Proyectos normales: 70-80%
- Proyectos experimentales: 50-70%


### Duplicación de Código
<div id="metricas-3"></div>

**Con duplicación**
```java
// ❌ Duplicación: 80%
public class OrderService {
    public void processOnlineOrder(Order order) {
        validateOrder(order);
        calculateTax(order);
        applyDiscount(order);
        chargePayment(order);
        sendConfirmationEmail(order);
        updateInventory(order);
    }
    
    public void processPhoneOrder(Order order) {
        validateOrder(order);
        calculateTax(order);
        applyDiscount(order);
        chargePayment(order);
        sendConfirmationEmail(order);
        updateInventory(order);
        // Mismo código!
    }
}
```


**Sin duplicación**
```java
// ✅ Sin duplicación
public class OrderService {
    public void processOrder(Order order) {
        validateOrder(order);
        calculateTax(order);
        applyDiscount(order);
        chargePayment(order);
        sendConfirmationEmail(order);
        updateInventory(order);
    }
}
```


<u>**Cálculo final - Maintainability Index**</u>
<div id="metricas-4"></div>

`(Maintainability Index) MI = 171 - 5.2\*ln(Volumen de Halstead) - 0.23\*(Complejidad Ciclomatica) - 16.2\*ln(Lineas de Código)`

> [!NOTE]
> El volumen de Halstead es una métrica para calcular el volumen de un software.
> 
> La fórmula es: `VH = N * log n`
> 
> Siendo `N = Nº total de operaciones + Nº total de operandos`
> y `n = Nº único de operaciones` + Nº único de operandos`
>
> Operandos -> Variables y sus valores.
> Operaciones -> Símbolos y palabras reservadas del lenguaje.


**Resultado**
|Grado|Significado|
|:---:|---|
|85-100| Alta mantenibilidad ✅|
|65-84| Media mantenibilidad ⚠️|
|0-64| Baja mantenibilidad ❌|












   






