import axios from 'axios';
import { EApiType } from '@enums';

const backendApi = (server: EApiType = EApiType.CHANGELOG) => {
  // This number data type is crazy, due enum index
  // Please let me know if this problem solved
  let serviceUrl: number = EApiType.CHANGELOG.valueOf();

  switch (server) {
  case EApiType.CHANGELOG:
    serviceUrl = EApiType.CHANGELOG.valueOf();
    break;

  default:
    serviceUrl = EApiType.CHANGELOG.valueOf();
    break;
  }

  return axios.create({
    baseURL: String(serviceUrl),
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json'
    }
  });
};

export default backendApi;