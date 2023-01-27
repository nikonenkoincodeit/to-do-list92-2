import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, remove, update } from "firebase/database";

import { firebaseConfig } from "../config";

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export function removeItemToFirebase(id) {
  remove(ref(db, "tasks/" + id), null);
}

export function updateStatus(id, value) {
  update(ref(db, "tasks/" + id), { checked: value });
}

export function writeUserData(data = {}) {
  set(ref(db, "tasks/" + data.id), data);
}

export function getData() {
  return get(ref(db, `tasks`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error("error ", error);
    });
}
