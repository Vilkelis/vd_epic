import { AxiosInstance, AxiosResponse } from 'axios'

import { apiConfigs } from 'api/config'
import { getAxiosInstance } from 'utils/axios'
import { ListsDto } from './lists.dto'
import { ListsModel } from './lists.model'
import { ListsParser } from './lists.parser'

const listsApi = Object.freeze({
  async fetchData(): Promise<ListsModel> {
    const { url } = apiConfigs.lists
    const axiosInstance: AxiosInstance = getAxiosInstance(apiConfigs.lists!)

    const response: AxiosResponse<ListsDto> = await axiosInstance.get(url)
    const data = ListsParser(response.data)
    return data
  },
})

export default listsApi
