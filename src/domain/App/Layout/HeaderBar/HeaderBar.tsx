import React, { FC } from 'react'

import Buttons from './Buttons'
import Filters from './Filters'

import './HeaderBar.css'

const HeaderBar: FC = () => {
  return (
    <div className="header_bar">
      <Filters />
      <Buttons />
    </div>
  )
}

export default HeaderBar
