import React, { FC } from 'react'
import { TableKind } from 'tools/enums'
import { v4 as uuidv4 } from 'uuid'

import CellData from './CellData'
import CellHead, { IColumn } from './CellHead'

import './Table.css'

interface ITableProps {
  columns: Array<IColumn>
  data: Array<any>
  table_kind: TableKind
}

const Table: FC<ITableProps> = ({ columns, data, table_kind }: ITableProps) => {
  return (
    <table className={table_kind}>
      <thead>
        <tr>
          {columns.map((column) => (
            <CellHead key={uuidv4()} column={column} />
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <CellData
                key={uuidv4()}
                template={column.template}
                field={column.field}
                row={row}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
