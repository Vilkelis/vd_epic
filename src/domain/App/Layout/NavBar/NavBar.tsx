import React, { FC } from 'react'

import NavBarItem, { INavBarItemModel } from './NavBarItem'

import './NavBar.module.css'

interface INavBarProps {
  items: Array<INavBarItemModel>
}

const NavBar: FC<INavBarProps> = ({ items }: INavBarProps) => {
  // const nextActive = false

  // items.reduceRight((_, item) => {
  //   item.item_active = !!(
  //     item.title.active ||
  //     (item.body && item.body.find((it) => it.active))
  //   )
  //   item.next_item_active = nextActive
  //   nextActive = item.item_active
  //   return item
  // })

  return (
    <div className="nav-bar">
      {items.map((item) => (
        <NavBarItem key={item.title.caption} item={item} />
      ))}
    </div>
  )
}

export default NavBar
