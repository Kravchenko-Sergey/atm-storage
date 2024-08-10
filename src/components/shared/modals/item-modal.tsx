'use client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { useParams, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Description } from '@radix-ui/react-dialog'
import { useStorageStore } from '@/store/storage-store'
import Container from '@/components/shared/container'

interface Props {
  className?: string
}

export default function ItemModal({ className }: Props) {
  const router = useRouter()
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
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn('p-4 max-w-[1060px] min-h-[500px] bg-white overflow-hidden flex flex-col', className)}
      >
        <DialogTitle className='h-[23px] flex items-end gap-4 '>
          <span className='text-2xl font-extrabold'>{item.title}</span>
          <Description className='text-xl font-bold'>{item.name}</Description>
        </DialogTitle>
        <div onSubmit={() => router.back()}>
          <Container className='h-[90%] flex items-start justify-between p-0 md:flex-col max-w-[1440px] m-auto'>
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
      </DialogContent>
    </Dialog>
  )
}
