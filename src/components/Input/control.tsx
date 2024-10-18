import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Control(props: ControlProps) {
  return (
    <input
      {...props}
      className={twMerge(
        'rounded-lg py-1 px-2 placeholder:text-zinc-500 bg-white/5 border border-white/10 outline-none focus:ring-0',
        'focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
      )}
    />
  )
}
