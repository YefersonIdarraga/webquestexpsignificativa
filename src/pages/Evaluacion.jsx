import React from 'react'
import Menu from '../components/menu'

const Evaluacion = () => {
  return (
    <>
      <section>
        <Menu />
      </section>
      <section className='contenedor'>
        <section className='bannertitulo'>
          <img src="/imagenes/evaluacionbanner.jpeg" alt="banner" />
          <h1 className='ctitulo'>Evaluación</h1>
        </section>
      </section>
    </>
  )
}

export default Evaluacion