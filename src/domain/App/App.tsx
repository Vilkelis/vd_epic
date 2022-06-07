import React, { FC } from 'react'
import { loadMessages, locale } from 'devextreme/localization'
import ruMessages from 'devextreme/localization/messages/ru.json'

import PageProjectActivities from './pages/PageProjectActivites'
import Layout from './Layout'

import 'devextreme/dx.generic.vd_epic_dashboard.css'
import './Fonts.css'
import './App.css'

const App: FC = () => {
  loadMessages(ruMessages)
  locale('ru')

  return (
    <Layout>
      <PageProjectActivities />
    </Layout>
  )
}

export default App
