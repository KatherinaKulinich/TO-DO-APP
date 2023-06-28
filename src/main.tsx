import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App'
import './index.css'
import store from './rdx/store'
import { ThemeProvider } from './ThemeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
