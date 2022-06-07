import React, { FC } from 'react'

import './DataBlock.css'

interface IDataBlockProps {
  add_class: string
  children?: React.ReactNode
}

const DataBlock: FC<IDataBlockProps> = ({
  add_class,
  children,
}: IDataBlockProps) => {
  return <div className={`data-block ${add_class || ''}`}>{children}</div>
}

export default DataBlock
