import { CSRF_KEY_NAME, CSRF_TOKEN_NAME, CSRF_RANDOMIZER_SALT } from '@consts';
import { setAndDeleteStorage, getStorage, deleteStorage } from '@utils';

const generateIds = () => {
  const generatedIds = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join('');

  return Number(generatedIds);
};

const getToken = () => getStorage(CSRF_KEY_NAME);

const generateToken = (generatedIds: number) => {
  const date = new Date();
  const month = date.getMonth();
  const structDate = date.toISOString().slice(2, 10).split('-');
  const generatedKey = `${[...structDate[1]].reverse().join('')}${structDate[2]}${[...structDate[0]].reverse().join('')}`;
  let randomizer = '';

  const stringIds: string = generatedIds.toString();

  // Loop each generated ids to get the randomizer from the salt
  // but get salt index from current month
  for (let i = 0; i < stringIds.length; i++) {
    // If the month is more than the salt length, then month minus random between 1 and 3
    if (month >= CSRF_RANDOMIZER_SALT.length) {
      randomizer += CSRF_RANDOMIZER_SALT[month - Math.floor(Math.random() * 3) + 1][stringIds[i]];
      continue;
    }

    randomizer += CSRF_RANDOMIZER_SALT[month][stringIds[i]];
  }

  const token = `${CSRF_TOKEN_NAME}-${randomizer}-${generatedKey}-${generatedIds}`;

  return token;
};

const validateToken = () => {
  const token = getToken();
  if (!token || token == null || token == undefined) return false;

  const generatedToken = document.querySelector('input[name="csrf_token"]')?.getAttribute('value');
  if (!generatedToken || generatedToken == null || generatedToken == undefined) return false;

  return token === generatedToken;
};

const setToken = (generatedIds: number) => {
  const token = generateToken(generatedIds);

  setAndDeleteStorage(CSRF_KEY_NAME, token);
};

const removeToken = () => {
  deleteStorage(CSRF_KEY_NAME);
};

const regenerateToken = () => {
  const generatedIds = generateIds();
  setToken(generatedIds);

  return generatedIds;
};

const CSRFService = {
  generateIds,
  generateToken,
  getToken,
  validateToken,
  setToken,
  removeToken,
  regenerateToken
};

export default CSRFService;