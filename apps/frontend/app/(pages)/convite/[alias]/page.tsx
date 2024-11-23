import { use } from 'react'

interface PageConviteProps {
  params: {
    alias: string
  }
}

export default function PageConvite(props: any) {
  const { alias }: any = use(props.params)
  return <div>{props.params.alias}</div>
}
