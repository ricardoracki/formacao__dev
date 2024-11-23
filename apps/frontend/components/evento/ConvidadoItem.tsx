import { Convidado } from 'core'

type ConvidadoItemProps = {
  convidado: Convidado
}

const ConvidadoItem = ({ convidado }: ConvidadoItemProps) => {
  return (
    <li className="flex justify-between bg-black/40 rounded-md px-5 py-3 border border-zinc-800">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{convidado.name}</span>
        <span className="text-sm font-zinc-400">{convidado.email}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm text-zinc-400">Acompanhantes</span>
        <span className="text-xl font-bold">{convidado.qtdeAcompanhantes}</span>
      </div>
    </li>
  )
}

export default ConvidadoItem
