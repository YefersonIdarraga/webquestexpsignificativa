import React from 'react'
import Menu from '../components/menu'
import Fichajes from '../components/Fichajes'

const Recursos = () => {
  return (
    <>
      <section>
        <Menu />
      </section>
      <section className='contenedor'>
        <section className='bannertitulo'>
          <img src="/imagenes/recursosbanner.jpeg" alt="banner" />
          <h1 className='ctitulo'>Recursos</h1>
        </section>
      </section>
      <Fichajes />
    </>
  )
}

export default Recursos