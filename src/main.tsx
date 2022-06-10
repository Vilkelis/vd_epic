import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'

import env from 'constants/env'
import App from 'domain/App'
import { queryClient as client } from 'utils/query'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider {...{ client }}>
        <App />
        {env.reactQueryDevtoolsEnabled && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
