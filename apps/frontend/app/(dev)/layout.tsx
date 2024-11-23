import { PropsWithChildren } from 'react'
import Pagina from '@/components/template/Pagina'

export default function Layout({ children }: PropsWithChildren) {
  return <Pagina>{children}</Pagina>
}
