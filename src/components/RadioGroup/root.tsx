import { ReactNode } from 'react'

export interface RootProps {
  title: string
  children: ReactNode
}

export function Root({ title, children }: RootProps) {
  return (
    <fieldset>
      <legend>{title}</legend>
      {children}
    </fieldset>
  )
}
