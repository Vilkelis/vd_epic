import React from 'react'

import ITemplate from 'components/Table/CellData'
import CellValuePercent from 'components/Table/templates/CellValuePercent'

import './CellWorkloadPercent.css'

const CellWorkhoursPercent: typeof ITemplate = ({ row }) => {
  return (
    <CellValuePercent
      value={row.workload_percent}
      percent={row.workload_percent_din}
    />
  )
}

export default CellWorkhoursPercent
