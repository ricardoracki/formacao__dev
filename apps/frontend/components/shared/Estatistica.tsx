import Image from 'next/image'

export interface EstatisticaProps {
  text: string
  valor: any
  img: string
}

const Estatistica = ({ img, text, valor }: EstatisticaProps) => {
  return (
    <div className="flex items-center bg-zinc-900 rounded-lg px-6 py-2.5 gap-5">
      <div className="flex-1 flex flex-col">
        <span className="font-light text-zinc-400">{text}</span>
        <span className="text-2xl font-black">{valor}</span>
      </div>
      <Image src={img} alt="ícone" width={80} height={80} />
    </div>
  )
}

export default Estatistica
