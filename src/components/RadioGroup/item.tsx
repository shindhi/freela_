import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

export interface ItemProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export function Item(props: ItemProps) {
  const { register } = useFormContext()

  return (
    <label
      className={twMerge(
        'flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 font-medium text-white shadow-sm',
        'hover:border-white/20',
        'has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500',
      )}
    >
      <input
        type="radio"
        className="sr-only"
        {...props}
        {...register(props.name)}
      />
      {props.label}
    </label>
  )
}
