import React from 'react'
import Menu from '../components/menu'

const Conclusion = () => {
  return (
    <>
      <section>
        <Menu />
      </section>
      
      <section className='contenedor'>
        <section className='bannertitulo'>
          <img src="/imagenes/conclusionbanner.jpeg" alt="banner" />
          <h1 className='ctitulo'>Conclusión</h1>
        </section>

        <div className="conclusion-contenido">
          {/* Bloques principales de contenido */}
          <div className="tarjeta-conclusion">
            <p>
              La exploración de <strong>CREA</strong> permite comprender que los Recursos Educativos Abiertos pueden constituirse en una alternativa para ampliar las posibilidades de acceso, adaptación, intercambio y construcción de conocimiento. Su propuesta combina recursos educativos con metodologías que buscan favorecer experiencias de aprendizaje activas e inclusivas.
            </p>
          </div>

          <div className="tarjeta-conclusion">
            <p>
              Al relacionar esta experiencia con <strong>Ajedrez Estratégico</strong>, se evidencia que la inclusión digital no depende exclusivamente de incorporar tecnología a una actividad educativa. Lo fundamental es preguntarse para qué se utiliza, quiénes pueden participar, qué posibilidades de aprendizaje genera y cómo puede contribuir al desarrollo de capacidades para actuar en sociedad.
            </p>
          </div>

          <div className="tarjeta-conclusion">
            <p>
              El ajedrez ofrece un escenario pedagógico particularmente interesante porque pone en juego procesos como la planificación, el análisis de alternativas, la toma de decisiones y la anticipación de consecuencias. Cuando estos procesos se articulan con herramientas digitales y con recursos abiertos, pueden ampliarse las oportunidades para experimentar, crear, compartir y aprender.
            </p>
          </div>

          <div className="tarjeta-conclusion destacado">
            <p>
              Por ello, la experiencia propuesta invita a superar una concepción instrumental de la tecnología. No se trata simplemente de utilizar herramientas digitales para enseñar ajedrez, sino de aprovechar el ajedrez y los recursos digitales para construir experiencias educativas más inclusivas, participativas y significativas.
            </p>
          </div>

          <div className="tarjeta-conclusion">
            <p>
              En esta perspectiva, <strong>CREA</strong> y <strong>Ajedrez Estratégico</strong> convergen como dos posibilidades para pensar una educación en la que los estudiantes puedan pasar de ser usuarios de recursos digitales a participantes activos, creadores de conocimiento y sujetos capaces de tomar decisiones, resolver problemas, dialogar y convivir con otros.
            </p>
          </div>

          {/* Pregunta final de reflexión */}
          <div className="tarjeta-reflexion">
            <h2>Pregunta final de reflexión</h2>
            <p>
              Si la inclusión digital significa mucho más que tener acceso a la tecnología, <strong>¿Qué debemos transformar en nuestras prácticas educativas para que todos los estudiantes puedan utilizarla para aprender, crear, participar y ejercer una ciudadanía activa?</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Estilos integrados */}
      <style>{`
        .conclusion-contenido {
          width: 90%;
          max-width: 900px;
          margin: 40px auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .tarjeta-conclusion {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 1.5rem 2rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .tarjeta-conclusion:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }

        .tarjeta-conclusion p {
          color: #334155;
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0;
        }

        .tarjeta-conclusion.destacado {
          border-left: 5px solid #0284c7;
          background-color: #f8fafc;
        }

        .tarjeta-reflexion {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          border-radius: 12px;
          padding: 2rem;
          margin-top: 1.5rem;
          box-shadow: 0 8px 20px rgba(2, 132, 199, 0.2);
          text-align: center;
        }

        .tarjeta-reflexion h2 {
          font-size: 1.3rem;
          margin-top: 0;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #e0f2fe;
        }

        .tarjeta-reflexion p {
          font-size: 1.15rem;
          line-height: 1.7;
          margin: 0;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .conclusion-contenido {
            width: 95%;
            margin: 20px auto;
          }

          .tarjeta-conclusion {
            padding: 1.2rem;
          }

          .tarjeta-conclusion p {
            font-size: 0.98rem;
          }

          .tarjeta-reflexion {
            padding: 1.5rem;
          }

          .tarjeta-reflexion p {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  )
}

export default Conclusion