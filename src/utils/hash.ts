import CryptoES from "crypto-es";
import { HASH_KEY, HASH_SALT } from "@consts";

const encrypt = async (password: string, addon_key: string = "") => {
  try {
    const data = password + HASH_SALT;
    const key = addon_key ? addon_key + HASH_KEY : HASH_KEY;
    const encryptedPassword = CryptoES.AES.encrypt(data, key).toString();
    return encryptedPassword;
  } catch (error) {
    console.log('Hash error', error);
  }
}

const verify = async (password: string, hash: string, addon_key: string = "") => {
  try {
    const data = password + HASH_SALT;
    const key = addon_key ? addon_key + HASH_KEY : HASH_KEY;
    const decryptedPassword = CryptoES.AES.decrypt(hash, key).toString(CryptoES.enc.Utf8);
    return data === decryptedPassword;
  } catch (error) {
    console.log('Hash error', error);
  }
}

const generateKey = (email: string, password: string) => {
  const emailName = email.split('@')[0];
  const randomNumber = Math.floor(Math.random() * 100);

  const scrambledPassword = password.split('').map((char, index) => {
    if (index % 2 === 0) return char.toUpperCase();
    else return Math.floor(Math.random() * 10);
  }).join('');

  return emailName + randomNumber + scrambledPassword + randomNumber;
}

export { encrypt, verify, generateKey };