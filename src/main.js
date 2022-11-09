import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { inputValue, liAdd } from "./refs";
import { createLi, addNewLi } from "./markup";
import { addData, getData } from "./api";

const LOCAL_STORAGE_KEY = "todo-list";

inputValue.addEventListener("submit", (event) => {
  event.preventDefault();
  let eventValue = event.target.message.value.trim();
  if (!eventValue) {
    return;
  }

  const dataObj = createObjData(eventValue);

  addData(dataObj).then((data) => {
    const markup = createLi(data);
    addNewLi(liAdd, markup);
  });

  console.log(eventValue);

  event.target.reset();
});

function createObjData(string) {
  return {
    value: string,
    checked: false,
  };
}

function renderCurrentMarkup() {
  getData().then((response) => {
    const currentMarkup = response.map(createLi).join("");
    addNewLi(liAdd, currentMarkup);
  });
}

renderCurrentMarkup();

liAdd.addEventListener("click", onDellBtnClick);

function onDellBtnClick(e) {
  if (e.target.nodeName === "BUTTON") {
    const btnId = e.target.closest(".item").dataset.id;
    e.target.closest(".item").remove();
  }
}
liAdd.addEventListener("click", handleChecked);
function handleChecked(e) {
  if (e.target.nodeName === "P") {
    const id = e.target.closest(".item").dataset.id;
  }
}
