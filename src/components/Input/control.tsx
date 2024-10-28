import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { useFormContext } from 'react-hook-form'

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Control(props: ControlProps) {
  const { register } = useFormContext()

  return (
    <input
      id={props.name}
      className={twMerge(
        'rounded-lg border border-white/10 bg-white/5 px-2 py-1 outline-none placeholder:text-zinc-500 focus:ring-0',
        'hover:border-white/20',
        'focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
      )}
      {...register(props.name)}
      {...props}
    />
  )
}
