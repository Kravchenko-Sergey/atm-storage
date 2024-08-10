'use client'

import { useParams, useRouter } from 'next/navigation'
import { useStorageStore } from '@/store/storage-store'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Description } from '@radix-ui/react-dialog'
import Container from '@/components/shared/container'
import { useEngineerStore } from '@/store/engineer-store'

interface Props {
  className?: string
}

export default function EngineerModal({ className }: Props) {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const engineers = useEngineerStore(state => state.engineers)

  const allItems = engineers.flatMap(el => el.items.map(item => item))

  const item = allItems.filter(item => item.id === id)[0]

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
              <div>Количество: {item.quantity} шт.</div>
            </div>
          </Container>
        </div>
      </DialogContent>
    </Dialog>
  )
}
