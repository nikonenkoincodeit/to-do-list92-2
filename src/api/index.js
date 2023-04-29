const STORAGE_KEY = "tu-do-list";

export function getData() {
    try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
    } catch (error) {
        console.log(error.message)
    } 
}

export function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function createArrayData(obj) {
    const array = getData()
    array.push(obj)
    saveData(array)
}