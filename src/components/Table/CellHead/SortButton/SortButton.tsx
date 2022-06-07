import React, { FC } from 'react'

import './SortButton.css'
import marker_sort_filled from 'assets/icons/marker_sort_filled.svg'
import marker_sort from 'assets/icons/marker_sort.svg'

interface ISortButtonProps {
  sort?: boolean
}

const SortButton: FC<ISortButtonProps> = ({ sort }: ISortButtonProps) => {
  return (
    <div className="cell-head-sort">
      <img
        src={sort ? marker_sort_filled : marker_sort}
        alt="Сортировка"
        width="12"
        height="12"
      />
    </div>
  )
}

export default SortButton
