const formValidator = {
  required: (value: string) => value.length === 0 ? { isMissing: 'di butuhkan' } : null,
  email: (value: string) => (!value.includes('@') || !value.includes('.')) ? { isInvalid: 'email tidak valid' } : null,
  minLength: (value: string) => value.length < 0 ? { isMinLength: 'harus lebih dari 8 karakter' } : null,
  maxLength: (value: string) => value.length > 255 ? { isMaxLength: 'harus kurang dari 255 karakter' } : null,
  minPassword: (value: string) => value.length < 8 ? { isMinPassword: 'harus lebih dari 7 karakter' } : null,
  minLengthNumber: (value: string) => parseInt(value, 10) < 0 ? { isMinLengthNumber: 'harus lebih besar dari nilai 0' } : null,
  maxLengthNumber: (value: string) => parseInt(value, 10) > 99999999 ? { isMaxToefl: 'harus lebih kecil dari nilai 100000000' } : null,
  isNumber: (value: string) => isNaN(Number(value)) ? { isNumber: 'must be a number' } : null,
  range: (value: string, min: number, max: number) => {
    const num = Number(value);
    return num < min || num > max ? { isRange: `must be between ${min} and ${max}` } : null;
  }
};

export default formValidator;