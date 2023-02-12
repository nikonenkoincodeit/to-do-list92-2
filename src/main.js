import { formEl, listEl } from "./refs";
import { onSaveLocalStorage, onGetData } from "./api";
import { createMarkup } from "./markup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onFormSubmit);

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

init();
