import { Id } from '../../shared'
import Convidado from '../model/Convidado'
import validarConvidado from './validarConvidado'

export default function complementarConvidado(
  convidado: Partial<Convidado>
): Convidado {
  const errors = validarConvidado(convidado)

  if (errors.length) {
    throw new Error(errors.join('\n'))
  }

  return {
    ...convidado,
    id: convidado.id ?? Id.novo(),

    possuiAcompanhante:
      convidado.confirmado &&
      !!convidado.qtdeAcompanhantes &&
      convidado.qtdeAcompanhantes > 0,

    qtdeAcompanhantes:
      convidado.confirmado &&
      convidado.qtdeAcompanhantes &&
      convidado.qtdeAcompanhantes > 0
        ? convidado.qtdeAcompanhantes
        : 0,
  } as Convidado
}
