import React, { FC } from 'react'

import logo from 'assets/icons/logo.svg'

import './Logo.css'

const Logo: FC = () => {
  return (
    <a
      className="logo"
      href="/"
      title="НИИ ВОСХОД: Перейти на домашнюю страницу"
    >
      <img src={logo} alt="НИИ ВОСХОД" width="211" height="46" />
    </a>
  )
}

export default Logo
