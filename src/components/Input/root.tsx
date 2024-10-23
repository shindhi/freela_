import { ReactNode, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Root(props: RootProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex w-full flex-col gap-1 text-white',
        props.className,
      )}
    />
  )
}
