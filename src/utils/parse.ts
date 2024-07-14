const convertErrorResponseData = (error: any) => {
  let errorObject: string[] = [];
  const splitError = error.split('\n');

  splitError.map((errorMessage: string) => {
    const colonIndex = errorMessage.indexOf(':');
    const message = errorMessage.substring(colonIndex + 2);

    errorObject.push(message);
  });

  return errorObject;
};

export {
  convertErrorResponseData
};
