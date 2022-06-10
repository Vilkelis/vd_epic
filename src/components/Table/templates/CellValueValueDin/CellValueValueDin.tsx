import React, { FC } from 'react'
import { ColorKind } from 'utils/enums'

import './CellValueValueDin.css'

interface ICellValueValueDinProps {
  value: number
  value_din?: number
}

const CellValueValue: FC<ICellValueValueDinProps> = ({
  value,
  value_din,
}: ICellValueValueDinProps) => {
  let valueDinBlock = null
  if (value_din && value_din !== 0) {
    let colorClass = ColorKind.colorGreen
    let valueDinToShow = `(${value_din})`
    if (value_din > 0) {
      colorClass = ColorKind.colorRed
      valueDinToShow = `(+${value_din})`
    }
    valueDinBlock = (
      <span className={`value-din ${colorClass}`}>{valueDinToShow}</span>
    )
  }

  return (
    <>
      <span className="value">{value}</span>
      {valueDinBlock}
    </>
  )
}

export default CellValueValue
