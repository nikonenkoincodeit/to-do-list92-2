import { formEl } from "./refs";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const value = event.target.message.value.trim();
  if (!value) {
    return;
  }
  console.log("123");
  //   const formData = Object.fromEntries(new FormData(event.target));
  //     console.log(formData);
  createDataObj(value);
  event.target.reset();
}

function createDataObj(value) {
  return { value, id: Date.now(), isDon: false };
}
