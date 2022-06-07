import React, { FC } from 'react'

import './ColumnBox.css'

interface IColumnBoxProps {
  add_class: string
  children?: React.ReactNode
}

const ColumnBox: FC<IColumnBoxProps> = ({
  add_class,
  children,
}: IColumnBoxProps) => {
  return (
    <div className={`column-box ${add_class || ''}`}>
      <div className="column-box-content">{children}</div>
    </div>
  )
}

export default ColumnBox
