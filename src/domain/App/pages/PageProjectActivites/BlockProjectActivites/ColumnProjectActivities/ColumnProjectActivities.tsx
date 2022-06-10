import React, { FC } from 'react'

import GaugeCell from 'components/GaugeCell'
import NumberBox from 'components/NumberBox'

import './ColumnProjectActivities.css'
import {MarkerKind} from 'utils/enums'

interface IColumnProjectActivitiesProps {
  title: string
  data: {
    all_count: number
    all_count_percent: number
    begin_overdued_count: number
    overdued_count: number
    overdued_count_din: number
    ok_count: number
    ok_count_din: number
  }
}

const ColumnProjectActivities: FC<IColumnProjectActivitiesProps> = ({
  title,
  data,
}: IColumnProjectActivitiesProps) => {
  const number = data.overdued_count
  let caption = ''
  let colorClassCaption = ''
  let marker = undefined
  if (data.overdued_count_din > 0) {
    caption = `(+${data.overdued_count_din})`
    colorClassCaption = 'color-red'
    marker = MarkerKind.marker_down_red
  } else if (data.overdued_count_din < 0) {
    caption = `(${data.overdued_count_din})`
    colorClassCaption = 'color-green'
    marker = MarkerKind.marker_up_green
  }

  const numberRed = data.ok_count
  const captionRed = ''
  let colorClassCaptionRed = ''
  let markerRed = undefined
  if (data.ok_count_din > 0) {
    colorClassCaptionRed = 'color-green'
    markerRed =  MarkerKind.marker_up_green
  } else if (data.ok_count_din < 0) {
    colorClassCaptionRed = 'color-red'
    markerRed =  MarkerKind.marker_down_red
  }

  return (
    <>
      <div className="sub-box">
        <GaugeCell
          title={title}
          value_num={data.all_count}
          value_percent={data.all_count_percent}
        />
      </div>
      <div className="sub-box color-red">
        <NumberBox
          color_class="color-red"
          color_class_caption={colorClassCaption}
          number={number}
          caption={caption}
          marker={marker}
          description="ПП, в которых есть контракт/субсидия с просроченными этапами"
          description_width="200px"
          small
        />
      </div>
      <div className="sub-box color-yellow">
        <NumberBox
          color_class="color-yellow"
          number={data.begin_overdued_count}
          description="ПП, по которым есть контракты/субсидии с датой завершения этапов в ближайшие 7 дней"
          description_width="200px"
          small
        />
      </div>
      <div className="sub-box color-green">
        <NumberBox
          color_class="color-green"
          color_class_caption={colorClassCaptionRed}
          number={numberRed}
          caption={captionRed}
          marker={markerRed}
          description="ПП по которым есть контракты/субсидии с закрытыми этапами за 7 дней (отчетный период)"
          description_width="200px"
          small
        />
      </div>
    </>
  )
}

export default ColumnProjectActivities
