'use client'

import Container from '@/components/shared/container'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useRouter } from 'next/navigation'
import { PackageOpen } from 'lucide-react'
import { Box, Cell, useBoxesStore } from '@/store/boxes-store'
import { v4 } from 'uuid'

export default function Home() {
  const router = useRouter()

  const boxes = useBoxesStore(state => state.boxes)

  const cells =
    boxes &&
    boxes.reduce((acc, item) => {
      const titlePrefix = item.title.split('-')[0] // Получаем префикс заголовка (например, "A1")

      // Проверяем, существует ли уже объект с таким заголовком

      let group = acc.find(g => g?.title === titlePrefix)

      if (!group) {
        // Если нет, создаем новый объект
        group = {
          id: v4(),
          title: titlePrefix,
          boxes: []
        }
        acc.push(group)
      }

      // Добавляем текущий элемент в соответствующую группу
      group.boxes.push({
        id: item.id,
        title: item.title,
        productName: item.productName,
        sn: item.sn,
        image: item.image,
        items: item.items
      })

      return acc
    }, [])

  return (
    <main>
      <Container className='md:max-w-[1440px] m-auto'>
        <div className='flex flex-col'>
          <h2 className='text-xl self-center'>Склад</h2>
          <Accordion type='single' collapsible>
            {cells.map((cell: Cell, index) => (
              <AccordionItem key={cell.id} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <div className='flex items-center justify-between gap-4'>
                    <span>{cell.title}</span>
                    <Image src={cell.boxes[0].image} alt='Item image' width={24} height={24} className='rounded-sm' />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {cell.boxes.length ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ящик</TableHead>
                          <TableHead>Название</TableHead>
                          <TableHead>Кол-во</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {cell.boxes.map((box: Box) => {
                          return (
                            <TableRow key={box.id}>
                              <TableCell onClick={() => router.push(`/box/${box.id}`)}>{box.title}</TableCell>
                              <TableCell>{box.productName}</TableCell>
                              <TableCell className='flex gap-4'>{box.items.length}</TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className='pb-8 text-gray-800 flex items-center justify-center gap-2'>
                      <span>На этом стеллаже пусто!</span>
                      <PackageOpen className='w-4 h-4' />
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </main>
  )
}
