import React, { FC } from 'react'

import './NumberBox.css'

interface INumberBoxProps {
  number: number
  caption?: string
  marker?: string
  description?: string
  description_width?: string
  color_class?: string
  color_class_caption?: string
  small?: boolean
}

const NumberBox: FC<INumberBoxProps> = ({
  number,
  caption,
  marker,
  description,
  description_width,
  color_class,
  color_class_caption,
  small,
}: INumberBoxProps) => {
  let markerObj = null
  let descriptionObj = null

  if (marker) {
    const markerSize = small ? 12 : 22
    markerObj = (
      <img
        src={`assets/icons/${marker}`}
        alt=""
        width={markerSize}
        height={markerSize}
      />
    )
  }
  if (description) {
    let styleDiv
    if (description_width) {
      styleDiv = {
        maxWidth: description_width,
      }
    }
    descriptionObj = (
      <div
        className={`description-block ${color_class || ''}`}
        style={styleDiv}
      >
        {description}
      </div>
    )
  }

  return (
    <div
      className={`number-box ${small ? 'number-box-small' : ''} ${color_class}`}
    >
      <div className="number-block">
        <span className="number">{number}</span>
        <span className={`text ${color_class_caption || color_class || ''}`}>
          {caption || ''}
          {markerObj}
        </span>
      </div>
      {descriptionObj}
    </div>
  )
}

export default NumberBox
