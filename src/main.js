import { uid } from 'uid';
import { formEl, listEl } from './refs';


import { setToLocalStorage, getFromLocalStorage, addToLocalStorage } from './api';
import { createMarkup } from './markup';


import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

formEl.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();

  const newTask = e.currentTarget.elements.message.value.trim();

  
  if (!newTask) {
    return;
  }
  //console.log(newTask);
  e.currentTarget.reset();
    const dataItem = createDataObj(newTask);
    createAddMarkup([dataItem]);
  setToLocalStorage(dataItem);
}

function createDataObj(value) {
  return {
    id: uid(),
    value,
    checked: false,
  };
  
}


function onLoad() {
    const state = getFromLocalStorage();
    if (state.length === 0) return;
    createAddMarkup(state);
}

function createAddMarkup(state) {
    const markup = createMarkup(state);
    addMarkup(markup);
}

function addMarkup(markup) {
    listEl.insertAdjacentHTML('beforeend', markup);
}

window.addEventListener('load', onLoad);

listEl.addEventListener('click', onDeleteTask);

function onDeleteTask(event) {

  if (!event.target.className.includes('button')) return;
  
  const elemLi = event.target.closest(".item");
  const elemId = elemLi.dataset.id;
  console.log(elemLi.dataset.id)
  elemLi.remove();
  const items = getFromLocalStorage();
  const newItems = items.filter((item) => String(item.id) !== elemId);
  addToLocalStorage(newItems);
}

//був змушений рано покинути заняття і не встиг внести свій внесок до коду. тому вирішив додати відсутню функцію виконання.
//для відновлення додаткового класса при перезагрузці сторінки змінив відповідну влестивість у маркапі (isDone => checked)
listEl.addEventListener('click', isDone);
function isDone(event) {
  if (!event.target.className.includes('text')) return;
  const elemLi = event.target.closest(".item");
  const elemId = elemLi.dataset.id;
  const items = getFromLocalStorage();
  const updatedItems = items.map((item) => {
    if (String(item.id) === elemId) {
      item.checked = !item.checked;
      (item.checked)? elemLi.classList.add('checked') : elemLi.classList.remove('checked');
    }
    return item;
  });

  addToLocalStorage(updatedItems);
};