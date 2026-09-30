import React from 'react'
import Menu from '../components/menu'

const Creditos = () => {
  return (
    <>
      <section>
        <Menu />
      </section>
      <section className='contenedor'>
        <section className='bannertitulo'>
          <img src="/imagenes/creditosbanner.jpeg" alt="banner" />
          <h1 className='ctitulo'>Créditos</h1>
        </section>
      </section>
    </>
  )
}

export default Creditos