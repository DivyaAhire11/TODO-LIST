

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    let li = document.createElement("li");
    li.textContent = taskText;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}


li.addEventListener("click", () => {
    li.classList.toggle("completed");
});

let delBtn = document.createElement("button");
delBtn.textContent = "Delete";
delBtn.classList.add("delete-btn");
delBtn.onclick = function () {
    li.remove();
};
li.appendChild(delBtn);
