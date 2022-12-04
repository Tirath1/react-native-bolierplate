export const NETWORK_ABORT = 'ECONNABORTED';
export const HTTP_METHOD_TYPE = {
  POST: 'POST',
  PUT: 'PUT',
  GET: 'GET',
};
export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
};

export const THEME_TYPE = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const PLATFORM = {
  IOS: 'ios',
  ANDROID: 'android',
};

interface iKeyboardBehavior {
  [key: string]: 'padding' | 'height' | 'position' | undefined;
}
export const KEYBOARD_BEHAVIOR: iKeyboardBehavior = {
  PADDING: 'padding',
};
