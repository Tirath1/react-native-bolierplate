import Strings from './Strings';

export const mobileValidation = (number: string): string => {
  if (!number) {
    return Strings.MANDATORY_ERROR;
  }
  let numTest: RegExp = /^[0-9]*$/;
  if (numTest.test(number) && number.length === 10) {
    return '';
  } else {
    return Strings.INVALID_NUMBER;
  }
};
