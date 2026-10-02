import React from 'react'
import Menu from '../components/menu'
import CarruselIntroduccion from '../components/CarruselIntroduccion'

const Introduccion = () => {
  return (
    <>
      <section>
        <Menu />
      </section>
      <CarruselIntroduccion />

      <section className='contenedor'>
        <h1 className='ctitulo cintro'>Introducción</h1>

        <div className='subcontainer'>
          {/* Bloque 1: Contexto e Inclusión Digital */}
          <p className='parrafo'>
            En el marco del curso <strong>Educación e Inclusión Digital</strong> de la Universidad Pontificia Bolivariana (UPB), hemos reflexionado sobre cómo la incorporación de las tecnologías digitales en la educación trasciende el simple acceso a dispositivos, plataformas o conexión a Internet.
          </p>

          <p className='parrafo'>
            La inclusión digital implica también generar oportunidades reales para aprender, participar, crear, compartir conocimiento y desarrollar capacidades que permitan a los estudiantes desenvolverse de manera crítica, autónoma y responsable en la sociedad contemporánea. En este sentido, la brecha digital no se limita a la disponibilidad de recursos tecnológicos, sino que también comprende las diferencias en las posibilidades de acceso, uso, apropiación y aprovechamiento educativo de dichos recursos.
          </p>

          <h2 className='subtitulo-secundario'>La Experiencia CREA</h2>

          <p className='parrafo'>
            Desde esta perspectiva, presentamos <strong>CREA – Centro de Recursos Educativos Abiertos para la enseñanza STEM</strong>, como una experiencia significativa de inclusión digital y formación ciudadana en el contexto educativo latinoamericano. CREA constituye un espacio de acceso libre a recursos educativos para la enseñanza de las ciencias, la tecnología, la ingeniería y las matemáticas, ofreciendo más de mil materiales didácticos gratuitos y promoviendo metodologías como el aprendizaje inclusivo, el aprendizaje basado en la investigación, el <em>Design Thinking</em> y el aprendizaje-servicio.
          </p>

          <p className='parrafo'>
            Además, sus Recursos Educativos Abiertos (REA) pueden ser utilizados, adaptados y distribuidos, favoreciendo una cultura educativa fundamentada en la apertura, la colaboración y la circulación del conocimiento.
          </p>

          <h2 className='subtitulo-secundario'>El Ajedrez como Escenario Pedagógico</h2>

          <p className='parrafo'>
            Pero, <strong>¿qué relación puede existir entre una experiencia como CREA y la enseñanza del ajedrez?</strong> Precisamente, esta WebQuest propone explorar esa posibilidad. El ajedrez puede convertirse en mucho más que un juego: puede constituirse en un escenario para desarrollar el pensamiento lógico, la resolución de problemas, la toma de decisiones, la anticipación, la creatividad, la concentración, el diálogo y el respeto por las reglas y por el otro.
          </p>

          <p className='parrafo'>
            Cuando estas posibilidades se articulan con herramientas y recursos digitales, se abre un espacio para pensar cómo la tecnología puede estar al servicio de procesos educativos significativos y no simplemente convertirse en un recurso instrumental.
          </p>

          <p className='parrafo'>
            La propuesta <em>“Ajedrez Estratégico y Movimiento: Desarrollo Cognitivo-Motriz con Herramientas Digitales”</em> plantea precisamente esta convergencia, al vincular el aprendizaje del ajedrez con herramientas digitales y con el desarrollo de capacidades cognitivas y motrices. De esta manera, la experiencia permite trasladar al ámbito educativo algunos de los principios abordados durante el curso: la tecnología como mediadora del aprendizaje, la necesidad de superar las brechas de acceso y apropiación, la creación de experiencias inclusivas y la formación de sujetos capaces de participar activamente en los entornos digitales y sociales.
          </p>

          {/* Bloque de Reflexión/Pregunta destacado */}
          <div className='bloque-pregunta'>
            <h3 className='subtitulo-secundario'>El Reto de la WebQuest</h3>
            <p className='parrafo'>
              Así, esta WebQuest invita a asumir una mirada crítica y propositiva:
            </p>
            <blockquote className='pregunta-texto'>
              “¿Cómo podemos aprovechar los recursos educativos abiertos y las herramientas digitales para generar experiencias de aprendizaje más inclusivas, participativas y significativas?”
            </blockquote>
          </div>

          <p className='parrafo'>
            A partir de la exploración de CREA y de su relación con la propuesta de enseñanza del ajedrez, el reto será identificar de qué manera estas experiencias pueden contribuir a disminuir brechas, fortalecer competencias y promover una educación en la que el estudiante no sea solamente consumidor de tecnología, sino también sujeto activo, creador de conocimiento y participante de una ciudadanía digital responsable.
          </p>

          <p className='parrafo final-callout'>
            La invitación es, entonces, a <strong>explorar, analizar, relacionar y crear</strong>. El tablero de ajedrez será nuestro punto de partida; la inclusión digital, el horizonte; y la formación de ciudadanos capaces de pensar, decidir, colaborar y transformar su entorno, el propósito.
          </p>
        </div>
      </section>
    </>
  )
}

export default Introduccion