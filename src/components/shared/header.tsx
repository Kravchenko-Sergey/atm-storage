'use client'

import Container from '@/components/shared/container'
import Link from 'next/link'
import Image from 'next/image'
import { Calculator, Search } from 'lucide-react'
import { TextField } from '@/components/ui/text-field'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Item, useBoxesStore } from '@/store/boxes-store'
import { useRouter } from 'next/navigation'

export default function Header() {
  const boxes = useBoxesStore(state => state.boxes)
  const [searchValue, setSearchValue] = useState('')
  const [focused, setFocused] = useState(false)
  const router = useRouter()

  const allItems = boxes
    .flatMap(box => box.items)
    .filter(
      item =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.sn?.toLowerCase().includes(searchValue.toLowerCase())
    )
    .slice(0, 6)

  const uniqueItems = Array.from(new Map(allItems.map(item => [item.name, item])).values())

  const handleClickItem = (id: string) => {
    router.push(`/item/${id}`)

    setFocused(false)
    setSearchValue('')
  }

  return (
    <header className='border-b'>
      <Container className='flex items-center justify-between py-4 md:flex-row max-w-[1440px] m-auto'>
        <Link href='/'>
          <div className='flex items-center gap-4'>
            <Image src='/logo.webp' alt='Logo' width={32} height={32} />
            <div>
              <h1 className='text-2xl uppercase font-black'>
                <span className='text-[#d03135]'>ATM</span> <span className='text-[#0384ce]'>STORAGE</span>
              </h1>
            </div>
          </div>
        </Link>
        <div className='w-full flex-1 md:ml-8'>
          {focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30'></div>}
          <div className='w-full flex rounded-2xl flex-1 justify-between relative h-11 z-30'>
            <Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
            <TextField
              type='text'
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder='Искать на складе ...'
              className='rounded-md outline-none w-full bg-gray-100 pl-11'
            />

            {uniqueItems.length > 0 && (
              <div
                className={cn(
                  'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                  focused && 'visible opacity-100 top-12'
                )}
              >
                {uniqueItems.map((item: Item) => {
                  return (
                    <div
                      key={item.id}
                      className='flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer'
                      onClick={() => handleClickItem(item.id)}
                    >
                      <Calculator className='text-gray-400 rounded-sm h-6 w-6' />
                      <span>{item.name}</span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  )
}
