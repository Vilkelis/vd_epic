import { AxiosApiConfig } from 'utils/axios'

const apiQueryKeys = ['lists'] as const
export type ApiQueryKey = typeof apiQueryKeys[number]

type ApiConfig = AxiosApiConfig & {
  url: string
  mock: { timeout?: number }
}

const defaultMockConfig = {
  enabled: false,
  timeout: 1000,
}

export const apiConfigs: Record<ApiQueryKey, ApiConfig> = {
  lists: {
    mock: { ...defaultMockConfig },
    url: '/dashboard_index/lists',
  },
}
