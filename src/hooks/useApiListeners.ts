import { apiConfigs, ApiQueryKey } from 'api'

type ApiListener = (eventObj?: any) => void

const useApiListeners = (props: {
  queryKey: ApiQueryKey
  queryKeyParams?: (string | number)[]
}): { onError: ApiListener; onSuccess: ApiListener } => {
  const { queryKey, queryKeyParams = [] } = props

  const loggerKeyPrefix = `API.${
    queryKey + (queryKeyParams.length ? '.' : '') + queryKeyParams.join('.')
  }`

  return {
    onError(eventObj?: any) {
      console.log(eventObj)
      console.log(`ERROR: ${loggerKeyPrefix}.error`)
    },

    onSuccess(eventObj?: any) {
      console.log(eventObj)
      console.log(`OK: ${loggerKeyPrefix}.success`)
    },
  }
}

export default useApiListeners
