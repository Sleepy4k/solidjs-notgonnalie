import { fireStore } from "@services";
import { IAnswerModel } from "@interfaces";
import {
  addDoc,
  getDoc,
  getDocs,
  collection
} from 'firebase/firestore';

export const getAnswers = async () => {
  const answers: IAnswerModel[] = [];
  const querySnapshot = await getDocs(collection(fireStore, "answers"));

  querySnapshot.forEach((doc) => {
    answers.push({
      id: doc.id,
      questId: doc.data().questId,
      answer: doc.data().answer
    });
  });

  return answers;
}

export const createAnswer = async (data: IAnswerModel) => {
  const docRef = await addDoc(collection(fireStore, "answers"), data);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;

  return {
    id: docSnap.id,
    questId: docSnap.data().questId,
    answer: docSnap.data().answer
  };
}
