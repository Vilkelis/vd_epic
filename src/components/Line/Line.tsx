import React, { FC } from 'react'

import './Line.css'

import {LineKind} from 'tools/enums'

interface ILineProps {
  line_kind: LineKind
  children?: React.ReactNode
}

const Line: FC<ILineProps> = ({ line_kind, children }: ILineProps) => {
  return <div className={`width-1 ${line_kind}`}>{children}</div>
}

export default Line
