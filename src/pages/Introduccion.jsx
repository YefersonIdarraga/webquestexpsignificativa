import React from 'react'
import Menu from '../components/menu'
import CarruselIntroduccion from '../components/CarruselIntroduccion'


const Introduccion = () => {
  return (
    <>
    <section>
        <Menu />
    </section>
        <CarruselIntroduccion />
    <section className='contenedor'>
      <h1 className='ctitulo cintro'>Introducción</h1>
    </section>
    </>
  )
}

export default Introduccion