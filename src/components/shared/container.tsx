import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export default function Container({ className, children }: PropsWithChildren & Props) {
  return <div className={cn('p-4 w-full flex flex-col gap-4', className)}>{children}</div>
}
