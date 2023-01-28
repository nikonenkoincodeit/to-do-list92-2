import { saveData } from "./api";
import { createMarkup } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";


const formCheckEl = document.querySelector(".form");
const listEl = document.querySelector('.list')
formCheckEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const value = event.target.message.value.trim();

    if(!value) {
        return;
    }
    const objData = createObjDate(value);
    const markup = createMarkup([objData]);
    addMarkup(markup);
    saveData(objData);
    event.target.reset();
}

function createObjDate(value) {
    return {
        value,
        checked: false,
        id: Date.now(),
    };
}

function addMarkup(markup) {
    listEl.insertAdjacentHTML("beforeend", markup)
}