import React, { FC } from 'react'

import './CellValueValue.css'

import {ColorKind} from 'utils/enums'

interface ICellValueValueProps {
  value1: number
  value2?: number
  color_kind: ColorKind
}

const CellValueValue: FC<ICellValueValueProps> = ({
  value1,
  value2,
  color_kind,
}: ICellValueValueProps) => {
  let value2Block = null
  if (value2) {
    value2Block = (
      <>
        <span className="value-delimiter">/</span>
        <span className={`value-2 ${color_kind}`}>{value2}</span>
      </>
    )
  }

  return (
    <>
      <span className="value-1">{value1}</span>
      {value2Block}
    </>
  )
}

export default CellValueValue
