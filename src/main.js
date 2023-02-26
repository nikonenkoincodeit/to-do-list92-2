import { formEl, listEl } from "./refs";
import { onSaveLocalStorage, onGetData, saveData } from "./api";
import { createMarkup } from "./markup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onFormSubmit);
listEl.addEventListener("click", deleteTask);
listEl.addEventListener("click", onPClick);

function deleteTask(evt) {
  if (evt.target.tagName !== "BUTTON") {
    return;
  }
  const { parent, taskId } = getTaskId(evt);
  parent.remove();
  const tasks = onGetData().filter(({ id }) => {
    return id !== Number(taskId);
  });
  // console.log(tasks);
  saveData(tasks);
}

function addMarkup(markup) {
  listEl.insertAdjacentHTML("beforeend", markup);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formEl.message.value);
  const value = evt.target.message.value.trim();
  if (!value) {
    return;
  }
  evt.target.reset();
  const newObj = objFactory(value);
  onSaveLocalStorage(newObj);
  const markup = createMarkup([newObj]);

  addMarkup(markup);
}

function objFactory(value) {
  return { value, id: Date.now(), checked: false };
}

function init() {
  const data = onGetData();
  if (data.length === 0) return;
  const createdMarkup = createMarkup(data);
  addMarkup(createdMarkup);
}

function getTaskId(evt) {
  const parent = evt.target.closest(".item");
  const taskId = parent.dataset.id;
  return { parent, taskId };
}

function onPClick(evt) {
  if (evt.target.tagName !== "P") {
    return;
  }
  const { parent, taskId } = getTaskId(evt);
  parent.classList.toggle("checked");
  const localArr = onGetData();
  const obj = localArr.find(({ id }) => {
    return id === Number(taskId);
  });
  console.log(obj);
  obj.checked = !obj.checked;
  saveData(localArr);
}

init();
