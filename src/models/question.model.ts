import { fireStore } from "@services";
import { IQuestionModel } from "@interfaces";
import {
  doc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  collection,
  query,
  where
} from 'firebase/firestore';

export const getQuestions = async () => {
  const questions: IQuestionModel[] = [];
  const querySnapshot = await getDocs(collection(fireStore, "questions"));

  querySnapshot.forEach((doc) => {
    questions.push({
      id: doc.id,
      uid: doc.data().uid,
      question: doc.data().question
    });
  });

  return questions;
}

export const findQuestion = async (id: string) => {
  const docRef = doc(fireStore, "questions", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;

  return {
    id: docSnap.id,
    uid: docSnap.data().uid,
    question: docSnap.data().question
  };
}

export const createQuestion = async (data: IQuestionModel) => {
  const docRef = await addDoc(collection(fireStore, "questions"), data);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;

  return {
    id: docSnap.id,
    uid: docSnap.data().uid,
    question: docSnap.data().question
  };
}

export const updateQuestion = async (id: string, data: IQuestionModel) => {
  const docRef = doc(fireStore, "questions", id);
  await updateDoc(docRef, {
    uid: data.uid,
    question: data.question
  });
  const docSnap = await getDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}

export const deleteQuestion = async (id: string) => {
  const docRef = doc(fireStore, "questions", id);
  const docSnap = await getDoc(docRef);
  await deleteDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}
