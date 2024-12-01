import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './Componentes/Login.tsx'
import { Bandeja } from './Componentes/Bandeja.tsx'
import { Perfil } from './Componentes/Perfil.tsx'
import { Gastos } from './Componentes/Gastos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/bandeja' element={<Bandeja/>} />
        <Route path='/perfil' element={<Perfil/>} />
        <Route path='/gastos' element={<Gastos/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
