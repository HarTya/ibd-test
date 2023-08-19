export interface IText {
  size: 'heading' | 'subheading' | 'body'
  weight: 'medium' | 'bold'
  accent?: boolean
  translucent?: boolean
  className?: string
}
