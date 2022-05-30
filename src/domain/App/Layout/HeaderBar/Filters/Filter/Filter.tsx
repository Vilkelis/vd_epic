import React, { FC } from 'react'

interface IFilterProps {
  caption: string
}

const Filter: FC<IFilterProps> = ({ caption }: IFilterProps) => (
  <div className="filter">
    <div className="label"> {caption} </div>
    <div className="control" />
  </div>
)

export default Filter
