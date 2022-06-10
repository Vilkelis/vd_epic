import React, { FC } from 'react'
import parse from 'html-react-parser'
import BarGauge from 'devextreme-react/bar-gauge'

import './GaugeCell.css'

interface IGaugeCellProps {
  title: string
  value_num: number
  value_percent: number
}

const GaugeCell: FC<IGaugeCellProps> = ({
  title,
  value_num,
  value_percent,
}: IGaugeCellProps) => {
  const values = [value_percent]
  const palette = ['#ED5252']

  return (
    <div className="gauge-cell">
      <div className="gauge-cell-data">
        <div className="gauge-cell-title">{parse(title)} </div>
        <div className="gauge-cell-value">{value_num}</div>
      </div>
      <div className="gauge">
        <BarGauge
          className="gauge-graph"
          backgroundColor="#35516F"
          startValue={0}
          endValue={100}
          relativeInnerRadius={0.8}
          palette={palette}
          values={values}
          geometry={{ endAngle: -90, startAngle: -90 }}
          label={{ visible: false }}
        />
        <div className="gauge-percent">{`${value_percent}%`}</div>
      </div>
    </div>
  )
}

export default GaugeCell
