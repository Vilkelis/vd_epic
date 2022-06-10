import { DynamicPeriodKind } from 'utils/enums'

export enum FilterActionKind {
  CHANGE_DYNAMIC_PERIOD_KIND = 'CHANGE_DYNAMIC_PERIOD_KIND',
  CHANGE_DYNAMIC_DATE = 'CHANGE_DYNAMIC_DATE',
}

export interface ChangeDynamicPeriodKindAction {
  type: FilterActionKind.CHANGE_DYNAMIC_PERIOD_KIND
  payload: DynamicPeriodKind
}

export interface ChangeDynamicDateAction {
  type: FilterActionKind.CHANGE_DYNAMIC_DATE
  payload: Date
}

export type FilterAction =
  | ChangeDynamicPeriodKindAction
  | ChangeDynamicDateAction
