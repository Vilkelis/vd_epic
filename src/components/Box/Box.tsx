import React, { FC } from 'react'

import './Box.css'

interface IBoxProps {
  add_class: string
  children?: React.ReactNode
}

const Box: FC<IBoxProps> = ({ add_class, children }: IBoxProps) => {
  return <div className={`box ${add_class || ''}`}>{children}</div>
}

export default Box
