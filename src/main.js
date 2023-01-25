import { formEl, listEl } from "./refs";
import { saveData } from "./api";
import { getData } from "./api";
import { createMarkup } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const message = event.target.message.value.trim();
  if (!message) return;
  const dataObj = createObjData(message);
  const markup = createMarkup([dataObj]);
  addMarkup(markup);
  saveData(dataObj);
  event.target.reset();
}

function createObjData(task) {
  return {
    task,
    checked: false,
    id: Date.now(),
  };
}

function init() {
  const tasks = getData();
  if (!tasks.length) return;
  const markup = createMarkup(tasks);
  addMarkup(markup);
}
init();
function addMarkup(markup) {
  listEl.insertAdjacentHTML("beforeend", markup);
}
