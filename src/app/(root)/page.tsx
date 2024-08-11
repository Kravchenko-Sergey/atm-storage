'use client'

import Container from '@/components/shared/container'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useStorageStore } from '@/store/storage-store'
import { useRouter } from 'next/navigation'
import { useEngineerStore } from '@/store/engineer-store'
import { CircleX, PackageOpen } from 'lucide-react'
import { TextField } from '@/components/ui/text-field'

export default function Home() {
  const router = useRouter()

  const storage = useStorageStore(state => state.storage)
  const engineers = useEngineerStore(state => state.engineers)
  const changeQuantity = useStorageStore(state => state.changeQuantity)
  const removeItem = useStorageStore(state => state.removeItem)

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
                    <Image src={item.image} alt='Item image' width={24} height={24} className='rounded-sm' />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {item.items.length ? (
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
                              <TableCell onClick={() => router.push(`/item/${item2.id}`)}>{item2.name}</TableCell>
                              <TableCell className='flex gap-4'>
                                <TextField
                                  type='number'
                                  min={0}
                                  max={1000}
                                  defaultValue={item2.quantity}
                                  onChange={e => changeQuantity(item.id, item2.id, Number(e.target.value))}
                                />
                              </TableCell>
                              <TableCell onClick={() => removeItem(item.id, item2.id)} className='p-0'>
                                <CircleX className='w-4 h-4 text-[#d03135]' />
                              </TableCell>
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
        <div className='flex flex-col'>
          <h2 className='py-4 text-xl self-center'>Инженеры</h2>
          <Accordion type='single' collapsible className='w-full'>
            {engineers.map((item: any, index) => (
              <AccordionItem key={item.id} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <div className='flex items-center justify-between gap-4'>
                    <div className='min-w-[150px] text-start'>{item.fullName}</div>
                    <div className='flex gap-1'>
                      {item.image.map((image: string, index: number) => (
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
                            <TableCell onClick={() => router.push(`/engineer/${item2.id}`)}>{item2.name}</TableCell>
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
