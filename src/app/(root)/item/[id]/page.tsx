'use client'

import { useParams } from 'next/navigation'
import Container from '@/components/shared/container'
import { useStorageStore } from '@/store/storage-store'

export default function Item() {
  const storage = useStorageStore(state => state.storage)
  const { id } = useParams<{ id: string }>()

  const allItems = storage.flatMap(el => el.items.map(item => item))

  const item = allItems.filter(item => item.id === id)[0]

  const totalQuantity = storage
    .filter(item1 => item1.items.some(subItem => subItem.name === item.name))
    .map(item1 => item1.items.filter(subItem => subItem.name === item.name))
    .flat()
    .reduce((total, subItem) => total + subItem.quantity, 0)

  const rackNumbers = storage
    .filter(item1 => item1.items.some(subItem => subItem.name === item?.name))
    .map(item => item.name)
    .join(', ')

  return (
    <div>
      <Container className='flex items-start justify-between py-4 md:flex-col max-w-[1440px] m-auto'>
        <h1 className='text-2xl font-extrabold'>{item.title}</h1>
        <h2 className='text-xl font-bold'>{item.name}</h2>
        <div>
          <div>В коробке: {item.quantity} шт.</div>
          <div>Всего на складе: {totalQuantity} шт.</div>
          <div>
            <span>Находится на стеллаж{rackNumbers.length <= 2 ? 'е: ' : 'ах: '}</span>
            <span>{rackNumbers}</span>
          </div>
        </div>
      </Container>
    </div>
  )
}
