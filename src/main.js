import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { inputValue, liAdd } from "./refs";
import { createLi, addNewLi } from "./markup";

inputValue.addEventListener("submit", (event) => {
  event.preventDefault();
  let eventValue = event.target.message.value.trim();
  if (!eventValue) {
    return;
  }

  const markup = createLi(eventValue);
  addNewLi(liAdd, markup);
  console.log(eventValue);
});
