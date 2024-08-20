import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HOME from './footer/index' 
import ListarProduos from './ListarProdutos/index'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<HOME/>} path='/home'/>
    <Route element={<ListarProduos/>} path='/lista'/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



