import React, { FC } from 'react'

import { navBarItems } from 'constants/constants'
import HeaderBar from './HeaderBar'
import Logo from './Logo'
import NavBar from './NavBar'

import './Layout.css'

interface IOnlyChildrenProps {
  children?: React.ReactNode
}

const Layout: FC<IOnlyChildrenProps> = ({ children }: IOnlyChildrenProps) => {
  return (
    <>
      <header>
        <div className="header-inner">
          <div className="header-inner-container">
            <Logo />
            <HeaderBar />
          </div>
        </div>
      </header>
      <section className="main">
        <section className="left-side">
          <NavBar items={navBarItems} />
        </section>
        <section className="right-side">
          <div className="page">{children}</div>
        </section>
      </section>
    </>
  )
}

export default Layout
