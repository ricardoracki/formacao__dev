export default class Data {
  static formatar(data: Date = new Date()): string {
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`)

    const ano = data.getFullYear()
    const mes = pad(data.getMonth() + 1)
    const dia = pad(data.getDay())
    const hora = pad(data.getHours())
    const minuto = pad(data.getMinutes())

    return `${ano}-${mes}-${dia}T${hora}:${minuto}`
  }

  static parser(data: string): Date {
    const [ano, mes, dia] = data.split('T')[0].split('-')
    const [hora, minuto] = data.split('T')[1].split(':')

    return new Date(
      parseInt(ano),
      parseInt(mes) - 1,
      parseInt(dia),
      parseInt(hora),
      parseInt(minuto)
    )
  }
}
