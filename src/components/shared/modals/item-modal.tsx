'use client'

import { useParams } from 'next/navigation'
import Container from '@/components/shared/container'
import { useBoxesStore } from '@/store/boxes-store'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Description } from '@radix-ui/react-dialog'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Props {
  className?: string
}

export default function ItemModal({ className }: Props) {
  const boxes = useBoxesStore(state => state.boxes)
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const allItems = boxes.flatMap(el => el.items.map(item => item))

  const item = allItems.filter(item => item.id === id)[0]

  const foundItem = boxes.flatMap(box => box.items).find(item => item.id === id)

  const foundBox = boxes.find(box => box.items.some(item => item.id === foundItem?.id))

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-4 max-w-[1060px] min-h-[500px] bg-white overflow-hidden flex flex-col dark:bg-gray-900',
          className
        )}
      >
        <DialogTitle className='h-[23px] flex items-end gap-4 '>
          <Description></Description>
        </DialogTitle>
        <Container className='h-[90%] flex items-start justify-between p-0 md:flex-col max-w-[1440px] m-auto'>
          <div className='w-full flex flex-col items-center m-auto gap-x-4 sm:flex-row'>
            <Image src={item.image ?? ''} alt={item.name} width={340} height={340} className='self-center' />
            <div className='flex flex-col items-center sm:items-start'>
              {item.sn ? (
                <div className='my-4 flex items-center gap-4 sm:flex-col sm:gap-1 sm:items-start'>
                  <div className='text-4xl font-extrabold '>{item.brand}</div>
                  <div className='text-xl font-bold'>{item.model}</div>
                </div>
              ) : (
                <div className='pb-2 text-2xl font-bold'>{item.name}</div>
              )}
              {item.sn && (
                <div>
                  <span>SN:</span> <span className='font-bold'>{item.sn}</span>
                </div>
              )}
              {item.sn && (
                <div>
                  <span>Банк:</span> <span className='font-bold'>{item.bank}</span>
                </div>
              )}
              <span>
                <span>Находится в ящике:</span> <span className='font-bold'>{foundBox?.title}</span>
              </span>
            </div>
          </div>
        </Container>
      </DialogContent>
    </Dialog>
  )
}
