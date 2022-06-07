import React, { FC } from 'react'
import DateBox from 'devextreme-react/date-box'
import SelectBox from 'devextreme-react/select-box'

import Filter from './Filter'

const Filters: FC = () => {
  return (
    <div className="filters">
      <Filter caption="По состоянию на:">
        <DateBox type="date" />
      </Filter>
      <Filter caption="Отчетный период">
        <SelectBox />
      </Filter>
      <Filter caption="Программы проектов">
        <SelectBox />
      </Filter>
      <Filter caption="Руководитель">
        <SelectBox />
      </Filter>
      <Filter caption="Куратор НИИ «Восход»">
        <SelectBox />
      </Filter>
      <Filter caption="Курирующий зам. МЦ">
        <SelectBox />
      </Filter>
      <Filter caption="Ответственный от МЦ">
        <SelectBox />
      </Filter>
      <Filter caption="Группа ПП">
        <SelectBox />
      </Filter>
      <Filter caption="Заказчик">
        <SelectBox />
      </Filter>
      <Filter caption="Тип контракта">
        <SelectBox />
      </Filter>
    </div>
  )
}

export default Filters
