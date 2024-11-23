import { Id } from '../..'
import Convidado from '../model/Convidado'

export default function criarConvidadoVazio(): Partial<Convidado> {
  return {
    id: Id.novo(),
    name: '',
    email: '',
    confirmado: false,
    qtdeAcompanhantes: 0,
    possuiAcompanhante: false,
  }
}
