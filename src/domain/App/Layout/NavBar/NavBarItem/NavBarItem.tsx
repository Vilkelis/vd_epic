import React, { FC } from 'react'

import NavBarItemBodyItem, {
  INavBarItemBodyItemModel,
} from './NavBarItemBodyItem'

export interface INavBarItemTitleModel {
  caption: string
  icon: string
  action?: string
  active: boolean
}

export interface INavBarItemModel {
  title: INavBarItemTitleModel
  body?: Array<INavBarItemBodyItemModel>
}

interface INavBarItemProps {
  item: INavBarItemModel
}

const NavBarItem: FC<INavBarItemProps> = ({ item }: INavBarItemProps) => {
  const itemActiveClass = item.item_active ? 'active' : ''
  const nextItemActiveClass = item.next_item_active ? 'next-active' : ''
  const titleActiveClass = item.title.active ? 'active' : ''

  let title
  let body

  if (item.title.action) {
    title = (
      <a href="{item.title.action}" className="text">
        {item.title.caption}
      </a>
    )
  } else {
    title = <div className="text">{item.title.caption}</div>
  }

  if (item.body) {
    body = (
      <div className="body">
        {item.body.map((it) => (
          <NavBarItemBodyItem key={it.caption} item={it} />
        ))}
      </div>
    )
  } else {
    body = null
  }

  return (
    <div className={`nav-bar-item ${itemActiveClass}  ${nextItemActiveClass}`}>
      <div className="nav-bar-item-inner">
        <div className="title">
          <div className="icon">
            <img src={item.title.icon} alt="icon" width="41" height="41" />
          </div>
          <div className={`line-text ${titleActiveClass}`}>
            <div className="line">&nbsp</div>
            {title}
          </div>
        </div>
        {body}
      </div>
    </div>
  )
}

export default NavBarItem
