import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'

import NavBarItem, { INavBarItemModel } from './NavBarItem'

import './NavBar.css'

interface INavBarProps {
  items: Array<INavBarItemModel>
}

const NavBar: FC<INavBarProps> = ({ items }: INavBarProps) => {
  const location = useLocation()
  // Помечаем активные и не активные ссылки
  let activeItemIndex
  items.forEach((item, item_index) => {
    item.title.active = false
    item.item_active = false
    item.next_item_active = false
    if (item.title.action === location.pathname) {
      item.title.active = true
      item.item_active = true
    } else {
      item.title.active = false
      if (item.body) {
        item.body.forEach((body_item) => {
          if (body_item.action === location.pathname) {
            body_item.active = true
            item.item_active = true
          } else {
            body_item.active = false
          }
        })
      }
    }
    if (item.item_active) {
      activeItemIndex = item_index
    }
  })

  if (activeItemIndex && activeItemIndex > 0) {
    items[activeItemIndex - 1].next_item_active = true
  }

  // Довычисляем свойства активности пунктов меню
  return (
    <div className="nav-bar">
      {items.map((item) => (
        <NavBarItem key={item.title.caption} item={item} />
      ))}
    </div>
  )
}

export default NavBar
