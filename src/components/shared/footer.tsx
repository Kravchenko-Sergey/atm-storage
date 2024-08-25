'use client'

import Container from '@/components/shared/container'
import { Moon, Sun } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [isChecked, setIsChecked] = useState(false)
  const [theme, setTheme] = useState('light')

  const getTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme : 'light'
  }

  const handleThemeSwitch = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme) // Save the new theme to localStorage
  }

  useEffect(() => {
    // Set the initial theme from localStorage
    setTheme(getTheme())
  }, [])

  useEffect(() => {
    // Update the document's class based on the theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <footer className='bg-gray-100 text-xs border-t sm:text-base dark:bg-gray-950'>
      <Container className='flex flex-row gap-8 md:max-w-[1440px] m-auto'>
        <div className='flex flex-col gap-2'>
          <div className='mb-2 font-bold'>Настройки</div>
          <div className='flex items-center gap-2'>
            <Sun className='w-5 h-5' />
            <Switch className='w-[40px] h-5' onCheckedChange={handleThemeSwitch} />
            <Moon className='w-5 h-5' />
          </div>
          {/*<div className='flex items-center gap-2'>
            <div className='text-sm font-bold'>RU</div>
            <Switch className='w-[40px] h-5' />
            <div className='text-sm font-bold'>EN</div>
          </div>*/}
        </div>
        {/*<div className='flex flex-col gap-2'>
          <div className='mb-2 font-bold'>Помощь</div>
          <div>Перемещение</div>
          <div>Оприходование</div>
        </div>*/}
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
  )
}
