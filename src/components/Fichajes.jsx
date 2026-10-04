import React, { useState } from 'react';
import '../styles/Fichajes.css';

const Fichajes = () => {
  const [docSeleccionado, setDocSeleccionado] = useState(null);

  // Lista de documentos PDF
  const documentos = [
    {
      id: 1,
      titulo: 'Alianza Regional para la Transformación e Innovación Educativa (ARTIE)',
      descripcion: 'Transformación e innovación educativa; inclusión digital; transformación digital de la educación; uso ético y responsable de la tecnología y la inteligencia artificial.',
      url: '/documentos/1Alianza Regional para la Transformación e Innovación Educativa ARTIE.pdf'
    },
    {
      id: 2,
      titulo: 'Aprender Conectados',
      descripcion: 'Educación digital, alfabetización digital, innovación educativa, programación y robótica.',
      url: '/documentos/2Aprender Conectados.pdf'
    },
    {
      id: 3,
      titulo: 'Colombia Aprende: red de conocimiento',
      descripcion: 'Inclusión digital y fortalecimiento de los procesos de enseñanza y aprendizaje mediante contenidos, recursos educativos digitales y plataformas de apoyo.',
      url: '/documentos/3Colombia Aprende - red de conocimiento.pdf'
    },
    {
      id: 4,
      titulo: 'Computadores para Educar: acceso, apropiación y sostenibilidad de las tecnologías digitales para la innovación educativa',
      descripcion: 'Inclusión digital e innovación educativa mediante el acceso, uso y apropiación pedagógica de tecnologías digitales, complementada con sostenibilidad ambiental y aprovechamiento de residuos de aparatos eléctricos y electrónicos (RAEE).',
      url: '/documentos/4Computadores para Educar - acceso, apropiación y sostenibilidad de las tecnologías digitales para la innovación educativa.pdf'
    },
    {
      id: 5,
      titulo: 'Corporación Sal y Luz, laboratorios ciudadanos',
      descripcion: 'Participación ciudadana, innovación social, cocreación y fortalecimiento de capacidades organizativas con enfoque medioambiental.',
      url: '/documentos/5Corporación Sal y Luz, laboratorios ciudadanos.pdf'
    },
    {
      id: 6,
      titulo: 'CREA – Centro de Recursos Educativos Abiertos para la enseñanza STEM',
      descripcion: 'Recursos Educativos Abiertos (REA) para la enseñanza STEM; acceso gratuito a materiales educativos, metodologías y formación docente; colaboración e intercambio de recursos para apoyar una educación STEM de calidad.',
      url: '/documentos/6CREA – Centro de Recursos Educativos Abiertos para la enseñanza STEM.pdf'
    },
    {
      id: 7,
      titulo: 'Entre Pares 5.0',
      descripcion: 'Formación docente en tecnologías de la información y la comunicación (TIC), integración de tecnología en el proceso de enseñanza-aprendizaje, cultura digital, seguridad tecnológica, inteligencia artificial, libreta digital y Microsoft Teams.',
      url: '/documentos/7Entre Pares 5.0.pdf'
    },
    {
      id: 8,
      titulo: 'Entre Pares Panamá 5.0: capacitación docente con visión inclusiva y tecnológica',
      descripcion: 'Inclusión digital, educación inclusiva, formación docente y fortalecimiento de competencias digitales.',
      url: '/documentos/8Entre Pares Panamá 5.0 - capacitación docente con visión inclusiva y tecnológica.pdf'
    },
    {
      id: 9,
      titulo: 'Evaluando la accesibilidad digital en la educación: El caso de la República Dominicana',
      descripcion: 'Accesibilidad digital, educación inclusiva e inclusión digital mediante Libros de Texto Digitales Accesibles (ADT).',
      url: '/documentos/9Evaluando la accesibilidad digital en la educación - El caso de la República Dominicana.pdf'
    },
    {
      id: 10,
      titulo: 'Innovación educativa y formación STEAM de la I.E. Parroquial 20037 “Santísima Cruz”',
      descripcion: 'Innovación educativa, educación STEAM, ciencia y tecnología, investigación, pensamiento científico, uso de TIC y formación integral con enfoque agustiniano.',
      url: '/documentos/10Innovación educativa y formación STEAM de la I.E. Parroquial 20037 “Santísima Cruz”.pdf'
    },
    {
      id: 11,
      titulo: 'Innovación educativa y tecnológica del Colegio de Orientación Tecnológica Barbacoas (COTB)',
      descripcion: 'Innovación educativa mediante la integración de tecnología, formación tecnológica, educación STEAM, recursos digitales y generación de espacios interactivos de aprendizaje.',
      url: '/documentos/11Innovación educativa y tecnológica del Colegio de Orientación Tecnológica Barbacoas (COTB).pdf'
    },
    {
      id: 12,
      titulo: 'Marco regional de competencias digitales para América Latina y el Caribe (DigCompALC)',
      descripcion: 'Competencias digitales, inclusión digital y transformación digital inclusiva en América Latina y el Caribe.',
      url: '/documentos/12Marco regional de competencias digitales para América Latina y el Caribe (DigCompALC).pdf'
    },
    {
      id: 13,
      titulo: 'Mes de Internet y Ciudadanía Digital en la Educación',
      descripcion: 'Internet y su aporte al sistema educativo; ciudadanía digital; conectividad; tecnologías digitales de la información y comunicación; educación integral y competencias para la participación democrática.',
      url: '/documentos/13Mes de Internet y Ciudadanía Digital en la Educación.pdf'
    },
    {
      id: 14,
      titulo: 'Ministerio del Poder Popular para la Educación (MPPE) – Ecosistema de recursos y servicios para la transformación educativa digital',
      descripcion: 'Inclusión digital, transformación educativa, tecnologías de la información y la comunicación, recursos educativos digitales, formación docente y acceso equitativo a la educación.',
      url: '/documentos/14Ministerio del Poder Popular para la Educación (MPPE) – Ecosistema de recursos y servicios para la transformación educativa digital.pdf'
    },
    {
      id: 15,
      titulo: 'Plan Ceibal',
      descripcion: 'Inclusión digital y acceso a la educación y la cultura mediante tecnologías digitales, conectividad, dispositivos, recursos educativos abiertos, formación docente y apoyo al aprendizaje mediado por tecnologías.',
      url: '/documentos/15Plan Ceibal.pdf'
    },
    {
      id: 16,
      titulo: 'ProFuturo – Educación Digital de calidad al alcance de todos',
      descripcion: 'Inclusión digital y educación digital de calidad; reducción de la brecha educativa; desarrollo de competencias del siglo XXI y formación docente.',
      url: '/documentos/16ProFuturo – Educación Digital de calidad al alcance de todos.pdf'
    },
    {
      id: 17,
      titulo: 'Programa Nacional de Informática Educativa (PRONIE MEP-FOD)',
      descripcion: 'Inclusión digital y educación mediante tecnologías digitales; fortalecimiento de la informática educativa y de las competencias para el uso pedagógico de la tecnología.',
      url: '/documentos/17Programa Nacional de Informática Educativa (PRONIE MEP-FOD).pdf'
    },
    {
      id: 18,
      titulo: 'Red Latinoamericana de Ciudadanía Digital',
      descripcion: 'Ciudadanía digital, formación docente, competencias digitales y desarrollo de políticas públicas educativas.',
      url: '/documentos/18Red Latinoamericana de Ciudadanía Digital.pdf'
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
      <h2 className='subtitulo'>Análisis de experiencias significativas (Fichaje)</h2>

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