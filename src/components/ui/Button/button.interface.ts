import { ButtonHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: number
  bold?: boolean
  hover?: boolean
  bordered?: boolean
  selected?: boolean
}
