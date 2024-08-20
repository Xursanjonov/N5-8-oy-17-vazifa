import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Loader from './components/loader/index.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'number-brm'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
  // </React.StrictMode>,
)
