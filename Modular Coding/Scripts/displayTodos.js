export function displayTodos(data) {
  let container = document.getElementById("todos");
  container.innerHTML = "";

  data.forEach(todo => {
    let div = document.createElement("div");
    div.className = "todo-item";

    div.innerHTML = `
      <h4>${todo.title}</h4>
      <p>Status: ${todo.completed ? "✔ Completed" : "❌ Pending"}</p>
    `;

    container.appendChild(div);
  });
}
