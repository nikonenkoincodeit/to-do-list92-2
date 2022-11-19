const LOCAL_STORAGE_KEY = "tasks";

export function saveData(obj) {
  const listTasks = getData();
  listTasks.push(obj);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listTasks));
}

function getData() {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
