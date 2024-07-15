import alert from './sweet.alert';
import { println } from './debug';
import formValidator from './validator';
import { trimText, convertErrorResponseData } from './parse';
import { encrypt, verify, generateKey } from './hash';
import { getStorage, setStorage, deleteStorage, setAndDeleteStorage, getOrCreateStorage } from './local.storage';

export {
  alert,
  verify,
  encrypt,
  println,
  trimText,
  getStorage,
  setStorage,
  generateKey,
  deleteStorage,
  formValidator,
  getOrCreateStorage,
  setAndDeleteStorage,
  convertErrorResponseData
};
