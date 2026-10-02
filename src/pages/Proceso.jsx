import React, { useState } from 'react'
import Menu from '../components/menu'

const fasesData = [
  {
    id: 1,
    titulo: "Fase 1. Explorar: ¿Qué entendemos por inclusión digital?",
    subtitulo: "Reflexión inicial sobre la inclusión digital",
    imagen: "/imagenes/proceso/fase1.jfif",
    contenido: (
      <>
        <p className="parrafo">
          Antes de acercarnos a CREA, cada equipo realizará una reflexión inicial sobre la inclusión digital.
        </p>
        <h4 className="subtitulo-secundario">Respondan:</h4>
        <ul className="lista-fase">
          <li>¿Qué entendemos por inclusión digital?</li>
          <li>¿Es suficiente que una persona tenga acceso a Internet o a un dispositivo?</li>
          <li>¿Qué diferencias existen entre acceso, uso, apropiación y creación mediante tecnologías digitales?</li>
          <li>¿Qué situaciones pueden generar brechas digitales en los contextos educativos?</li>
          <li>¿Qué papel tiene la escuela frente a estas brechas?</li>
        </ul>
        <div className="bloque-pregunta">
          <p className="parrafo"><strong>Consigna:</strong> Construyan un pequeño mapa conceptual inicial con sus ideas.</p>
        </div>
      </>
    )
  },
  {
    id: 2,
    titulo: "Fase 2. Descubrir CREA",
    subtitulo: "Exploración del portal de medios Siemens Stiftung",
    imagen: "/imagenes/proceso/fase2.jfif",
    contenido: (
      <>
        <p className="parrafo">
          Ingresen al portal oficial:{" "}
          <a href="https://crea-portaldemedios.siemens-stiftung.org/home" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7', textDecoration: 'underline' }}>
            Portal CREA
          </a>
        </p>
        <p className="parrafo">Exploren especialmente los apartados:</p>
        <div className="chips-grid">
          <span>Recursos</span>
          <span>Experimento</span>
          <span>Métodos</span>
          <span>Aprendizaje Inclusivo</span>
          <span>Design Thinking</span>
          <span>Aprendizaje Basado en Investigación</span>
          <span>Aprendizaje-Servicio</span>
          <span>REA</span>
          <span>Formación</span>
        </div>
        <p className="parrafo">
          El portal presenta estos métodos como posibilidades para enseñar ciencia y tecnología y señala específicamente que el aprendizaje inclusivo proporciona apoyo a los estudiantes de acuerdo con sus capacidades.
        </p>
        <h4 className="subtitulo-secundario">Preguntas de análisis:</h4>
        <ul className="lista-fase">
          <li>¿Qué es CREA y cuál es su propósito educativo?</li>
          <li>¿Qué características tienen sus recursos y qué significa que sean Recursos Educativos Abiertos (REA)?</li>
          <li>¿Qué posibilidades ofrece la apertura de los recursos para los docentes?</li>
          <li>¿Cómo se relaciona el aprendizaje inclusivo con la inclusión digital?</li>
          <li>¿Qué papel desempeñan la colaboración y el intercambio de conocimientos?</li>
          <li>¿Qué posibilidades de participación ofrece una plataforma de estas características?</li>
          <li>¿Cómo podría utilizarse un recurso de CREA, adaptarlo o complementarlo según las necesidades de un contexto educativo particular?</li>
        </ul>
      </>
    )
  },
  {
    id: 3,
    titulo: "Fase 3. Analizar: del recurso digital a la experiencia educativa",
    subtitulo: "Matriz comparativa de conceptos",
    imagen: "/imagenes/proceso/fase3.jfif",
    contenido: (
      <>
        <p className="parrafo">
          Ahora comparen lo encontrado en CREA con los conceptos trabajados en el curso de Educación e Inclusión Digital.
        </p>
        <p className="parrafo"><strong>Construyan una tabla como la siguiente:</strong></p>
        <div className="tabla-responsive">
          <table className="fase-tabla">
            <thead>
              <tr>
                <th>Concepto trabajado</th>
                <th>¿Cómo aparece en CREA?</th>
                <th>¿Cómo podría aparecer en el ajedrez?</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Inclusión digital",
                "Acceso",
                "Apropiación tecnológica",
                "Participación",
                "Aprendizaje autónomo",
                "Pensamiento crítico",
                "Colaboración",
                "Formación ciudadana",
                "Recursos Educativos Abiertos",
                "Resolución de problemas"
              ].map((concepto, idx) => (
                <tr key={idx}>
                  <td><strong>{concepto}</strong></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="parrafo" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          <em>El propósito no es solamente identificar conceptos, sino establecer relaciones entre ellos.</em>
        </p>
      </>
    )
  },
  {
    id: 4,
    titulo: "Fase 4. Explorar Ajedrez Estratégico",
    subtitulo: "El ajedrez articulado con herramientas digitales",
    imagen: "/imagenes/proceso/fase4.jfif",
    contenido: (
      <>
        <p className="parrafo">
          Ingresen a la propuesta:{" "}
          <a href="https://ajedrez-estrategico.my.canva.site/" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7', textDecoration: 'underline' }}>
            Ajedrez Estratégico en Canva
          </a>
        </p>
        <p className="parrafo">
          Analicen cómo se presenta el ajedrez como experiencia educativa y qué posibilidades ofrece su articulación con herramientas digitales.
        </p>
        <h4 className="subtitulo-secundario">Identifiquen:</h4>
        <ul className="lista-fase">
          <li>¿Qué aprendizajes puede favorecer el ajedrez?</li>
          <li>¿Qué habilidades cognitivas y sociales puede desarrollar o fortalecer?</li>
          <li>¿Qué relación puede establecerse entre estrategia y toma de decisiones?</li>
          <li>¿Cómo puede contribuir al pensamiento crítico y a la resolución de problemas?</li>
          <li>¿Cómo puede favorecer la convivencia y el respeto por las reglas?</li>
          <li>¿Qué herramientas digitales pueden enriquecer su enseñanza?</li>
          <li>¿Qué estudiantes podrían encontrar barreras para participar y cómo podrían eliminarse?</li>
        </ul>
      </>
    )
  },
  {
    id: 5,
    titulo: "Fase 5. Conectar CREA con Ajedrez Estratégico",
    subtitulo: "Diagrama de convergencia",
    imagen: "/imagenes/proceso/fase5.jfif",
    contenido: (
      <>
        <p className="parrafo">
          Ahora deberán establecer la conexión central de la WebQuest construyendo un diagramación de convergencia con tres elementos:
        </p>
        <div className="esquema-convergencia">
          <div className="caja-esquema crea">
            <strong>CREA</strong>
            <span>Recursos Educativos Abiertos + STEM + metodologías inclusivas + colaboración</span>
          </div>
          <div className="flecha-esquema">↓</div>
          <div className="caja-esquema educacion">
            <strong>Educación e Inclusión Digital</strong>
            <span>Acceso + apropiación + participación + creación + pensamiento crítico</span>
          </div>
          <div className="flecha-esquema">↓</div>
          <div className="caja-esquema ajedrez">
            <strong>Ajedrez Estratégico</strong>
            <span>Resolución de problemas + estrategia + toma de decisiones + interacción + ciudadanía</span>
          </div>
        </div>
        <div className="bloque-pregunta">
          <p className="parrafo">
            A partir de este esquema, formulen una respuesta argumentada a la pregunta:
          </p>
          <blockquote className="pregunta-texto">
            “¿Por qué la enseñanza del ajedrez mediante recursos y herramientas digitales puede constituirse en una experiencia de inclusión digital y formación ciudadana?”
          </blockquote>
        </div>
      </>
    )
  },
  {
    id: 6,
    titulo: "Fase 6. Crear: diseñemos nuestra experiencia",
    subtitulo: "Diseño de mini experiencia educativa",
    imagen: "/imagenes/proceso/fase6.jfif",
    contenido: (
      <>
        <p className="parrafo">
          Cada equipo diseñará una mini experiencia educativa de Ajedrez Estratégico inspirada en los principios de CREA. La propuesta deberá contener:
        </p>
        <ol className="lista-ordenada-fase">
          <li><strong>Nombre de la experiencia:</strong> Un título creativo relacionado con ajedrez, inclusión digital y ciudadanía.</li>
          <li><strong>Propósito:</strong> ¿Qué se pretende lograr con la experiencia?</li>
          <li><strong>Población:</strong> ¿A qué estudiantes está dirigida?</li>
          <li><strong>Problema o necesidad:</strong> ¿Qué situación educativa pretende atender?</li>
          <li><strong>Recursos digitales:</strong> ¿Qué herramientas o recursos digitales se utilizarán?</li>
          <li><strong>Recursos abiertos:</strong> ¿Qué REA podrían utilizarse, adaptarse o complementar la experiencia?</li>
          <li><strong>Actividad de ajedrez:</strong> Describan la actividad que realizarán los estudiantes.</li>
          <li><strong>Componente inclusivo:</strong> Expliquen cómo garantizarán que estudiantes con diferentes posibilidades o ritmos puedan participar.</li>
          <li><strong>Componente ciudadano:</strong> Respeto, diálogo, responsabilidad, cooperación y resolución pacífica de situaciones.</li>
          <li><strong>Evidencia de aprendizaje:</strong> ¿Qué producto o desempeño permitirán demostrar lo aprendido?</li>
        </ol>
      </>
    )
  },
  {
    id: 7,
    titulo: "Fase 7. Socializar y reflexionar",
    subtitulo: "Presentación y metacognición final",
    imagen: "/imagenes/proceso/fase7.jfif",
    contenido: (
      <>
        <p className="parrafo">Cada equipo presentará su propuesta al grupo.</p>
        <h4 className="subtitulo-secundario">Durante la socialización responderán:</h4>
        <ul className="lista-fase">
          <li>¿Qué aprendimos de CREA que podemos trasladar a una experiencia de enseñanza del ajedrez?</li>
          <li>¿Qué cambia cuando la tecnología deja de ser solamente un recurso y se convierte en una posibilidad para participar, crear y aprender?</li>
          <li>¿Qué barreras de inclusión digital debemos considerar al diseñar nuestra experiencia?</li>
        </ul>
        <h4 className="subtitulo-secundario">Reflexión individual:</h4>
        <p className="parrafo">Finalmente, cada participante escribirá una reflexión individual completando:</p>
        <div className="bloque-pregunta">
          <p>• <em>Antes pensaba que la inclusión digital era...</em></p>
          <p>• <em>Ahora comprendo que...</em></p>
          <p>• <em>Una experiencia como CREA me permite reconocer que...</em></p>
          <p>• <em>La enseñanza del ajedrez puede contribuir a...</em></p>
          <p>• <em>En mi futura práctica educativa podría...</em></p>
        </div>
      </>
    )
  }
]

const Proceso = () => {
  const [faseActiva, setFaseActiva] = useState(null)

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

        {/* Grilla de las 7 fases */}
        <div className="fases-grid-container">
          {fasesData.map((fase) => (
            <div 
              key={fase.id} 
              className="fase-card-item"
              onClick={() => setFaseActiva(fase)}
            >
              <div className="fase-img-box">
                <img src={fase.imagen} alt={fase.titulo} />
                <span className="fase-number-badge">Fase {fase.id}</span>
                <div className="fase-hover-info">
                  <span>Haz clic para explorar</span>
                </div>
              </div>
              <div className="fase-card-text">
                <h3>{fase.titulo}</h3>
                <p>{fase.subtitulo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal desplegable */}
        {faseActiva && (
          <div className="fase-modal-overlay" onClick={() => setFaseActiva(null)}>
            <div className="fase-modal-box" onClick={(e) => e.stopPropagation()}>
              <button 
                className="fase-modal-close" 
                onClick={() => setFaseActiva(null)}
              >
                &times;
              </button>

              <div className="fase-modal-header">
                <span className="badge">Fase {faseActiva.id}</span>
                <h2>{faseActiva.titulo}</h2>
              </div>

              <div className="fase-modal-body">
                <img 
                  src={faseActiva.imagen} 
                  alt={faseActiva.titulo} 
                  className="fase-modal-img"
                />
                {faseActiva.contenido}
              </div>

              <div className="fase-modal-footer">
                <button className="btn-cerrar-modal" onClick={() => setFaseActiva(null)}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Estilos CSS embebidos */}
      <style>{`
        .fases-grid-container {
          padding: 50px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.8rem;
          margin: 2.5rem 0;
        }

        .fase-card-item {
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .fase-card-item:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
        }

        .fase-img-box {
          position: relative;
          width: 100%;
          height: 170px;
          background-color: #1e293b;
        }

        .fase-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .fase-number-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: #0284c7;
          color: #ffffff;
          font-weight: bold;
          font-size: 0.85rem;
          padding: 0.3rem 0.7rem;
          border-radius: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .fase-hover-info {
          position: absolute;
          inset: 0;
          background-color: rgba(15, 23, 42, 0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .fase-card-item:hover .fase-hover-info {
          opacity: 1;
        }

        .fase-card-text {
          padding: 1.2rem;
        }

        .fase-card-text h3 {
          font-size: 1rem;
          color: #1e293b;
          margin-bottom: 0.4rem;
        }

        .fase-card-text p {
          font-size: 0.85rem;
          color: #64748b;
          margin: 0;
        }

        /* Ventana Modal */
        .fase-modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .fase-modal-box {
          background: #ffffff;
          border-radius: 12px;
          width: 100%;
          max-width: 700px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .fase-modal-close {
          position: absolute;
          top: 12px;
          right: 18px;
          background: none;
          border: none;
          font-size: 1.8rem;
          color: #64748b;
          cursor: pointer;
        }

        .fase-modal-header {
          padding: 1.5rem 1.5rem 0.8rem 1.5rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .fase-modal-header h2 {
          font-size: 1.3rem;
          color: #0f172a;
          margin-top: 0.4rem;
        }

        .fase-modal-body {
          padding: 1.5rem;
          overflow-y: auto;
          text-align: left;
        }

        .fase-modal-img {
          width: 100%;
          max-height: 220px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1.2rem;
        }

        .fase-modal-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid #f1f5f9;
          text-align: right;
        }

        .btn-cerrar-modal {
          background-color: #0284c7;
          color: white;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
        }

        .lista-fase, .lista-ordenada-fase {
          margin: 0.8rem 0 1rem 1.5rem;
          line-height: 1.6;
        }

        .chips-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 0.8rem 0;
        }

        .chips-grid span {
          background-color: #f1f5f9;
          color: #334155;
          padding: 0.3rem 0.7rem;
          border-radius: 12px;
          font-size: 0.82rem;
          border: 1px solid #e2e8f0;
        }

        .tabla-responsive {
          overflow-x: auto;
          margin: 1rem 0;
        }

        .fase-tabla {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .fase-tabla th, .fase-tabla td {
          border: 1px solid #cbd5e1;
          padding: 0.5rem 0.7rem;
        }

        .fase-tabla th {
          background-color: #f8fafc;
        }

        .esquema-convergencia {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin: 1rem 0;
        }

        .caja-esquema {
          width: 100%;
          padding: 0.8rem;
          border-radius: 8px;
          text-align: center;
          display: flex;
          flex-direction: column;
        }

        .caja-esquema.crea { background: #e0f2fe; color: #0369a1; }
        .caja-esquema.educacion { background: #fef3c7; color: #b45309; }
        .caja-esquema.ajedrez { background: #dcfce7; color: #15803d; }

        .flecha-esquema {
          font-weight: bold;
          color: #64748b;
        }
      `}</style>
    </>
  )
}

export default Proceso