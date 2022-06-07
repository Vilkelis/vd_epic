import React from 'react'

import ITemplate from 'components/Table/CellData'

import './CellNamePp.css'

const CellNamePp: typeof ITemplate = ({ row }) => {
    return (
        <div className="name_pp">
            {row.name_pp}
        </div>
    )
}

export default CellNamePp
