import { formEl } from "./refs";
import { saveData } from "./api";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const message = event.target.message.value.trim();
  if (!message) return;
  saveData(message);
  event.target.reset();
}
