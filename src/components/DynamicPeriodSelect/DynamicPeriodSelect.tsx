import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import DateBox from 'devextreme-react/date-box'
import SelectBox from 'devextreme-react/select-box'
import {
  changeDynamicDateAction,
  changeDynamicPeriodTypeAction,
} from 'store/action-creators/filter'
import { useTypedSelector } from 'store/hooks/useTypedSelector'
import { filterStateToSearchParams } from 'store/reducers/filterReducer'

import { DynamicPeriodSelectItems } from 'constants/constants'
import { DynamicPeriodKind } from 'utils/enums'
import { formatDateToParam } from 'utils/tools'

import './DynamicPeriodSelect.css'

const DynamicPeriodSelect: FC = () => {
  const state = useTypedSelector((rootState) => rootState.filter)
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const params: any = {}

    params.dynamic_period_kind = state.dynamicPeriodKind.toString()

    if (state.dynamicPeriodKind === DynamicPeriodKind.to_date) {
      params.dynamic_date = formatDateToParam(state.dynamicDate)
    }
    navigator({
      pathname: location.pathname,
      search: filterStateToSearchParams(state),
    })
  }, [state])

  const handleSelectBoxValueChange = (e: any) => {
    dispatch(changeDynamicPeriodTypeAction(e.value))
  }

  const handleDateBoxValueChange = (e: any) => {
    dispatch(changeDynamicDateAction(e.value))
  }

  return (
    <div className="dynamic-select-box">
      <SelectBox
        className="select-box"
        dataSource={DynamicPeriodSelectItems}
        valueExpr="id"
        displayExpr="name"
        value={state.dynamicPeriodKind}
        onValueChanged={handleSelectBoxValueChange}
      />
      {state.dynamicPeriodKind === DynamicPeriodKind.to_date ? (
        <DateBox
          className="date"
          type="date"
          value={state.dynamicDate}
          onValueChanged={handleDateBoxValueChange}
        />
      ) : null}
    </div>
  )
}

export default DynamicPeriodSelect
