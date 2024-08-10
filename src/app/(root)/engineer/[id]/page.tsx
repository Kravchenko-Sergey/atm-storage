'use client'

import { useParams } from 'next/navigation'
import { useEngineerStore } from '@/store/engineer-store'

export default function EngineerPage() {
  const { id } = useParams<{ id: string }>()
  const engineers = useEngineerStore(state => state.engineers)

  const allItems = engineers.flatMap(el => el.items.map(item => item))

  const item = allItems.filter(item => item.id === id)[0]

  return <div>{item.name}</div>
}
