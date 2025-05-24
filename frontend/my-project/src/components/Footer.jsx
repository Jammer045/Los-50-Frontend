import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Los 50</h2>
            <p className="text-gray-400 mb-6">
              El reality show más emocionante de la televisión regresa con su segunda temporada.
              Sigue todas las novedades, episodios completos y contenido exclusivo.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3,8.559V4.929H16.2c-1.254,0-1.496.59-1.496,1.477v2.153H18.3v3.43H14.7V22h-4.4V11.989H7V8.559h3.3V5.5C10.3,2.746,11.756,1,14.85,1H18.3Z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.1,4.8c-0.8,0.4-1.7,0.6-2.6,0.7c0.9-0.6,1.6-1.4,2-2.5c-0.9,0.5-1.8,0.9-2.9,1.1c-0.8-0.9-2-1.4-3.3-1.4c-2.5,0-4.5,2-4.5,4.5c0,0.4,0,0.7,0.1,1c-3.7-0.2-7.1-2-9.3-4.7C2.4,4.1,2,5,2,6c0,1.6,0.8,2.9,2,3.7C3.3,9.7,2.6,9.5,2,9.1v0.1c0,2.2,1.6,4,3.6,4.4c-0.4,0.1-0.8,0.2-1.2,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,1.8,2.2,3.1,4.1,3.1c-1.5,1.2-3.4,1.9-5.5,1.9c-0.4,0-0.7,0-1.1-0.1c2,1.3,4.3,2,6.7,2c8.1,0,12.5-6.7,12.5-12.5c0-0.2,0-0.4,0-0.6C21.8,6.5,22.5,5.7,23.1,4.8z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,3c2.444,0,2.75.01,3.71.054A5.087,5.087,0,0,1,17.4,3.32a2.88,2.88,0,0,1,1.1.9,2.881,2.881,0,0,1,.7,1.1,5.089,5.089,0,0,1,.263,1.68c.044.96.054,1.267.054,3.71s-.01,2.75-.054,3.71A5.087,5.087,0,0,1,19.2,16.4a3.09,3.09,0,0,1-1.7,1.7,5.089,5.089,0,0,1-1.68.263c-.96.044-1.267.054-3.71.054s-2.75-.01-3.71-.054A5.087,5.087,0,0,1,6.6,18.049a2.88,2.88,0,0,1-1.1-.7,2.881,2.881,0,0,1-.7-1.1,5.089,5.089,0,0,1-.263-1.68C4.494,13.71,4.484,13.4,4.484,12s.01-2.75.054-3.71A5.087,5.087,0,0,1,4.8,6.6a2.88,2.88,0,0,1,.7-1.1,2.881,2.881,0,0,1,1.1-.7A5.089,5.089,0,0,1,8.29,4.539c.96-.044,1.267-.054,3.71-.054M12,1.2c-2.488,0-2.8.011-3.777.056a6.9,6.9,0,0,0-2.245.429A4.479,4.479,0,0,0,4.22,3.161,4.478,4.478,0,0,0,2.684,5.919a6.9,6.9,0,0,0-.429,2.245C2.211,9.2,2.2,9.512,2.2,12s.011,2.8.055,3.777a6.9,6.9,0,0,0,.429,2.245,4.479,4.479,0,0,0,1.476,2.758,4.478,4.478,0,0,0,2.758,1.476,6.9,6.9,0,0,0,2.245.429c.979.045,1.291.055,3.777.055s2.8-.011,3.777-.055a6.9,6.9,0,0,0,2.245-.429,4.676,4.676,0,0,0,4.234-4.234,6.9,6.9,0,0,0,.429-2.245c.045-.979.055-1.291.055-3.777s-.011-2.8-.055-3.777a6.9,6.9,0,0,0-.429-2.245,4.479,4.479,0,0,0-1.476-2.758A4.478,4.478,0,0,0,18.022,2.2a6.9,6.9,0,0,0-2.245-.429C14.8,1.211,14.488,1.2,12,1.2Z"></path>
                  <path d="M12,6.865A5.135,5.135,0,1,0,17.135,12,5.135,5.135,0,0,0,12,6.865Zm0,8.468A3.333,3.333,0,1,1,15.333,12,3.333,3.333,0,0,1,12,15.333Z"></path>
                  <circle cx="17.338" cy="6.662" r="1.2"></circle>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498,6.195c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.545,12,3.545,12,3.545s-7.505,0-9.377,0.513   c-1.033,0.278-1.846,1.098-2.122,2.136C0,8.075,0,12,0,12s0,3.925,0.501,5.805c0.276,1.039,1.089,1.858,2.122,2.136   C4.495,20.455,12,20.455,12,20.455s7.505,0,9.377-0.513c1.033-0.278,1.846-1.098,2.122-2.136C24,15.925,24,12,24,12   S24.001,8.075,23.498,6.195z M9.546,15.569V8.431L15.818,12L9.546,15.569z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">Inicio</Link>
              </li>
              <li>
                <Link to="/episodios" className="text-gray-400 hover:text-white transition">Episodios</Link>
              </li>
              <li>
                <Link to="/participantes" className="text-gray-400 hover:text-white transition">Participantes</Link>
              </li>
              <li>
                <Link to="/Votaciones" className="text-gray-400 hover:text-white transition">Votaciones</Link>
              </li>
              <li>
                <Link to="/exclusivos" className="text-gray-400 hover:text-white transition">Contenido Exclusivo</Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-400 hover:text-white transition">Galería</Link>
              </li>
            </ul>
          </div>
          
          {/* Información legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre-nosotros" className="text-gray-400 hover:text-white transition">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-gray-400 hover:text-white transition">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/terminos" className="text-gray-400 hover:text-white transition">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Los 50. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Un programa de <span className="text-gray-400">Mi Televisora</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;