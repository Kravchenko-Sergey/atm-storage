'use client'

import Container from '@/components/shared/container'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useStore } from '@/store/store'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const storage = useStore(state => state.storage)

  return (
    <main>
      <Container className='md:flex-row max-w-[1440px] m-auto'>
        <Accordion type='single' collapsible className='w-full'>
          {storage.map((item: any, index) => (
            <AccordionItem key={item.id} value={`item-${index + 1}`}>
              <AccordionTrigger>
                <div className='flex items-center justify-between gap-4'>
                  <span>{item.name}</span>
                  <Image src={item.image} alt='Item image' width={24} height={24} />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Название</TableHead>
                      <TableHead>Количество</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {item.items.map((item2: any) => {
                      return (
                        <TableRow key={item2.id}>
                          <TableCell onClick={() => router.push(`/item/${item.id}`)}>{item2.name}</TableCell>
                          <TableCell className='flex gap-4'>
                            <span>{item2.quantity}</span>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </main>
  )
}
