import React, { FC } from 'react'
import parse from 'html-react-parser'

import { Template } from '../CellData'
import SortButton from './SortButton'

import './CellHead.css'

export interface IColumn {
  caption: string
  field?: string
  template?: Template
  allow_sort: boolean
  sort?: boolean
}

export interface ICellHeadProps {
  column: IColumn
}

const CellHead: FC<ICellHeadProps> = ({ column }: ICellHeadProps) => {
  return (
    <th>
      <div className="cell-head">
        <div className="cell-head-caption">
          {parse(column.caption)}
        </div>
        {column.allow_sort ? <SortButton sort={column.sort} /> : null}
      </div>
    </th>
  )
}

export default CellHead
