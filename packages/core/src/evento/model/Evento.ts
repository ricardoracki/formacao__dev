import Convidado from './Convidado'

export default interface Evento {
  id: string
  alias: string
  data: Date
  senha: string
  name: string
  local: string
  descricao: string
  imagem: string
  imagemBackground: string
  publicoEsperado: number

  convidados: Convidado[]
}
