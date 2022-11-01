import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { inputValue, liAdd } from "./refs";
import { createLi, addNewLi } from "./markup";
import { create } from "json-server";

const LOCAL_STORAGE_KEY = "todo-list";
// const dataItemsArr = getFromLocalStorage(LOCAL_STORAGE_KEY);

inputValue.addEventListener("submit", (event) => {
  event.preventDefault();
  let eventValue = event.target.message.value.trim();
  if (!eventValue) {
    return;
  }

  const dataObj = createObjData(eventValue);

  // saveToLocalStorage(dataObj);

  const markup = createLi(dataObj);
  addNewLi(liAdd, markup);
  console.log(eventValue);
});

// function saveToLocalStorage(value) {
//   dataItemsArr.push(value);

//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataItemsArr));
// }

// function createObjData(string) {
//   return {
//     value: string,
//     checked: false,
//     id: Date.now(),
//   };
// }

// function getFromLocalStorage(key) {
//   const data = localStorage.getItem(key);
//   return data ? JSON.parse(data) : [];
// }

// function renderCurrentMarkup(array) {
//   if (!array.length) {
//     return;
//   }

//   const currentMarkup = array.map(createLi).join("");
//   addNewLi(liAdd, currentMarkup);
// }

// renderCurrentMarkup(dataItemsArr);
