'use client'
import DashboardEvento from '@/components/evento/DashboardEvento'
import FormSenhaEvento from '@/components/evento/FormSenhaEvento'
import { Evento, eventos } from 'core'
import { use, useEffect, useState } from 'react'

export default function PageAdminEvento(props: any) {
  const params: any = use(props.params)
  const id = params.todos[0]
  const [senha, setSenha] = useState(params.todos[1])
  const [event, setEvent] = useState<Evento | null>(null)

  const presentes = event?.convidados.filter((c) => c.confirmado)
  const ausentes = event?.convidados.filter((c) => !c.confirmado)

  const totalGeral = presentes?.reduce(
    (total, c) => total + c.qtdeAcompanhantes + 1,
    0
  )

  function carregarEvento() {
    if (!senha) return
    const evento = eventos.find((ev) => ev.id === id && ev.senha === senha)
    setEvent(evento ?? null)
  }

  useEffect(carregarEvento, [id])

  return event ? (
    <DashboardEvento
      evento={event}
      presentes={presentes ?? []}
      ausentes={ausentes ?? []}
      totalGeral={totalGeral ?? 0}
    />
  ) : (
    <FormSenhaEvento />
  )
}
