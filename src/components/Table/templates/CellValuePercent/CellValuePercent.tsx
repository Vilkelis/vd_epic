import React, { FC } from 'react'
import { ColorKind } from 'utils/enums'

import './CellValuePercent.css'

interface ICellValuePercentProps {
  value: number
  percent?: number
}

const CellValuePercent: FC<ICellValuePercentProps> = ({
  value,
  percent,
}: ICellValuePercentProps) => {
  let percentBlock = null
  if (percent && percent !== 0) {
    let colorKind = ColorKind.colorRed
    let percentToShow = `(${percent}%)`
    if (percent > 0) {
      colorKind = ColorKind.colorGreen
      percentToShow = `(+${percent}%)`
    }
    percentBlock = (
      <span className={`value-din ${colorKind}`}>{percentToShow}</span>
    )
  }

  return (
    <>
      <span className="value">{value}</span>
      {percentBlock}
    </>
  )
}

export default CellValuePercent
