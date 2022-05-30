import React, { FC, PropsWithChildren } from 'react'

import { navBarItems } from 'constants/constants'
import HeaderBar from './HeaderBar'
import Logo from './Logo'
import NavBar from './NavBar'

import './Layout.module.css'

const Layout: FC<PropsWithChildren> = ({ children }) => {
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
        <section className="right-side">{children}</section>
      </section>
    </>
  )
}

export default Layout
