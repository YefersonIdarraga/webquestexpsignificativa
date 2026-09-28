import React from 'react';
import Carrusel from './Carrusel';

const imgIntroduccion = [
  {
    url: 'https://www.consumer.es/app/uploads/fly-images/610766/formacion-ia-latam-alboan-1200x550-cc.jpg',
    titulo: 'Experiencia significativa en educación digital',
    descripcion: 'Innovando en los entornos virtuales de aprendizaje.',
    posicion: 'center center'
  },
  {
    url: 'https://cloudfront-us-east-1.images.arcpublishing.com/semana/GJICTSEQU5ALLHXGAGDE6C3VIA.jpg',
    titulo: 'Aprendizaje basado en proyectos',
    descripcion: 'Desarrollo de competencias con metodologías activas.',
    posicion: 'top center'
  },
  {
    url: 'https://www.redem.org/wp-content/uploads/2024/03/pexels-ludovic-delot-16420458.jpg',
    titulo: 'Recursos educativos abiertos',
    descripcion: 'Herramientas interactivas para estudiantes y docentes.',
    posicion: 'top center'
  }
];

const CarruselIntroduccion = () => {
  return (
    <div>
      {/* Carrusel con cambio automático cada 5 segundos */}
      <Carrusel imagenes={imgIntroduccion} intervalo={5000} />
    </div>
  );
};

export default CarruselIntroduccion;