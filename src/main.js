import { uid } from 'uid';
import { formEl } from './refs';

import { setToLocalStorage } from './api';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

formEl.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();

  const newTask = e.currentTarget.elements.message.value.trim();
  if (!newTask) {
    return;
  }
  console.log(newTask);
  e.currentTarget.reset();
  const dataItem = createDataObj(newTask);
  setToLocalStorage(dataItem);
}

function createDataObj(value) {
  return {
    id: uid(),
    value,
    checked: false,
  };
}
