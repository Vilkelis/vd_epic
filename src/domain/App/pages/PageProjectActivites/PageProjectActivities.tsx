import React, { FC } from 'react'

import Panel from 'components/Panel'
import BlockProjectActivities from './BlockProjectActivites'
import BlockProjectPrograms from './BlockProjectPrograms'
import BlockProjectRating from './BlockProjectRating'

import './PageProjectActivities.css'

const PageProjectActivities: FC = () => {
  return (
    <>
      <div className="col-left">
        <Panel title="Проектная деятельность" panel_class="width-small">
          <BlockProjectActivities />
        </Panel>
      </div>
      <div className="col-right">
        <div className="vertical-container">
          <Panel
            title="Программы проектов по типу контракта"
            panel_class="width-large"
          >
            <BlockProjectPrograms />
          </Panel>
          <Panel
            title="Рейтинг Программ-проектов по качеству реализации"
            panel_class="width-large"
          >
            <BlockProjectRating />
          </Panel>
        </div>
      </div>
    </>
  )
}

export default PageProjectActivities
