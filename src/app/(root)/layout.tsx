import { ReactNode, Suspense } from 'react'
import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/header'
import Container from '@/components/shared/container'
import { Moon, Sun } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import Link from 'next/link'
import Footer from '@/components/shared/footer'

const APP_NAME = 'ATM STORAGE'
const APP_DEFAULT_TITLE = 'My Awesome PWA App'
const APP_TITLE_TEMPLATE = '%s - PWA App'
const APP_DESCRIPTION = 'Best PWA app in the world!'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  }
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF'
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
      <body className={`${nunito.className} flex flex-col h-screen`}>
        <Suspense>
          <Header />
        </Suspense>
        {modal}
        <main className='flex-grow dark:bg-gray-950'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
