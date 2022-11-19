import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import { formRef } from "./refs";
import { saveData } from "./api";

formRef.addEventListener("submit", getDataForm);

function getDataForm(event) {
  event.preventDefault();

  const message = event.target.message.value.trim();

  if (!message) {
    return;
  }
  console.log(message);
  const data = creatObjectData(message);
  console.log(data);

  saveData(data);
  event.target.reset();
}

function creatObjectData(value) {
  return { value: value, id: Date.now(), checked: false };
}
