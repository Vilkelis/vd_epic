import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useTypedSelector } from 'store/hooks/useTypedSelector'
import { filterStateToSearchParams } from 'store/reducers/filterReducer'

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
  item_active?: boolean
  next_item_active?: boolean
}

interface INavBarItemProps {
  item: INavBarItemModel
}

const NavBarItem: FC<INavBarItemProps> = ({ item }: INavBarItemProps) => {
  const itemActiveClass = item.item_active ? 'active' : '' // Есть ли хоть один подпункт активный
  const nextItemActiveClass = item.next_item_active ? 'next-active' : '' // Активен ли следующий пункт
  const titleActiveClass = item.title.active ? 'active' : '' // Активен ли заголовок (если нет подпунктов)
  const state = useTypedSelector((rootState) => rootState.filter)

  let title
  let body

  if (item.title.action) {
    title = (
      <NavLink
        className={`text ${itemActiveClass}`}
        to={`${item.title.action}?${filterStateToSearchParams(state)}`}
      >
        {item.title.caption}
      </NavLink>
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
            <div className="line"> </div>
            {title}
          </div>
        </div>
        {body}
      </div>
    </div>
  )
}

export default NavBarItem
