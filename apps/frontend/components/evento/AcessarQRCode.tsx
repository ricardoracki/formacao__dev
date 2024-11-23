import { Evento } from 'core'
import QRCode from 'react-qr-code'

export interface AcessarQRCodeProps {
  evento: Evento
}

const AcessarQRCode = ({ evento }: AcessarQRCodeProps) => {
  return (
    <div className="flex flex-col justify-center gap-4 border border-zinc-800 px-10 items-center">
      <span className="text-sm font-light text-zinc-400">
        Acesse pelo celular
      </span>
      <QRCode
        value={JSON.stringify({ id: evento.id, senha: evento.senha })}
        className="w-32 h-32"
      />
    </div>
  )
}

export default AcessarQRCode
