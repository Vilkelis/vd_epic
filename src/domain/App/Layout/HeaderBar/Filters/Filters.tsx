import React, { FC } from 'react'

import DynamicPeriodSelect from 'components/DynamicPeriodSelect'
import Filter from './Filter'

const Filters: FC = () => {
  return (
    <div className="filters">
      <Filter caption="Отчетный период:">
        <DynamicPeriodSelect />
      </Filter>
    </div>
  )
}

export default Filters
