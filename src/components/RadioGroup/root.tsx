import { ReactNode } from 'react'

export interface RootProps {
  title: string
  children: ReactNode
}

export function Root({ title, children }: RootProps) {
  return (
    <fieldset className="text-white">
      <legend className="mb-1">{title}</legend>
      <div className="flex gap-4">{children}</div>
    </fieldset>
  )
}
