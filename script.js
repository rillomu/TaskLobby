// ============================================ SELEÇÃO DE ELEMENTOS ============================================ //
// modal
const modal = document.querySelector(".modal__add-task");
const modalInput = document.getElementById("modal__add-task__nova");

// buttons
const addTaskButton = document.getElementById("add-task");
const cancelButton = document.querySelector(".botao-cancelar");
const confirmButton = document.querySelector(".botao-confirmar");

// lists
const pendingList = document.getElementById("tasks__pendentes__lista");
const completedList = document.getElementById("tasks__concluidos__lista");

// header
const counter = document.getElementById("header__title__contador");


// ============================================ DADOS ============================================ //
const allTasks = [];

// ============================================ FUNÇÕES ============================================ //
// Load Storage
function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks !== null) {
        const parsed = JSON.parse(savedTasks);
        parsed.forEach((task, index) => {
            allTasks.push(task);
            const newItem = document.createElement("li");
            newItem.textContent = task.name;
            newItem.dataset.index = index;
            if (task.concluida) {
                completedList.appendChild(newItem);
            } else {
                pendingList.appendChild(newItem);
            }
            
        });
    }
    updateCounter();
}

//utils
function handleEnterKey(event, callback) {
    if (event.key === "Enter") {
        callback();
    }
}

// modal
function openModal() {
    modal.classList.add("modal__add-task--aberto");
}
function closeModal() {
    modal.classList.remove("modal__add-task--aberto");
    modalInput.value = "";
}
function confirmNewTask() {
    const taskName = modalInput.value;
    if (taskName.trim() === "") {
        return;
    }
    allTasks.push({ name: taskName, concluida: false });
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    const newItem = document.createElement("li");
    newItem.textContent = taskName;
    newItem.dataset.index = allTasks.length - 1;
    pendingList.appendChild(newItem);
    closeModal();
    updateCounter();
}
function completeTask(event) {
    const clickedItem = event.target;
    const index = clickedItem.dataset.index;
    allTasks[index].concluida = true;         
    localStorage.setItem("tasks", JSON.stringify(allTasks));  
    pendingList.removeChild(clickedItem);
    completedList.appendChild(clickedItem);
    updateCounter();
}
function revertTask(event) {
    const clickedItem = event.target;
    console.log(clickedItem);
    console.log(clickedItem.parentNode);
    const index = clickedItem.dataset.index;
    allTasks[index].concluida = false;         
    localStorage.setItem("tasks", JSON.stringify(allTasks));  
    completedList.removeChild(clickedItem);
    pendingList.appendChild(clickedItem);
    updateCounter();
}

//header
function updateCounter() {
    const totalPending = pendingList.children.length;
    const totalCompleted = completedList.children.length;
    counter.textContent = `Pendentes: ${totalPending} · Concluídos: ${totalCompleted}`;
}
    
// ============================================ EVENTOS ============================================ //
// modal
addTaskButton.addEventListener("click", openModal);
cancelButton.addEventListener("click", closeModal);
confirmButton.addEventListener("click", confirmNewTask);
modalInput.addEventListener("keydown", (event) => handleEnterKey(event, confirmNewTask));

// lists
pendingList.addEventListener("click", completeTask);
completedList.addEventListener("click", revertTask);

loadTasks();

