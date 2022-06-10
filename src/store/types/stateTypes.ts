import { DynamicPeriodKind } from 'utils/enums'

export interface FilterState {
  dynamicPeriodKind: DynamicPeriodKind
  dynamicDate?: Date
}
