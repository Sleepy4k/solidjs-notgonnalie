import alert from './sweet.alert';
import { println } from './debug';
import formValidator from './validator';
import { convertErrorResponseData } from './parse';
import { encrypt, verify, generateKey } from './hash';
import { getStorage, setStorage, deleteStorage, setAndDeleteStorage, getOrCreateStorage } from './local.storage';

export {
  alert,
  println,
  getStorage,
  setStorage,
  deleteStorage,
  formValidator,
  getOrCreateStorage,
  setAndDeleteStorage,
  convertErrorResponseData,
  encrypt,
  verify,
  generateKey
};
