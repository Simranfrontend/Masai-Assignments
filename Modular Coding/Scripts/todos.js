import { navbar } from "../Components/navbar.js";
import { footer } from "../Components/footer.js";
import { displayTodos } from "./displayTodos.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

// ✔ Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please login first!");
  window.location.href = "login.html";
}

// ✔ Fetch todos API
async function fetchTodos() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await res.json();
  displayTodos(data);
}

fetchTodos();
