export default class Alias {
  static formatar(value: string) {
    return value.replace(/ /g, '-').toLowerCase()
  }
}
