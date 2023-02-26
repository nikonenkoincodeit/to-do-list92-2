const STORAGE_KEY = "items";

export function onSaveLocalStorage(value) {
  const localStorageArr = onGetData();
  localStorageArr.push(value);
  saveData(localStorageArr);
}

export function saveData(value) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

export function onGetData() {
  const dataJson = localStorage.getItem(STORAGE_KEY);
  return dataJson ? JSON.parse(dataJson) : [];
}
