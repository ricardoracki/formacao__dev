import { Evento } from 'core'
import Informacao from '../shared/Informacao'

export interface DashboardEventoProps {
  evento: Evento
  className?: string
}

const InformacoesEvento = ({ evento, className }: DashboardEventoProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ''}`}>
      <div className="flex flex-1 items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
        <span className="font-black text-2xl">{evento.alias}:</span>
        <span className="text-xl text-zinc-300">{evento.name}</span>
      </div>
      <div className="flex gap-2">
        <Informacao label="Data:">
          <span>
            {new Date((evento as any).data).toLocaleDateString('pt-BR')}
            {' às '}
            {new Date((evento as any).data).toLocaleTimeString('pt-BR')}
          </span>
        </Informacao>
        <Informacao label="Local:">{evento.local}</Informacao>
      </div>
      <Informacao label="Descrição:">{evento.descricao}</Informacao>
    </div>
  )
}

export default InformacoesEvento
