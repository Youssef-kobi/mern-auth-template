import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AuthContextProvider } from './store/authContext'

ReactDOM.render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>,
  document.getElementById('root')
)
