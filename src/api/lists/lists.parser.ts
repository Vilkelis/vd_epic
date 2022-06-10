import { ListsDto } from './lists.dto'
import { ListsModel } from './lists.model'

export const ListsParser = (dto: ListsDto): ListsModel => {
  return dto.data
}
