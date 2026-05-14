const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


// Add task when button clicked
addBtn.addEventListener("click", addTask);


// Add task with Enter key
taskInput.addEventListener("keypress", function (event) {

  if (event.key === "Enter") {
    addTask();
  }

});


// Main function
function addTask() {

  const taskValue = taskInput.value.trim();

  // Prevent empty tasks
  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.classList.add("task-item");

  // Create task text
  const span = document.createElement("span");
  span.textContent = taskValue;
  span.classList.add("task-text");

  // Create actions container
  const actions = document.createElement("div");
  actions.classList.add("actions");

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Done";
  completeBtn.classList.add("complete-btn");

  completeBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append buttons
  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  // Append elements
  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
