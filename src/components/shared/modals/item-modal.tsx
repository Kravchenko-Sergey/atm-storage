'use client'

import { useParams } from 'next/navigation'
import Container from '@/components/shared/container'
import { useBoxesStore } from '@/store/boxes-store'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Description } from '@radix-ui/react-dialog'
import Image from 'next/image'
import { router } from 'next/client'

interface Props {
  className?: string
}

export default function ItemModal({ className }: Props) {
  const boxes = useBoxesStore(state => state.boxes)
  const { id } = useParams<{ id: string }>()

  const allItems = boxes.flatMap(el => el.items.map(item => item))

  const item = allItems.filter(item => item.id === id)[0]

  const foundItem = boxes.flatMap(box => box.items).find(item => item.id === id)

  const foundBox = boxes.find(box => box.items.some(item => item.id === foundItem?.id))

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn('p-4 max-w-[1060px] min-h-[500px] bg-white overflow-hidden flex flex-col', className)}
      >
        <DialogTitle className='h-[23px] flex items-end gap-4 '>
          <Description></Description>
        </DialogTitle>
        <Container className='h-[90%] flex items-start justify-between p-0 md:flex-col max-w-[1440px] m-auto'>
          <div className='w-full flex flex-col items-center m-auto sm:flex-row '>
            <Image src={item.image ?? ''} alt={item.name} width={240} height={240} className='self-center' />
            <div className='flex flex-col items-center sm:items-start'>
              <div className='my-4 flex items-center gap-4'>
                <div className='text-2xl font-extrabold '>{item.brand}</div>
                <div className='text-xl font-bold'>{item.model}</div>
              </div>
              <div>SN: {item.sn}</div>
              <div>Банк: {item.bank}</div>
              <span>Находится в ящике: {foundBox?.title}</span>
            </div>
          </div>
        </Container>
      </DialogContent>
    </Dialog>
  )
}
