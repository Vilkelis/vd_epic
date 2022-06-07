import React, { FC } from 'react'
import { LineKind } from 'tools/enums'

import Box from 'components/Box'
import ColumnBox from 'components/ColumnBox'
import DataBlock from 'components/DataBlock'
import Line from 'components/Line'
import NumberBox from 'components/NumberBox'
import Row from 'components/Row'
import ColumnProjectActivities from './ColumnProjectActivities'

const data = {
  pp_count: 63,
  pp_no_budget: 10,
  pp_no_budget_din_percent: 16,
  pp_part1: {
    all_count: 26,
    all_count_percent: 49,
    begin_overdued_count: 6,
    begin_overdued_count_din: 1,
    ok_count: 7,
    ok_count_din: 1,
    overdued_count: 12,
    overdued_count_din: 3,
  },
  pp_part2: {
    all_count: 19,
    all_count_percent: 36,
    begin_overdued_count: 4,
    begin_overdued_count_din: 1,
    ok_count: 8,
    ok_count_din: 1,
    overdued_count: 9,
    overdued_count_din: -2,
  },
  pp_part3: {
    all_count: 8,
    all_count_percent: 15,
    begin_overdued_count: 2,
    begin_overdued_count_din: 1,
    ok_count: 6,
    ok_count_din: 1,
    overdued_count: 15,
    overdued_count_din: 2,
  },
  pp_with_budget: 53,
  pp_with_budget_din_percent: 84,
}

const BlockProjectActivities: FC = () => {
  return (
    <DataBlock add_class="project-activities">
      <Row add_class="sub-title">Кол-во программ проектов (ПП)</Row>

      <Row>
        <Box add_class="width-1">
          <NumberBox
            color_class="color-blue"
            number={data.pp_count}
            caption="Всего"
          />
        </Box>

        <Box add_class="width-3">
          <NumberBox
            color_class="color-red"
            number={data.pp_no_budget}
            caption={`(${data.pp_no_budget_din_percent}%)`}
            marker="marker_down_red.svg"
            description="ПП, по которым нет финансирования (нет заключенного контракта или соглашения)"
            description_width="240px"
          />
        </Box>
      </Row>

      <Row>
        <Box add_class="width-1">
          <Row>
            <div className="width-1">
              <NumberBox
                color_class="color-green"
                number={data.pp_with_budget}
                caption={`(${data.pp_with_budget_din_percent}%)`}
                marker="marker_up_green.svg"
                description="ПП, по которым есть финансирование"
                description_width="140px"
              />
            </div>
          </Row>

          <Row>
            <Line line_kind={LineKind.Start} />
          </Row>

          <Row>
            <ColumnBox add_class="width-1">
              <ColumnProjectActivities
                title="До 100 млн"
                data={data.pp_part1}
              />
            </ColumnBox>
            <ColumnBox add_class="width-1">
              <ColumnProjectActivities
                title="От 100 млн
                  <br>до 500 млн"
                data={data.pp_part2}
              />
            </ColumnBox>
            <ColumnBox add_class="width-1">
              <ColumnProjectActivities
                title="Более 500 млн"
                data={data.pp_part3}
              />
            </ColumnBox>
          </Row>

          <Row>
            <Line line_kind={LineKind.End} />
          </Row>
        </Box>
      </Row>
    </DataBlock>
  )
}

export default BlockProjectActivities
