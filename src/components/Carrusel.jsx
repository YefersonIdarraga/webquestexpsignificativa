import React, { useState, useEffect } from 'react';
import '../styles/Carrusel.css';

const Carrusel = ({ imagenes = [], intervalo = 4000 }) => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [estaPausado, setEstaPausado] = useState(false);

  // Cambio automático de imágenes mediante un temporizador
  useEffect(() => {
    if (imagenes.length === 0 || estaPausado) return;

    const timer = setInterval(() => {
      siguienteImagen();
    }, intervalo);

    return () => clearInterval(timer);
  }, [indiceActual, estaPausado, imagenes.length, intervalo]);

  const siguienteImagen = () => {
    setIndiceActual((prevIndice) =>
      prevIndice === imagenes.length - 1 ? 0 : prevIndice + 1
    );
  };

  const anteriorImagen = () => {
    setIndiceActual((prevIndice) =>
      prevIndice === 0 ? imagenes.length - 1 : prevIndice - 1
    );
  };

  const irAImagen = (index) => {
    setIndiceActual(index);
  };

  if (!imagenes || imagenes.length === 0) {
    return null;
  }

  return (
    <div
      className="carrusel-container"
      onMouseEnter={() => setEstaPausado(true)}
      onMouseLeave={() => setEstaPausado(false)}
    >
      {/* Diapositivas */}
      {imagenes.map((img, index) => (
        <div
          key={index}
          className={`carrusel-slide ${index === indiceActual ? 'active' : ''}`}
        >
          <img src={img.url} alt={img.titulo || `Diapositiva ${index + 1}`}
          style={{ objectPosition: img.posicion || 'center center' }} />
          {img.titulo && (
            <div className="carrusel-caption">
              <h3>{img.titulo}</h3>
              {img.descripcion && <p>{img.descripcion}</p>}
            </div>
          )}
        </div>
      ))}

      {/* Botones de navegación (Flechas) */}
      <button
        className="carrusel-btn prev"
        onClick={anteriorImagen}
        aria-label="Imagen anterior"
      >
        ❮
      </button>
      <button
        className="carrusel-btn next"
        onClick={siguienteImagen}
        aria-label="Siguiente imagen"
      >
        ❯
      </button>

      {/* Indicadores / Puntos de posición */}
      <div className="carrusel-indicadores">
        {imagenes.map((_, index) => (
          <button
            key={index}
            className={`indicador ${index === indiceActual ? 'active' : ''}`}
            onClick={() => irAImagen(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;