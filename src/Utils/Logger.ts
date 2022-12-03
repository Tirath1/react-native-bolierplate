export default class Logger {
  static log(...props) {
    console.log(...props);
  }
  static warn(...props) {
    console.warn(...props);
  }
  static error(...props) {
    console.error(...props);
  }
}
