import { Id } from '../../shared'
import Evento from '../model/Evento'

export default function criarEventoVazio(): Partial<Evento> {
  return {
    id: Id.novo(),
    name: '',
    alias: '',
    local: '',
    publicoEsperado: 1,
    imagemBackground: '',
    imagem: '',
    convidados: [],
    descricao: '',
    data: new Date(),
  }
}
