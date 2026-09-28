import React, { useState } from 'react';
import '../styles/Fichajes.css';

const Fichajes = () => {
  const [docSeleccionado, setDocSeleccionado] = useState(null);

  // Lista de documentos PDF
  const documentos = [
    {
      id: 1,
      titulo: 'Aprender Conectados',
      descripcion: 'Educación digital, alfabetización digital, innovación educativa, programación y robótica.',
      url: '/documentos/Fichaje-experiencias-significativas-America-Latina-y-el-Caribe-Pablo-Jairo-y-Zohe.pdf'
    },
    {
      id: 2,
      titulo: 'Colombia Aprende: red de conocimiento',
      descripcion: 'Inclusión digital y fortalecimiento de los procesos de enseñanza y aprendizaje mediante contenidos, recursos educativos digitales y plataformas de apoyo.',
      url: '/documentos/rubrica-evaluacion.pdf'
    },
    {
      id: 3,
      titulo: 'Computadores para Educar: acceso, apropiación y sostenibilidad de las tecnologías digitales para la innovación educativa.',
      descripcion: 'Inclusión digital e innovación educativa mediante el acceso, uso y apropiación pedagógica de tecnologías digitales, complementada con sostenibilidad ambiental y aprovechamiento de residuos de aparatos eléctricos y electrónicos (RAEE).',
      url: '/documentos/recursos-complementarios.pdf'
    }
  ];

  const abrirPopup = (doc) => {
    setDocSeleccionado(doc);
  };

  const cerrarPopup = () => {
    setDocSeleccionado(null);
  };

  return (
    <div className="docs-container">
      <h2>Fichajes</h2>

      {/* Lista de Tarjetas de Documentos */}
      <div className="docs-grid">
        {documentos.map((doc) => (
          <div key={doc.id} className="doc-card">
            <div className="doc-icon">📄</div>
            <div className="doc-info">
              <h3>{doc.titulo}</h3>
              <p>{doc.descripcion}</p>
            </div>
            <button 
              className="btn-ver" 
              onClick={() => abrirPopup(doc)}
            >
              Ver PDF
            </button>
          </div>
        ))}
      </div>

      {/* Popup / Modal Emergente Animado */}
      {docSeleccionado && (
        <div className="modal-overlay" onClick={cerrarPopup}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} /* Evita cerrar al hacer clic dentro */
          >
            {/* Encabezado del Popup con Botones de Descarga y Cierre */}
            <div className="modal-header">
              <h3>{docSeleccionado.titulo}</h3>
              <div className="modal-actions">
                {/* Botón de Descargar */}
                <a 
                  href={docSeleccionado.url} 
                  download 
                  className="btn-descargar"
                  title="Descargar PDF"
                >
                  📥 Descargar
                </a>
                {/* Botón de Cerrar */}
                <button 
                  className="btn-cerrar" 
                  onClick={cerrarPopup}
                  title="Cerrar"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Visualizador de PDF */}
            <div className="modal-body">
              <iframe 
                src={`${docSeleccionado.url}#view=FitH&zoom=${window.innerWidth < 768 ? '100' : '130'}`}
                title={docSeleccionado.titulo}
                width="100%" 
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fichajes;