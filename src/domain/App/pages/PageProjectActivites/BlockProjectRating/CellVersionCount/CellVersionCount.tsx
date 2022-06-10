import React from 'react'
import { ColorKind } from 'utils/enums'

import ITemplate from 'components/Table/CellData'
import CellValueValue from 'components/Table/templates/CellValueValue'

import './CellVersionCount.css'

const CellVersionCount: typeof ITemplate = ({ row }) => {
  return (
    <CellValueValue
      value1={row.version_count}
      value2={row.version_overdued_count}
      color_kind={ColorKind.colorRed}
    />
  )
}

export default CellVersionCount
