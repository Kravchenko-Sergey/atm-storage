'use client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { useParams, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Description } from '@radix-ui/react-dialog'
import { Item, useBoxesStore } from '@/store/boxes-store'
import Container from '@/components/shared/container'
import Image from 'next/image'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface Props {
  className?: string
}

export default function BoxModal({ className }: Props) {
  const boxes = useBoxesStore(state => state.boxes)
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const currentBox = boxes.filter(box => box.id === id)[0]

  const totalQuantity = boxes
    .filter(box => box.items.some(item => item.name === box.productName)) // Фильтруем боксы, где есть элементы с совпадающим именем
    .map(box2 => box2.items.filter(subItem => subItem.name === currentBox.productName)) // Извлекаем элементы с совпадающим именем
    .flat() // Объединяем все найденные элементы в один массив
    .reduce(total => total + 1, 0) // Суммируем количество

  const rackNumbers = boxes
    .filter(box => box.items.some(subItem => subItem.name === currentBox.productName)) // Фильтруем боксы по productName
    .map(box => box.title) // Извлекаем заголовки боксов
    .filter((title, index, self) => self.indexOf(title) === index) // Удаляем дубликаты
    .join(', ') // Объединяем заголовки в строку

  const itemsWithSN = currentBox.items.filter(item => item.sn)

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn('p-4 max-w-[1060px] min-h-[500px] max-h-[90%] bg-white overflow-auto flex flex-col', className)}
      >
        <DialogTitle className='h-[23px] flex items-end gap-4 '>
          <Description></Description>
        </DialogTitle>
        <Container className='h-[90%] flex items-start justify-between p-0 md:flex-col max-w-[1440px] m-auto'>
          <div className='w-full flex flex-col items-center m-auto sm:flex-row'>
            <Image
              src={currentBox.items[0].image}
              alt={currentBox.items[0].name}
              width={340}
              height={340}
              className='self-center'
            />

            <div className='flex flex-col items-center sm:items-start'>
              <div className='my-4 flex items-center gap-4 sm:flex-col sm:gap-1 sm:items-start'>
                <div className='text-4xl font-extrabold '>{currentBox.items[0].brand}</div>
                <div className='text-xl font-bold'>{currentBox.items[0].model}</div>
              </div>
              <div>В коробке: {currentBox.items.length} шт.</div>
              <div>Всего на складе: {totalQuantity} шт.</div>
              <div>
                <span>Находится в ящик{rackNumbers.length <= 4 ? 'е: ' : 'ах: '}</span>
                <span>{rackNumbers}</span>
              </div>
            </div>
          </div>
          {itemsWithSN.length ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>№</TableHead>
                  <TableHead>SN</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {itemsWithSN.map((item: Item, index) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.sn}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          ) : (
            <div></div>
          )}
        </Container>
      </DialogContent>
    </Dialog>
  )
}
