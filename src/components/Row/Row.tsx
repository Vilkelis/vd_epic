import React, { FC } from 'react'

import './Row.css'

interface IRowProps {
  add_class?: string
  children?: React.ReactNode
}

const Row: FC<IRowProps> = ({ add_class, children }: IRowProps) => {
  return <div className={`row ${add_class || ''}`}>{children}</div>
}

export default Row
