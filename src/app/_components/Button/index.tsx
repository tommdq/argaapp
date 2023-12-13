import { Button as ButtonMantine, ButtonProps } from '@mantine/core'
import { ReactNode } from 'react'
import styles from './button.module.css'

type Props = ButtonProps & {
  children: ReactNode
  type: 'primary' | 'secondary'
  isSubmit?: boolean
}

const Button = ({ children, type, isSubmit, ...rest }: Props) => {
  return (
    <ButtonMantine
      radius={0}
      className={`${styles.button}, ${styles[type]}`}
      type={isSubmit ? 'submit' : 'button'}
      {...rest}
    >
      {children}
    </ButtonMantine>
  )
}
export default Button
