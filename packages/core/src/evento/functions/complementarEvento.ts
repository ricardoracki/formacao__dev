import { Evento, Id, Senha } from '../..'
import validarEvento from './validarEvento'

export default function complementarEvento(
  eventoParcial: Partial<Evento>
): Evento {
  const errors = validarEvento(eventoParcial)

  if (errors.length) {
    throw new Error(errors.join('\n'))
  }
  const evento: Evento = {
    ...eventoParcial,
    id: eventoParcial.id ?? Id.novo(),
    senha: eventoParcial.senha ?? Senha.novo(20),
    publicoEsperado: +(eventoParcial.publicoEsperado ?? 1),
  } as Evento

  return evento
}
