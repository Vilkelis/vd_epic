import React, { FC } from 'react'

import Filter from './Filter'

const Filters: FC = () => {
  return (
    <div className="filters">
      <Filter caption="По состоянию на:" />
      <Filter caption="Отчетный период" />
      <Filter caption="Программы проектов" />
      <Filter caption="Руководитель" />
      <Filter caption="Куратор НИИ «Восход»" />
      <Filter caption="Курирующий зам. МЦ" />
      <Filter caption="Ответственный от МЦ" />
      <Filter caption="Группа ПП" />
      <Filter caption="Заказчик" />
      <Filter caption="Тип контракта" />
    </div>
  )
}

export default Filters
