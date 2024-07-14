import toast from 'solid-toast';
import { APP_ENV } from '@consts';
import { EDebugType } from '@enums';

const println = (title: string, message: string, type: EDebugType = EDebugType.OTHER) => {
  const isDevMode = APP_ENV === 'development';
  const content = `[${title}] ${message}`;

  switch (type) {
  case EDebugType.ERROR:
    toast.error(content);
    isDevMode && console.log(content);
    break;
  
  case EDebugType.WARN:
    toast.error(content);
    isDevMode && console.warn(content);
    break;

  case EDebugType.SUCCESS:
    toast.success(content);
    isDevMode && console.info(content);
    break;

  case EDebugType.OTHER:
    toast(content);
    isDevMode && console.log(content);
    break;

  default:
    toast(content);
    isDevMode && console.log(content); 
    break;
  }
};

export { println };