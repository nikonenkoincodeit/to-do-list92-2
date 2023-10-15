const STORAGE_KEY = 'tu-do-list';

export function setToLocalStorage(str) {
  const localArr = getToLocalStorage();
  localArr.push(str);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localArr));
}

export function getToLocalStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error.message);
  }
}
