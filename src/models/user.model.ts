import { fireStore } from "@services";
import { IUserModel } from "@interfaces";
import {
  where,
  query,
  addDoc,
  getDoc,
  getDocs,
  collection
} from 'firebase/firestore';

interface ICreateUserPayload extends IUserModel {
  key: string;
  role: string;
}

export const getUsers = async () => {
  const users: IUserModel[] = [];
  const querySnapshot = await getDocs(collection(fireStore, "users"));

  querySnapshot.forEach((doc) => {
    users.push({
      id: doc.id,
      name: doc.data().name,
      username: doc.data().username,
      password: doc.data().password
    });
  });

  return users;
}

export const findUser = async (username: string) => {
  const querySnapshot = await getDocs(query(collection(fireStore, "users"), where("username", "==", username)));
  const user = querySnapshot.docs[0];

  if (!user) return null;

  return {
    id: user.id,
    name: user.data().name,
    role: user.data().role,
    username: user.data().username,
    password: user.data().password,
    key: user.data().key
  };
}

export const createUser = async (data: ICreateUserPayload) => {
  if (!data) return null;

  const isUserAlreadyExists = await findUser(data.username);
  if (isUserAlreadyExists) return null;

  const docRef = await addDoc(collection(fireStore, "users"), data);
  const docSnap = await getDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data()
  };
}