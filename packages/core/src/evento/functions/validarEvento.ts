import { Evento } from '..'

export default function validarEvento(evento: Partial<Evento>): string[] {
  const errors: string[] = []

  if (!evento.name) errors.push('Nome é obrigatório')
  if (!evento.descricao) errors.push('Descrição é obrigatária')
  if (!evento.data) errors.push('Data é obrigatária')
  if (!evento.alias) errors.push('Apelido é obrigatário')
  if (!evento.local) errors.push('Local é obrigatário')
  if (!evento.publicoEsperado || evento.publicoEsperado < 0)
    errors.push('Pulico esperado é obrigatário')
  if (!evento.senha) errors.push('Senha é obrigatária')

  return errors
}
