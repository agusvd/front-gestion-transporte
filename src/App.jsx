import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// inicio de sesion
import PageLogin from './pages/login/PageLogin'
// dashboard
import Layout from './pages/dashboard/home/layout'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/dashboard" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
