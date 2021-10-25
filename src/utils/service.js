import firebase from "./firebase";

const db = firebase.ref("/cement");

class CementService {
  getAll() {
    return db;
  }

}

export default new CementService();