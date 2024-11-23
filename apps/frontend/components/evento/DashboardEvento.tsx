import { Convidado, Evento } from 'core'
import InformacoesEvento from './InformacoesEvento'
import AcessarQRCode from './AcessarQRCode'
import Estatistica from '../shared/Estatistica'
import { ListaConvidados } from './ListaConvidados'

export interface DashboardEventoProps {
  evento: Evento
  presentes: Convidado[]
  ausentes: Convidado[]
  totalGeral: number
}

const DashboardEvento = ({
  evento,
  ausentes,
  presentes,
  totalGeral,
}: DashboardEventoProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-6 self-stretch">
        <InformacoesEvento evento={evento} className="flex-1" />
        <AcessarQRCode evento={evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica
          text="Expectativa de convidados:"
          valor={evento.publicoEsperado}
          img="/icones/convidados.svg"
        />
        <Estatistica
          text="Confirmações: "
          valor={presentes.length}
          img="/icones/confirmados.svg"
        />
        <Estatistica
          text="Total confirmados:"
          valor={totalGeral}
          img="/icones/acompanhantes.svg"
        />
      </div>

      <button className="btn blue self-end mt-12">
        <span>Atualizar Lista de convidados</span>
      </button>

      <h3 className="flex my-2 text-2xl font-bold text-white/80">
        Convidados que confirmaram presença
      </h3>
      <ListaConvidados convidados={presentes} />
      <h3 className="flex my-2 text-2xl font-bold text-white/80">
        Convidados que não confirmaram presença
      </h3>
      <ListaConvidados convidados={ausentes} />
    </div>
  )
}

export default DashboardEvento
