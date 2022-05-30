import React, { FC } from 'react'

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
  let itemObj

  if (item.action) {
    itemObj = (
      <a className="text" href={item.action}>
        {item.caption}
      </a>
    )
  } else {
    itemObj = <div className="text">{item.caption}</div>
  }

  return (
    <div className="body-item">
      <div className="icon">
        <img src={list_dot} alt="dot" width="5" height="5" />
      </div>
      <div className="line-text { props.item.active ? 'active' : '' }">
        <div className="line">&nbsp</div>
        {itemObj}
      </div>
    </div>
  )
}

export default NavBarItemBodyItem
