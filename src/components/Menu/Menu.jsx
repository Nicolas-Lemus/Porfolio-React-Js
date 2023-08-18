import React from "react";
import { Link } from "react-router-dom";
import './Menu.scss';

function Menu() {

  return (
    <section className="navbar">
      <nav>
            <ul>
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/sobreMi" >Sobre Mi</Link></li>
                <li><Link to="/proyectos" >Proyectos</Link></li>
                <li><Link to="/certificados" >Certificados</Link></li>
                <li><Link to="/contacto" >Contacto</Link></li>
            </ul>
        </nav>
    </section>
        
  );
}

export default Menu;