import { Convidado } from '..'

export default function validarConvidado(
  convidado: Partial<Convidado>
): string[] {
  const errors: string[] = []

  if (!convidado.name) errors.push('Nome é obrigatório')
  if (!convidado.email) errors.push('E-mail é obrigatário')

  return errors
}
