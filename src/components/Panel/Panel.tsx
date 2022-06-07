import React, { FC } from 'react'

import './Panel.css'

interface IPanelProps {
  title: string
  panel_class: string
  children?: React.ReactNode
}

const Panel: FC<IPanelProps> = ({
  title,
  panel_class,
  children,
}: IPanelProps) => {
  return (
    <div className={`panel ${panel_class}`}>
      <div className="title">{title}</div>
      <div className="body">{children}</div>
    </div>
  )
}

export default Panel
