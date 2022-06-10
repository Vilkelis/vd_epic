import { FC } from 'react'
import { TableKind } from 'utils/enums'

import Table from 'components/Table'
import CellContractCount from './CellContractCount'
import CellEscalationCount from './CellEscalationCount'
import CellIssuesOverduedCount from './CellIssuesOverduedCount'
import CellNamePp from './CellNamePp'
import CellVersionCount from './CellVersionCount'
import CellWorkloadPercent from './CellWorkloadPercent'

const commonColumns = [
  {
    allow_sort: false,
    caption: 'Наименование ПП',
    field: 'name_pp',
    template: CellNamePp,
  },
  {
    allow_sort: true,
    caption: 'Всего контрактов/<br>просрочено',
    field: 'contract_count',
    sort: true,
    template: CellContractCount,
  },
  {
    allow_sort: true,
    caption: 'Всего этапов/<br>просрочено',
    field: 'version_count',
    sort: false,
    template: CellVersionCount,
  },
  {
    allow_sort: true,
    caption: 'Просроченных<br> задач',
    field: 'issues_overdued_count',
    sort: false,
    template: CellIssuesOverduedCount,
  },
  {
    allow_sort: true,
    caption: 'Загрузка<br> сотрудников',
    field: 'workload_percent',
    sort: false,
    template: CellWorkloadPercent,
  },
  {
    allow_sort: true,
    caption: 'Всего эскалаций/<br><span class="color-brown">текущие</span>',
    field: 'workload_percent',
    sort: false,
    template: CellEscalationCount,
  },
]

const table1 = {
  columns: commonColumns,
  data: [
    {
      contract_count: 2,
      contract_overdued_count: 1,
      escalation_count: 0,
      escalation_current_count: 0,
      issues_overdued_count: 5,
      issues_overdued_count_din: 2,
      name_pp: 'ЕИСУКС',
      version_count: 5,
      version_overdued_count: 3,
      workload_percent: 20,
      workload_percent_din: 5,
    },
    {
      contract_count: 2,
      contract_overdued_count: 1,
      escalation_count: 1,
      escalation_current_count: 1,
      issues_overdued_count: 10,
      issues_overdued_count_din: -4,
      name_pp: 'СКЗИ РГ',
      version_count: 5,
      version_overdued_count: 3,
      workload_percent: 30,
      workload_percent_din: 10,
    },
    {
      contract_count: 3,
      contract_overdued_count: 2,
      escalation_count: 2,
      escalation_current_count: 1,
      issues_overdued_count: 7,
      issues_overdued_count_din: 5,
      name_pp: 'ГИС ЖКХ',
      version_count: 6,
      version_overdued_count: 1,
      workload_percent: 40,
      workload_percent_din: 8,
    },
  ],
}

const table2 = {
  columns: commonColumns,
  data: [
    {
      contract_count: 3,
      contract_overdued_count: 2,
      escalation_count: 0,
      escalation_current_count: 0,
      issues_overdued_count: 23,
      issues_overdued_count_din: 7,
      name_pp: 'ФГИС «РЕЕСТРЫ ПО»',
      version_count: 7,
      version_overdued_count: 4,
      workload_percent: 28,
      workload_percent_din: 15,
    },
    {
      contract_count: 3,
      contract_overdued_count: 1,
      escalation_count: 1,
      escalation_current_count: 0,
      issues_overdued_count: 14,
      issues_overdued_count_din: -4,
      name_pp: 'ФГИС ЕРКНМ',
      version_count: 5,
      version_overdued_count: 2,
      workload_percent: 10,
      workload_percent_din: 5,
    },
    {
      contract_count: 4,
      contract_overdued_count: 2,
      escalation_count: 5,
      escalation_current_count: 2,
      issues_overdued_count: 10,
      issues_overdued_count_din: 5,
      name_pp: 'ФГИСУ ГЕОП',
      version_count: 4,
      version_overdued_count: 1,
      workload_percent: 42,
      workload_percent_din: 11,
    },
  ],
}

const table3 = {
  columns: commonColumns,
  data: [
    {
      contract_count: 8,
      contract_overdued_count: 4,
      escalation_count: 1,
      escalation_current_count: 0,
      issues_overdued_count: 40,
      issues_overdued_count_din: 30,
      name_pp: 'ТОР КНД',
      version_count: 12,
      version_overdued_count: 5,
      workload_percent: 35,
      workload_percent_din: 7,
    },
    {
      contract_count: 2,
      contract_overdued_count: 1,
      escalation_count: 3,
      escalation_current_count: 2,
      issues_overdued_count: 13,
      issues_overdued_count_din: -8,
      name_pp: 'ГИС ТОР СЭД',
      version_count: 4,
      version_overdued_count: 3,
      workload_percent: 43,
      workload_percent_din: -16,
    },
    {
      contract_count: 17,
      contract_overdued_count: 6,
      escalation_count: 4,
      escalation_current_count: 1,
      issues_overdued_count: 8,
      issues_overdued_count_din: 3,
      name_pp: 'ГАС "ВЫБОРЫ"',
      version_count: 6,
      version_overdued_count: 2,
      workload_percent: 57,
      workload_percent_din: 22,
    },
  ],
}

const BlockProjectRating: FC = () => {
  return (
    <div className="data-block">
      <div className="row sub-title sub-title-small">
        (ТОП-3 с наибольшим количеством просроченных задач и с наименьшей
        загруженностью сотрудников (участников проекта) по группам)
      </div>
      <div className="row big-offset">
        <div className="box width-1 box-with-header">
          <div className="header">До 100 млн</div>
          <Table
            columns={table1.columns}
            data={table1.data}
            table_kind={TableKind.lined}
          />
        </div>
      </div>
      <div className="row big-offset">
        <div className="box width-1 box-with-header">
          <div className="header">От 100 млн до 500 млн</div>
          <Table
            columns={table2.columns}
            data={table2.data}
            table_kind={TableKind.lined}
          />
        </div>
      </div>
      <div className="row">
        <div className="box width-1 box-with-header">
          <div className="header">Более 500 млн</div>
          <Table
            columns={table3.columns}
            data={table3.data}
            table_kind={TableKind.lined}
          />
        </div>
      </div>
    </div>
  )
}

export default BlockProjectRating
