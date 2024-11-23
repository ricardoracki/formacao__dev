import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Seu evento começa aqui',
  description: 'Aplicação Fullstack de eventos',
}

const fonte = Inter({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={fonte.className}>{children}</body>
    </html>
  )
}
