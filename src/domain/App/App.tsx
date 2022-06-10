import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { loadMessages, locale } from 'devextreme/localization'
import ruMessages from 'devextreme/localization/messages/ru.json'

import Layout from './Layout'
import routes from './routes'

import 'devextreme/dx.generic.vd_epic_dashboard_light.css'
import 'devextreme/theme_customize.css'
import './Fonts.css'
import './App.css'

const App: FC = () => {
  loadMessages(ruMessages)
  locale('ru')

  return (
    <Router>
      <Layout>{routes}</Layout>
    </Router>
  )
}

export default App
