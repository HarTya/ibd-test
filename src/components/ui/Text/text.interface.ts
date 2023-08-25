import { HTMLAttributes } from 'react'

export interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
  size: 'heading' | 'subheading' | 'body'
  weight: 'medium' | 'bold'
  accent?: boolean
  translucent?: boolean
  width?: number
}

export interface ISpan extends HTMLAttributes<HTMLSpanElement> {
  size: 'heading' | 'subheading' | 'body'
  weight: 'medium' | 'bold'
  accent?: boolean
  translucent?: boolean
}
