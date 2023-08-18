import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from '../Pages/Inicio'
import SobreMi from '../Pages/SobreMi'
import Proyectos from '../Pages/Proyectos'
import Certificados from '../Pages/Certificados'
import Contactos from '../Pages/Contactos'

const MainRouter = () => {
  return (
    <BrowserRouter>
        {/* <Menu/> */}
            <Routes>
                <Route exact path='/' element={<Inicio/>} />
                <Route exact path='/sobreMi' element={<SobreMi/>} />
                <Route exact path='/proyectos' element={<Proyectos/>} />
                <Route exact path='/certificados' element={<Certificados/>} />
                <Route exact path='/contacto' element={<Contactos/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default MainRouter