import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useTypedSelector } from 'store/hooks/useTypedSelector'
import { filterStateToSearchParams } from 'store/reducers/filterReducer'

import list_dot from 'assets/icons/list_dot.svg'

export interface INavBarItemBodyItemModel {
  caption: string
  action: string
  active: boolean
}

interface INavBarItemBodyItemProps {
  item: INavBarItemBodyItemModel
}

const NavBarItemBodyItem: FC<INavBarItemBodyItemProps> = ({
  item,
}: INavBarItemBodyItemProps) => {
  const state = useTypedSelector((rootState) => rootState.filter)
  let itemObj

  if (item.action) {
    itemObj = (
      <NavLink
        className={`text ${item.active ? 'active' : ''}`}
        to={`${item.action}?${filterStateToSearchParams(state)}`}
      >
        {item.caption}
      </NavLink>
    )
  } else {
    itemObj = <div className="text">{item.caption}</div>
  }

  return (
    <div className="body-item">
      <div className="icon">
        <img src={list_dot} alt="dot" width="5" height="5" />
      </div>
      <div className={`line-text ${item.active ? 'active' : ''}`}>
        <div className="line"> </div>
        {itemObj}
      </div>
    </div>
  )
}

export default NavBarItemBodyItem
