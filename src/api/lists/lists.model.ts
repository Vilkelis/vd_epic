export type ListItemModel = {
  id: number
  name: string
}

export type ListsModel = {
  dinamic_date_type: Array<ListItemModel>
  program: Array<ListItemModel>
  manager: Array<ListItemModel>
  curator: Array<ListItemModel>
  curator_mc: Array<ListItemModel>
  responsible_mc: Array<ListItemModel>
  group_pp: Array<ListItemModel>
  customer: Array<ListItemModel>
  contract_type: Array<ListItemModel>
}
