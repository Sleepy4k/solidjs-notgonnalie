import fireApp from "./firebase";
import { getFirestore } from "firebase/firestore";

const fireStore = getFirestore(fireApp);

export default fireStore;