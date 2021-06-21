import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import App from './App'
import { ProvideCommonProps } from './hooks'

ReactDOM.render(
  <React.StrictMode>
    <ProvideCommonProps>
      <App />
    </ProvideCommonProps>
  </React.StrictMode>,
  document.getElementById('root')
)
