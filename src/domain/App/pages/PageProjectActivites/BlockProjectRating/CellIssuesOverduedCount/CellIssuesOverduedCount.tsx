import React from 'react'

import ITemplate from 'components/Table/CellData'
import CellValueValueDin from 'components/Table/templates/CellValueValueDin'

import './CellIssuesOverduedCount.css'

const CellIssuesOverduedCount: typeof ITemplate = ({ row }) => {
  return (
    <CellValueValueDin
      value={row.issues_overdued_count}
      value_din={row.issues_overdued_count_din}
    />
  )
}

export default CellIssuesOverduedCount
