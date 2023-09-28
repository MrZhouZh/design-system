import { cva, VariantProps } from 'class-variance-authority'

const buttonStyles = cva('rounded-3xl py-2 text-white w-80 font-sm', {
  variants: {
    intent: {
      primary: 'bg-blue-500 text-white border-transparent hover:bg-blue-600',
      secondary: 'bg-white text-gray-800 border-gray-400 hover:bg-gray-100',
      danger: 'bg-red-500 text-white border-transparent hover:bg-red-600'
    },
    size: {
      small: 'text-sm py-1 px-2',
      medium: 'text-base py-2 px-4',
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium'
    },
  }
})

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string
}

export default function Button({ intent, size, text, ...props }: ButtonProps) {
  return (
    <button className={buttonStyles({ intent, size })} {...props}>
      {text}
    </button>
  )
}
