import React, { FC } from 'react'

import './CellData.css'

interface ITemplateProps {
  row?: any
}

export type Template = FC<ITemplateProps>

export interface ICellDataProps {
  template?: Template
  field?: string
  row?: any
}

const CellData: FC<ICellDataProps> = ({
  template,
  field,
  row,
}: ICellDataProps) => {
  if (template) {
    return <td>{template({ row })}</td>
  }
  if (field) {
    return <td>{row[field] === 0 ? '-' : row[field]}</td>
  }

  return <td />
}

export default CellData
