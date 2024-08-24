'use client'

import { useParams } from 'next/navigation'
import Container from '@/components/shared/container'
import { useBoxesStore } from '@/store/boxes-store'

export default function Item() {
  const boxes = useBoxesStore(state => state.boxes)
  const { id } = useParams<{ id: string }>()

  const allItems = boxes.flatMap(el => el.items.map(item => item))

  const item = allItems.filter(item => item.id === id)[0]

  const foundItem = boxes.flatMap(box => box.items).find(item => item.id === id)

  const foundBox = boxes.find(box => box.items.some(item => item.id === foundItem?.id))

  return (
    <div>
      <Container className='flex items-start justify-between py-4 md:flex-col max-w-[1440px] m-auto'>
        <h1 className='text-2xl font-extrabold'>{item.brand}</h1>
        <h2 className='text-xl font-bold'>{item.model}</h2>
        <span>Находится в ящике: {foundBox?.title}</span>
      </Container>
    </div>
  )
}
