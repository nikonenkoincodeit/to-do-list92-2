const STORAGE_KEY = 'tu-do-list';

export function setToLocalStorage(str) {
  const localArr = getFromLocalStorage();
  localArr.push(str);
  addToLocalStorage(localArr);
}

export function getFromLocalStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error.message);
  }
}

export function addToLocalStorage(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}