import { ButtonHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  arrow?: boolean
  bold?: boolean
  hover?: boolean
  bordered?: boolean
  selected?: boolean
}
