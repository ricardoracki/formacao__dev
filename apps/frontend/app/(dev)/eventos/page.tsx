import { eventos } from 'core'
import Image from 'next/image'
import Link from 'next/link'
import QRCode from 'react-qr-code'

const Eventos = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className="bg-zinc-800 w-full rounded-lg flex flex-col overflow-hidden"
        >
          <div className="relative w-full h-52">
            <Image
              src={evento.imagem}
              fill
              alt={evento.name}
              className="object-cover "
            />
          </div>
          <div className="flex flex-col flex-1 p-4 gap-5 items-center text-center">
            <span className="text-lg font-black">{evento.name}</span>
            <p className="text-small flex-1 text-zinc-400">
              {evento.descricao}
            </p>

            <QRCode
              value={JSON.stringify({ id: evento.id, senha: evento.senha })}
              className="w-44 h-44"
            />

            <div className="flex gap-5">
              <Link
                href={`/evento/admin/${evento.id}/${evento.senha}`}
                className="flex-1 btn red"
              >
                Admin
              </Link>
              <Link
                href={`/convite/${evento.alias}`}
                className="flex-1 btn green"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Eventos
