import React, { FC } from 'react'

import NavBarItem, { INavBarItemModel } from './NavBarItem'

import './NavBar.css'

interface INavBarProps {
  items: Array<INavBarItemModel>
}

const NavBar: FC<INavBarProps> = ({ items }: INavBarProps) => {
  return (
    <div className="nav-bar">
      {items.map((item) => (
        <NavBarItem key={item.title.caption} item={item} />
      ))}
    </div>
  )
}

export default NavBar
