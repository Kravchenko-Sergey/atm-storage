import { ReactNode, Suspense } from 'react'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/header'

export const metadata: Metadata = {
  title: 'ATM STORAGE',
  description: 'Generated by create next app'
}

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900']
})

export default function RootLayout({
  modal,
  children
}: Readonly<{
  modal: ReactNode
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link data-rh='true' rel='icon' href='/logo.webp' />
      </head>
      <body className={nunito.className}>
        <Suspense>
          <Header />
        </Suspense>
        {modal}
        {children}
      </body>
    </html>
  )
}
