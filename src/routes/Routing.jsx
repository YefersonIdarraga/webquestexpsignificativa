import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Introduccion from '../pages/introduccion';
import Tarea from '../pages/tarea';
import Proceso from '../pages/proceso';
import Recursos from '../pages/recursos';
import Evaluacion from '../pages/evaluacion';
import Conclusion from '../pages/conclusion';
import Creditos from '../pages/creditos';



const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Introduccion />} />
        <Route path="/tarea" element={<Tarea />} />
        <Route path="/proceso" element={<Proceso />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/evaluacion" element={<Evaluacion />} />
        <Route path="/conclusion" element={<Conclusion />} />
        <Route path="/creditos" element={<Creditos />} />
    </Routes>
  )
}

export default Routing