import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PageFinance from '../pages/PageFinance'
import PageProjectActivities from '../pages/PageProjectActivites'
import PagePurchases from '../pages/PagePurchases'
import PageRatingDepartmentDirectors from '../pages/PageRatingDepartmentDirectors'
import PageRatingViceDirectors from '../pages/PageRatingViceDirectors'
import PageRatingViceMinisters from '../pages/PageRatingViceMinisters'
import PageStaff from '../pages/PageStaff'

const routes = (
  <Routes>
    <Route path="/" element={<PageProjectActivities />} />
    <Route
      path="/rating-vice-directors"
      element={<PageRatingViceDirectors />}
    />
    <Route
      path="/rating-department-directors"
      element={<PageRatingDepartmentDirectors />}
    />
    <Route
      path="/rating-vice-ministers"
      element={<PageRatingViceMinisters />}
    />
    <Route path="/staff" element={<PageStaff />} />
    <Route path="/finance" element={<PageFinance />} />
    <Route path="/purchases" element={<PagePurchases />} />
  </Routes>
)

export default routes
