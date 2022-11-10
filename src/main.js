import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { inputValue, liAdd } from "./refs";
import { createLi, addNewLi } from "./markup";
import { addData, getData, updateData, deleteData } from "./api";

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
    deleteData(btnId)
    .then(data => {
      e.target.closest(".item").remove();
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
   
  }

}
liAdd.addEventListener("click", handleChecked);

function handleChecked(e) {
  if (e.target.nodeName === "P") {
    const result = e.target.classList.toggle("checked");

    const id = e.target.closest(".item").dataset.id;

    updateData({ checked: result }, id).then(console.log);
  }
}

