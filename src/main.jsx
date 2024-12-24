import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import Home from './pages/Home'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>
)
