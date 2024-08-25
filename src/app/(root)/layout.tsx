import { ReactNode, Suspense } from 'react'
import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/header'
import Container from '@/components/shared/container'
import { Moon, Smile, Sun } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import Link from 'next/link'

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
        <main className='flex-grow'>{children}</main>
        <footer className='bg-gray-100 text-xs sm:text-base'>
          <Container className='flex flex-row gap-8 md:max-w-[1440px] m-auto'>
            <div className='flex flex-col gap-2'>
              <div className='mb-2 font-bold'>Настройки</div>
              <div className='flex items-center gap-2'>
                <Sun className='w-5 h-5' />
                <Switch />
                <Moon className='w-5 h-5' />
              </div>
              <div className='flex items-center gap-2'>
                <div className='text-sm font-bold'>RU</div>
                <Switch />
                <div className='text-sm font-bold'>EN</div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='mb-2 font-bold'>Помощь</div>
              <div>Перемещение</div>
              <div>Оприходование</div>
            </div>
          </Container>
          <div className='border-t'>
            <Container className='flex flex-row items-center md:max-w-[1440px] m-auto'>
              <span>© 2024</span>
              <Link href='https://t.me/Kravchenko_Sergey' target='_blank' className='font-bold'>
                Кравченко Сергей
              </Link>
              <span>Все права защищены.)</span>
            </Container>
          </div>
        </footer>
      </body>
    </html>
  )
}
