import { mergeProps } from 'solid-js';
import backendApi from './base.service';
import { IServiceProp } from '@interfaces';
import { EApiMethod, EApiType } from '@enums';
import { convertErrorResponseData } from '@utils';

/* eslint-disable solid/reactivity */
const initService = async (_props: IServiceProp, method: EApiMethod = EApiMethod.GET) => {
  const props = mergeProps({
    server: EApiType.GPT,
    name: 'Server',
    headers: {}
  }, _props);

  const requestOption = {
    headers: {
      ...props.headers
    },
    params: props.params,
    responseType: 'json'
  };

  const Api = backendApi(props.server);

  try {
    let response: any;

    if (method == EApiMethod.GET || method == EApiMethod.DELETE) {
      response = await Api[method.valueOf()](props.url, requestOption);
    } else {
      response = await Api[method.valueOf()](props.url, props.data, requestOption);
    }

    if (props.success) props.success(response);
    else {
      const result = response.data;

      console.log(`[${props.name}] ${result.message}`);
    }

    return response ? response.data : null;
  } catch (err: any) {
    if (props.error) props.error(err.response);

    if (err.response) {
      const result = err.response.data;

      if (result.data && result.data.length > 0) {
        const errors = convertErrorResponseData(result.data[0]);

        for (let index = 0; index < errors.length; index++) {
          console.log(`[${props.name}] ${errors[index]}`);
        }
      }
    }
  } finally {
    if (props.finally) props.finally();
  }
};

const ApiService = {
  get: async (props: IServiceProp) => {
    return await initService(props, EApiMethod.GET);
  },
  post: async (props: IServiceProp) => {
    return await initService(props, EApiMethod.POST);
  },
  put: async (props: IServiceProp) => {
    await initService(props, EApiMethod.PUT);
  },
  patch: async (props: IServiceProp) => {
    await initService(props, EApiMethod.PATCH);
  },
  delete: async (props: IServiceProp) => {
    await initService(props, EApiMethod.DELETE);
  }
};

export default ApiService;