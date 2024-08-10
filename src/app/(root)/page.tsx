'use client'

import Container from '@/components/shared/container'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useStorageStore } from '@/store/storage-store'
import { useRouter } from 'next/navigation'
import { useEngineerStore } from '@/store/engineer-store'

export default function Home() {
  const router = useRouter()

  const storage = useStorageStore(state => state.storage)
  const engineers = useEngineerStore(state => state.engineers)

  console.log(storage)

  return (
    <main>
      <Container className='md:max-w-[1440px] m-auto'>
        <div className='flex flex-col'>
          <h2 className='text-xl self-center'>Склад</h2>
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
        </div>
        <div className='flex flex-col'>
          <h2 className='py-4 text-xl self-center'>Инженеры</h2>
          <Accordion type='single' collapsible className='w-full'>
            {engineers.map((item: any, index) => (
              <AccordionItem key={item.id} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <div className='flex items-center justify-between gap-4'>
                    <div className='min-w-[150px] text-start'>{item.fullName}</div>
                    <div className='flex gap-1'>
                      {item.image.map((image, index) => (
                        <Image key={index} src={image} alt='Item image' width={24} height={24} className='rounded-sm' />
                      ))}
                    </div>
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
                            <TableCell onClick={() => router.push(`/engineer/${item.id}`)}>{item2.name}</TableCell>
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
        </div>
      </Container>
    </main>
  )
}
