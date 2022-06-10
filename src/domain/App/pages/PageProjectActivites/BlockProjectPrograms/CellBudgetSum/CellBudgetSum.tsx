import React from 'react'
import { formatReportMoneyInt } from 'utils/tools'

import ITemplate from 'components/Table/CellData'

import './CellBudgetSum.css'

const CellBudgerSum: typeof ITemplate = ({ row }) => {
  return (
    <>
      <span className="budget-sum">
        {row ? formatReportMoneyInt(row.budget_sum) : ''}
      </span>
      <span className="budget-sum-caption">млн. руб.</span>
    </>
  )
}

export default CellBudgerSum
