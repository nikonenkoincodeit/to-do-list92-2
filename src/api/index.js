const STORAGE_KEY = "items";


export function onSaveLocalStorage(value) {
    const localStorageArr = onGetData();
    localStorageArr.push(value)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageArr));
}

function onGetData() {
    const dataJson = localStorage.getItem(STORAGE_KEY);
    return dataJson ? JSON.parse(dataJson) : [];
}

