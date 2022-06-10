import React from 'react'
import { ColorKind } from 'utils/enums'

import ITemplate from 'components/Table/CellData'
import CellValueValue from 'components/Table/templates/CellValueValue'

import './CellEscalationCount.css'

const CellEscalationCount: typeof ITemplate = ({ row }) => {
    return (
        <CellValueValue
            value1={row.escalation_count}
            value2={row.escalation_current_count}
            color_kind={ColorKind.colorBrown}
        />
    )
}

export default CellEscalationCount