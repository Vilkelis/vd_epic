import React from 'react'

import ITemplate from 'components/Table/CellData'

import './CellContractCount.css'

const CellContractCount: typeof ITemplate = ({ row }) => {
    return (
        <div className="name_pp">
            {row.name_pp}
        </div>
    )
}

export default CellContractCount
