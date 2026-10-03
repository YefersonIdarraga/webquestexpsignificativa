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

        <div className="creditos-contenido">
          {/* Subtítulo General */}
          <div className="creditos-header-card">
            <h2>CRÉDITOS Y REFERENCIAS DE LA WEBQUEST</h2>
            <p className="subtitulo-webquest">
              Ajedrez Estratégico: una experiencia de inclusión digital y formación ciudadana
            </p>
          </div>

          {/* 1. Créditos y Autoría */}
          <div className="seccion-creditos">
            <h2 className="titulo-seccion">1. Créditos y autoría</h2>
            <p className="intro-seccion"><strong>WebQuest creada por:</strong></p>

            <div className="grid-autores">
              <div className="tarjeta-autor">
                <h3>Pablo Emilio Naranjo Zuluaga</h3>
                <p>
                  <strong>Correo:</strong>{' '}
                  <a href="mailto:pablo.nan@hotmail.com">pablo.nan@hotmail.com</a>
                </p>
              </div>

              <div className="tarjeta-autor">
                <h3>Jairo Alberto Rendón González</h3>
                <p>
                  <strong>Correo:</strong>{' '}
                  <a href="mailto:jairorendong@gmail.com">jairorendong@gmail.com</a>
                </p>
              </div>

              <div className="tarjeta-autor">
                <h3>Zohé Velásquez González</h3>
                <p>
                  <strong>Correo:</strong>{' '}
                  <a href="mailto:zorisha1207@gmail.com">zorisha1207@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="info-academica">
              <p><strong>Programa académico:</strong> Maestría en Educación</p>
              <p><strong>Institución:</strong> Universidad Pontificia Bolivariana – UPB</p>
              <p>Medellín, Antioquia, Colombia — 2026</p>
            </div>
          </div>

          {/* 2. Experiencia significativa de referencia */}
          <div className="seccion-creditos">
            <h2 className="titulo-seccion">2. Experiencia significativa de referencia</h2>
            <h3 className="subtitulo-referencia">CREA – Recursos Educativos Abiertos para la enseñanza STEM</h3>
            <p>
              La experiencia significativa que sirve como referente para el diseño de esta WebQuest es:
            </p>
            <p>
              <strong>CREA – Centro/Portal de Recursos Educativos Abiertos para la enseñanza STEM</strong>, iniciativa de la <strong>Fundación Internacional Siemens Stiftung</strong>, desarrollada en colaboración con instituciones de la Red STEM Latinoamérica.
            </p>
            <p>
              CREA constituye el referente central de esta propuesta debido a su enfoque en el acceso gratuito a recursos educativos, la utilización de Recursos Educativos Abiertos (REA), la colaboración y la incorporación de metodologías como el aprendizaje inclusivo, el aprendizaje basado en la investigación, el Design Thinking y el aprendizaje-servicio.
            </p>
            <p>
              El portal dispone actualmente de más de 1.800 recursos educativos abiertos para la enseñanza de ciencia y tecnología, incluyendo imágenes, gráficos, videos, sonidos, textos, actividades interactivas, hojas de trabajo y otros materiales educativos.
            </p>

            <div className="caja-enlaces">
              <p>
                📌 <strong>Portal oficial de CREA:</strong>{' '}
                <a href="https://crea-portaldemedios.siemens-stiftung.org/home" target="_blank" rel="noopener noreferrer">
                  https://crea-portaldemedios.siemens-stiftung.org/home
                </a>
              </p>
              <p>
                📌 <strong>Información sobre los REA y licencias de CREA:</strong>{' '}
                <a href="https://crea-portaldemedios.siemens-stiftung.org/rea" target="_blank" rel="noopener noreferrer">
                  https://crea-portaldemedios.siemens-stiftung.org/rea
                </a>
              </p>
            </div>
          </div>

          {/* 3. Propuesta educativa relacionada */}
          <div className="seccion-creditos">
            <h2 className="titulo-seccion">3. Propuesta educativa relacionada</h2>
            <p>Como experiencia complementaria y punto de convergencia se utilizó la propuesta:</p>
            <blockquote className="cita-destacada">
              "Ajedrez Estratégico y Movimiento: Desarrollo Cognitivo-Motriz con Herramientas Digitales"
            </blockquote>
            <p>
              Esta propuesta permitió establecer una relación entre:
            </p>
            <p className="badge-relaciones">
              <strong>Ajedrez</strong> + <strong>pensamiento estratégico</strong> + <strong>desarrollo cognitivo</strong> + <strong>herramientas digitales</strong> + <strong>inclusión</strong> + <strong>formación ciudadana</strong>.
            </p>

            <div className="caja-enlaces">
              <p>
                📌 <strong>Recurso disponible en:</strong>{' '}
                <a href="https://ajedrez-estrategico.my.canva.site/" target="_blank" rel="noopener noreferrer">
                  https://ajedrez-estrategico.my.canva.site/
                </a>
              </p>
            </div>

            <p>
              La propuesta se incorpora como referente pedagógico para analizar cómo una experiencia de aprendizaje del ajedrez puede articularse con herramientas digitales y con los principios de inclusión, participación, pensamiento crítico, resolución de problemas y formación ciudadana abordados en la WebQuest.
            </p>
          </div>

          {/* 4. Fuentes y materiales utilizados */}
          <div className="seccion-creditos">
            <h2 className="titulo-seccion">4. Fuentes y materiales utilizados y/o consultados</h2>
            <ul className="lista-fuentes">
              <li>Zona multimedia (8 de noviembre de 2013). <em>Mesa de Ayuda en la Edad Media</em> [Archivo de video]. YouTube.</li>
              <li>Notable Agencia Creativa (2 de septiembre de 2011). <em>Motociclo - 80 Años</em> [Archivo de video]. YouTube.</li>
              <li>RSA Animate (17 de octubre de 2010). <em>Ken Robinson: Changing Paradigms (Spanish)</em> [Archivo de video]. YouTube.</li>
              <li>Centro de Innovacion - Mineduc. (9 de abril de 2024). <em>Alfabetización digital crítica y reflexiva – Ciudadanía Digital</em> [Video]. YouTube.</li>
              <li>Giraldo Ramírez, M. E. (2021). <em>Hitos de la Brecha Digital</em>. Universidad Pontificia Bolivariana.</li>
              <li>Giraldo Ramírez, M. E. (2021). <em>Multidimensionalidad de la Brecha Digital</em>. Universidad Pontificia Bolivariana.</li>
              <li>Gil-Quintana, J., & Cano-Alfaro, A. (2020). Inclusión digital: un reto para la organización, planificación y didáctica escolar. <em>Revista Mediterránea De Comunicación</em>, 11(1), 51–60.</li>
              <li>Giraldo Ramírez, M. E. (2017). Educación e Inclusión Digital: una mirada desde el enfoque de capacidades. En <em>Curso Optativo. Maestría en Educación</em>. Medellín: UPB.</li>
              <li>Giraldo Ramírez, M. E. (2014). TIC y espacio digital, renovación a la mirada del derecho a la ciudad y al territorio. <em>Desde la Región. Derecho a la Ciudad y el territorio. Una reflexión urgente</em>, (55), 68-79.</li>
              <li>Naranjo Zuluaga, P. E., Rendón González, J. A., & Velásquez González, Z. (2026). <em>Ajedrez estratégico y movimiento: Desarrollo cognitivo-motriz con herramientas digitales</em>. Canva. <a href="https://ajedrez-estrategico.my.canva.site/" target="_blank" rel="noopener noreferrer">https://ajedrez-estrategico.my.canva.site/</a></li>
              <li>Fundación Internacional Siemens Stiftung. (s. f.). <em>CREA: Recursos Educativos Abiertos para la enseñanza STEM</em>. <a href="https://crea-portaldemedios.siemens-stiftung.org/home" target="_blank" rel="noopener noreferrer">https://crea-portaldemedios.siemens-stiftung.org/home</a></li>
            </ul>

            <div className="nota-aclaratoria">
              <p>
                La referencia de CREA se ajusta a la información institucional disponible actualmente: el portal identifica a la Fundación Internacional Siemens Stiftung como responsable y presenta CREA como un portal de Recursos Educativos Abiertos para la enseñanza STEM.
              </p>
              <p>
                🎨 <strong>Apoyo visual:</strong> Imágenes generadas con inteligencia artificial mediante Gemini (Google), 2026.
              </p>
            </div>
          </div>

          {/* 5. Reconocimientos y agradecimientos */}
          <div className="seccion-creditos">
            <h2 className="titulo-seccion">5. Reconocimientos y agradecimientos</h2>
            <p className="intro-seccion">Los autores expresan su agradecimiento:</p>
            <ul className="lista-agradecimientos">
              <li>
                <strong>A la Universidad Pontificia Bolivariana (UPB)</strong>, por el espacio académico y formativo que permitió reflexionar sobre los desafíos y posibilidades de la educación en contextos mediados por tecnologías digitales.
              </li>
              <li>
                <strong>Al curso Educación e Inclusión Digital</strong>, por propiciar el análisis crítico de conceptos como brecha digital, inclusión, apropiación tecnológica, ciudadanía digital y participación.
              </li>
              <li>
                <strong>A la Fundación Internacional Siemens Stiftung y a la Red STEM Latinoamérica</strong>, por desarrollar y poner a disposición la experiencia CREA, que constituye el principal referente de esta WebQuest y representa una experiencia de acceso abierto, colaboración y circulación de recursos educativos.
              </li>
              <li>
                <strong>A los docentes, investigadores, instituciones y comunidades educativas</strong> que promueven el uso crítico, creativo, inclusivo y responsable de las tecnologías en educación.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Estilos CSS */}
      <style>{`
        .creditos-contenido {
          width: 90%;
          max-width: 950px;
          margin: 30px auto 50px auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .creditos-header-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-left: 5px solid #0284c7;
          border-radius: 12px;
          padding: 1.5rem 2rem;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
        }

        .creditos-header-card h2 {
          font-size: 1.35rem;
          color: #0f172a;
          margin: 0 0 0.4rem 0;
        }

        .subtitulo-webquest {
          font-size: 1.05rem;
          color: #0284c7;
          font-weight: 600;
          margin: 0;
        }

        .seccion-creditos {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
          line-height: 1.6;
          color: #334155;
        }

        .titulo-seccion {
          font-size: 1.3rem;
          color: #0f172a;
          margin-top: 0;
          margin-bottom: 1.2rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #f1f5f9;
        }

        .subtitulo-referencia {
          font-size: 1.1rem;
          color: #0284c7;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
        }

        .intro-seccion {
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        /* Autores Grid */
        .grid-autores {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .tarjeta-autor {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1.2rem;
        }

        .tarjeta-autor h3 {
          font-size: 1rem;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .tarjeta-autor p {
          font-size: 0.9rem;
          margin: 0;
        }

        .tarjeta-autor a {
          color: #0284c7;
          text-decoration: none;
          word-break: break-all;
        }

        .tarjeta-autor a:hover {
          text-decoration: underline;
        }

        .info-academica {
          background-color: #f1f5f9;
          padding: 1rem 1.2rem;
          border-radius: 8px;
          font-size: 0.95rem;
        }

        .info-academica p {
          margin: 0.3rem 0;
        }

        /* Cajas de enlaces y citas */
        .caja-enlaces {
          background-color: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 8px;
          padding: 1rem 1.2rem;
          margin: 1.2rem 0;
        }

        .caja-enlaces p {
          margin: 0.5rem 0;
          font-size: 0.93rem;
        }

        .caja-enlaces a {
          color: #0284c7;
          word-break: break-all;
          text-decoration: none;
        }

        .caja-enlaces a:hover {
          text-decoration: underline;
        }

        .cita-destacada {
          background-color: #f8fafc;
          border-left: 4px solid #0284c7;
          margin: 1rem 0;
          padding: 0.8rem 1.2rem;
          font-style: italic;
          color: #1e293b;
          font-weight: 500;
        }

        .badge-relaciones {
          background-color: #f1f5f9;
          padding: 0.8rem 1rem;
          border-radius: 6px;
          font-size: 0.95rem;
          color: #0f172a;
        }

        /* Listas */
        .lista-fuentes, .lista-agradecimientos {
          padding-left: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .lista-fuentes li {
          font-size: 0.93rem;
          line-height: 1.5;
        }

        .lista-fuentes a {
          color: #0284c7;
          word-break: break-all;
        }

        .lista-agradecimientos li {
          font-size: 0.98rem;
          line-height: 1.6;
        }

        .nota-aclaratoria {
          background-color: #f8fafc;
          border-top: 1px solid #e2e8f0;
          margin-top: 1.5rem;
          padding-top: 1rem;
          font-size: 0.88rem;
          color: #64748b;
        }

        @media (max-width: 768px) {
          .creditos-contenido {
            width: 95%;
          }

          .seccion-creditos {
            padding: 1.2rem;
          }

          .grid-autores {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default Creditos