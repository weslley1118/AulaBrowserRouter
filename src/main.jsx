import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HOME from './footer/index' 
import ListarProduos from './ListarProdutos/index'
import Oferta from './Header/index'
import Link from './linkage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<Link/>} path='/'/>
    <Route element={<HOME/>} path='/home'/>
    <Route element={<ListarProduos/>} path='/lista'/>
    <Route element={<Oferta/>} path='/oferta'/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



