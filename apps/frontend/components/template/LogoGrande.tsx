import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const fonte = Righteous({
  subsets: ['latin'],
  weight: '400',
})

const LogoGrande = () => {
  return (
    <Link
      href="/"
      className={`${fonte.className} flex flex-col items-center gap-2`}
    >
      <Image src={'/logo.svg'} alt="Logo" width={100} height={100} />
      <h1 className="text-5xl">
        CONVIT<span className="text-blue-500">3</span> DIGITAL
      </h1>
    </Link>
  )
}

export default LogoGrande
