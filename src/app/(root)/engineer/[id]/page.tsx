'use client'

import { useParams } from 'next/navigation'

export default function EngineerPage() {
  const { id } = useParams<{ id: string }>()

  return <div>{id}</div>
}
