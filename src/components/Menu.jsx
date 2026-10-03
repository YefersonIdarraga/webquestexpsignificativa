import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const secciones = [
    { nombre: 'Introducción', ruta: '/' },
    { nombre: 'Tarea', ruta: '/tarea' },
    { nombre: 'Proceso', ruta: '/proceso' },
    { nombre: 'Recursos', ruta: '/recursos' },
    { nombre: 'Evaluación', ruta: '/evaluacion' },
    { nombre: 'Conclusión', ruta: '/conclusion' },
    { nombre: 'Créditos', ruta: '/creditos' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    // Desplaza la página al inicio (coordenadas x:0, y:0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Puedes cambiar 'smooth' por 'instant' si prefieres que suba de golpe
    });
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span>Experiencia significativa en educación digital</span>
        {/* Botón para móviles */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu} 
          aria-label="Abrir menú"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <ul className={`nav-list ${isOpen ? 'is-open' : ''}`}>
        {secciones.map((seccion, index) => (
          <li key={index} className="nav-item">
            <NavLink 
              to={seccion.ruta} 
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={closeMenu}
            >
              {seccion.nombre}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;