import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

export interface ItemProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

export function Item(props: ItemProps) {
  const { register } = useFormContext()

  return (
    <label>
      <input type="radio" {...props} {...register(props.name)} />
      {props.label}
    </label>
  )
}
