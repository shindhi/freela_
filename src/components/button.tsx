import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg p-6 outline-none flex-grow-0 h-auto self-center',
    'focus-visible:ring-2 focus-visible:ring-offset-2 ',
  ],
  variants: {
    variant: {
      outline: 'border-2',
      primary: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
