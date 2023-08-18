import React from 'react'
import Perfil2 from '../../Images/FOTO-PERFIL - copia (2)_1.png'
import './_Navbar.scss'

const Navbar = () => {

   return (
      <header>
         <h1>Nicolas Lemus</h1>
         <div className='image'>
            <img src={Perfil2} alt="FotoPerfil" />
         </div>
         <h2>Front-End React Js</h2>
      </header>
   )
}

export default Navbar