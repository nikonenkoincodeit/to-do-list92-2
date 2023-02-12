import { formEl } from "./refs";
import { onSaveLocalStorage } from "./api"
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";


formEl.addEventListener("submit", onFormSubmit);

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
}

function objFactory(value) {
  return {value, id: Date.now(), chacked: false};
}
