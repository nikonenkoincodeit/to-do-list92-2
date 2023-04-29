import { formEl, listEl } from './refs';
import { createArrayData, getData, saveData } from './api';
import { createMarkup } from './markup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

window.addEventListener('DOMContentLoaded', init);

listEl.addEventListener('click', onListClickDeleteItem);
listEl.addEventListener('click', onListClickUpdateCheck);

function onListClickDeleteItem(evt) {
  if (!evt.target.classList.contains('button')) return;

  const { parent, id } = getParentItem(evt.target);
  parent.remove();

  const items = getData();
  const updated = items.filter((item) => Number(item.id) !== Number(id));
  saveData(updated);
}

function onListClickUpdateCheck(evt) {
  if (!evt.target.classList.contains('text')) return;

  const { parent, id } = getParentItem(evt.target);

  const isDone = parent.classList.toggle('checked');

  const items = getData();
  const item = items.find((item) => Number(item.id) === Number(id));
  item.isDone = isDone;

  saveData(items);
}

function getParentItem(node) {
  const parent = node.closest('.item');
  const id = parent.dataset.id;

  return { parent, id };
}

formEl.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const value = event.target.message.value.trim();
  if (!value) {
    return;
  }
  console.log('123');
  //   const formData = Object.fromEntries(new FormData(event.target));
  //     console.log(formData);
  const items = createDataObj(value);
  createArrayData(items);
  const markup = createMarkup([items]);
  populateList(markup);
  event.target.reset();
}

function createDataObj(value) {
  return { value, id: Date.now(), isDone: false };
}

function init() {
  const data = getData();

  if (!data.length) return;

  const markup = createMarkup(data);
  populateList(markup);
}

function populateList(markup) {
  listEl.innerHTML += markup;
}
