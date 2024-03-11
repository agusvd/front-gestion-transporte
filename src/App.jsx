import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// inicio de sesion
import PageLogin from './pages/login/PageLogin'
// dashboard
import Home from './pages/dashboard/home/Home'
import NuevoTrabajador from './pages/dashboard/trabajadores/NuevoTrabajador'
import Calendario from './pages/dashboard/calendario/Calendario'
import Gestion from './pages/dashboard/Gestion/Gestion'
import FormGestion from './pages/dashboard/Gestion/FormGestion'
import EditarTrabajador from './pages/dashboard/trabajadores/EditarTrabajador'
// conductor
import InicioConductor from './pages/conductor/InicioConductor'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLogin />} />
        <Route path='/dashboard' element={<Home />} />
        <Route path='/dashboard/nuevo-trabajador' element={<NuevoTrabajador />} />
        <Route path='/dashboard/editar-trabajador/:id' element={<EditarTrabajador/>} />
        <Route path='/dashboard/calendario' element={<Calendario />} />
        <Route path='/dashboard/gestion' element={<Gestion />} />
        <Route path='/dashboard/gestion-traslado/:id' element={<FormGestion />} />
        <Route path='/conductor/inicio' element={<InicioConductor />} />
        <Route path='/dashboard/*' element={<h1>404</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
