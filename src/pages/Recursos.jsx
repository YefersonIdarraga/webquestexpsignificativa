import React, { useState } from 'react'
import Menu from '../components/menu'
import Fichajes from '../components/Fichajes'

const Recursos = () => {
  // Estados para expandir/colapsar textos
  const [expandirRecurso1, setExpandirRecurso1] = useState(false)
  const [expandirRecurso3, setExpandirRecurso3] = useState(false)

  // Estado para controlar el modal interactivo con el contenido embebido
  const [modalContenido, setModalContenido] = useState(null) // { titulo, url, tipo }

  // Función para convertir URLs de YouTube estándar a versión Embed
  const obtenerEmbedYoutube = (url) => {
    let videoId = ''
    if (url.includes('v=')) {
      videoId = url.split('v=')[1].split('&')[0]
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0]
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url
  }

  const abrirModal = (titulo, url, tipo = 'iframe') => {
    let embedUrl = url
    if (tipo === 'youtube') {
      embedUrl = obtenerEmbedYoutube(url)
    }
    setModalContenido({ titulo, url: embedUrl, tipo })
  }

  const cerrarModal = () => {
    setModalContenido(null)
  }

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

        {/* Contenedor principal con tarjetas al 100% de ancho */}
        <div className="recursos-lista-full">
          
          {/* Recurso 1 */}
          <div className="recurso-card ancho-completo">
            <div className="recurso-badge">Recurso 1</div>
            <h2>Portal CREA</h2>
            
            <button 
              className="btn-abrir-embed principal"
              onClick={() => abrirModal('Portal CREA - Siemens Stiftung', 'https://crea-portaldemedios.siemens-stiftung.org/home')}
            >
              🌐 Abrir Portal CREA en vista previa
            </button>

            <div className="recurso-descripcion">
              <p>
                Será el recurso principal para explorar los conceptos de REA, educación STEM, aprendizaje inclusivo, metodologías activas y formación docente.
              </p>
              
              {expandirRecurso1 && (
                <p className="texto-desplegado">
                  CREA se presenta como un portal de materiales gratuitos y de libre acceso, y señala explícitamente que sus recursos pueden utilizarse, adaptarse y distribuirse según sus licencias abiertas para enriquecer la práctica pedagógica en ciencia y tecnología.
                </p>
              )}

              <button 
                className="btn-ver-mas" 
                onClick={() => setExpandirRecurso1(!expandirRecurso1)}
              >
                {expandirRecurso1 ? 'Ver menos ▲' : 'Ver más ▼'}
              </button>
            </div>
          </div>

          {/* Recurso 2 */}
          <div className="recurso-card ancho-completo">
            <div className="recurso-badge">Recurso 2</div>
            <h2>Ajedrez Estratégico</h2>
            
            <button 
              className="btn-abrir-embed principal"
              onClick={() => abrirModal('Ajedrez Estratégico en Canva', 'https://www.canva.com/design/DAG57SzMEdo/0brzXdvs9nB658weF5u_VQ/view?embed')}
            >
              ♟️ Abrir propuesta de Canva en vista previa
            </button>

            <div className="recurso-descripcion">
              <p>
                Será utilizado como experiencia de referencia para analizar la articulación entre el ajedrez, el desarrollo cognitivo-motriz, la toma de decisiones y el uso de herramientas digitales en entornos inclusivos.
              </p>
            </div>
          </div>

          {/* Recurso 3 */}
          <div className="recurso-card ancho-completo">
            <div className="recurso-badge">Recurso 3</div>
            <h2>Conceptos trabajados en el curso</h2>
            <p className="subtitulo-curso">Educación e Inclusión Digital — UPB</p>
            
            <p className="recurso-intro">
              Los participantes retomarán los contenidos, discusiones, lecturas, recursos audiovisuales y reflexiones desarrollados durante el curso de la UPB.
            </p>

            <div className="conceptos-chips">
              <span>Brecha digital</span>
              <span>Inclusión digital</span>
              <span>Alfabetización digital</span>
              <span>Apropiación tecnológica</span>
              <span>Participación</span>
              <span>Ciudadanía digital</span>
              <span>Pensamiento crítico</span>
              <span>Educación mediada por TIC</span>
            </div>

            {/* Contenido desplegable del Recurso 3 */}
            {expandirRecurso3 && (
              <div className="secciones-materiales-desplegadas">
                
                {/* Videos */}
                <div className="bloque-materiales">
                  <h4>📺 Videos: Alfabetización Digital Ayer y Hoy</h4>
                  <div className="grid-botones-recursos">
                    <button 
                      className="btn-recurso-item"
                      onClick={() => abrirModal('Video 1: Alfabetización Digital', 'https://www.youtube.com/watch?v=Ofxe2cIr704', 'youtube')}
                    >
                      ▶ Video 1: Alfabetización Digital
                    </button>
                    <button 
                      className="btn-recurso-item"
                      onClick={() => abrirModal('Video 2: Evolución y Perspectivas', 'https://www.youtube.com/watch?v=rZNNnYCZFHY', 'youtube')}
                    >
                      ▶ Video 2: Evolución y Perspectivas
                    </button>
                    <button 
                      className="btn-recurso-item"
                      onClick={() => abrirModal('Video 3: Inclusión y Competencias', 'https://www.youtube.com/watch?v=Z78aaeJR8no', 'youtube')}
                    >
                      ▶ Video 3: Inclusión y Competencias
                    </button>
                    <button 
                      className="btn-recurso-item"
                      onClick={() => abrirModal('Video 4: Educación Mediada por Tecnologías', 'https://www.youtube.com/watch?v=GVWkK9w0ooU', 'youtube')}
                    >
                      ▶ Video 4: Educación Mediada por Tecnologías
                    </button>
                  </div>
                </div>

                {/* Presentaciones Interactivas */}
                <div className="bloque-materiales">
                  <h4>📊 Presentaciones Interactivas y Lecturas de Brecha Digital</h4>
                  <div className="grid-botones-recursos">
                    <button 
                      className="btn-recurso-item"
                      onClick={() => abrirModal('Genially: Hitos de la Brecha Digital', 'https://view.genially.com/603d4a881bf9930da270df18')}
                    >
                      📊 Genially: Hitos de la Brecha Digital
                    </button>
                    <button 
                      className="btn-recurso-item"
                      onClick={() => abrirModal('Genially: Multidimensionalidad de la Brecha Digital', 'https://view.genially.com/6039784233effb0dbd38c510')}
                    >
                      📊 Genially: Multidimensionalidad de la Brecha
                    </button>
                    <button 
                      className="btn-recurso-item"
                      onClick={() => abrirModal('Artículo: Inclusión Digital', 'https://www.mediterranea-comunicacion.org/article/view/2020-11-1-inclusion-digital-un-reto-para-la-organizacion-planifi')}
                    >
                      🌐 Artículo: Inclusión digital, un reto de organización
                    </button>
                  </div>
                </div>

                {/* Lecturas PDF (Rutas Locales) */}
                <div className="bloque-materiales">
                  <h4>📄 Artículos en PDF (María Elena Giraldo Ramírez)</h4>
                  <div className="grid-botones-recursos">
                    <button 
                      className="btn-recurso-item pdf"
                      onClick={() => abrirModal('PDF: Educación e Inclusión Digital', '/documentos/Educación e Inclusión Digital una mirada desde el enfoque de capacidades.pdf')}
                    >
                      📄 PDF: Educación e inclusión digital (Mirada desde capacidades)
                    </button>
                    <button 
                      className="btn-recurso-item pdf"
                      onClick={() => abrirModal('PDF: Derecho a la Ciudad y el Territorio', '/documentos/Desde la Región. Derecho a la Ciudad y el territorio. Una reflexión urgente.pdf')}
                    >
                      📄 PDF: Desde la Región. Derecho a la Ciudad y el territorio
                    </button>
                  </div>
                </div>

              </div>
            )}

            <button 
              className="btn-ver-mas" 
              onClick={() => setExpandirRecurso3(!expandirRecurso3)}
            >
              {expandirRecurso3 ? 'Ocultar materiales del curso ▲' : 'Ver videos, presentaciones y artículos en PDF (8) ▼'}
            </button>
          </div>

          {/* Recurso 4 */}
          <div className="recurso-card ancho-completo">
            <div className="recurso-badge">Recurso 4</div>
            <h2>Herramientas digitales para la creación</h2>
            <div className="recurso-descripcion">
              <p>
                Cada equipo podrá seleccionar libremente las herramientas digitales necesarias para elaborar su producto final (presentaciones, tableros, videos, infografías), procurando que estas sean pertinentes, accesibles y coherentes con los objetivos educativos planteados.
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/*           SECCIÓN: MAPA CONCEPTUAL INTEGRADO             */}
        {/* ========================================================= */}
        <div className="mapa-conceptual-wrap">
          <h2 className="mapa-titulo">Mapa conceptual: la inclusión digital como reto multidimensional</h2>
          <p className="mapa-sub">Elaborado a partir de: Gil-Quintana &amp; Cano-Alfaro (2020) · Giraldo Ramírez (2017, enfoque de capacidades) · Giraldo Ramírez (2014, TIC y espacio digital)</p>
          <p className="mapa-autores">Equipo colaborativo: Pablo Emilio Naranjo Zuluaga, Jairo Alberto Rendón González y Zohé Velásquez González</p>
          
          <div className="mapa-legend">
            <span><i className="swatch" style={{ background: '#0F6E56' }}></i>Concepto central</span>
            <span><i className="swatch" style={{ background: '#185FA5' }}></i>Ámbito escolar-didáctico</span>
            <span><i className="swatch" style={{ background: '#993C1D' }}></i>Enfoque de capacidades (Sen)</span>
            <span><i className="swatch" style={{ background: '#534AB7' }}></i>Espacio digital y derechos</span>
            <span><i className="swatch" style={{ background: '#854F0B' }}></i>Nodos transversales</span>
          </div>

          <div className="svg-container">
            <svg viewBox="0 0 1320 1040" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arw" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="#8a8a84" strokeWidth="1.4"/>
                </marker>
              </defs>

              {/* ===== connecting lines: center to branches ===== */}
              <line x1="660" y1="80" x2="260" y2="160" stroke="#8a8a84" strokeWidth="1" markerEnd="url(#arw)"/>
              <text x="440" y="112" fontSize="11" fill="#5f5e5a">se manifiesta en</text>
              <line x1="660" y1="80" x2="660" y2="160" stroke="#8a8a84" strokeWidth="1" markerEnd="url(#arw)"/>
              <text x="668" y="120" fontSize="11" fill="#5f5e5a">se explica desde</text>
              <line x1="660" y1="80" x2="1060" y2="160" stroke="#8a8a84" strokeWidth="1" markerEnd="url(#arw)"/>
              <text x="850" y="112" fontSize="11" fill="#5f5e5a">redefine el</text>

              {/* ===== branch A: escolar (blue) column x=60-460 ===== */}
              <g stroke="#8a8a84" strokeWidth="0.8">
                <line x1="180" y1="220" x2="80" y2="280" markerEnd="url(#arw)"/>
                <line x1="180" y1="220" x2="260" y2="280" markerEnd="url(#arw)"/>
                <line x1="180" y1="220" x2="80" y2="394" markerEnd="url(#arw)"/>
                <line x1="180" y1="220" x2="260" y2="394" markerEnd="url(#arw)"/>
                <line x1="180" y1="220" x2="180" y2="498" markerEnd="url(#arw)"/>
              </g>

              {/* ===== branch B: capacidades (coral) column x=510-910 ===== */}
              <g stroke="#8a8a84" strokeWidth="0.8">
                <line x1="660" y1="220" x2="560" y2="280" markerEnd="url(#arw)"/>
                <line x1="660" y1="220" x2="760" y2="280" markerEnd="url(#arw)"/>
                <line x1="660" y1="220" x2="560" y2="394" markerEnd="url(#arw)"/>
                <line x1="660" y1="220" x2="760" y2="394" markerEnd="url(#arw)"/>
                <line x1="660" y1="220" x2="660" y2="498" markerEnd="url(#arw)"/>
              </g>

              {/* ===== branch C: territorio/derechos (purple) column x=960-1260 ===== */}
              <g stroke="#8a8a84" strokeWidth="0.8">
                <line x1="1140" y1="220" x2="1040" y2="280" markerEnd="url(#arw)"/>
                <line x1="1140" y1="220" x2="1220" y2="280" markerEnd="url(#arw)"/>
                <line x1="1140" y1="220" x2="1040" y2="394" markerEnd="url(#arw)"/>
                <line x1="1140" y1="220" x2="1220" y2="394" markerEnd="url(#arw)"/>
                <line x1="1140" y1="220" x2="1140" y2="498" markerEnd="url(#arw)"/>
              </g>

              {/* ===== convergence to transversal nodes (bottom) ===== */}
              <g stroke="#a3835a" strokeWidth="1" strokeDasharray="4 3">
                <line x1="180" y1="572" x2="480" y2="632"/>
                <line x1="660" y1="572" x2="600" y2="632"/>
                <line x1="1140" y1="572" x2="760" y2="632"/>

                <line x1="180" y1="572" x2="440" y2="746"/>
                <line x1="660" y1="572" x2="620" y2="746"/>
                <line x1="1140" y1="572" x2="800" y2="746"/>

                <line x1="180" y1="572" x2="420" y2="860"/>
                <line x1="660" y1="572" x2="620" y2="860"/>
                <line x1="1140" y1="572" x2="840" y2="860"/>
              </g>

              {/* ================= NODES ================= */}

              {/* Central node */}
              <g className="box">
                <rect x="500" y="18" width="320" height="62" rx="10" fill="#0F6E56"/>
                <text x="660" y="43" textAnchor="middle" fill="#E1F5EE" fontSize="15" fontWeight="600">INCLUSIÓN DIGITAL</text>
                <text x="660" y="63" textAnchor="middle" fill="#c9e9dd" fontSize="11">reto multidimensional (no solo acceso/conectividad)</text>
              </g>

              {/* Branch A header */}
              <g className="box">
                <rect x="30" y="160" width="300" height="58" rx="10" fill="#185FA5"/>
                <text x="180" y="184" textAnchor="middle" fill="#E6F1FB" fontSize="13" fontWeight="600">Organización escolar y didáctica</text>
                <text x="180" y="202" textAnchor="middle" fill="#c7dff5" fontSize="11">Gil-Quintana &amp; Cano-Alfaro (2020)</text>
              </g>
              {/* Branch A children */}
              <g className="box">
                <rect x="10" y="280" width="140" height="74" rx="8" fill="#E6F1FB" stroke="#185FA5" strokeWidth="0.6"/>
                <text x="80" y="304" textAnchor="middle" fill="#0C447C" fontSize="11" fontWeight="600">Conexión desde el hogar</text>
                <text x="80" y="322" textAnchor="middle" fill="#185FA5" fontSize="10">86,3% se conecta en casa</text>
                <text x="80" y="340" textAnchor="middle" fill="#3a6a95" fontSize="9" fontStyle="italic">(Gil-Quintana, 2020)</text>
              </g>
              <g className="box">
                <rect x="190" y="280" width="140" height="74" rx="8" fill="#E6F1FB" stroke="#185FA5" strokeWidth="0.6"/>
                <text x="260" y="304" textAnchor="middle" fill="#0C447C" fontSize="11" fontWeight="600">Bajo uso de TIC en el aula</text>
                <text x="260" y="322" textAnchor="middle" fill="#185FA5" fontSize="10">11,9% nunca las usa</text>
                <text x="260" y="340" textAnchor="middle" fill="#3a6a95" fontSize="9" fontStyle="italic">(Gil-Quintana, 2020)</text>
              </g>
              <g className="box">
                <rect x="10" y="394" width="140" height="74" rx="8" fill="#E6F1FB" stroke="#185FA5" strokeWidth="0.6"/>
                <text x="80" y="418" textAnchor="middle" fill="#0C447C" fontSize="11" fontWeight="600">Educación no formal</text>
                <text x="80" y="436" textAnchor="middle" fill="#185FA5" fontSize="10">YouTube, redes, youtubers</text>
                <text x="80" y="454" textAnchor="middle" fill="#3a6a95" fontSize="9" fontStyle="italic">(Scolari, 2018)</text>
              </g>
              <g className="box">
                <rect x="190" y="394" width="140" height="74" rx="8" fill="#E6F1FB" stroke="#185FA5" strokeWidth="0.6"/>
                <text x="260" y="418" textAnchor="middle" fill="#0C447C" fontSize="11" fontWeight="600">Formación docente</text>
                <text x="260" y="436" textAnchor="middle" fill="#185FA5" fontSize="10">realfabetización digital</text>
                <text x="260" y="454" textAnchor="middle" fill="#3a6a95" fontSize="9" fontStyle="italic">(Gutiérrez Martín, 2008)</text>
              </g>
              <g className="box">
                <rect x="100" y="498" width="160" height="74" rx="8" fill="#B5D4F4" stroke="#185FA5" strokeWidth="0.6"/>
                <text x="180" y="522" textAnchor="middle" fill="#042C53" fontSize="11" fontWeight="600">Exclusión digital escolar</text>
                <text x="180" y="540" textAnchor="middle" fill="#0C447C" fontSize="10">brecha entre uso no formal y formal</text>
                <text x="180" y="558" textAnchor="middle" fill="#0C447C" fontSize="9" fontStyle="italic">(Gil-Quintana, 2020)</text>
              </g>

              {/* Branch B header */}
              <g className="box">
                <rect x="510" y="160" width="300" height="58" rx="10" fill="#993C1D"/>
                <text x="660" y="184" textAnchor="middle" fill="#FAECE7" fontSize="13" fontWeight="600">Enfoque de capacidades</text>
                <text x="660" y="202" textAnchor="middle" fill="#f0cdb9" fontSize="11">Giraldo Ramírez (2017) — Amartya Sen</text>
              </g>
              {/* Branch B children */}
              <g className="box">
                <rect x="490" y="280" width="140" height="74" rx="8" fill="#FAECE7" stroke="#993C1D" strokeWidth="0.6"/>
                <text x="560" y="304" textAnchor="middle" fill="#712B13" fontSize="11" fontWeight="600">Capital humano</text>
                <text x="560" y="322" textAnchor="middle" fill="#993C1D" fontSize="10">vs. capacidad humana</text>
                <text x="560" y="340" textAnchor="middle" fill="#8a4a2b" fontSize="9" fontStyle="italic">(Sen, 1998)</text>
              </g>
              <g className="box">
                <rect x="690" y="280" width="140" height="74" rx="8" fill="#FAECE7" stroke="#993C1D" strokeWidth="0.6"/>
                <text x="760" y="304" textAnchor="middle" fill="#712B13" fontSize="11" fontWeight="600">Libertades y funcionamientos</text>
                <text x="760" y="322" textAnchor="middle" fill="#993C1D" fontSize="10">liberty / freedom</text>
                <text x="760" y="340" textAnchor="middle" fill="#8a4a2b" fontSize="9" fontStyle="italic">(Sen, 2000)</text>
              </g>
              <g className="box">
                <rect x="490" y="394" width="140" height="74" rx="8" fill="#FAECE7" stroke="#993C1D" strokeWidth="0.6"/>
                <text x="560" y="418" textAnchor="middle" fill="#712B13" fontSize="11" fontWeight="600">Desarrollo social</text>
                <text x="560" y="436" textAnchor="middle" fill="#993C1D" fontSize="10">no solo crecimiento económico</text>
                <text x="560" y="454" textAnchor="middle" fill="#8a4a2b" fontSize="9" fontStyle="italic">(Cornia et al., 1987)</text>
              </g>
              <g className="box">
                <rect x="690" y="394" width="140" height="74" rx="8" fill="#FAECE7" stroke="#993C1D" strokeWidth="0.6"/>
                <text x="760" y="418" textAnchor="middle" fill="#712B13" fontSize="11" fontWeight="600">Inclusión desigual</text>
                <text x="760" y="436" textAnchor="middle" fill="#993C1D" fontSize="10">incluir ≠ incluir con equidad</text>
                <text x="760" y="454" textAnchor="middle" fill="#8a4a2b" fontSize="9" fontStyle="italic">(Sen, 2001)</text>
              </g>
              <g className="box">
                <rect x="580" y="498" width="160" height="74" rx="8" fill="#F5C4B3" stroke="#993C1D" strokeWidth="0.6"/>
                <text x="660" y="522" textAnchor="middle" fill="#4A1B0C" fontSize="11" fontWeight="600">Educación como capacidad</text>
                <text x="660" y="540" textAnchor="middle" fill="#712B13" fontSize="10">expande la libertad de elegir</text>
                <text x="660" y="558" textAnchor="middle" fill="#712B13" fontSize="9" fontStyle="italic">(Giraldo Ramírez, 2017)</text>
              </g>

              {/* Branch C header */}
              <g className="box">
                <rect x="990" y="160" width="300" height="58" rx="10" fill="#534AB7"/>
                <text x="1140" y="184" textAnchor="middle" fill="#EEEDFE" fontSize="13" fontWeight="600">TIC y espacio digital</text>
                <text x="1140" y="202" textAnchor="middle" fill="#cbc6f2" fontSize="11">Giraldo Ramírez (2014)</text>
              </g>
              {/* Branch C children */}
              <g className="box">
                <rect x="970" y="280" width="140" height="74" rx="8" fill="#EEEDFE" stroke="#534AB7" strokeWidth="0.6"/>
                <text x="1040" y="304" textAnchor="middle" fill="#3C3489" fontSize="11" fontWeight="600">Glocalización</text>
                <text x="1040" y="322" textAnchor="middle" fill="#534AB7" fontSize="10">disociación espacio-tiempo</text>
                <text x="1040" y="340" textAnchor="middle" fill="#655fae" fontSize="9" fontStyle="italic">(Robertson, 1995)</text>
              </g>
              <g className="box">
                <rect x="1170" y="280" width="140" height="74" rx="8" fill="#EEEDFE" stroke="#534AB7" strokeWidth="0.6"/>
                <text x="1240" y="304" textAnchor="middle" fill="#3C3489" fontSize="11" fontWeight="600">Territorio físico-digital</text>
                <text x="1240" y="322" textAnchor="middle" fill="#534AB7" fontSize="10">articulación, no sustitución</text>
                <text x="1240" y="340" textAnchor="middle" fill="#655fae" fontSize="9" fontStyle="italic">(Lévy, 2007)</text>
              </g>
              <g className="box">
                <rect x="970" y="394" width="140" height="74" rx="8" fill="#EEEDFE" stroke="#534AB7" strokeWidth="0.6"/>
                <text x="1040" y="418" textAnchor="middle" fill="#3C3489" fontSize="11" fontWeight="600">Espacio público digital</text>
                <text x="1040" y="436" textAnchor="middle" fill="#534AB7" fontSize="10">redes horizontales</text>
                <text x="1040" y="454" textAnchor="middle" fill="#655fae" fontSize="9" fontStyle="italic">(Lévy, 2009)</text>
              </g>
              <g className="box">
                <rect x="1170" y="394" width="140" height="74" rx="8" fill="#EEEDFE" stroke="#534AB7" strokeWidth="0.6"/>
                <text x="1240" y="418" textAnchor="middle" fill="#3C3489" fontSize="11" fontWeight="600">Ciudadanía emergente</text>
                <text x="1240" y="436" textAnchor="middle" fill="#534AB7" fontSize="10">movimientos en red</text>
                <text x="1240" y="454" textAnchor="middle" fill="#655fae" fontSize="9" fontStyle="italic">(Castells, 2012)</text>
              </g>
              <g className="box">
                <rect x="1060" y="498" width="160" height="74" rx="8" fill="#CECBF6" stroke="#534AB7" strokeWidth="0.6"/>
                <text x="1140" y="522" textAnchor="middle" fill="#26215C" fontSize="11" fontWeight="600">Derecho a internet</text>
                <text x="1140" y="540" textAnchor="middle" fill="#3C3489" fontSize="10">conectividad + libertad de expresión</text>
                <text x="1140" y="558" textAnchor="middle" fill="#3C3489" fontSize="9" fontStyle="italic">(United Nations, 2011)</text>
              </g>

              {/* ===== transversal nodes ===== */}
              <g className="box">
                <rect x="410" y="632" width="300" height="74" rx="10" fill="#854F0B"/>
                <text x="560" y="656" textAnchor="middle" fill="#FAEEDA" fontSize="12" fontWeight="600">BRECHA DIGITAL</text>
                <text x="560" y="674" textAnchor="middle" fill="#f2d9a8" fontSize="10">dura (acceso/infraestructura) vs. blanda (uso/apropiación)</text>
                <text x="560" y="692" textAnchor="middle" fill="#e8c584" fontSize="9" fontStyle="italic">(Volkow, 2003)</text>
              </g>
              <g className="box">
                <rect x="390" y="746" width="340" height="74" rx="10" fill="#854F0B"/>
                <text x="560" y="770" textAnchor="middle" fill="#FAEEDA" fontSize="12" fontWeight="600">EXCLUSIÓN DIGITAL</text>
                <text x="560" y="788" textAnchor="middle" fill="#f2d9a8" fontSize="10">privación de libertades + inclusión en condición desfavorable</text>
                <text x="560" y="806" textAnchor="middle" fill="#e8c584" fontSize="9" fontStyle="italic">(Sen, 2001)</text>
              </g>
              <g className="box">
                <rect x="400" y="860" width="320" height="74" rx="10" fill="#854F0B"/>
                <text x="560" y="884" textAnchor="middle" fill="#FAEEDA" fontSize="12" fontWeight="600">EDUCACIÓN</text>
                <text x="560" y="902" textAnchor="middle" fill="#f2d9a8" fontSize="10">mediadora entre lo formal y lo no formal; motor de inclusión</text>
                <text x="560" y="920" textAnchor="middle" fill="#e8c584" fontSize="9" fontStyle="italic">(Martín-Barbero, 2010)</text>
              </g>

              <text x="660" y="974" textAnchor="middle" fontSize="12" fill="#5f5e5a">Los tres textos coinciden en que la inclusión digital exige superar la mirada centrada solo en conectividad/infraestructura</text>
              <text x="660" y="992" textAnchor="middle" fontSize="12" fill="#5f5e5a">y avanzar hacia el desarrollo de capacidades, la apropiación crítica y la articulación entre territorio físico y digital.</text>
            </svg>
          </div>

          <div className="mapa-fuente">
            <h3>Referentes teóricos citados en el mapa</h3>
            <div className="tabla-responsive">
              <table className="tabla-referentes">
                <thead>
                  <tr>
                    <th>Autor(es)</th>
                    <th>Concepto aportado</th>
                    <th>Rama del mapa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Amartya Sen</td><td>Enfoque de capacidades; capital humano vs. capacidad humana; libertades y funcionamientos</td><td>Enfoque de capacidades</td></tr>
                  <tr><td>Pierre Lévy</td><td>Inteligencia colectiva; espacio público digital; articulación territorio-red</td><td>TIC y espacio digital / Escolar</td></tr>
                  <tr><td>Manuel Castells</td><td>Redes de indignación y esperanza; movimientos sociales en red</td><td>TIC y espacio digital</td></tr>
                  <tr><td>Roland Robertson</td><td>Glocalización; disociación espacio-tiempo</td><td>TIC y espacio digital</td></tr>
                  <tr><td>Anthony Giddens</td><td>Desanclaje de las relaciones sociales; modernidad y disociación tiempo-espacio</td><td>TIC y espacio digital</td></tr>
                  <tr><td>Bruno Latour</td><td>Teoría del actor-red (TAR); tecnologías como actantes</td><td>TIC y espacio digital</td></tr>
                  <tr><td>Jesús Martín-Barbero</td><td>Ciudadanía y competencia comunicativa; del horizonte escolar al social</td><td>Enfoque de capacidades</td></tr>
                  <tr><td>Carlos Scolari</td><td>Transmedia y culturas colaborativas juveniles</td><td>Escolar / TIC y espacio digital</td></tr>
                  <tr><td>Cees Hamelink</td><td>Capital informacional; derechos humanos en el ciberespacio</td><td>Enfoque de capacidades / TIC y espacio digital</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Fuentes principales</h3>
            <p>Gil-Quintana, J. y Cano-Alfaro, A. (2020). Inclusión digital: un reto para la organización, planificación y didáctica escolar. <em>Revista Mediterránea de Comunicación</em>, 11(1), 51-60. https://doi.org/10.14198/MEDCOM2020.11.1.6</p>
            <p>Giraldo Ramírez, M. E. (2017). <em>Educación e Inclusión Digital: una mirada desde el enfoque de capacidades</em>. Curso Optativo, Maestría en Educación. Medellín: Universidad Pontificia Bolivariana.</p>
            <p className="espacio-abajo">Giraldo Ramírez, M. E. (2014). TIC y espacio digital, renovación a la mirada del derecho a la ciudad y al territorio. <em>Desde la Región</em>, (55), 68-79. Corporación Región.</p>

            <h3>Bibliografía adicional citada en las fuentes</h3>
            <p>Barbas Coslado, A. (2012). Educomunicación: desarrollo, enfoques y desafíos en un mundo interconectado. <em>Foro de Educación</em>, 10(4).</p>
            <p>Borja, J. (2003). <em>La ciudad conquistada</em>. Madrid: Alianza Editorial.</p>
            <p>Castells, M. (2012). <em>Redes de indignación y esperanza</em>. Madrid: Alianza Editorial.</p>
            <p>Cornia, G. A., Jolly, R., Stewart, F. y Unicef. (1987). <em>Ajuste con rostro humano. Protección de los grupos vulnerables y promoción del crecimiento</em>. UNICEF.</p>
            <p>Gutiérrez Martín, A. (2008). Las TIC en la formación del maestro: "realfabetización" digital del profesorado. <em>Revista Interuniversitaria de Formación del Profesorado</em>, (63), 191-206.</p>
            <p>Hamelink, C. J. (2000). <em>The Ethics of Cyberspace</em>. London: Sage.</p>
            <p>Latour, B. (2008). <em>Reensamblar lo social. Una introducción a la teoría del actor-red</em>. Buenos Aires: Manantial.</p>
            <p>Lévy, P. (2007). <em>Cibercultura. La cultura de la sociedad digital</em>. Barcelona: Anthropos.</p>
            <p>Lévy, P. (2009). La mutation inachevée de la sphère publique. <em>Signo y Pensamiento</em>, 31(54), 36-43.</p>
            <p>Martín-Barbero, J. (2010). Comunicación, espacio público y ciudadanía. <em>Folios, Revista de la Facultad de Comunicaciones de la Universidad de Antioquia</em>, Edición Especial.</p>
            <p>Robertson, R. (1995). Glocalization: Time-space and homogeneity-heterogeneity. En Featherstone, M., Lash, S. y Robertson, R., <em>Global modernities</em> (pp. 25-44). SAGE.</p>
            <p>Scolari, C. A. (2018). <em>Teens, media and collaborative cultures: exploiting teens' transmedia skills in the classroom</em>. Barcelona: Universitat Pompeu Fabra.</p>
            <p>Sen, A. (1998). Capital humano y capacidad humana. <em>Cuadernos de Economía</em>, 17(29), 67-72.</p>
            <p>Sen, A. (2000). <em>Desarrollo y Libertad</em> (2ª ed.). Madrid: Planeta.</p>
            <p>Sen, A. (2001). Exclusión e inclusión. <em>Biblioteca Digital de la Iniciativa Interamericana de Capital Social, Ética y Desarrollo</em>, 5.</p>
            <p>United Nations. (2011). <em>Report of the Special Rapporteur on the promotion and protection of the right to freedom of opinion and expression, Frank La Rue</em> (No. A/HRC/17/27).</p>
            <p>Volkow, N. (2003). La brecha digital, un concepto social con cuatro dimensiones. <em>Boletín de Política Informática</em>, 6.</p>
          </div>
        </div>

      </section>

      {/* Modal visor interactivo para embeber contenido */}
      {modalContenido && (
        <div className="recurso-modal-overlay" onClick={cerrarModal}>
          <div className="recurso-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="recurso-modal-header">
              <h3>{modalContenido.titulo}</h3>
              <div className="acciones-modal-header">
                <a 
                  href={modalContenido.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-abrir-externo"
                >
                  Abrir en pestaña nueva ↗
                </a>
                <button className="btn-cerrar-modal" onClick={cerrarModal}>&times;</button>
              </div>
            </div>

            <div className="recurso-modal-body">
              <iframe
                src={modalContenido.url}
                title={modalContenido.titulo}
                className="iframe-recurso"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Componente Fichajes al final */}
      <Fichajes />

      {/* Estilos CSS embebidos */}
      <style>{`
        .recursos-lista-full {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          margin: 0 auto;
          width: 90%;
          margin-top: 30px;
        }

        .recurso-card.ancho-completo {
          width: 100%;
          box-sizing: border-box;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .recurso-badge {
          display: inline-block;
          background-color: #0284c7;
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          width: fit-content;
          margin-bottom: 0.8rem;
        }

        .recurso-card h2 {
          font-size: 1.35rem;
          color: #0f172a;
          margin-bottom: 0.6rem;
        }

        .subtitulo-curso {
          font-size: 0.95rem;
          color: #64748b;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .btn-abrir-embed.principal {
          align-self: flex-start;
          background-color: #e0f2fe;
          color: #0369a1;
          border: 1px solid #bae6fd;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          margin-bottom: 1rem;
          transition: all 0.2s ease;
        }

        .btn-abrir-embed.principal:hover {
          background-color: #0284c7;
          color: #ffffff;
        }

        .recurso-descripcion {
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.6;
        }

        .texto-desplegado {
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 1px dashed #cbd5e1;
          animation: fadeIn 0.3s ease-in-out;
        }

        .conceptos-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 1rem 0;
        }

        .conceptos-chips span {
          background-color: #f1f5f9;
          color: #0f172a;
          border: 1px solid #cbd5e1;
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .secciones-materiales-desplegadas {
          margin-top: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          animation: fadeIn 0.3s ease-in-out;
        }

        .bloque-materiales {
          background: #f8fafc;
          border-left: 4px solid #0284c7;
          padding: 1.2rem;
          border-radius: 8px;
        }

        .bloque-materiales h4 {
          font-size: 1rem;
          color: #1e293b;
          margin-bottom: 0.8rem;
        }

        .grid-botones-recursos {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 0.8rem;
        }

        .btn-recurso-item {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #0f172a;
          padding: 0.7rem 1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
        }

        .btn-recurso-item:hover {
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
        }

        .btn-recurso-item.pdf {
          border-left: 3px solid #ef4444;
        }

        .btn-ver-mas {
          background: none;
          border: none;
          color: #0284c7;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 0.5rem 0;
          margin-top: 0.8rem;
          align-self: flex-start;
          transition: color 0.2s;
        }

        .btn-ver-mas:hover {
          color: #0369a1;
          text-decoration: underline;
        }

        /* Modal visor de iframe */
        .recurso-modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.5rem;
        }

        .recurso-modal-box {
          background: #ffffff;
          border-radius: 12px;
          width: 100%;
          max-width: 1000px;
          height: 85vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .recurso-modal-header {
          padding: 1rem 1.5rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .recurso-modal-header h3 {
          font-size: 1.1rem;
          color: #0f172a;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 60%;
        }

        .acciones-modal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .btn-abrir-externo {
          font-size: 0.82rem;
          color: #0284c7;
          text-decoration: none;
          font-weight: 600;
        }

        .btn-abrir-externo:hover {
          text-decoration: underline;
        }

        .btn-cerrar-modal {
          background: none;
          border: none;
          font-size: 1.8rem;
          color: #64748b;
          cursor: pointer;
          line-height: 1;
        }

        .recurso-modal-body {
          flex: 1;
          width: 100%;
          background: #0f172a;
        }

        .iframe-recurso {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ========================================================= */
        /* Estilos del Mapa Conceptual                               */
        /* ========================================================= */
        .mapa-conceptual-wrap {
          width: 90%;
          margin: 45px auto 30px auto;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 14px rgba(0,0,0,0.05);
          box-sizing: border-box;
          color: #2c2c2a;
        }

        .mapa-titulo {
          font-size: 1.35rem;
          font-weight: 600;
          margin: 0 0 6px 0;
          color: #0f172a;
        }

        .mapa-sub {
          color: #5f5e5a;
          font-size: 0.85rem;
          margin: 0 0 4px 0;
        }

        .mapa-autores {
          color: #5f5e5a;
          font-size: 0.85rem;
          margin: 0 0 16px 0;
          font-style: italic;
        }

        .mapa-legend {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          font-size: 0.8rem;
          margin-bottom: 20px;
        }

        .mapa-legend span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .swatch {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          display: inline-block;
        }

        .svg-container {
          width: 100%;
          overflow-x: auto;
        }

        .svg-container svg {
          width: 100%;
          height: auto;
          display: block;
          min-width: 800px; /* Garantiza visibilidad en pantallas pequeñas */
        }

        .box text {
          font-family: inherit;
        }

        .mapa-fuente {
          font-size: 0.82rem;
          color: #475569;
          margin-top: 25px;
          line-height: 1.6;
          border-top: 1px solid #e2e8f0;
          padding-top: 20px;
        }

        .mapa-fuente h3 {
          font-size: 0.98rem;
          font-weight: 600;
          margin: 16px 0 8px 0;
          color: #0f172a;
        }

        .mapa-fuente p {
          margin: 0 0 6px 0;
        }

        .mapa-fuente p.espacio-abajo {
          margin-bottom: 18px;
        }

        .tabla-responsive {
          width: 100%;
          overflow-x: auto;
          margin-bottom: 20px;
        }

        .tabla-referentes {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.82rem;
          text-align: left;
        }

        .tabla-referentes th {
          padding: 8px 10px;
          border-bottom: 1px solid #cbd5e1;
          color: #0f172a;
          font-weight: 600;
        }

        .tabla-referentes td {
          padding: 8px 10px;
          border-bottom: 1px solid #f1f5f9;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}

export default Recursos