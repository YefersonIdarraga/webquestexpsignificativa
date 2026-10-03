import React, { useState } from 'react'
import { jsPDF } from 'jspdf'
import Menu from '../components/menu'

const Evaluacion = () => {
  const [respuestas, setRespuestas] = useState({
    queAprendi: '',
    queAporte: '',
    conceptoTransformado: '',
    relacionCreaAjedrez: '',
    barreraReconocida: '',
    comoMejorar: ''
  })

  const [enviado, setEnviado] = useState(false)
  const [descargando, setDescargando] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setRespuestas({
      ...respuestas,
      [name]: value
    })
  }

  // Generación nativa con jsPDF (Sin HTML2Canvas ni problemas de hojas en blanco)
  const descargarPDF = () => {
    setDescargando(true)

    try {
      const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4'
      })

      const fecha = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })

      let cursorY = 20
      const margenIzquierdo = 20
      const anchoPagina = 170 // 210mm (A4) - 40mm márgenes

      // Título principal
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(16)
      doc.setTextColor(2, 132, 199) // Color #0284c7
      doc.text('Autoevaluación de Educación Digital', margenIzquierdo, cursorY)

      cursorY += 7

      // Fecha
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10)
      doc.setTextColor(100, 116, 139)
      doc.text(`Fecha de emisión: ${fecha}`, margenIzquierdo, cursorY)

      cursorY += 6

      // Línea divisora
      doc.setDrawColor(2, 132, 199)
      doc.setLineWidth(0.8)
      doc.line(margenIzquierdo, cursorY, margenIzquierdo + anchoPagina, cursorY)

      cursorY += 12

      // Estructura de preguntas
      const preguntas = [
        { titulo: '1. ¿Qué aprendí?', respuesta: respuestas.queAprendi },
        { titulo: '2. ¿Qué aporté al trabajo de mi equipo?', respuesta: respuestas.queAporte },
        { titulo: '3. ¿Qué concepto de inclusión digital transformó mi manera de comprender la educación?', respuesta: respuestas.conceptoTransformado },
        { titulo: '4. ¿Qué aprendí al relacionar CREA con el ajedrez?', respuesta: respuestas.relacionCreaAjedrez },
        { titulo: '5. ¿Qué barrera digital o educativa pude reconocer?', respuesta: respuestas.barreraReconocida },
        { titulo: '6. ¿Cómo podría mejorar mi propuesta?', respuesta: respuestas.comoMejorar }
      ]

      preguntas.forEach((item) => {
        // Verificar si necesitamos una nueva página antes de escribir la pregunta
        if (cursorY > 260) {
          doc.addPage()
          cursorY = 20
        }

        // Título de la pregunta
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(11)
        doc.setTextColor(15, 23, 42)
        doc.text(item.titulo, margenIzquierdo, cursorY)
        cursorY += 6

        // Texto de la respuesta
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(10)
        doc.setTextColor(51, 65, 85)

        const respuestaTexto = item.respuesta.trim() !== '' ? item.respuesta : 'Sin respuesta'
        const lineas = doc.splitTextToSize(respuestaTexto, anchoPagina - 8)

        // Fondo y borde del cuadro de respuesta
        const alturaCaja = lineas.length * 5 + 6

        // Verificar si la caja excede la página
        if (cursorY + alturaCaja > 270) {
          doc.addPage()
          cursorY = 20
        }

        doc.setFillColor(248, 250, 252) // #f8fafc
        doc.rect(margenIzquierdo, cursorY, anchoPagina, alturaCaja, 'F')

        doc.setFillColor(2, 132, 199) // Barra lateral azul
        doc.rect(margenIzquierdo, cursorY, 2, alturaCaja, 'F')

        // Escribir el texto dentro del cuadro
        doc.text(lineas, margenIzquierdo + 6, cursorY + 5)

        cursorY += alturaCaja + 8
      })

      // Pie de página
      if (cursorY > 270) {
        doc.addPage()
        cursorY = 20
      }
      doc.setFont('helvetica', 'italic')
      doc.setFontSize(8)
      doc.setTextColor(148, 163, 184)
      doc.text('Experiencia significativa en educación digital — Reporte individual de autoevaluación', margenIzquierdo, 285)

      // Guardar el archivo PDF
      doc.save('autoevaluacion_educacion_digital.pdf')
      setEnviado(true)
    } catch (error) {
      console.error('Error al generar el PDF:', error)
      alert('Ocurrió un error al generar el archivo PDF.')
    } finally {
      setDescargando(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    descargarPDF()
  }

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

        <div className="evaluacion-contenido">
          <div className="evaluacion-intro-card">
            <h2>Enfoque de la Evaluación</h2>
            <p>
              La evaluación será <strong>formativa</strong>, valorando tanto el proceso de exploración y análisis como la capacidad de establecer relaciones y diseñar una propuesta educativa significativa, contextualizada e inclusiva.
            </p>
          </div>

          <div className="seccion-evaluacion">
            <h2 className="titulo-seccion">Rúbrica de Criterios de Evaluación</h2>
            <div className="tabla-responsive">
              <table className="tabla-rubrica">
                <thead>
                  <tr>
                    <th>Criterio</th>
                    <th className="nivel excelente">Excelente</th>
                    <th className="nivel desarrollo">En desarrollo</th>
                    <th className="nivel inicial">Inicial</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="criterio-nombre">Comprensión de la inclusión digital</td>
                    <td>Explica la inclusión digital de manera crítica y la relaciona con acceso, apropiación, participación y creación.</td>
                    <td>Reconoce algunos elementos de la inclusión digital, aunque las relaciones son parciales.</td>
                    <td>Presenta una comprensión limitada al acceso a dispositivos o Internet.</td>
                  </tr>
                  <tr>
                    <td className="criterio-nombre">Análisis de CREA</td>
                    <td>Identifica claramente sus propósitos, características, REA y metodologías y los analiza críticamente.</td>
                    <td>Identifica las características principales, pero profundiza poco en su significado educativo.</td>
                    <td>Presenta información descriptiva y limitada sobre CREA.</td>
                  </tr>
                  <tr>
                    <td className="criterio-nombre">Relación CREA–Ajedrez</td>
                    <td>Establece relaciones claras, argumentadas y pertinentes entre ambas experiencias.</td>
                    <td>Establece algunas relaciones, aunque requieren mayor argumentación.</td>
                    <td>La relación entre ambas experiencias es débil o poco clara.</td>
                  </tr>
                  <tr>
                    <td className="criterio-nombre">Integración de tecnología</td>
                    <td>Propone un uso significativo de herramientas digitales como mediadoras del aprendizaje.</td>
                    <td>Utiliza herramientas digitales, pero su función pedagógica podría desarrollarse más.</td>
                    <td>La tecnología aparece principalmente como elemento instrumental.</td>
                  </tr>
                  <tr>
                    <td className="criterio-nombre">Componente inclusivo</td>
                    <td>Considera diferentes necesidades, posibilidades de acceso y formas de participación.</td>
                    <td>Reconoce algunas barreras de participación.</td>
                    <td>No incorpora suficientemente la perspectiva inclusiva.</td>
                  </tr>
                  <tr>
                    <td className="criterio-nombre">Formación ciudadana</td>
                    <td>Integra de manera explícita respeto, diálogo, participación, responsabilidad, toma de decisiones y convivencia.</td>
                    <td>Incluye algunos elementos ciudadanos.</td>
                    <td>El componente ciudadano es poco evidente.</td>
                  </tr>
                  <tr>
                    <td className="criterio-nombre">Creatividad y pertinencia</td>
                    <td>La propuesta es original, viable, contextualizada y pedagógicamente significativa.</td>
                    <td>La propuesta es pertinente, aunque requiere ajustes.</td>
                    <td>La propuesta presenta poca relación con el problema planteado.</td>
                  </tr>
                  <tr>
                    <td className="criterio-nombre">Argumentación y reflexión</td>
                    <td>Fundamenta las decisiones y presenta una reflexión crítica sobre inclusión digital y educación.</td>
                    <td>Presenta argumentos básicos y una reflexión general.</td>
                    <td>Predomina la descripción sobre la argumentación.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="seccion-evaluacion">
            <h2 className="titulo-seccion">Autoevaluación</h2>
            <p className="autoevaluacion-descripcion">
              Al finalizar la experiencia, cada participante valorará su propio proceso personal y colaborativo respondiendo a las siguientes preguntas reflexivas:
            </p>

            {enviado ? (
              <div className="mensaje-exito">
                <h3>¡Autoevaluación descargada en PDF!</h3>
                <p>Se ha generado y descargado el archivo <strong>autoevaluacion_educacion_digital.pdf</strong> correctamente.</p>
                <div className="acciones-exito">
                  <button 
                    className="btn-descargar-nuevamente" 
                    onClick={descargarPDF}
                    disabled={descargando}
                  >
                    {descargando ? 'Generando PDF...' : 'Descargar PDF de nuevo'}
                  </button>
                  <button 
                    className="btn-reiniciar" 
                    onClick={() => setEnviado(false)}
                  >
                    Editar respuestas
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="formulario-autoevaluacion">
                <div className="campo-pregunta">
                  <label htmlFor="queAprendi">1. ¿Qué aprendí?</label>
                  <textarea
                    id="queAprendi"
                    name="queAprendi"
                    rows="3"
                    value={respuestas.queAprendi}
                    onChange={handleChange}
                    placeholder="Escribe tus aprendizajes principales..."
                    required
                  ></textarea>
                </div>

                <div className="campo-pregunta">
                  <label htmlFor="queAporte">2. ¿Qué aporté al trabajo de mi equipo?</label>
                  <textarea
                    id="queAporte"
                    name="queAporte"
                    rows="3"
                    value={respuestas.queAporte}
                    onChange={handleChange}
                    placeholder="Describe tu contribución al trabajo colaborativo..."
                    required
                  ></textarea>
                </div>

                <div className="campo-pregunta">
                  <label htmlFor="conceptoTransformado">3. ¿Qué concepto de inclusión digital transformó mi manera de comprender la educación?</label>
                  <textarea
                    id="conceptoTransformado"
                    name="conceptoTransformado"
                    rows="3"
                    value={respuestas.conceptoTransformado}
                    onChange={handleChange}
                    placeholder="Menciona el concepto o reflexión clave..."
                    required
                  ></textarea>
                </div>

                <div className="campo-pregunta">
                  <label htmlFor="relacionCreaAjedrez">4. ¿Qué aprendí al relacionar CREA con el ajedrez?</label>
                  <textarea
                    id="relacionCreaAjedrez"
                    name="relacionCreaAjedrez"
                    rows="3"
                    value={respuestas.relacionCreaAjedrez}
                    onChange={handleChange}
                    placeholder="Explica las conexiones que identificaste..."
                    required
                  ></textarea>
                </div>

                <div className="campo-pregunta">
                  <label htmlFor="barreraReconocida">5. ¿Qué barrera digital o educativa pude reconocer?</label>
                  <textarea
                    id="barreraReconocida"
                    name="barreraReconocida"
                    rows="3"
                    value={respuestas.barreraReconocida}
                    onChange={handleChange}
                    placeholder="Describe la barrera identificada..."
                    required
                  ></textarea>
                </div>

                <div className="campo-pregunta">
                  <label htmlFor="comoMejorar">6. ¿Cómo podría mejorar mi propuesta?</label>
                  <textarea
                    id="comoMejorar"
                    name="comoMejorar"
                    rows="3"
                    value={respuestas.comoMejorar}
                    onChange={handleChange}
                    placeholder="Plantea opciones de mejora o proyección a futuro..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-enviar-autoevaluacion"
                  disabled={descargando}
                >
                  {descargando ? 'Generando PDF...' : 'Guardar y Descargar Autoevaluación en PDF'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .evaluacion-contenido {
          width: 90%;
          margin: 30px auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .evaluacion-intro-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-left: 5px solid #0284c7;
          border-radius: 12px;
          padding: 1.5rem 2rem;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
        }

        .evaluacion-intro-card h2 {
          font-size: 1.35rem;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .evaluacion-intro-card p {
          font-size: 1rem;
          color: #334155;
          line-height: 1.6;
          margin: 0;
        }

        .seccion-evaluacion {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
        }

        .titulo-seccion {
          font-size: 1.35rem;
          color: #0f172a;
          margin-bottom: 1.2rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #f1f5f9;
        }

        .autoevaluacion-descripcion {
          font-size: 0.95rem;
          color: #475569;
          margin-bottom: 1.5rem;
        }

        .tabla-responsive {
          width: 100%;
          overflow-x: auto;
        }

        .tabla-rubrica {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          text-align: left;
        }

        .tabla-rubrica th, .tabla-rubrica td {
          padding: 1rem;
          border: 1px solid #e2e8f0;
          vertical-align: top;
        }

        .tabla-rubrica th {
          background-color: #f8fafc;
          color: #0f172a;
          font-weight: 700;
        }

        .tabla-rubrica th.nivel.excelente {
          background-color: #f0fdf4;
          color: #166534;
          width: 28%;
        }

        .tabla-rubrica th.nivel.desarrollo {
          background-color: #fefce8;
          color: #854d0e;
          width: 28%;
        }

        .tabla-rubrica th.nivel.inicial {
          background-color: #fef2f2;
          color: #991b1b;
          width: 28%;
        }

        .criterio-nombre {
          font-weight: 600;
          color: #0f172a;
          background-color: #f8fafc;
          width: 16%;
        }

        .formulario-autoevaluacion {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .campo-pregunta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .campo-pregunta label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #1e293b;
        }

        .campo-pregunta textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-family: inherit;
          font-size: 0.9rem;
          color: #0f172a;
          box-sizing: border-box;
          transition: border-color 0.2s, box-shadow 0.2s;
          resize: vertical;
        }

        .campo-pregunta textarea:focus {
          outline: none;
          border-color: #0284c7;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .btn-enviar-autoevaluacion {
          align-self: flex-start;
          background-color: #0284c7;
          color: #ffffff;
          border: none;
          padding: 0.8rem 1.8rem;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 0.5rem;
        }

        .btn-enviar-autoevaluacion:hover:not(:disabled) {
          background-color: #0369a1;
        }

        .btn-enviar-autoevaluacion:disabled {
          background-color: #94a3b8;
          cursor: not-allowed;
        }

        .mensaje-exito {
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          padding: 1.5rem;
          border-radius: 8px;
          color: #166534;
        }

        .mensaje-exito h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
        }

        .acciones-exito {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        .btn-descargar-nuevamente {
          background-color: #0284c7;
          color: #ffffff;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-descargar-nuevamente:hover:not(:disabled) {
          background-color: #0369a1;
        }

        .btn-reiniciar {
          background-color: #e2e8f0;
          color: #334155;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-reiniciar:hover {
          background-color: #cbd5e1;
        }

        @media (max-width: 768px) {
          .evaluacion-contenido {
            width: 95%;
          }
          
          .tabla-rubrica th, .tabla-rubrica td {
            font-size: 0.82rem;
            padding: 0.6rem;
          }
        }
      `}</style>
    </>
  )
}

export default Evaluacion