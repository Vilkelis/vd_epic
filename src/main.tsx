import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from 'domain/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
