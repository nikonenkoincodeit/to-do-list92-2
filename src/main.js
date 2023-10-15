import { formEl } from "./refs";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();

  const newTask = e.currentTarget.elements.message.value.trim();
  if (!newTask) {
    return;
  }
  console.log(newTask);
  e.currentTarget.reset();
}
