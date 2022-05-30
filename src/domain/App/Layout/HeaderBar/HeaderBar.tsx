import React, { FC } from 'react'

import './HeaderBar.css'
import Filters from './Filters'
import Buttons from './Buttons'

const HeaderBar: FC = () => {
  return (
    <div className="header_bar">
      <Filters />
      <Buttons />
    </div>
  )
}

export default HeaderBar
