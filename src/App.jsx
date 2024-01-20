import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// inicio de sesion
import PageLogin from './pages/login/PageLogin'
// dashboard
import Dashboard from './pages/dashboard/home/Layout'
import Employees from './pages/dashboard/employees/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/trabajadores" element={<Employees />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
