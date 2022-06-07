import React, { FC } from 'react'

interface IFilterProps {
  caption: string
  children?: React.ReactNode
}

const Filter: FC<IFilterProps> = ({ caption, children }: IFilterProps) => (
  <div className="filter">
    <div className="label"> {caption} </div>
    <div className="control">{children}</div>
  </div>
)

export default Filter
