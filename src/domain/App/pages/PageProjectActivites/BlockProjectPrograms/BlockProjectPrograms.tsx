import React, { FC } from 'react'
import { TableKind } from 'utils/enums'

import DataBlock from 'components/DataBlock'
import Table from 'components/Table'
import Row from '../../../../../components/Row'
import CellBudgerSum from './CellBudgetSum'

const data = [
  {
    at_conclusion_count: 4,
    at_execution_count: 23,
    at_termination_count: 0,
    budget_sum: 4530,
    contract_type: 'ПП по субсидии',
    total_count: 27,
  },
  {
    at_conclusion_count: 5,
    at_execution_count: 20,
    at_termination_count: 0,
    budget_sum: 5412,
    contract_type: 'ПП по госконтракту',
    total_count: 25,
  },
  {
    at_conclusion_count: 0,
    at_execution_count: 10,
    at_termination_count: 2,
    budget_sum: 750,
    contract_type: 'ПП по договорам',
    total_count: 12,
  },
  {
    at_conclusion_count: 0,
    at_execution_count: 7,
    at_termination_count: 0,
    budget_sum: 104,
    contract_type: 'Внутренних проектов',
    total_count: 7,
  },
]

const columns = [
  { allow_sort: false, caption: 'Тип контракта', field: 'contract_type' },
  { allow_sort: false, caption: 'Всего', field: 'total_count' },
  {
    allow_sort: true,
    caption: 'На исполнении',
    field: 'at_execution_count',
    sort: true,
  },
  {
    allow_sort: true,
    caption: 'На заключении',
    field: 'at_conclusion_count',
    sort: false,
  },
  {
    allow_sort: true,
    caption: 'На расторжении',
    field: 'at_termination_count',
    sort: false,
  },
  {
    allow_sort: true,
    caption: 'Общая сумма<br>финансирования',
    field: 'budget_sum',
    sort: false,
    template: CellBudgerSum,
  },
]

const BlockProjectPrograms: FC = () => {
  return (
    <DataBlock add_class="project-activities">
      <Row add_class="offset" />
      <Row>
        <Table columns={columns} data={data} table_kind={TableKind.striped} />
      </Row>
    </DataBlock>
  )
}

export default BlockProjectPrograms
