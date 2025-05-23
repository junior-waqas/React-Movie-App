import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'

import './css/index.css'; // Global styles applied to the entire app
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
      </MovieProvider>
  </BrowserRouter>
 
  </StrictMode>,
)
