import {
  ChangeDynamicDateAction,
  ChangeDynamicPeriodKindAction,
  FilterActionKind,
} from 'store/types/actionTypes'

import { DynamicPeriodKind } from 'utils/enums'

export const changeDynamicPeriodTypeAction = (
  dynamicPeriodKind: DynamicPeriodKind,
): ChangeDynamicPeriodKindAction => {
  return {
    payload: dynamicPeriodKind,
    type: FilterActionKind.CHANGE_DYNAMIC_PERIOD_KIND,
  }
}

export const changeDynamicDateAction = (
  dynamicDate: Date,
): ChangeDynamicDateAction => {
  return { payload: dynamicDate, type: FilterActionKind.CHANGE_DYNAMIC_DATE }
}
