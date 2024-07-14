import { EApiType } from '@enums';

interface IServiceProp {
  url: string;
  server?: EApiType;
  name?: string;
  data?: any;
  success?: any;
  error?: any;
  headers?: any;
  params?: any;
  finally?: any;
}

export default IServiceProp;
