import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageInicio from './components/pages/PageInicio'
import PageLogin from './components/pages/PageLogin'
import PageTransporte from './components/pages/PageTransporte'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLogin/>} />
          <Route path="/inicio" element={<PageInicio/>} />
          <Route path="/transporte" element={<PageTransporte />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
