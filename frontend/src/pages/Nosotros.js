import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <div className="nosotros-page">
      <div className="container">
        <h1 className="page-title">Sobre Nosotros</h1>
        
        <div className="content-section">
          <h2>Nuestra Historia</h2>
          <p>
            La Caja Nacional de Salud fue creada con el objetivo de brindar servicios de salud de calidad 
            a todos los bolivianos. Desde su fundación, hemos trabajado incansablemente para expandir 
            nuestra cobertura y mejorar la calidad de nuestros servicios.
          </p>
          <p>
            En nuestra sede de Oruro, nos enorgullecemos de ser parte fundamental del sistema de salud 
            de la región, atendiendo a miles de afiliados con profesionalismo y dedicación.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Misión</h2>
          <p>
            Brindar servicios de salud integrales, oportunos y de calidad a todos nuestros afiliados, 
            contribuyendo al bienestar y desarrollo de la comunidad orureña.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Visión</h2>
          <p>
            Ser la institución líder en servicios de salud en Bolivia, reconocida por nuestra excelencia, 
            innovación y compromiso con el bienestar de nuestros afiliados.
          </p>
        </div>
        
        <div className="content-section">
          <h2>Valores</h2>
          <ul>
            <li><strong>Compromiso:</strong> Dedicación absoluta con la salud de nuestros afiliados.</li>
            <li><strong>Integridad:</strong> Actuamos con honestidad y transparencia en todas nuestras acciones.</li>
            <li><strong>Excelencia:</strong> Buscamos la más alta calidad en todos nuestros servicios.</li>
            <li><strong>Respeto:</strong> Tratamos a todas las personas con dignidad y consideración.</li>
            <li><strong>Innovación:</strong> Incorporamos nuevas tecnologías y métodos para mejorar nuestros servicios.</li>
          </ul>
        </div>
        
        <div className="content-section">
          <h2>Nuestro Equipo</h2>
          <p>
            Contamos con un equipo de profesionales altamente capacitados, comprometidos con la salud 
            y el bienestar de nuestros afiliados. Nuestro personal médico, administrativo y de apoyo 
            trabaja en conjunto para brindar una atención integral y de calidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;