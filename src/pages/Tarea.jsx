import React from 'react'
import Menu from '../components/menu'

const Tarea = () => {
  const evidencias = [
    "Comprensión del concepto de inclusión digital.",
    "Identificación de las características de los Recursos Educativos Abiertos (REA).",
    "Reconocimiento de CREA como experiencia significativa de educación abierta y enseñanza STEM.",
    "Relación entre los principios de CREA y la propuesta de Ajedrez Estratégico.",
    "Identificación de posibilidades del ajedrez para desarrollar competencias cognitivas, sociales y ciudadanas.",
    "Incorporación pertinente de herramientas digitales.",
    "Consideración de diferentes condiciones de acceso, participación y aprendizaje.",
    "Una reflexión sobre el papel del docente y del estudiante en ambientes educativos mediados por tecnologías."
  ]

  const productosSugeridos = [
    "Una infografía interactiva",
    "Una presentación digital",
    "Un mapa conceptual",
    "Una secuencia didáctica",
    "Un recurso educativo abierto",
    "Una propuesta de clase de ajedrez mediada por herramientas digitales"
  ]

  return (
    <>
      <section>
        <Menu />
      </section>

      <section className='contenedor'>
        <section className='bannertitulo'>
          <img src="/imagenes/tareabanner.jpeg" alt="banner" />
          <h1 className='ctitulo'>Tarea</h1>
        </section>
        <section className='subcontainer'>
          <p className='parrafo'>
            El propósito de esta WebQuest es que los participantes exploren, analicen, relacionen y diseñen una propuesta educativa que articule los principios de CREA con la enseñanza del ajedrez mediante herramientas digitales.
          </p>
          <h2 className='subtitulo'>Producto final</h2>

          {/* Contenido adaptado del producto final */}
          <div className='contenido-tarea'>
            <p className='parrafo'>
              Al finalizar la WebQuest, cada equipo elaborará una propuesta de experiencia educativa inclusiva basada en el ajedrez, que evidencie:
            </p>

            <ul className='lista-evidencias'>
              {evidencias.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className='subtitulo-secundario'>Producto sugerido</h3>
            <p className='parrafo'>El producto podrá presentarse como:</p>

            <ul className='lista-productos'>
              {productosSugeridos.map((producto, index) => (
                <li key={index}>{producto}</li>
              ))}
            </ul>

            <div className='bloque-pregunta'>
              <h3 className='subtitulo-secundario'>Pregunta orientadora</h3>
              <p className='parrafo'>
                La propuesta deberá responder de manera argumentada a la pregunta orientadora:
              </p>
              <blockquote className='pregunta-texto'>
                “¿De qué manera una experiencia como CREA puede inspirar una propuesta de enseñanza del ajedrez que contribuya a la inclusión digital y a la formación ciudadana?”
              </blockquote>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Tarea