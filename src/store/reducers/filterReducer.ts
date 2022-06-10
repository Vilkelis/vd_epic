import { createSearchParams } from 'react-router-dom'
import { FilterAction, FilterActionKind } from 'store/types/actionTypes'
import { FilterState } from 'store/types/stateTypes'

import { DynamicPeriodKind } from 'utils/enums'
import { formatDateToParam, weekOffsetFromToday } from 'utils/tools'

const initialState: FilterState = {
  dynamicDate: undefined,
  dynamicPeriodKind: DynamicPeriodKind.week,
}

export const filterReducer = (
  state = initialState,
  action: FilterAction,
): FilterState => {
  switch (action.type) {
    case FilterActionKind.CHANGE_DYNAMIC_PERIOD_KIND:
      if (action.payload === DynamicPeriodKind.to_date) {
        return {
          ...state,
          dynamicDate: state.dynamicDate || weekOffsetFromToday(),
          dynamicPeriodKind: action.payload,
        }
      }
      return { ...state, dynamicPeriodKind: action.payload }

    case FilterActionKind.CHANGE_DYNAMIC_DATE:
      return { ...state, dynamicDate: action.payload }
    default:
      return { ...state }
  }
}

export const filterStateToSearchParams = (filterState: FilterState): string => {
  const params: any = {}
  params.dynamic_period_kind = filterState.dynamicPeriodKind.toString()

  if (filterState.dynamicPeriodKind === DynamicPeriodKind.to_date) {
    params.dynamic_date = formatDateToParam(filterState.dynamicDate)
  }
  return createSearchParams(params).toString()
}
