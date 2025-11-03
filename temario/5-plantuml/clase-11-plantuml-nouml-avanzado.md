# - NoUML - Parte 2

## Mindmaps Avanzados

### Estilos y Personalización Avanzada

**Colores y estilos personalizados**

[Ir a Colores y estilos](../../documentos/modelosUML/mindmap/mm-estilos.puml "Ir a Colores y estilos")

**Colores por nodo individual**

[Ir a Colores por nodo](../../documentos/modelosUML/mindmap/mm-colores-nodo.puml "Ir a Colores por nodo")

**Íconos y símbolos especiales**

[Ir a Iconos](../../documentos/modelosUML/mindmap/mm-colores-nodo.puml "Ir a Iconos")

Tenéis una lista de íconos unicode [aquí](https://.com/es/creole "Lista iconos unicode")

## Mindmaps Organizacionales Complejos

Arquitectura de Software Completa:
@startmindmap

<style>
mindmapDiagram {
  .frontend {
    BackgroundColor #61DAFB
    LineColor #282C34
  }
  .backend {
    BackgroundColor #68A063
    LineColor #303030
  }
  .database {
    BackgroundColor #336791
    LineColor white
  }
  .infrastructure {
    BackgroundColor #FF9900
    LineColor #232F3E
  }
  .security {
    BackgroundColor #DD0031
    LineColor white
  }
}
</style>

- 🏗️ Arquitectura Microservicios
  Sistema Bancario Online

**[#61DAFB] 🎨 Capa de Presentación <<frontend>> \*** Web Application (React) \***\* Components Library
\*\*\*** Atomic Design
**\*\*** Atoms
**\*\*** Molecules
**\*\*** Organisms \***\* State Management
\*\*\*** Redux Toolkit
**\*** React Query (Cache) \***\* Routing & Navigation
\*\*\*** React Router v6
**\*** Protected Routes
**\* Mobile App (React Native)
\*\*** iOS & Android \***\* Offline Mode
\*\*** Biometric Auth

**[#68A063] ⚙️ Capa de Servicios <<backend>> \*** API Gateway (Kong) \***\* Rate Limiting
\*\*** Authentication \***_ Load Balancing
_** Microservicios \***\* Auth Service (Node.js)
\*\*\*** JWT + Refresh Tokens
**\*** OAuth2 / OIDC
**\*** 2FA Implementation \***\* Account Service (Java Spring)
\*\*\*** CRUD Cuentas
**\*** Transacciones
**\*** Saldos & Movimientos \***\* Payment Service (Go)
\*\*\*** Pagos nacionales
**\*** SEPA / SWIFT
**\*** Integración TPV \***\* Notification Service (Python)
\*\*\*** Email (SendGrid)
**\*** SMS (Twilio)
**\*** Push Notifications \***\* Analytics Service (Node.js)
\*\*\*** Tracking eventos
**\*** Dashboards
**\*** Reports

left side

**[#336791] 🗄️ Capa de Datos <<database>> \*** Bases de Datos \***\* PostgreSQL (Principal)
\*\*\*** Particionamiento
**\*** Replicación Master-Slave
**\*** Backups automáticos \***\* MongoDB (Logs & Analytics)
\*\*\*** Time-series data
**\*** Agregaciones \***\* Redis (Cache & Sessions)
\*\*\*** Cache distribuido
**\*** Pub/Sub
**\*** Rate limiting

**[#FF9900] ☁️ Infraestructura <<infrastructure>> \*** Cloud Provider (AWS) \***\* Compute
\*\*\*** ECS Fargate (Containers)
**\*** Lambda (Serverless)
**\*** Auto Scaling Groups \***\* Storage
\*\*\*** S3 (Documentos)
**\*** EFS (Shared storage) \***\* Networking
\*\*\*** VPC & Subnets
**\*** Load Balancers (ALB)
**\*** CloudFront (CDN)
**\* Monitoring & Observability
\*\*** Prometheus + Grafana \***\* ELK Stack (Logs)
\*\*** Sentry (Error tracking)
**\* CI/CD Pipeline
\*\*** GitHub Actions
**\*** Tests automatizados
**\*** Security scanning
**\*** Build & Deploy
\*\*\*\* ArgoCD (GitOps)

**[#DD0031] 🔐 Seguridad <<security>> \*** Autenticación & Autorización \***\* Multi-factor Auth (2FA)
\*\*** Role-based Access Control \***_ API Key Management
_** Encriptación \***\* TLS 1.3
\*\*** Encryption at rest \***_ Vault (Secrets)
_** Compliance \***\* PCI-DSS
\*\*** GDPR \***_ Auditoría & Logs
_** Security Testing \***\* OWASP Top 10
\*\*** Penetration Testing
\*\*\*\* Dependency Scanning

@endmindmap
Mindmap de Roadmap Técnico
@startmindmap
title Roadmap de Aprendizaje Full-Stack Developer
caption 12 meses - De Junior a Mid-Level

<style>
mindmapDiagram {
  .q1 {
    BackgroundColor #E3F2FD
    LineColor #1976D2
  }
  .q2 {
    BackgroundColor #F3E5F5
    LineColor #7B1FA2
  }
  .q3 {
    BackgroundColor #FFF3E0
    LineColor #F57C00
  }
  .q4 {
    BackgroundColor #E8F5E9
    LineColor #388E3C
  }
  .completed {
    BackgroundColor #C8E6C9
    LineColor #2E7D32
    FontStyle italic
  }
  .inprogress {
    BackgroundColor #FFF9C4
    LineColor #F9A825
    FontStyle bold
  }
}
</style>

- 🎯 Full-Stack Developer Journey
  2025 Learning Path

**[#E3F2FD] 📅 Q1: Fundamentos <<q1>> \*** ✅ HTML5 & CSS3 Avanzado <<completed>> \***\* Flexbox & Grid mastery
\*\*** Responsive Design \***\* Animations & Transitions
\*\*** Accessibility (a11y)
**\* ✅ JavaScript ES6+ <<completed>>
\*\*** Async/Await \***\* Promises
\*\*** Modules \***_ Destructuring & Spread
_** ⏳ Git & GitHub <<inprogress>> \***\* Branching strategies
\*\*** Pull Requests \***_ GitHub Actions básico
_** 📚 Algoritmos & Estructuras de Datos \***\* Arrays & Objects
\*\*** Linked Lists \***\* Stacks & Queues
\*\*** Big O Notation

**[#F3E5F5] 📅 Q2: Frontend Moderno <<q2>> \*** React.js Profundo \***\* Hooks avanzados
\*\*\*** useReducer, useContext
**\*** Custom Hooks \***\* Component Patterns
\*\*\*** Compound Components
**\*** Render Props
**\*** HOCs \***\* Performance Optimization
\*\*\*** React.memo
**\*** useMemo, useCallback
**\*** Code Splitting
**\* State Management
\*\*** Redux Toolkit \***\* Zustand / Jotai
\*\*** React Query (Server State)
**\* Testing Frontend
\*\*** Jest & React Testing Library \***_ E2E con Playwright
_** TypeScript \***\* Tipos básicos y avanzados
\*\*** Generics
\*\*\*\* Utility Types

left side

**[#FFF3E0] 📅 Q3: Backend & Databases <<q3>> \*** Node.js & Express \***\* REST APIs
\*\*\*** CRUD operations
**\*** Middleware
**\*** Error handling \***\* Authentication & Authorization
\*\*\*** JWT
**\*** OAuth2
**\*** Sessions \***\* Security Best Practices
\*\*\*** Helmet.js
**\*** Rate limiting
**\*** Input validation
**\* Bases de Datos
\*\*** SQL (PostgreSQL)
**\*** Queries complejas
**\*** Joins & Subqueries
**\*** Indexes
**\*** Transactions \***\* NoSQL (MongoDB)
\*\*\*** Document design
**\*** Aggregation pipeline
**\*** Replication
**\* ORMs & Query Builders
\*\*** Prisma \***\* TypeORM
\*\*** Sequelize

**[#E8F5E9] 📅 Q4: DevOps & Avanzado <<q4>> \*** Containerización \***\* Docker
\*\*\*** Dockerfile
**\*** Docker Compose
**\*** Multi-stage builds \***\* Kubernetes básico
\*\*\*** Pods & Services
**\*** Deployments
**\*** ConfigMaps & Secrets
**\* CI/CD
\*\*** GitHub Actions avanzado \***\* Testing automation
\*\*** Deployment pipelines
**\* Cloud Platforms
\*\*** AWS
**\*** EC2, S3, RDS
**\*** Lambda
**\*** CloudFront \***_ Vercel / Netlify
_** Monitoring & Logging \***\* Application logs
\*\*** Error tracking (Sentry) \***_ Performance monitoring
_** Arquitectura \***\* Microservices patterns
\*\*** API Gateway \***\* Message Queues (RabbitMQ)
\*\*** Caching strategies (Redis)

** 🎓 Certificaciones Objetivo \*** AWS Certified Developer
**_ MongoDB Associate
_** GitHub Actions Certification

** 📊 KPIs de Progreso \*** 5 proyectos portfolio
**_ 100+ commits en open source
_** 2 artículos técnicos/mes
\*\*\* 1 charla técnica

@endmindmap
💻 Ejercicio Práctico 1
Crear un mindmap avanzado para uno de estos casos:

Arquitectura de tu proyecto más complejo con al menos 4 capas
Plan de estudio para certificación con timeline y recursos
Estrategia de empresa/startup con diferentes departamentos

Requisitos:

Usar estilos personalizados
Al menos 5 colores diferentes
Mínimo 4 niveles de profundidad
Incluir emojis o símbolos
Usar ambos lados del mindmap

📚 PARTE 2: Wireframes/Salt Avanzados
Layouts Complejos y Grids
Sistema de Grid Avanzado:
@startsalt
title Dashboard Analítico Empresarial

{+
{/ <b>📊 Dashboard | 📈 Analytics | 👥 Users | ⚙️ Settings | 🔔 Notifications (3) }
==
{
{T + 🏠 Home
++ 📊 Overview
++ 📈 Sales
++ 💰 Revenue + 📦 Products
++ 📋 List
++ ➕ Add New
++ 🏷️ Categories + 👥 Customers
++ 📋 All Customers
++ ⭐ VIP Clients
++ 🎂 Birthdays + 📊 Reports
++ 📅 Daily
++ 📆 Weekly
++ 📈 Monthly
++ 📊 Custom
-- + ⚙️ Settings + 🚪 Logout
} | {
<b><size:16>Dashboard Overview</size></b>
<i>Last updated: 2 min ago</i>
==
{
{^"📊 Total Sales"
<b><size:20>€245,890</size></b>
<color:green>↗ +12.5%</color> vs last month
} | {^"👥 Active Users"
<b><size:20>1,234</size></b>
<color:green>↗ +8.3%</color> vs last month
} | {^"📦 Orders"
<b><size:20>456</size></b>
<color:red>↘ -3.2%</color> vs last month
} | {^"⭐ Conversion"
<b><size:20>3.2%</size></b>
<color:green>↗ +0.5%</color> vs last month
}
}
==
{
{SI
<b>📈 Revenue Trend (Last 12 months)</b>
==
||||||||||||||||||||||||||||||||||||||||||||| Jan: €20K
|||||||||||||||||||||||||||||||||||||||||||||||| Feb: €22K
||||||||||||||||||||||||||||||||||||||||||||||||||||| Mar: €24K
||||||||||||||||||||||||||||||||||||||||||||||||||| Apr: €23K
||||||||||||||||||||||||||||||||||||||||||||||||||||||||| May: €26K
|||||||||||||||||||||||||||||||||||||||||||||||||||||||| Jun: €25K
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Jul: €27K
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Aug: €28K
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Sep: €27K
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Oct: €29K
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| Nov: €30K
==
} | {^
<b>🎯 Top Products</b>
{#
Rank | Product | Sales | Revenue
🥇 1 | Laptop Pro | 156 | €124K
🥈 2 | Mouse Wireless | 423 | €12K
🥉 3 | Keyboard Mech | 234 | €18K
4 | Monitor 4K | 89 | €35K
5 | Webcam HD | 167 | €8K
}
}
}
==
{
{SI
<b>📋 Recent Orders</b>
{#
Order ID | Customer | Product | Amount | Status | [...]
#ORD-1234 | John Doe | Laptop Pro | €899 | ✅ Delivered | [👁]
#ORD-1235 | Jane Smith | Mouse | €29 | 🚚 Shipping | [👁]
#ORD-1236 | Bob Johnson | Keyboard | €79 | ⏳ Processing | [👁]
#ORD-1237 | Alice Brown | Monitor | €399 | ✅ Delivered | [👁]
#ORD-1238 | Charlie Wilson | Webcam | €49 | ⏳ Processing | [👁]
}
[View All Orders →]
} | {SI
<b>⚠️ Alerts & Notifications</b>
.
🔴 <b>Low Stock Alert</b>
Product "Mouse Wireless" has only 5 units left
<i>2 hours ago</i>
.
🟡 <b>Pending Reviews</b>
15 customer reviews waiting for approval
<i>5 hours ago</i>
.
🟢 <b>Payment Received</b>
Invoice #INV-4567 paid by ACME Corp
<i>1 day ago</i>
.
[View All Notifications →]
}
}
}
}
==
{
© 2025 Company Name | Terms | Privacy | Support: support@company.com
}
}
@endsalt
Formulario Complejo Multi-Step:
@startsalt
title Checkout Process - Step 2 of 4

{+
{
<b><size:14>🛒 Shopping Cart Checkout</size></b>
}
.
{
[●━━━━○━━━━○━━━━○]
<b>1. Cart</b> → <b><color:blue>2. Shipping</color></b> → 3. Payment → 4. Confirm
}
==
{
{SI
<b>📦 Order Summary</b>
--
{#
Item | Qty | Price
Laptop Pro | 1 | €899.00
Mouse Wireless | 2 | €58.00
Keyboard Mech | 1 | €79.00
}
--
Subtotal: | €1,036.00
Tax (21%): | €217.56
Shipping: | €0.00
--
<b>Total: €1,253.56</b>
--
.
^Apply promo code^
{ "SUMMER2025" | [Apply] }
.
<color:green>✓ Free shipping applied!</color>
} | {
<b>🚚 Shipping Information</b>
.
<b>Delivery Address</b>
{
First Name _ | "John "
Last Name _ | "Doe "
Email _ | "john.doe@email.com "
Phone _ | "+34 600 000 000 "
}
.
{
Address Line 1 _ | "Calle Mayor 123 "
Address Line 2 | "Piso 2, Puerta B "
}
.
{
City _ | "Madrid "
State/Province* | ^Madrid^
Postal Code * | "28001 "
Country \* | ^Spain^
}
.
^Save this address for future orders^
.
--
.
<b>🚚 Shipping Method</b>
.
(X) <b>Standard Shipping (FREE)</b>
Delivery in 3-5 business days
.
( ) <b>Express Shipping (€9.99)</b>
Delivery in 1-2 business days
.
( ) <b>Next Day Delivery (€19.99)</b>
Order before 2 PM for next day delivery
.
--
.
<b>📝 Additional Notes</b>
{SI
"Leave package at door "
"Call before delivery "
" "
}
.
{
[← Back to Cart] | [Continue to Payment →]
}
}
}
}
@endsalt
Componentes de UI Avanzados
Sistema de Diseño - Component Library:
@startsalt
title Design System - Component Library

{+
{/ <b>Buttons | Forms | Cards | Tables | Modals | Navigation }
==
<b><size:14>Button Components</size></b>
.
{
<b>Primary Buttons</b>
{ [Primary Button] | [<b>Primary Bold</b>] | [<color:white><back:blue> Primary Blue </back></color>] }
.
<b>Secondary Buttons</b>
{ [Secondary] | [Secondary Outline] | [<s>Disabled</s>] }
.
<b>Sizes</b>
{ [Small] | [ Medium ] | [ Large ] | [ Extra Large ] }
.
<b>States</b>
{ [Normal] | [<color:blue>Hover</color>] | [<color:purple>Active</color>] | [<s>Disabled</s>] }
.
<b>With Icons</b>
{ [📥 Download] | [🗑️ Delete] | [✏️ Edit] | [➕ Add New] | [💾 Save] }
}
==
<b><size:14>Form Elements</size></b>
.
{
<b>Text Inputs</b>
{
Label: | "Default input "
Email: | "user@example.com "
Error: | "<color:red>Invalid format!</color> "
}
.
<b>Select Dropdowns</b>
{
Country: | ^Spain^
City: | ^Madrid^
Language:| ^Spanish^
}
.
<b>Checkboxes & Radio</b>
{
^Option 1^
^Option 2^  
 ^Option 3^
}
{
(X) Selected
( ) Unselected
(X) Another selected
}
.
<b>Text Areas</b>
{SI
"Multi-line text input "
"Can contain multiple lines "
"Useful for comments "
}
}
==
<b><size:14>Card Components</size></b>
.
{
{^
<b>Basic Card</b>
--
Card content goes here
with multiple lines
--
[Action Button]
} | {^
<b>📊 Metric Card</b>
--
<b><size:18>1,234</size></b>
<color:green>↗ +12.5%</color>
--
Total Users
} | {^
<b>🎨 Image Card</b>
--
[ IMAGE PLACEHOLDER ]
[ 300x200 ]
--
<b>Card Title</b>
Description text
--
[View Details]
}
}
==
<b><size:14>Alert Messages</size></b>
.
<color:green><back:lightgreen>✓ Success!</back></color> Operation completed successfully
<color:blue><back:lightblue>ℹ Info:</back></color> This is an informational message
<color:orange><back:lightyellow>⚠ Warning:</back></color> Please review before continuing
<color:red><back:lightpink>✖ Error!</back></color> Something went wrong
}
@endsalt
Aplicación de Mensajería/Chat:
@startsalt
title Messaging Application

{
{T + 💬 <b>Messages</b>
++ 🔍 Search
++ 👥 All Chats (23)
++ ⭐ Favorites (5)
++ 🔇 Muted (3)
++ 🗑️ Archived
-- + 👥 Contacts
++ 📋 All
++ ➕ Add New
-- + ⚙️ Settings + 👤 Profile
} | {SI
<b>💬 Chats</b> | "Search conversations..." | [🔍]
==
{#
| Contact | Last Message | Time
<color:blue>●</color> | <b>Alice Johnson</b> | Hey, are you free tomorrow? | 2m
| Bob Smith | Thanks for the update! | 15m
<color:blue>●</color> | <b>Team Dev</b> | @john please review PR #234 | 1h
| Sarah Williams | 👍 | 2h
| Mike Brown | See you at the meeting | Yesterday
<color:green>●</color> | <b>Mom</b> | Love you! ❤️ | Yesterday
| Project Alpha | Meeting rescheduled | Monday
| John Davis | Perfect, let's do it | Monday
}
} | {
<b>👥 Alice Johnson</b> | 🎥 📞 ℹ️
==
{SI
<i>Today, 14:30</i>
.
{ . | Alice: Hey! How are you? | 14:30 }
.
{ You: Hi Alice! I'm good, thanks! | . | 14:31 }
.
{ . | Alice: Are you free tomorrow for coffee? ☕ | 14:32 }
.
{ You: Sure! What time works for you? | . | 14:33 }
.
{ . | Alice: How about 10 AM at the usual place? | 14:35 }
.
{ You: Perfect! See you there 👍 | . | 14:36 }
.
<i>Alice is typing...</i>
.
.
.
.
}
==
{ "Type a message..." | [😊] | [📎] | [🎤] | [📤] }
}
}
@endsalt
Aplicación Móvil
@startsalt
title Mobile Banking App - Home Screen

{+
{
10:24 AM | 📶 🔋 85%
}
==
{
[☰] | <b>My Bank App</b> | [🔔] [👤]
}
==
{^
<b>Welcome back, John!</b>
<i>Last login: Today at 9:15 AM</i>
}
==
{^
{
<b>💳 Main Account</b>
--
Available Balance
<b><size:24>€12,456.89</size></b>
--
Account: \***\* \*\*** \*\*\*\* 1234
}
}
==
<b>Quick Actions</b>
{
[💸 Send] | [📥 Request] | [💳 Cards] | [📊 Analytics]
}
==
<b>Recent Transactions</b>
{SI
{#
| Description | Amount | Date
🛒 | Amazon Purchase | -€45.99 | Today
📱 | Vodafone Bill | -€35.00 | Today  
 💰 | Salary Deposit | +€2,500.00 | Yesterday
☕ | Starbucks | -€4.50 | Yesterday
🚕 | Uber | -€12.30 | 2 days ago
}
}
==
{
[View All Transactions →]
}
==
{^
<b>💡 Spending Insights</b>
--
This month: €1,234.56
<color:orange>⚠ 15% more than last month</color>
--
Top category: 🛒 Shopping (€456)
}
==
{
[≡] Home | [💳] Cards | [📊] Stats | [⚙️] More
}
}
@endsalt
💻 Ejercicio Práctico 2
Diseñar un wireframe complejo para:

Panel de administración con tabla de datos, filtros, acciones bulk
App de streaming con reproductor, playlist, controles
E-learning platform con video, progreso, recursos

Requisitos:

Layout de 3 columnas
Al menos 1 tabla de datos
Sección de navegación
Mínimo 10 elementos interactivos
Usar símbolos/emojis

☕ DESCANSO

📚 PARTE 3: Diagramas de Gantt Empresariales
Gantt Multi-Proyecto con Recursos
@startgantt
title Portfolio de Proyectos Q4 2025
printscale weekly

Project starts 2025-10-01

<style>
ganttDiagram {
  task {
    BackGroundColor lightblue
    LineColor blue
  }
  milestone {
    BackGroundColor gold
    LineColor orange
  }
  separator {
    BackGroundColor lightgray
    LineColor gray
    FontColor black
    FontStyle bold
  }
}
</style>

-- PROYECTO A: Migración Cloud --
[A1: Análisis infraestructura] as [PA1] lasts 5 days
[PA1] is colored in LightBlue
[PA1] is 100% completed
note bottom
Equipo: DevOps (2)
Budget: €10K
end note

[A2:ReintentarMContinuar[A2: Diseño arquitectura] as [PA2] lasts 7 days and starts at [PA1]'s end
[PA2] is colored in LightBlue
[PA2] is 100% completed

[A3: Setup AWS] as [PA3] lasts 10 days and starts at [PA2]'s end
[PA3] is colored in Blue
[PA3] is 80% completed
note bottom
Equipo: DevOps (3)
Recursos: AWS Credits
end note

[A4: Migración datos] as [PA4] lasts 15 days and starts at [PA3]'s end
[PA4] is colored in Orange
[PA4] is 40% completed

[A5: Testing & Optimización] as [PA5] lasts 7 days and starts at [PA4]'s end
[PA5] is colored in Red

[Milestone A: Go-Live Cloud] as [MA1] happens at [PA5]'s end

-- PROYECTO B: Nueva App Mobile --
[B1: Research & Discovery] as [PB1] lasts 5 days and starts at [PA1]'s end
[PB1] is colored in LightGreen
[PB1] is 100% completed

[B2: UX/UI Design] as [PB2] lasts 10 days and starts at [PB1]'s end
[PB2] is colored in LightGreen
[PB2] is 100% completed

[B3: Setup React Native] as [PB3] lasts 3 days and starts at [PB2]'s end
[PB3] is colored in Green
[PB3] is 100% completed

[B4: Dev - Autenticación] as [PB4] lasts 7 days and starts at [PB3]'s end
[PB4] is colored in Green
[PB4] is 70% completed
note bottom
Equipo: Mobile (2)
Sprint 1
end note

[B5: Dev - Features Core] as [PB5] lasts 14 days and starts at [PB4]'s end
[PB5] is colored in Orange
[PB5] is 30% completed

[B6: Integración APIs] as [PB6] lasts 7 days and starts at [PB5]'s end
[PB6] is colored in Red

[B7: Testing & QA] as [PB7] lasts 7 days and starts at [PB6]'s end
[PB7] is colored in Red

[Milestone B: Beta Release] as [MB1] happens at [PB7]'s end

-- PROYECTO C: Refactor Backend --
[C1: Code Audit] as [PC1] lasts 5 days and starts 2025-10-15
[PC1] is colored in LightCoral
[PC1] is 100% completed

[C2: Planificación Refactor] as [PC2] lasts 3 days and starts at [PC1]'s end
[PC2] is colored in LightCoral
[PC2] is 100% completed

[C3: Refactor Módulo Auth] as [PC3] lasts 10 days and starts at [PC2]'s end
[PC3] is colored in Coral
[PC3] is 60% completed
note bottom
Equipo: Backend (3)
Crítico: No breaking changes
end note

[C4: Refactor Módulo Pagos] as [PC4] lasts 10 days and starts at [PC3]'s end
[PC4] is colored in Orange
[PC4] is 20% completed

[C5: Migración DB] as [PC5] lasts 5 days and starts at [PC4]'s end
[PC5] is colored in Red

[C6: Deploy Gradual] as [PC6] lasts 7 days and starts at [PC5]'s end
[PC6] is colored in Red

[Milestone C: Refactor Complete] as [MC1] happens at [PC6]'s end

-- PROYECTO D: Analytics Dashboard --
[D1: Requirements] as [PD1] lasts 3 days and starts 2025-11-01
[PD1] is colored in Lavender
[PD1] is 100% completed

[D2: Data Model Design] as [PD2] lasts 5 days and starts at [PD1]'s end
[PD2] is colored in Lavender
[PD2] is 100% completed

[D3: Backend APIs] as [PD3] lasts 10 days and starts at [PD2]'s end
[PD3] is colored in Violet
[PD3] is 50% completed

[D4: Frontend Dashboard] as [PD4] lasts 14 days and starts at [PD2]'s end
[PD4] is colored in Orange
[PD4] is 30% completed
note bottom
Equipo: Frontend (2)
Tech: React + D3.js
end note

[D5: Integración & Testing] as [PD5] lasts 5 days
[PD5] starts at [PD3]'s end
[PD5] starts at [PD4]'s end
[PD5] is colored in Red

[Milestone D: Dashboard Live] as [MD1] happens at [PD5]'s end

-- HITOS GENERALES --
[Sprint Review #1] happens 2025-10-25
[Sprint Review #2] happens 2025-11-15
[Sprint Review #3] happens 2025-12-06
[Q4 Review Meeting] happens 2025-12-20

-- RECURSOS Y DEPENDENCIAS --
note top
<b>Recursos Totales Q4:</b>
• DevOps Team: 3 personas
• Backend Team: 3 personas
• Frontend Team: 2 personas
• Mobile Team: 2 personas
• QA Team: 1 persona

<b>Budget Total: €150K</b>

<b>Dependencias Críticas:</b>
⚠ Proyecto A bloquea parte de Proyecto C
⚠ Proyecto B requiere APIs de Proyecto D
end note

@endgantt
Gantt con Sprints Ágiles
@startgantt
title Desarrollo Ágil - Product Roadmap 2025
printscale weekly
projectscale weekly

Project starts 2025-11-01

<style>
ganttDiagram {
  .sprint1 {
    BackGroundColor #E3F2FD
    LineColor #1976D2
  }
  .sprint2 {
    BackGroundColor #F3E5F5
    LineColor #7B1FA2
  }
  .sprint3 {
    BackGroundColor #FFF3E0
    LineColor #F57C00
  }
  .sprint4 {
    BackGroundColor #E8F5E9
    LineColor #388E3C
  }
  .epic {
    BackGroundColor #FFE0B2
    LineColor #E65100
    FontStyle bold
  }
}
</style>

-- EPIC 1: Sistema de Autenticación --
[EPIC-1: Auth System] as [E1] lasts 35 days
[E1] is colored in #FFE0B2

-- Sprint 1 (2 semanas) --
[Sprint 1 Planning] happens 2025-11-01

[USER-101: Login básico] lasts 5 days and starts 2025-11-02
[USER-101: Login básico] is 100% completed
[USER-101: Login básico] is colored in #E3F2FD
note bottom: Story Points: 5 | Dev: Alice

[USER-102: Registro usuarios] lasts 5 days and starts at [USER-101: Login básico]'s end
[USER-102: Registro usuarios] is 100% completed
[USER-102: Registro usuarios] is colored in #E3F2FD
note bottom: Story Points: 8 | Dev: Bob

[USER-103: Recuperar password] lasts 4 days and starts at [USER-101: Login básico]'s end
[USER-103: Recuperar password] is 100% completed
[USER-103: Recuperar password] is colored in #E3F2FD
note bottom: Story Points: 5 | Dev: Alice

[Sprint 1 Review] happens 2025-11-15
[Sprint 1 Retro] happens 2025-11-15

-- Sprint 2 (2 semanas) --
[Sprint 2 Planning] happens 2025-11-16

[USER-104: OAuth Google] lasts 7 days and starts 2025-11-17
[USER-104: OAuth Google] is 80% completed
[USER-104: OAuth Google] is colored in #F3E5F5
note bottom: Story Points: 8 | Dev: Charlie

[USER-105: OAuth GitHub] lasts 7 days and starts at [USER-104: OAuth Google]'s start
[USER-105: OAuth GitHub] is 60% completed
[USER-105: OAuth GitHub] is colored in #F3E5F5
note bottom: Story Points: 8 | Dev: Diana

[USER-106: 2FA Setup] lasts 7 days and starts at [USER-104: OAuth Google]'s start
[USER-106: 2FA Setup] is 40% completed
[USER-106: 2FA Setup] is colored in #F3E5F5
note bottom: Story Points: 13 | Dev: Alice

[Sprint 2 Review] happens 2025-11-29
[Sprint 2 Retro] happens 2025-11-29

-- EPIC 2: Dashboard de Usuario --
[EPIC-2: User Dashboard] as [E2] lasts 42 days and starts 2025-11-10
[E2] is colored in #FFE0B2

-- Sprint 3 (2 semanas) --
[Sprint 3 Planning] happens 2025-12-01

[USER-201: Diseño Dashboard] lasts 5 days and starts 2025-12-02
[USER-201: Diseño Dashboard] is 100% completed
[USER-201: Diseño Dashboard] is colored in #FFF3E0
note bottom: Story Points: 5 | Designer: Eve

[USER-202: Layout Principal] lasts 7 days and starts at [USER-201: Diseño Dashboard]'s end
[USER-202: Layout Principal] is 30% completed
[USER-202: Layout Principal] is colored in #FFF3E0
note bottom: Story Points: 8 | Dev: Bob

[USER-203: Widgets Configurables] lasts 7 days and starts at [USER-202: Layout Principal]'s start
[USER-203: Widgets Configurables] is 20% completed
[USER-203: Widgets Configurables] is colored in #FFF3E0
note bottom: Story Points: 13 | Dev: Charlie

[Sprint 3 Review] happens 2025-12-13
[Sprint 3 Retro] happens 2025-12-13

-- Sprint 4 (2 semanas) --
[Sprint 4 Planning] happens 2025-12-14

[USER-204: Gráficos Analytics] lasts 10 days and starts 2025-12-15
[USER-204: Gráficos Analytics] is colored in #E8F5E9
note bottom: Story Points: 13 | Dev: Alice, Bob

[USER-205: Filtros & Búsqueda] lasts 7 days and starts at [USER-204: Gráficos Analytics]'s start
[USER-205: Filtros & Búsqueda] is colored in #E8F5E9
note bottom: Story Points: 8 | Dev: Diana

[USER-206: Export Datos] lasts 5 days and starts at [USER-204: Gráficos Analytics]'s start
[USER-206: Export Datos] is colored in #E8F5E9
note bottom: Story Points: 5 | Dev: Charlie

[Sprint 4 Review] happens 2025-12-27
[Sprint 4 Retro] happens 2025-12-27

-- EPIC 3: Notificaciones --
[EPIC-3: Notifications] as [E3] lasts 28 days and starts 2025-12-01
[E3] is colored in #FFE0B2

-- Sprint 5 (2 semanas) --
[Sprint 5 Planning] happens 2026-01-01

[USER-301: Sistema Email] lasts 7 days and starts 2026-01-02
[USER-301: Sistema Email] is colored in #E3F2FD
note bottom: Story Points: 8 | Dev: Eve

[USER-302: Push Notifications] lasts 10 days and starts at [USER-301: Sistema Email]'s start
[USER-302: Push Notifications] is colored in #E3F2FD
note bottom: Story Points: 13 | Dev: Alice

[USER-303: Preferencias Usuario] lasts 5 days and starts at [USER-301: Sistema Email]'s start
[USER-303: Preferencias Usuario] is colored in #E3F2FD
note bottom: Story Points: 5 | Dev: Bob

[Sprint 5 Review] happens 2026-01-15
[Sprint 5 Retro] happens 2026-01-15

-- HITOS DE RELEASE --
[🚀 Alpha Release] happens 2025-11-30
[🚀 Beta Release] happens 2025-12-27
[🚀 Production Release] happens 2026-01-15

-- CEREMONIAS RECURRENTES --
[Daily Standup] happens 2025-11-03
[Daily Standup] happens 2025-11-04
[Daily Standup] happens 2025-11-05
[Daily Standup] happens 2025-11-06
[Daily Standup] happens 2025-11-07
[Daily Standup] happens 2025-11-10
[Daily Standup] happens 2025-11-11

note top
<b>🎯 Métricas del Proyecto:</b>
• Velocidad promedio: 40 SP/sprint
• Team capacity: 5 developers
• Sprint duration: 2 semanas
• Total Epics: 3
• Total Story Points: ~120 SP

<b>🔴 Riesgos Identificados:</b>
• OAuth integration complexity
• Third-party API dependencies
• Holiday season (Dec 20-31)
end note

@endgantt
Gantt de Infraestructura y DevOps
@startgantt
title DevOps Pipeline Implementation - Infrastructure Roadmap
printscale daily
projectscale weekly

Project starts 2025-11-01

<style>
ganttDiagram {
  .infra {
    BackGroundColor #FF9800
    LineColor #E65100
  }
  .cicd {
    BackGroundColor #2196F3
    LineColor #0D47A1
  }
  .monitoring {
    BackGroundColor #4CAF50
    LineColor #1B5E20
  }
  .security {
    BackGroundColor #F44336
    LineColor #B71C1C
  }
}
</style>

-- FASE 1: Infrastructure as Code --
[IaC-001: Setup Terraform] lasts 3 days
[IaC-001: Setup Terraform] is colored in #FF9800
[IaC-001: Setup Terraform] is 100% completed
note bottom
Owner: DevOps Lead
Tools: Terraform, AWS
end note

[IaC-002: VPC & Networking] lasts 5 days and starts at [IaC-001: Setup Terraform]'s end
[IaC-002: VPC & Networking] is colored in #FF9800
[IaC-002: VPC & Networking] is 100% completed

[IaC-003: EKS Cluster] lasts 7 days and starts at [IaC-002: VPC & Networking]'s end
[IaC-003: EKS Cluster] is colored in #FF9800
[IaC-003: EKS Cluster] is 80% completed

[IaC-004: RDS Databases] lasts 5 days and starts at [IaC-003: EKS Cluster]'s end
[IaC-004: RDS Databases] is colored in #FF9800
[IaC-004: RDS Databases] is 50% completed

[IaC-005: S3 & CloudFront] lasts 3 days and starts at [IaC-003: EKS Cluster]'s end
[IaC-005: S3 & CloudFront] is colored in #FF9800
[IaC-005: S3 & CloudFront] is 30% completed

[✓ Infrastructure Ready] happens at [IaC-005: S3 & CloudFront]'s end

-- FASE 2: CI/CD Pipeline --
[CICD-001: GitHub Actions Setup] lasts 2 days and starts at [IaC-001: Setup Terraform]'s end
[CICD-001: GitHub Actions Setup] is colored in #2196F3
[CICD-001: GitHub Actions Setup] is 100% completed

[CICD-002: Build Pipeline] lasts 5 days and starts at [CICD-001: GitHub Actions Setup]'s end
[CICD-002: Build Pipeline] is colored in #2196F3
[CICD-002: Build Pipeline] is 100% completed
note bottom
• Docker build
• Unit tests
• Linting
end note

[CICD-003: Test Automation] lasts 7 days and starts at [CICD-002: Build Pipeline]'s end
[CICD-003: Test Automation] is colored in #2196F3
[CICD-003: Test Automation] is 60% completed

[CICD-004: Deploy to Staging] lasts 5 days and starts at [CICD-003: Test Automation]'s end
[CICD-004: Deploy to Staging] is colored in #2196F3
[CICD-004: Deploy to Staging] is 40% completed

[CICD-005: Deploy to Production] lasts 3 days and starts at [CICD-004: Deploy to Staging]'s end
[CICD-005: Deploy to Production] is colored in #2196F3
[CICD-005: Deploy to Production] is 20% completed

[CICD-006: Rollback Strategy] lasts 3 days and starts at [CICD-004: Deploy to Staging]'s end
[CICD-006: Rollback Strategy] is colored in #2196F3
[CICD-006: Rollback Strategy] is 10% completed

[✓ CI/CD Operational] happens at [CICD-006: Rollback Strategy]'s end

-- FASE 3: Monitoring & Observability --
[MON-001: Prometheus Setup] lasts 3 days and starts at [IaC-003: EKS Cluster]'s end
[MON-001: Prometheus Setup] is colored in #4CAF50
[MON-001: Prometheus Setup] is 100% completed

[MON-002: Grafana Dashboards] lasts 5 days and starts at [MON-001: Prometheus Setup]'s end
[MON-002: Grafana Dashboards] is colored in #4CAF50
[MON-002: Grafana Dashboards] is 70% completed

[MON-003: ELK Stack (Logs)] lasts 7 days and starts at [MON-001: Prometheus Setup]'s end
[MON-003: ELK Stack (Logs)] is colored in #4CAF50
[MON-003: ELK Stack (Logs)] is 50% completed
note bottom
• Elasticsearch
• Logstash
• Kibana
end note

[MON-004: APM (Datadog)] lasts 5 days and starts at [MON-002: Grafana Dashboards]'s end
[MON-004: APM (Datadog)] is colored in #4CAF50
[MON-004: APM (Datadog)] is 30% completed

[MON-005: Alerting Rules] lasts 3 days and starts at [MON-004: APM (Datadog)]'s end
[MON-005: Alerting Rules] is colored in #4CAF50
[MON-005: Alerting Rules] is 10% completed

[✓ Monitoring Live] happens at [MON-005: Alerting Rules]'s end

-- FASE 4: Security & Compliance --
[SEC-001: Vault Setup] lasts 3 days and starts at [IaC-002: VPC & Networking]'s end
[SEC-001: Vault Setup] is colored in #F44336
[SEC-001: Vault Setup] is 100% completed

[SEC-002: SSL Certificates] lasts 2 days and starts at [SEC-001: Vault Setup]'s end
[SEC-002: SSL Certificates] is colored in #F44336
[SEC-002: SSL Certificates] is 100% completed

[SEC-003: WAF Configuration] lasts 5 days and starts at [IaC-005: S3 & CloudFront]'s end
[SEC-003: WAF Configuration] is colored in #F44336
[SEC-003: WAF Configuration] is 40% completed

[SEC-004: Security Scanning] lasts 7 days and starts at [CICD-002: Build Pipeline]'s end
[SEC-004: Security Scanning] is colored in #F44336
[SEC-004: Security Scanning] is 50% completed
note bottom
• Snyk
• Trivy
• OWASP ZAP
end note

[SEC-005: Penetration Testing] lasts 5 days and starts at [SEC-003: WAF Configuration]'s end
[SEC-005: Penetration Testing] is colored in #F44336
[SEC-005: Penetration Testing] is 10% completed

[SEC-006: Compliance Audit] lasts 3 days and starts at [SEC-005: Penetration Testing]'s end
[SEC-006: Compliance Audit] is colored in #F44336

[✓ Security Approved] happens at [SEC-006: Compliance Audit]'s end

-- MILESTONES PRINCIPALES --
[🎯 Infrastructure Complete] happens 2025-11-25
[🎯 CI/CD Complete] happens 2025-12-10
[🎯 Monitoring Complete] happens 2025-12-20
[🎯 Security Complete] happens 2025-12-27
[🚀 GO-LIVE] happens 2025-12-30

note top
<b>📊 Project Overview:</b>
• Duration: 8 semanas
• Team Size: 3 DevOps Engineers
• Budget: €75,000
• Cloud Provider: AWS

<b>🎯 Success Criteria:</b>
• 99.9% uptime SLA
• < 5 min deployment time
• Automated rollbacks
• Zero-downtime deployments

<b>⚠️ Dependencies:</b>
• AWS account setup
• Domain DNS configuration
• Third-party integrations approval
end note

@endgantt
💻 Ejercicio Práctico 3
Crear un diagrama de Gantt empresarial para:

Lanzamiento de producto con marketing, desarrollo, legal
Transformación digital de departamento/empresa
Proyecto de investigación con fases, entregables, publicaciones

Requisitos:

Mínimo 4 fases/secciones
Al menos 15 tareas
3+ hitos importantes
Usar colores por categoría
Incluir dependencias
Agregar notas con recursos/equipo
Porcentajes de completado

📚 PARTE 4: JSON Avanzado
JSON con Estructuras Complejas y Highlighting
API Response con Metadata Completa:

[Ir a JSON API](../../documentos/modelosUML/json-visualizer/jv-api-response-metadata.puml "Ir a JSON API")

<!--
📋 Proyecto Final Integrador
🎯 Crear Documentación Completa de Proyecto
Crear un documento  que incluya:

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
' ========================================
' PROYECTO: Sistema de Gestión de Biblioteca
' ========================================

' 1. MINDMAP - Estructura del Proyecto
@startmindmap
\!include mindmap_proyecto.puml
@endmindmap

' 2. JSON - Configuración
@startjson
\!include config.json
@endjson

' 3. GANTT - Planificación
@startgantt
\!include planificacion.gantt
@endgantt

' 4. MOCKUP - Interfaz
@startsalt
\!include interfaz.salt
@endsalt

```

```

```

```


```

```
-->
