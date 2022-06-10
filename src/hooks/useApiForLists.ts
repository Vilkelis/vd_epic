import { useQuery, UseQueryResult } from 'react-query'

import { ApiQueryKey } from 'api'
import listsApi from 'api/lists'
import { ListsModel } from 'api/lists/lists.model'
import useApiListeners from 'hooks/useApiListeners'

type Hook = () => UseQueryResult<ListsModel, Error>
export const useApiForLists: Hook = () => {
  const queryKey: ApiQueryKey = 'lists'
  const { onError, onSuccess } = useApiListeners({ queryKey })

  return useQuery(queryKey, listsApi.fetchData, {
    onError,
    onSuccess,
  }) as UseQueryResult<ListsModel, Error>
}
