const input = document.getElementById("taskInput");
const tasks = document.getElementById("tasks");

document.getElementById("addTask").onclick = () => {
  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  tasks.appendChild(li);
  input.value = "";
};
