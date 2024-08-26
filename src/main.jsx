import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HOME from './home/index' 
import Prod from './Prod/estoque'
import Oferta from './Ofertas/index'
import Link from './linkage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<Link/>} path='/'/>
    <Route element={<HOME/>} path='/home'/>
    <Route element={<Prod/>} path='/estoque'/>
    <Route element={<Oferta/>} path='/oferta'/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



