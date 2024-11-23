import { Convidado } from 'core'
import ConvidadoItem from './ConvidadoItem'

type ListaConvidadosProps = {
  convidados: Convidado[]
}

export const ListaConvidados = ({ convidados }: ListaConvidadosProps) => {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {convidados.map((c) => (
          <ConvidadoItem key={c.id} convidado={c} />
        ))}
      </ul>
    </div>
  )
}
