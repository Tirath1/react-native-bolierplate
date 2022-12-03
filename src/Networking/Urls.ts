import {HTTP_METHOD_TYPE} from '../Utils/Constants';

export function GetBaseURL() {
  return `https://${IP}:8080`;
}
export const IP = '';

export const URLs = {
  LOGIN: {
    URL: '/api/free/login/',
    METHOD: HTTP_METHOD_TYPE.POST,
  },
};
