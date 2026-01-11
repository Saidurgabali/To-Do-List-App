function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = taskText;
    span.onclick = () => span.classList.toggle("completed");

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "task-buttons";

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = () => {
        const newTask = prompt("Edit Task", span.innerText);
        if (newTask !== null) span.innerText = newTask;
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => li.remove();

    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonDiv);

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
