
// ======================================
// TASKFLOW - Gestión de tareas
// ======================================

// Elementos del HTML
const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const taskDate = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");

// Contadores
const totalTasks = document.getElementById("totalTasks");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

// Recuperar tareas guardadas
let tasks = JSON.parse(localStorage.getItem("taskflow-tasks")) || [];

// Guardar tareas en LocalStorage
function saveTasks() {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
}

// Crear una nueva tarea
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = taskTitle.value.trim();

    if (!title) {
        alert("Por favor, introduce un título.");
        return;
    }

    const newTask = {
        id: Date.now(),
        title: title,
        description: taskDescription.value.trim(),
        priority: taskPriority.value,
        date: taskDate.value,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();
    renderTasks();

    taskForm.reset();
});

// Mostrar las tareas
function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "Todavía no tienes tareas.";
        taskList.appendChild(emptyMessage);
    }

    tasks.forEach(function(task) {
        const card = document.createElement("article");
        card.className = "task-card";

        if (task.completed) {
            card.classList.add("completed");
        }

        const title = document.createElement("h3");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        const priority = document.createElement("span");
        priority.className = "priority " + task.priority.toLowerCase();
        priority.textContent = "Prioridad: " + task.priority;

        const date = document.createElement("p");
        date.className = "task-date";
        date.textContent = task.date
            ? "Fecha límite: " + task.date
            : "Sin fecha límite";

        const actions = document.createElement("div");
        actions.className = "task-actions";

        const completeButton = document.createElement("button");
        completeButton.textContent = task.completed
            ? "Reabrir"
            : "Completar";

        completeButton.addEventListener("click", function() {
            toggleTask(task.id);
        });

        const editButton = document.createElement("button");
        editButton.textContent = "Editar";

        editButton.addEventListener("click", function() {
            editTask(task.id);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";

        deleteButton.addEventListener("click", function() {
            deleteTask(task.id);
        });

        actions.append(
            completeButton,
            editButton,
            deleteButton
        );

        card.append(
            title,
            description,
            priority,
            date,
            actions
        );

        taskList.appendChild(card);
    });

    updateCounters();
}

// Actualizar el estado de una tarea
function toggleTask(id) {
    tasks = tasks.map(function(task) {
        if (task.id === id) {
            return {
                ...task,
                completed: !task.completed
            };
        }

        return task;
    });

    saveTasks();
    renderTasks();
}

// Editar una tarea
function editTask(id) {
    const task = tasks.find(function(item) {
        return item.id === id;
    });

    if (!task) return;

    const newTitle = prompt("Nuevo título:", task.title);

    if (newTitle === null) return;

    if (!newTitle.trim()) {
        alert("El título no puede estar vacío.");
        return;
    }

    const newDescription = prompt(
        "Nueva descripción:",
        task.description
    );

    if (newDescription === null) return;

    task.title = newTitle.trim();
    task.description = newDescription.trim();

    saveTasks();
    renderTasks();
}

// Eliminar una tarea
function deleteTask(id) {
    const confirmation = confirm(
        "¿Seguro que quieres eliminar esta tarea?"
    );

    if (!confirmation) return;

    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    saveTasks();
    renderTasks();
}

// Actualizar estadísticas
function updateCounters() {
    const completed = tasks.filter(function(task) {
        return task.completed;
    }).length;

    totalTasks.textContent = tasks.length;
    completedTasks.textContent = completed;
    pendingTasks.textContent = tasks.length - completed;
}

// Inicializar aplicación
renderTasks();

