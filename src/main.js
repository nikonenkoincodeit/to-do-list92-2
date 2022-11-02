import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { inputValue, liAdd } from "./refs";
import { createLi, addNewLi } from "./markup";

const LOCAL_STORAGE_KEY = "todo-list";
let dataItemsArr = getFromLocalStorage(LOCAL_STORAGE_KEY);

inputValue.addEventListener("submit", (event) => {
  event.preventDefault();
  let eventValue = event.target.message.value.trim();
  if (!eventValue) {
    return;
  }

  const dataObj = createObjData(eventValue);

  saveToLocalStorage(dataObj);

  const markup = createLi(dataObj);
  addNewLi(liAdd, markup);
  console.log(eventValue);

  event.target.reset();
});

function saveToLocalStorage(value) {
  dataItemsArr.push(value);
  updateToLS(dataItemsArr);
}

function updateToLS(arr) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arr));
}

function createObjData(string) {
  return {
    value: string,
    checked: false,
    id: Date.now(),
  };
}

function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function renderCurrentMarkup(array) {
  if (!array.length) {
    return;
  }

  const currentMarkup = array.map(createLi).join("");
  addNewLi(liAdd, currentMarkup);
}

renderCurrentMarkup(dataItemsArr);

liAdd.addEventListener("click", onDellBtnClick);

function onDellBtnClick(e) {
  if (e.target.nodeName === "BUTTON") {
    const btnId = e.target.closest(".item").dataset.id;
    e.target.closest(".item").remove();
    dataItemsArr = getFromLocalStorage(LOCAL_STORAGE_KEY);
    dataItemsArr = dataItemsArr.filter(({ id }) => id !== +btnId);
    updateToLS(dataItemsArr);
  }
}
liAdd.addEventListener("click", handleChecked);
function handleChecked(e) {
  if (e.target.nodeName === "P") {
    const id = e.target.closest(".item").dataset.id;
    dataItemsArr.forEach((item) => {
      if (item.id === Number(id)) {
        item.checked = !item.checked;
        e.target.closest(".item").classList.toggle("checked");
        updateToLS(dataItemsArr);
      }
    });
  }
}
