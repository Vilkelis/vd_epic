import React, { FC } from 'react'

import Filters from './Filters'

import './HeaderBar.css'

const HeaderBar: FC = () => {
  return (
    <div className="header_bar">
      <Filters />
    </div>
  )
}

export default HeaderBar
