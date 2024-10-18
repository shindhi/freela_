import { ReactNode, LabelHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

export function Label(props: LabelProps) {
  return (
    <label {...props} className={twMerge('font-semibold', props.className)} />
  )
}
