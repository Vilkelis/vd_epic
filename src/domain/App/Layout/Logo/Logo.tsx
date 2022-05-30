import React, { FC } from 'react'

const Logo: FC = () => {
  return (
    <a
      className="logo"
      href="/"
      title="НИИ ВОСХОД: Перейти на домашнюю страницу"
    >
      <img src="/img/logo.svg" alt="НИИ ВОСХОД" width="211" height="46" />
    </a>
  )
}

export default Logo
