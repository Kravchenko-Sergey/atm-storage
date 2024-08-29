import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Box, Cell, Item } from '@/store/boxes-store'
import Image from 'next/image'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PackageOpen } from 'lucide-react'
import { Engineer, useEngineersStore } from '@/store/engineer-store'

interface Props {
  title: string
  className?: string
}

export default function EngineersList({ title }: Props) {
  const engineers = useEngineersStore(state => state.engineers)

  return (
    <div className='flex flex-col '>
      <h2 className='my-2 text-xl font-semibold self-center'>{title}</h2>
      <Accordion type='single' collapsible>
        {engineers.map((engineer: Engineer, index) => (
          <AccordionItem key={engineer.id} value={`item-${index + 1}`}>
            <AccordionTrigger>
              <div className='flex items-center justify-between gap-4'>
                <span>{engineer.lastName}</span>
                <span>{engineer.firstName}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {engineer.items.length ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>№</TableHead>
                      <TableHead>Название</TableHead>
                      <TableHead>SN</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {engineer.items.map((item: Item, index) => {
                      return (
                        <TableRow key={item.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>
                            <span>{`${item.brand} `}</span>
                            <span>{item.model}</span>
                          </TableCell>
                          <TableCell>{item.sn}</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              ) : (
                <div className='pb-8 text-gray-800 flex items-center justify-center gap-2'>
                  <span>У инженера нет устройств!</span>
                  <PackageOpen className='w-4 h-4' />
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
