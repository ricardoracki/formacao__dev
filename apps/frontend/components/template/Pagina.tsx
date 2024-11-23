import Logo from './Logo'

export interface Props {
  children: React.ReactNode
  className?: string
}

const Pagina = (props: Props) => {
  return (
    <div className="flex flex-col items-center py-10 min-h-screen bg-cover bg-[url('/background.png')]">
      <Logo />
      <main
        className={`${props.className} flex flex-1 flex-col justify-center py-10 container`}
      >
        {props.children}
      </main>
    </div>
  )
}

export default Pagina
