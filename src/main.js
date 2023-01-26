import { formEl, listEl } from "./refs";
import { saveData, saveArrData, getData } from "./api";
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
listEl.addEventListener("click", removeTask);

function removeTask(event) {
  if (!event.target.classList.contains("button")) return;
  const { parentEl, taskId } = getIdParent(event);
  parentEl.remove();
  const dataArr = getData();
  const filteredArr = dataArr.filter((el) => {
    return el.id !== +taskId;
  });
  saveArrData(filteredArr);
}
listEl.addEventListener("click", toggleTask);
function toggleTask(event) {
  if (!event.target.classList.contains("text")) return;
  const { parentEl, taskId } = getIdParent(event);
  parentEl.classList.toggle("checked");
  const dataArr = getData();
  const tasked = dataArr.find((el) => {
    return el.id === +taskId;
  });
  tasked.checked = !tasked.checked;
  saveArrData(dataArr);
}
function getIdParent(event) {
  const parentEl = event.target.closest(".item");
  const taskId = parentEl.dataset.id;
  return { parentEl, taskId };
}
