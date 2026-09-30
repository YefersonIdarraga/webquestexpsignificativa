import React from 'react'
import Menu from '../components/menu'

const Proceso = () => {
  return (
    <>
      <section>
        <Menu />
      </section>
      <section className='contenedor'>
        <section className='bannertitulo'>
          <img src="/imagenes/procesobanner.jpeg" alt="banner" />
          <h1 className='ctitulo'>Proceso</h1>
        </section>
      </section>
    </>
  )
}

export default Proceso