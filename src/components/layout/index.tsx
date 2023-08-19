import { FC, PropsWithChildren } from 'react'
import Header from './Header'
import Meta from './Meta'
import { ILayout } from './layout.interface'

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
