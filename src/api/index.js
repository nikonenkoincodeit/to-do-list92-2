const LOCALSTORAGE_KEY = "items";

export function saveData(data) {
  const items = getData();
  items.push(data);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(items));
}
function getData() {
  try {
    const dataJson = localStorage.getItem(LOCALSTORAGE_KEY);
    return dataJson ? JSON.parse(dataJson) : [];
  } catch (error) {
    console.log("ERROR");
  }
}
