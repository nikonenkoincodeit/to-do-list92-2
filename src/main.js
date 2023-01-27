import { formEl, listEl } from "./refs";
import {
  removeItemToFirebase,
  getData,
  writeUserData,
  updateStatus,
} from "./api";
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
  writeUserData(dataObj);
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
  getData().then((res) => {
    const result = Object.values(res);
    if (!result.length) return;
    const markup = createMarkup(result);
    addMarkup(markup);
  });
}
init();
function addMarkup(markup) {
  listEl.insertAdjacentHTML("beforeend", markup);
}
listEl.addEventListener("click", removeTask);

function removeTask(event) {
  if (!event.target.classList.contains("button")) return;
  const { parentEl, taskId } = getIdParent(event);
  parentEl.remove();

  removeItemToFirebase(taskId);
}
listEl.addEventListener("click", toggleTask);
function toggleTask(event) {
  if (!event.target.classList.contains("text")) return;
  const { parentEl, taskId } = getIdParent(event);
  const status = parentEl.classList.toggle("checked");

  updateStatus(taskId, status);
}
function getIdParent(event) {
  const parentEl = event.target.closest(".item");
  const taskId = parentEl.dataset.id;
  return { parentEl, taskId };
}
