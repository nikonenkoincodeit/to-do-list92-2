import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, push, set } from "firebase/database";
import { firebaseConfig } from "../config";

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const BASE_URL = "http://localhost:3000/task";
export function addData(data) {
  return new Promise((res, rej) => {
    const key = push(ref(db, `task`), data).key;
    res(key);
  });
}

export function getData(id = "") {
  return get(ref(db, `task/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export function updateData(data, id) {
  return getData(id).then((response) => {
    const dataObj = { ...response, ...data };
    return set(ref(db, `task/${id}`), dataObj);
  });
}

export function deleteData(id) {
  return set(ref(db, `task/${id}`), null);
}
